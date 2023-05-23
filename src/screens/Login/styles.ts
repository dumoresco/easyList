import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const IlustrationContainer = styled.View`
  background-color: #7048f6;
  width: 100%;
  height: 350px;

  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;

  justify-content: center;
  align-items: center;
`;
export const Ilustration = styled.Image`
  position: absolute;
  bottom: -100px;

  width: 100%;
  object-fit: contain;
  height: 300px;
`;
export const Title = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 0 40px;
  line-height: 40px;
  font-family: "Lexend-SemiBold";
  color: #585666;
  text-align: center;
`;

export const BtnLoginWithGoogle = styled.TouchableOpacity`
  margin-bottom: 60px;
  background-color: #fafafc;
  border-radius: 4px;
  border: 1px solid #e3e3e5;
  width: 340px;
  height: 65px;
  flex-direction: row;
  align-items: center;
`;
export const BtnLoginWithGoogleText = styled.Text`
  text-align: center;
  width: 260px;
`;
export const BtnLoginWithGoogleIconContainer = styled.View`
  width: 65px;
  height: 100%;

  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-right-color: #e3e3e5;
  border-right-style: solid;
`;
export const BtnLoginWithGoogleIcon = styled.Image``;
