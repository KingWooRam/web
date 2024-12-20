import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const Page52_HeaderSection = ({ year, setYear, month, setMonth, day, setDay, weekDay, setWeekDay, weather, setWeather }) => {
  const weatherIcons = [
    { id: "sun", source: require("../../assets/images/sun.png") },
    { id: "cloud", source: require("../../assets/images/cloud.png") },
    { id: "rain", source: require("../../assets/images/rain.png") },
    { id: "snow", source: require("../../assets/images/snow.png") },
  ];

  return (
    <View style={styles.container}>
     
      <Text style={styles.titleText}>일기</Text>

     
      <View style={styles.row}>
        
        <View style={styles.dateGroup}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} value={year} onChangeText={setYear} keyboardType="default" />
            <Text style={styles.label}>년</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} value={month} onChangeText={setMonth} keyboardType="default" />
            <Text style={styles.label}>월</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} value={day} onChangeText={setDay} keyboardType="default" />
            <Text style={styles.label}>일</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} value={weekDay} onChangeText={setWeekDay} keyboardType="default" />
            <Text style={styles.label}>요일</Text>
          </View>
        </View>

      
        <View style={styles.weatherGroup}>
          <Text style={styles.label}>날씨</Text>
          {weatherIcons.map((icon) => (
            <TouchableOpacity key={icon.id} onPress={() => setWeather(icon.id)}>
              <Image
                source={icon.source}
                style={[styles.icon, weather === icon.id && styles.selectedIcon]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  titleText: {
    backgroundColor: "#b2d8b2", 
    color: "#FFFFFF",           
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,      
    paddingVertical: 4,         
    borderRadius: 5,            
    alignSelf: "flex-start",    
    marginBottom: 10,
  },
  
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  input: {
    width: 40,
    height: 20,
    textAlign: "center",
    fontSize: 12,
    marginRight: 2,
  },
  label: {
    fontSize: 12,
    color: "#000",
  },
  weatherGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
    opacity: 0.5,
  },
  selectedIcon: {
    opacity: 1,
  },
});

export default Page52_HeaderSection;
