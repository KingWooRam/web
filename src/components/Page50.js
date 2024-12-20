import React, { useState } from "react";
import { View, TextInput, Button, Text, Image } from "react-native"; // React Native 컴포넌트 임포트
import styls from "./style5051";

const Page50 = ({ navigation }) => { // navigation prop 추가
  const [inputfood1, setInputFood1] = useState("");
  const [inputfood2, setInputFood2] = useState("");
  const [inputfood3, setInputFood3] = useState("");
  const [inputfood4, setInputFood4] = useState("");
  const [inputfood5, setInputFood5] = useState("");
  const [inputfood6, setInputFood6] = useState("");

  const Pass = () => {
    let D1 = inputfood1 === "시금치 무침" ? 1 : 0;
    let D2 = inputfood2 === "고등어 구이" ? 1 : 0;
    let D3 = inputfood3 === "현미밥" ? 1 : 0;
    let D4 = inputfood4 === "호박전" ? 1 : 0;
    let D5 = inputfood5 === "연어 샐러드" ? 1 : 0;
    let D6 = inputfood6 === "시금치 된장국" ? 1 : 0;

    if (D1 + D2 + D3 + D4 + D5 + D6 === 6) {
      alert("정답!"); // 정답 확인을 alert로 표시
    } else {
      alert("틀렸습니다. 다시 시도해 보세요."); // 오답 시 메시지
    }
  };

  return (
    <View style={styles.container}>
      <Image source={styls.Box1} alt="당뇨예방법 기억하기" />
      <Text style={styles.subtitle}>
        앞서 기억해 둔 <Text style={{ color: "red" }}>음식의 이름을 해당하는 자리에 </Text>적어보세요
      </Text>
      <View style={styles.inputContainer}>
        <Text>1.</Text>
        <TextInput
          style={styles.input}
          value={inputfood1}
          onChangeText={setInputFood1}
        />
        <Text>3.</Text>
        <TextInput
          style={styles.input}
          value={inputfood2}
          onChangeText={setInputFood2}
        />
        <Text>5.</Text>
        <TextInput
          style={styles.input}
          value={inputfood3}
          onChangeText={setInputFood3}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>2.</Text>
        <TextInput
          style={styles.input}
          value={inputfood4}
          onChangeText={setInputFood4}
        />
        <Text>4.</Text>
        <TextInput
          style={styles.input}
          value={inputfood5}
          onChangeText={setInputFood5}
        />
        <Text>6.</Text>
        <TextInput
          style={styles.input}
          value={inputfood6}
          onChangeText={setInputFood6}
        />
      </View>
      <Button title="정답 확인" onPress={Pass} />
      <Button title="다음 페이지" onPress={() => navigation.navigate('Page51')} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "30%",
    marginHorizontal: 5,
  },
};

export default Page50;
