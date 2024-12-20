import React from "react";
import styled from "styled-components/native"; // .native로 수정
import { Text, StyleSheet, Button, View } from "react-native"; // Button과 View 임포트 추가
import Page47_TopContents from "./Page47_TopContents";
import Page47_BottomContents from "./Page47_BottomContents";

const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  margin: 110px 5px 10px 5px;
`;

const TopContents = styled.View`
  flex: 0.5;
  margin-bottom: 10px;
`;

const BottomContents = styled.View`
  flex: 0.43;
  margin-bottom: 5px;
`;

const Page47 = ({ navigation }) => { // navigation prop 추가
  return (
    <Container>
      <Text style={styles.contentsHeader}>▶ 당뇨예방밥상 기억하기</Text>
      <TopContents>
        <Page47_TopContents />
      </TopContents>
      <BottomContents>
        <Page47_BottomContents navigation={navigation} /> {/* navigation prop 전달 */}
      </BottomContents>
      <Text style={styles.rememberText}>
        ▶
        <Text style={{ color: "#b90000", fontWeight: "bold" }}>
          음식과 그 자리
        </Text>
        를 기억해 주세요.
      </Text>
      <View style={styles.nextPageContainer}>
        <Button title="다음 페이지" onPress={() => navigation.navigate('Page48')} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentsHeader: {
    backgroundColor: "#e6f300",
    opacity: 0.4,
    width: 170,
    marginBottom: 5,
    borderRadius: 8,
    textAlign: "center",
  },
  rememberText: {
    marginTop: 30, // 상단 간격 증가
    marginBottom: 10, // 하단 간격 증가
    textAlign: "center", // 가운데 정렬
  },
  nextPageContainer: {
    marginTop: 20, // "다음 페이지"와의 간격 조정
    alignItems: "center", // 가운데 정렬
  },
});

export default Page47;
