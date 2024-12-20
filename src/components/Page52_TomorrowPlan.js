import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const TomorrowPlan = ({ plan, setPlan, Brainhealth, setBrainhealth }) => {
  return (
    <View style={styles.container}>
      {/* 내일 계획 */}
      <View style={styles.row}>
        <Text style={styles.label}>내일 계획</Text>
        <TextInput
          style={styles.input}
          value={plan}
          onChangeText={setPlan}

          placeholderTextColor="#aaa"
        />
      </View>

      {/* 뇌 건강을 위한 생활습관 */}
      <View style={styles.healthContainer}>
        {/* 왼쪽: 체크 아이콘 + 제목 */}
        <View style={styles.titleContainer}>
          <View>
          <Text style={styles.label}>뇌 건강을</Text>
          <Text style={[styles.label, { paddingLeft: 10 }]}>  위한</Text>
          <Text style={styles.label}>생활습관</Text>
          </View>
        </View>

        {/* 오른쪽: 설명 부분 */}
        <View style={styles.contentContainer}>
          <View style={styles.checkTextContainer}>
            <Image
              source={require("../../assets/images/check.png")}
              style={styles.icon}
            />
            <Text style={styles.highlightText}>혈당관리를 철저히 하세요.</Text>
          </View>
          <Text style={styles.descriptionText}>
            당뇨병은 심혈관질환의 발병을 가져올 뿐만 아니라, 감염에
            대한면역력의 악화 등의 합병증을 일으킵니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 14, // 평범한 글씨
    color: "#000", // 검정색
  },
  input: {
    flex: 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 8,
    fontSize: 14,
  },
  healthContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
  },
  contentContainer: {
    flex: 3,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  checkTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 14,
    color: "#007B83",
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 12,
    color: "#333",
    lineHeight: 18,
  },
});

export default TomorrowPlan;
