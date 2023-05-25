import styled from "styled-components/native";

type ContainerProps = {
  hasIcon?: boolean;
};

export const Container = styled.View<ContainerProps>`
  background-color: #fafafc;
  // usa o tamanho maximo que puder
  flex: 1;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #e3e3e5;

  padding: 0px ${(props) => (props.hasIcon ? 0 : 10)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
