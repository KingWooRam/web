import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Button, StyleSheet } from "react-native";

const Page46_Header = ({ navigation }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");

  const [selected, setSelected] = useState(null);

  const handleImagePress = (index) => {
    setSelected(index);
  };

  return (
    <View>
      <Text>▶ 오늘의 날짜를 적고, 날씨에 동그라미 하세요.</Text>
      <View style={styles.todaysDate}>
        <TextInput
          style={styles.daysTextInputYear}
          keyboardType="numeric"
          maxLength={4}
          value={year}
          onChangeText={setYear}
        />
        <Text style={styles.defaultDayText}>년</Text>
        <TextInput
          style={styles.daysTextInput}
          keyboardType="numeric"
          maxLength={2}
          value={month}
          onChangeText={setMonth}
        />
        <Text style={styles.defaultDayText}>월</Text>
        <TextInput
          style={styles.daysTextInput}
          keyboardType="numeric"
          maxLength={2}
          value={day}
          onChangeText={setDay}
        />
        <Text style={styles.defaultDayText}>일</Text>
        <TextInput
          style={styles.daysTextInputWeek}
          keyboardType="default"
          maxLength={3}
          value={week}
          onChangeText={setWeek}
        />
        <Text style={styles.defaultDayText}>요일</Text>
        <Text style={styles.defaultDayTextWeather}>날씨</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => handleImagePress(0)}>
            <Image
              source={require("../../assets/images/sun.png")}
              style={[
                styles.weatherIcon,
                selected === 0 && styles.selectedImage,
              ]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress(1)}>
            <Image
              source={require("../../assets/images/cloud.png")}
              style={[
                styles.weatherIcon,
                selected === 1 && styles.selectedImage,
              ]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress(2)}>
            <Image
              source={require("../../assets/images/rain.png")}
              style={[
                styles.weatherIcon,
                selected === 2 && styles.selectedImage,
              ]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress(3)}>
            <Image
              source={require("../../assets/images/snow.png")}
              style={[
                styles.weatherIcon,
                selected === 3 && styles.selectedImage,
              ]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todaysDate: {
    flexDirection: "row",
    width: "300",
    marginLeft: "17",
  },
  daysTextInputYear: {
    width: 40,
    textAlign: "right",
  },
  daysTextInput: {
    width: 25,
    textAlign: "right",
  },
  daysTextInputWeek: {
    width: 35,
    textAlign: "right",
  },
  defaultDayText: {
    marginTop: 10,
  },
  defaultDayTextWeather: {
    marginTop: 10,
    marginLeft: 10,
  },
  weatherIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 6,
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: "#007BFF",
    borderRadius: 20,
  },
});

export default Page46_Header;
