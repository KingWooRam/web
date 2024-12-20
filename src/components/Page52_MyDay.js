import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Page52_MyDay = ({
  visitedPlaces, setVisitedPlaces,
  peopleMet, setPeopleMet,
  purchasedItems, setPurchasedItems,
  expenditure, setExpenditure,
  todaysNews, setTodaysNews
}) => {
    return (
      <View style={styles.container}>
     
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>나의 하루</Text>
        </View>
  
       
        <View style={styles.row}>
          <Text style={styles.label}>방문한 장소</Text>
          <TextInput
            style={styles.input}
            value={visitedPlaces}
            onChangeText={setVisitedPlaces}
          />

          <Text style={[styles.label, { paddingLeft: 10 }]}>오늘 만난{"\n"}    사람</Text>

        
          <TextInput
            style={styles.input}
            value={peopleMet}
            onChangeText={setPeopleMet}
          />
        </View>
  
       
        <View style={styles.row}>
          <Text style={styles.label}>구입한 물건</Text>
          <TextInput
            style={styles.input}
            value={purchasedItems}
            onChangeText={setPurchasedItems}
          />

          <Text style={styles.label}>지출 금액</Text>
          <TextInput
            style={styles.input}
            value={expenditure}
            onChangeText={setExpenditure}
          />
        </View>
  
      
        <View style={styles.row}>
          <Text style={styles.label}>오늘의 뉴스</Text>
          <TextInput
            style={styles.input}
            value={todaysNews}
            onChangeText={setTodaysNews}
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
  titleRow: {
    backgroundColor: "#b2d8b2",
    paddingVertical: 8,
    alignItems: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    fontSize: 14,
    flex: 1,
    color: "#333",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    padding: 5,
    marginHorizontal: 5,
      
  },
});

export default Page52_MyDay;
