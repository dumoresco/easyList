import styled from "styled-components/native";

type ContainerProps = {
  backgroundColor: string;
  disabled: boolean;
};

export const Container = styled.TouchableOpacity`
  background-color: ${(props: ContainerProps) => props.backgroundColor};
  opacity: ${(props: ContainerProps) => (props.disabled ? 0.5 : 1)};
  padding: 0px 16px;

  width: 100%;
  height: 50px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
