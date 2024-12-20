import React from "react";
import styled from "styled-components/native"; // .native로 수정
import { View, Button } from "react-native";
import Page46_Header from "./Page46_Header";
import Page46_Contents from "./Page46_Contents";

const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  margin: 20px 5px;
`;

const Header = styled.View`
  flex: 0.15;
`;

const Contents = styled.View`
  flex: 0.8;
`;

const Footer = styled.View`
  flex: 0.05; 
  justify-content: center; 
  align-items: center; 
`;

const Page46 = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Page46_Header navigation={navigation} /> {/* navigation prop 전달 */}
      </Header>
      <Contents>
        <Page46_Contents navigation={navigation} /> {/* navigation prop 전달 */}
      </Contents>
      <Footer>
        <Button title="다음 페이지" onPress={() => navigation.navigate('Page47')} /> {/* 버튼 추가 */}
      </Footer>
    </Container>
  );
};

export default Page46;
