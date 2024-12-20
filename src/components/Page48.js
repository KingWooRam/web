import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const Page48 = ({ navigation }) => {
  const [userStandardWeightAnswer, setUserStandardWeightAnswer] = useState('');
  const [userDailyCalorieAnswer, setUserDailyCalorieAnswer] = useState('');
  const [userStandardWeightAnswer2, setUserStandardWeightAnswer2] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const correctStandardWeightAnswer = "47.3"; 
  const correctDailyCalorieAnswer = "1183"; 

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const checkAnswers = () => {
    const isStandardWeightCorrect = userStandardWeightAnswer === correctStandardWeightAnswer;
    const isDailyCalorieCorrect = userDailyCalorieAnswer === correctDailyCalorieAnswer;

    if (isStandardWeightCorrect && isDailyCalorieCorrect) {
      return '두 문제 다 정답입니다!';
    } else if (isStandardWeightCorrect) {
      return '표준 체중 정답, 하루 필요열량 오답입니다.';
    } else if (isDailyCalorieCorrect) {
      return '하루 필요열량 정답, 표준 체중 오답입니다.';
    } else {
      return '둘 다 틀렸습니다!';
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>표준체중과 필요열량 구하기</Text>
        </View>
        
        <Text style={styles.instruction}>아래의 글을 소리 내어 읽고, 문제를 풀어보세요!(1~2)</Text>
        
        <View style={styles.box}>
          <Text style={styles.description}>
            당뇨 환자에게 식이요법이 필수이기 때문에 자신의 표준 체중을 알고, 
            그에 따른 하루 총량을 계산하여 하루에 얼마나 먹을지를 결정해야 합니다. 
            또한 당도가 높은 식품은 피하고, 채소류, 해조류 등 당뇨에 좋은 식품을 
            적절한 양만큼 규칙적인 시간에 먹는 것이 중요합니다.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.methodTitle}>표준 체중 구하는 방법</Text>
          <Text style={styles.methodDescription}>
            - 남자: (키(m) x 22) / 여자: (키(m) x 21){"\n"}
            예) 키가 170cm인 남자의 표준 체중: 1.7 x 1.7 x 22 = 63.6kg
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.methodTitle}>하루 필요열량(칼로리) 구하는 방법</Text>
          <Text style={styles.methodDescription}>
            - 유체활동이 거의 없는 경우(사무직 등): 표준 체중 x 25{"\n"}
            - 보통 활동을 하는 경우(경운직 등): 표준 체중 x 30{"\n"}
            - 신체 활동을 하는 경우(운동직 등): 표준 체중 x 35
          </Text>
        </View>

        <Text style={styles.question}>1. 키가 150cm인 희자 할머니는 육체활동이 거의 없습니다. 희자 할머니의 표준 체중과 하루 필요열량을 구해보세요.</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>표준 체중 (kg):</Text>
            <TextInput
              style={styles.input}
              value={userStandardWeightAnswer}
              onChangeText={setUserStandardWeightAnswer}
              placeholder="kg"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>하루 필요열량 (칼로리):</Text>
            <TextInput
              style={styles.input}
              value={userDailyCalorieAnswer}
              onChangeText={setUserDailyCalorieAnswer}
              placeholder="칼로리"
              keyboardType="numeric"
            />
          </View>
        </View>

        <Button title="제출" onPress={handleSubmit} disabled={!userStandardWeightAnswer || !userDailyCalorieAnswer} />
        
        {isSubmitted && (
          <Text style={styles.resultText}>
            {checkAnswers()}
          </Text>
        )}

        <Text style={styles.question}>2. 자신의 표준 체중과 하루 필요열량을 구해보세요.</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>표준 체중 (kg):</Text>
            <TextInput
              style={styles.input}
              value={userStandardWeightAnswer2}
              onChangeText={setUserStandardWeightAnswer2}
              placeholder="kg"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>하루 필요열량 (칼로리):</Text>
            <TextInput
              style={styles.input}
              value={userDailyCalorieAnswer} // 필요한 경우 추가
              onChangeText={setUserDailyCalorieAnswer} // 필요한 경우 추가
              placeholder="칼로리"
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* 다음 페이지로 넘어가는 버튼 추가 */}
        <Button title="다음 페이지" onPress={() => navigation.navigate('Page49')} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
  },
  box: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  methodDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  resultText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});

export default Page48;
