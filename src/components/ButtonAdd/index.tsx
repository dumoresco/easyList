import React, { useState } from "react";

import { Container } from "./styles";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import Input from "../Input";
import InputQtd from "../InputQtd";
import ButtonModal from "../ButtonModal";
import ButtonModalFooter from "../ButtonModalFooter";

type ModalAddItemProps = {
  visible: boolean;
  onClose: () => void;
};

const ButtonAdd: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  console.log("[isModalVisible]", isModalVisible);

  return (
    <>
      <Container onPress={() => openModal()}>
        <FontAwesome name="plus-square-o" size={30} color={"#fff"} />
      </Container>
      <ModalAddItem visible={isModalVisible} onClose={closeModal} />
    </>
  );
};

export default ButtonAdd;

const ModalAddItem: React.FC<ModalAddItemProps> = ({ visible, onClose }) => {
  const [price, setPrice] = useState("0");

  return (
    <View>
      <Modal
        style={styles.bottomModal}
        isVisible={visible}
        avoidKeyboard={true}
        onBackdropPress={onClose}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Adicionar um item</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Item</Text>
              <Input
                placeholder="Ex: Arroz"
                placeholderTextColor="#C1BCCC"
                hasIcon={false}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Preço</Text>
              <Input
                placeholder="0.00"
                placeholderTextColor="#C1BCCC"
                hasIcon
                keyboardType="numeric"
                inputMode="decimal"
                value={price}
                onChangeText={(text) => {
                  const value = text.replace(/\D/g, "");
                  const valueFormated = (Number(value) / 100).toLocaleString(
                    "pt-BR",
                    {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  );

                  setPrice(valueFormated);
                }}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Quantidade</Text>
              <InputQtd />
            </View>
          </View>
          <ButtonModal
            onPress={() => {
              console.log("Pronto");
            }}
            title="Pronto"
            backgroundColor="#7048F6"
          />
        </View>
        <View style={styles.footer}>
          <ButtonModalFooter
            onPress={() => {
              onClose();
            }}
            title="Cancelar"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },

  title: {
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },

  inputGroup: {
    marginBottom: 20,
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: "#9C98A6",
    marginBottom: 5,
  },
  footer: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopColor: "#E3E3E5",
    borderTopWidth: 1,
    padding: 20,
  },
});
