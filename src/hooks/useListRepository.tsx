import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/reducers/list/list.reducer";
import { Alert } from "react-native";
import { ItemProps } from "../types";
export const useListRepository = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [inputQuantity, setInputQuantity] = useState(0);

  const handleNameChange = (text: string) => {};
  const handlePriceChange = (text: string) => {
    setPrice(text);
  };

  const handleAddQuantity = () => {
    setInputQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 0) {
      setInputQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (value: number) => {
    setInputQuantity(value);
  };

  const handleClearFields = () => {
    setName("");
    setPrice("");
    setInputQuantity(0);
  };

  const handleAddItem = ({ name, price, quantity }: ItemProps) => {
    console.log("name", name);
    console.log("quantity", quantity);
    console.log("price", price);

    if (!name) {
      Alert.alert("Nome do produto é obrigatório");
      return;
    }
    if (!price) {
      Alert.alert("Preço do produto é obrigatório");
      return;
    }
    if (!quantity) {
      Alert.alert("Quantidade do produto é obrigatório", quantity.toString());
      return;
    }

    dispatch(
      actions.addItem({ id: new Date().toISOString(), name, price, quantity })
    );

    handleClearFields();
  };

  const handleDeleteItem = (id: string) => {
    dispatch(actions.removeItem(id));
  };

  return {
    name,
    price,
    quantity,

    handleNameChange,
    handlePriceChange,
    handleQuantityChange,
    handleAddQuantity,
    handleRemoveQuantity,

    handleAddItem,
    handleDeleteItem,

    inputQuantity,
  };
};
