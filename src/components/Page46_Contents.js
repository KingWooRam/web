import React from "react";
import { View, Text, ImageBackground, Image, Button, StyleSheet } from "react-native";

const foods = [
  {
    id: 1,
    name: "1. 시금치 무침",
    image: require("../../assets/images/food1.jpg"),
  },
  { id: 2, name: "2. 호박전", image: require("../../assets/images/food2.jpg") },
  {
    id: 3,
    name: "3. 고등어 구이",
    image: require("../../assets/images/food3.jpg"),
  },
  {
    id: 4,
    name: "4. 연어 샐러드",
    image: require("../../assets/images/food4.jpg"),
  },
  { id: 5, name: "5. 현미밥", image: require("../../assets/images/food5.jpg") },
  {
    id: 6,
    name: "6. 시금치 된장국",
    image: require("../../assets/images/food6.jpg"),
  },
];

const Page46_Contents = ({ navigation }) => { // navigation prop 추가
  return (
    <View>
      <Text style={styles.contentsHeader}>▶ 당뇨예방밥상 기억하기</Text>
      <View>
        <Text style={styles.contentsText}>
          다음은 당뇨예방에 좋은 저염식 밥상입니다.
        </Text>
        <Text style={styles.contentsText}>
          아래의{" "}
          <Text style={{ color: "#b90000", fontWeight: "bold" }}>
            음식과 그 자리
          </Text>
          를 확인해보세요.
        </Text>
        <View style={{ alignItems: "center" }}>
          <ImageBackground
            source={require("../../assets/images/table.jpg")}
            style={styles.imgBackground}
            resizeMode="stretch"
          >
            {/* 음식 목록 */}
            <View style={styles.gridContainer}>
              {foods.map((item) => (
                <View key={item.id} style={styles.foodCard}>
                  <Image source={item.image} style={styles.foodImage} />
                  <Text style={styles.foodName}>{item.name}</Text>
                </View>
              ))}
            </View>
          </ImageBackground>
        </View>
        <Text>
          ▶
          <Text style={{ color: "#b90000", fontWeight: "bold" }}>
            음식과 그 자리
          </Text>
          를 기억해 주세요.
        </Text>
      </View>
    </View>
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
  imgBackground: {
    width: 350,
    height: 370,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  contentsText: {
    marginLeft: 20,
  },
  gridContainer: {
    width: 280,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  foodCard: {
    marginBottom: 3,
    alignItems: "center",
  },
  foodImage: {
    width: 100,
    height: 70,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  foodName: {
    textAlign: "center",
    marginTop: 3,
  },
});

export default Page46_Contents;
