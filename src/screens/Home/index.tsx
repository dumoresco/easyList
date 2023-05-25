import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfoContainer,
  UserNameContainer,
  UserName,
  Avatar,
  LightText,
  ListInfoContainer,
  HighlightedText,
  ModalFilters,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  actions,
  filterOptions,
  selectFilter,
  selectList,
} from "../../redux/reducers/list/list.reducer";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/Item";
export default function Home() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const filteredList = useSelector(selectList);
  const [filter, setFilter] = useState(filterOptions[0].id);
  const { token, userInfo, loadUserInformation, isFetching, handleLogout } =
    useAuth();
  useEffect(() => {
    loadUserInformation();
  }, [token]);

  const list = useSelector(selectList);
  const total = list?.reduce(
    (acc: number, item: { price: string; quantity: number }) => {
      const price = parseFloat(item.price.replace(",", "."));
      return acc + price * item.quantity;
    },
    0
  );

  return (
    <>
      <Container>
        <UserInfoContainer>
          <UserNameContainer>
            <UserName>
              <LightText>Olá</LightText>,{" "}
              {isFetching ? "carregando..." : userInfo?.given_name}
            </UserName>
            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                textAlign: "left",
                marginTop: 5,
              }}
            >
              Organize suas idas ao mercado
            </Text>
          </UserNameContainer>
          <TouchableOpacity onPress={handleLogout}>
            <Avatar source={{ uri: userInfo?.picture }} />
          </TouchableOpacity>
        </UserInfoContainer>

        <ListInfoContainer>
          <View style={styles.listInfoContainerItem1}>
            <Text style={styles.listInfoContainer}>
              Você tem <HighlightedText>{list?.length} itens</HighlightedText>{" "}
              na sua lista
            </Text>
          </View>
          <View style={styles.listInfoContainerItem2}>
            <Text style={styles.subtitle}>Total da lista</Text>
            <HighlightedText>R$ {total.toFixed(2)}</HighlightedText>
          </View>
        </ListInfoContainer>
      </Container>
      <View style={styles.sessionTitleContainer}>
        <Text style={styles.sessionTitle}>Meu carrinho</Text>
        <MaterialIcons
          name={visible ? "close" : "filter-list"}
          size={30}
          color="#585666"
          onPress={() => {
            setVisible(!visible);
          }}
        />
      </View>
      {list.length === 0 && (
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
            flex: 1,
            marginHorizontal: 50,

            width: Dimensions.get("window").width - 100,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#d8d8d8",
              textAlign: "center",
            }}
          >
            Você ainda não adicionou nenhum item na sua lista de compras
          </Text>
        </View>
      )}

      <FlatList
        style={styles.listContainer}
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        )}
      ></FlatList>
      <ModalFilters visible={visible}>
        <Text style={styles.sessionTitle}>Filtros</Text>
        <FlatList
          style={{ width: "100%", zIndex: 999 }}
          data={filterOptions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(actions.filterList(item.id));
                setFilter(item.id);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "#E3E3E5",
                borderBottomWidth: 1,
              }}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color={filter === item.id ? "#7048F6" : "#b4b4b4"}
                onPress={() => {
                  setVisible(!visible);
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: filter === item.id ? "#7048F6" : "#b4b4b4",
                  textAlign: "left",
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                {item.name}
              </Text>

              {filter === item.id && (
                <MaterialIcons
                  name="check"
                  size={24}
                  color={"#7048F6"}
                  onPress={() => {
                    setVisible(!visible);
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        ></FlatList>
      </ModalFilters>
    </>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 13,
    color: "#fff",
  },
  listInfoContainer: {
    fontSize: 13,
    color: "#fff",
    textAlign: "left",
    width: 150,
  },
  listInfoContainerItem1: {
    marginEnd: 20,
  },
  listInfoContainerItem2: {
    paddingStart: 20,
    borderStartColor: "#979797",
    borderStartWidth: 1,
  },
  sessionTitleContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
    paddingVertical: 20,
    borderBottomColor: "#E3E3E5",
    borderBottomWidth: 1,
  },
  sessionTitle: {
    color: "#585666",
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width - 30,
    marginHorizontal: 20,
    paddingRight: 10,
  },
});
