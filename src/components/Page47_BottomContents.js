import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

const foodImage = [
  require("../../assets/images/food1.jpg"),
  require("../../assets/images/food2.jpg"),
  require("../../assets/images/food3.jpg"),
  require("../../assets/images/food4.jpg"),
  require("../../assets/images/food5.jpg"),
  require("../../assets/images/food6.jpg"),
];

const Page47_BottomContents = ({ navigation }) => { // navigation prop 추가
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");

  return (
    <View style={styles.gridContainer}>
      {/* 1행 */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Image source={foodImage[0]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <Text style={{ color: "#b90000", fontWeight: "bold", marginRight: 40 }}>
              [보기] {"  "}
              <Text style={{ color: "#b90000", fontWeight: "bold" }}>1</Text>
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <Image source={foodImage[2]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              placeholder="입력"
              value={answer2}
              onChangeText={setAnswer2}
            />
          </View>
        </View>
        <View style={styles.column}>
          <Image source={foodImage[3]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              placeholder="입력"
              value={answer3}
              onChangeText={setAnswer3}
            />
          </View>
        </View>
      </View>

      {/* 2행 */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Image source={foodImage[4]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              placeholder="입력"
              value={answer4}
              onChangeText={setAnswer4}
            />
          </View>
        </View>
        <View style={styles.column}>
          <Image source={foodImage[5]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              placeholder="입력"
              value={answer5}
              onChangeText={setAnswer5}
            />
          </View>
        </View>
        <View style={styles.column}>
          <Image source={foodImage[1]} style={styles.foodImage} />
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              placeholder="입력"
              value={answer6}
              onChangeText={setAnswer6}
            />
          </View>
        </View>
      </View>

      {/* 버튼 추가 */}
      <View style={styles.buttonContainer}>      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: "center",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    height: 110,
  },
  column: {
    width: "35%",
    height: "100%",
    flexDirection: "column",
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foodImage: {
    width: 100,
    height: 60,
    margin: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  inputBox: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  inputText: {
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default Page47_BottomContents;
