import styled from "styled-components/native";

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.TouchableOpacity`
  background-color: ${(props: ContainerProps) => props.backgroundColor};

  padding: 0px 16px;

  width: 100%;
  height: 50px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
