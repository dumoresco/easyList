import React, { useState } from "react";

import { Container } from "./styles";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ModalItem } from "../Modal";
import { useListRepository } from "../../hooks/useListRepository";
import { ItemProps } from "../../types";

const ButtonAdd: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const { handleAddItem } = useListRepository();

  return (
    <>
      <Container onPress={() => openModal()}>
        <FontAwesome name="plus-square-o" size={30} color={"#fff"} />
      </Container>
      <ModalItem
        title={"Adicionar item"}
        visible={isModalVisible}
        onClose={closeModal}
        btnFooterOnPress={() => {
          closeModal();
        }}
        btnFooterLabel={"Cancelar"}
        btnFooterIcon={"plus"}
        btnContentOnPress={({ name, price, quantity }: ItemProps) => {
          handleAddItem({
            id: "",
            name: name,
            price: price,
            quantity: quantity,
          });

          closeModal();
        }}
        shouldCleanInputs={true}
        btnContentLabel={"Pronto"}
        btnContentIcon={"checkbox-marked"}
        btnContentBackgroundColor={"#7048F6"}
        data={{
          id: "",
          name: "",
          price: "",
          quantity: 0,
        }}
      />
    </>
  );
};

export default ButtonAdd;
