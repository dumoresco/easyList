import { StyleSheet, Text, View } from "react-native";
import ButtonModal from "../ButtonModal";
import InputQtd from "../InputQtd";
import Input from "../Input";
import Modal from "react-native-modal";
import { useState } from "react";
import { useListRepository } from "../../hooks/useListRepository";
import ButtonModalFooter from "../ButtonModalFooter";
import { ItemProps } from "../../types";

type ModalItemProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  btnFooterOnPress: () => void;
  btnFooterLabel: string;
  btnFooterIcon: string;

  btnContentOnPress: ({ id, name, price, quantity }: ItemProps) => void;
  btnContentLabel: string;
  btnContentIcon: string;
  btnContentBackgroundColor: string;

  data: {
    id: string;
    name: string;
    price: string;
    quantity: number;
  };

  shouldCleanInputs: boolean;
};

export const ModalItem: React.FC<ModalItemProps> = ({
  title,
  visible,
  onClose,
  btnFooterOnPress,
  btnFooterLabel,

  shouldCleanInputs,

  btnContentOnPress,
  btnContentLabel,
  btnContentIcon,
  btnContentBackgroundColor,

  data,
}) => {
  const [name, setName] = useState(data.name || "");
  const [price, setPrice] = useState(data.price || "");
  const [quantity, setQuantity] = useState(data.quantity || 0);

  return (
    <View>
      <Modal
        style={styles.bottomModal}
        isVisible={visible}
        avoidKeyboard={true}
        onBackdropPress={onClose}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Item</Text>
              <Input
                value={name}
                onChangeText={setName}
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
              <InputQtd value={quantity} onChange={setQuantity} />
            </View>
          </View>
          <ButtonModal
            disabled={name === "" || price === "" || quantity === 0}
            icon={btnContentIcon}
            onPress={() => {
              btnContentOnPress({
                id: data.id || "",
                name,
                price,
                quantity,
              });

              if (shouldCleanInputs) {
                setName("");
                setPrice("");
                setQuantity(0);
              }

              onClose();
            }}
            title={btnContentLabel}
            backgroundColor={btnContentBackgroundColor}
          />
        </View>
        <View style={styles.footer}>
          <ButtonModalFooter
            onPress={() => {
              btnFooterOnPress();
            }}
            title={btnFooterLabel}
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
