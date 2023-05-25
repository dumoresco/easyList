import React, { useState } from "react";
import { Container } from "../ButtonAdd/styles";
import { ItemProps } from "../../types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { firstLetterUppercase } from "../../utils";
import { useListRepository } from "../../hooks/useListRepository";
import { ModalItem } from "../Modal";

const Item: React.FC<ItemProps> = ({ id, name, price, quantity }) => {
  const { handleDeleteItem, handleUpdateItem } = useListRepository();

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#585666",
            }}
          >
            {firstLetterUppercase(name)}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#585666",
            }}
          >
            Qtd:{" "}
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {quantity}
            </Text>
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#585666",
            }}
          >
            R$
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {price}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
      <ModalItem
        title={`Editar item`}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        btnFooterOnPress={() => {
          handleDeleteItem(id || "");
          setIsModalVisible(false);
        }}
        btnFooterLabel={"Remover"}
        btnFooterIcon={"trash"}
        btnContentOnPress={({ id, name, price, quantity }: ItemProps) => {
          handleUpdateItem({
            id,
            name,
            price,
            quantity,
          });
          setIsModalVisible(false);
        }}
        btnContentLabel={"Editar"}
        btnContentIcon={"pencil"}
        btnContentBackgroundColor={"#FFD65F"}
        data={{
          id,
          name,
          price,
          quantity,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",

    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Item;
