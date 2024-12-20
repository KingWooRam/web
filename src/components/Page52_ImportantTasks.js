import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Page52_ImportantTasks = ({
  morning1, setMorning1,
  morning2, setMorning2,
  afternoon, setAfternoon,
  evening, setEvening
}) => {
  return (
    <View style={styles.container}>
        
      <View style={styles.headerRow}>
        <View style={styles.timeHeader}>
          <Text style={styles.timeHeaderText}>시각</Text>
        </View>
        <View style={styles.taskHeader}>
          <Text style={styles.taskHeaderText}>중요한 일</Text>
        </View>
      </View>

     
      <View style={styles.row}>
        <Text style={styles.timeLabel}>오전 5시~8시</Text>
        <TextInput
          style={styles.input}
          placeholder="일어나서 한 일"
          value={morning1}
          onChangeText={setMorning1}
          multiline
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.timeLabel}>오전 8시~12시</Text>
        <TextInput
          style={styles.input}
          placeholder="아침식사 후에 한 일"
          value={morning2}
          onChangeText={setMorning2}
          multiline
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.timeLabel}>오후 12시~5시</Text>
        <TextInput
          style={styles.input}
          placeholder="오후에 한 일"
          value={afternoon}
          onChangeText={setAfternoon}
          multiline
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.timeLabel}>오후 5시~10시</Text>
        <TextInput
          style={styles.input}
          placeholder="저녁식사 후에 한 일"
          value={evening}
          onChangeText={setEvening}
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  timeHeader: {
    flex: 1, 
    backgroundColor: "#E0EFDE",  
    paddingVertical: 10,
    alignItems: "center",
  },
  taskHeader: {
    flex: 3, 
    backgroundColor: "#F8F9F3",  
    paddingVertical: 10,
    alignItems: "center",
  },
  timeHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  taskHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },
  timeLabel: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  input: {
    flex: 3,
    backgroundColor: "#f9f9f9",
    fontSize: 14,
    color: "#000",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 10,
    textAlignVertical: "top",
  },
});

export default Page52_ImportantTasks;
