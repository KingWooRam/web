import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Page52_HeaderSection from "./Page52_HeaderSection";
import Page52_MyDay from "./Page52_MyDay";
import Page52_ImportantTasks from "./Page52_ImportantTasks";
import Page52_TomorrowPlan from "./Page52_TomorrowPlan";

const DiaryScreen = () => {
  
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [weekDay, setWeekDay] = useState("");

  
  const [weather, setWeather] = useState(""); 

  
  const [visitedPlaces, setVisitedPlaces] = useState("");
  const [peopleMet, setPeopleMet] = useState("");
  const [purchasedItems, setPurchasedItems] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [todaysNews, setTodaysNews] = useState("");

  
  const [morning1, setMorning1] = useState("");
  const [morning2, setMorning2] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [evening, setEvening] = useState("");

  
  const [plan, setPlan] = useState("");
  const [Brainhealth, setBrainhealth] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <Page52_HeaderSection
        year={year} setYear={setYear}
        month={month} setMonth={setMonth}
        day={day} setDay={setDay}
        weekDay={weekDay} setWeekDay={setWeekDay}
        weather={weather} setWeather={setWeather} 
      />

      <Page52_MyDay
        visitedPlaces={visitedPlaces} setVisitedPlaces={setVisitedPlaces}
        peopleMet={peopleMet} setPeopleMet={setPeopleMet}
        purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems}
        expenditure={expenditure} setExpenditure={setExpenditure}
        todaysNews={todaysNews} setTodaysNews={setTodaysNews}
      />

      <Page52_ImportantTasks
        morning1={morning1} setMorning1={setMorning1}
        morning2={morning2} setMorning2={setMorning2}
        afternoon={afternoon} setAfternoon={setAfternoon}
        evening={evening} setEvening={setEvening}
      />

      <Page52_TomorrowPlan
        plan={plan}
        setPlan={setPlan}
        Brainhealth={Brainhealth}
        setBrainhealth={setBrainhealth}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
});

export default DiaryScreen;
