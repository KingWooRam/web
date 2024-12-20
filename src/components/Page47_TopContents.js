import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const Page47 = () => {
  return (
    <View>
      <Text style={{ marginLeft: 20 }}>
        앞서 기억해 둔 당뇨예방밥상{" "}
        <Text style={{ color: "#b90000", fontWeight: "bold" }}>
          음식에 해당하는 자리
        </Text>
        의 번호를 찾아 적어보세요.
      </Text>
      <View style={{ alignItems: "center" }}>
        <ImageBackground
          source={require("../../assets/images/table.jpg")}
          style={styles.imgBackground}
          resizeMode="stretch"
        >
          <View style={styles.gridContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={index} style={styles.numberBox}>
                <Text style={styles.numberBoxText}>{index + 1 + "."}</Text>
              </View>
            ))}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: 350,
    height: 230,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    width: "40%",
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  numberBox: {
    width: 20,
    height: 20,
    margin: 20,
  },
  numberBoxText: {
    textAlign: "center",
  },
});
export default Page47;
