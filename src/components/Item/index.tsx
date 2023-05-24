import React from "react";
import { Container } from "../ButtonAdd/styles";
import { ItemProps } from "../../types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { firstLetterUppercase } from "../../utils";
import { useListRepository } from "../../hooks/useListRepository";

const Item: React.FC<ItemProps> = ({ id, name, price, quantity }) => {
  const { handleDeleteItem } = useListRepository();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleDeleteItem(id);
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
