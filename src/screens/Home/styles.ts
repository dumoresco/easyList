import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #7048f6;
  height: 200px;
  justify-content: center;
  padding: 0 20px;

  align-items: center;

  position: relative;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const UserNameContainer = styled.View``;
export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 6px;
`;

export const LightText = styled.Text`
  color: #fff;
  font-weight: 300;
`;

export const ListInfoContainer = styled.View`
  background-color: #585666;

  position: absolute;
  width: 100%;
  margin: 0 auto;
  bottom: -35px;
  height: 75px;
  border-radius: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const HighlightedText = styled.Text`
  color: #b099ff;
  font-weight: bold;
`;
