import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';

const Page49 = ({ navigation }) => {
  const foodImages = [
    { source: require('../../assets/images/image/food01.jpg'), name: '콩밥', kcal: '354kcal', weight: '210g' },
    { source: require('../../assets/images/image/food02.jpg'), name: '보리밥', kcal: '294kcal', weight: '210g' },
    { source: require('../../assets/images/image/food03.jpg'), name: '쌀밥', kcal: '313kcal', weight: '210g' },
    { source: require('../../assets/images/image/food04.jpg'), name: '갓김치', kcal: '25kcal', weight: '60g' },
    { source: require('../../assets/images/image/food05.jpg'), name: '미역초무침', kcal: '35kcal', weight: '85g' },
    { source: require('../../assets/images/image/food06.jpg'), name: '두부무침', kcal: '94kcal', weight: '85g' },
    { source: require('../../assets/images/image/food07.jpg'), name: '제육볶음', kcal: '191kcal', weight: '105g' },
    { source: require('../../assets/images/image/food08.jpg'), name: '돼지고기 편육', kcal: '116kcal', weight: '72g' },
    { source: require('../../assets/images/image/food09.jpg'), name: '갈치조림', kcal: '123kcal', weight: '130g' },
    { source: require('../../assets/images/image/food10.jpg'), name: '콩나물국', kcal: '40kcal', weight: '250g' },
    { source: require('../../assets/images/image/food11.jpg'), name: '된장찌개', kcal: '139kcal', weight: '150g' },
    { source: require('../../assets/images/image/food12.jpg'), name: '미역국', kcal: '55kcal', weight: '250g' },
  ];

  const dinnerItems = [
    { name: '흑미밥', weight: '210g' },
    { name: '돈육고추잡채', weight: '40g' },
    { name: '동태전', weight: '70g' },
    { name: '근대된장국', weight: '70g' },
    { name: '마늘쫑볶음', weight: '40g' },
  ];

  const correctAnswer1 = 468;
  const correctAnswer2 = ['콩밥', '제육볶음', '미역국'];

  const [userAnswer1, setUserAnswer1] = useState('');
  const [userAnswer2, setUserAnswer2] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const checkAnswers = () => {
    const isAnswer1Correct = parseInt(userAnswer1) === correctAnswer1;

    const userAnswer2Array = userAnswer2.split(' ').map(item => item.trim()).sort();
    const correctAnswer2Array = correctAnswer2.sort();
    const isAnswer2Correct = JSON.stringify(userAnswer2Array) === JSON.stringify(correctAnswer2Array);

    let message = '';
    if (isAnswer1Correct && isAnswer2Correct) {
      message = '두 문제 다 정답입니다.';
    } else if (isAnswer1Correct) {
      message = '1번 문제는 맞았지만, 2번 문제는 틀렸습니다.';
    } else if (isAnswer2Correct) {
      message = '1번 문제는 틀렸지만, 2번 문제는 맞았었습니다.';
    } else {
      message = '두 문제 모두 틀렸습니다.';
    }

    setResultMessage(message);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>식단 계산하기</Text>
        
        <Text style={styles.instruction}>
          다음 보기를 보고 문제를 풀어보세요!(1~2)
        </Text>

        <View style={styles.box}>
          <Text style={styles.viewLabel}>보기</Text>
          <View style={styles.imageGrid}>
            {foodImages.map((food, index) => (
              <View key={index} style={styles.imageBox}>
                <Image source={food.source} style={styles.image} />
                <Text style={styles.imageName}>{food.name}</Text>
                <Text style={styles.imageDetails}>{food.kcal} / {food.weight}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.viewLabel}>보기</Text>
          <Text style={styles.dinnerTime}>저녁 식단</Text>
          <View style={styles.dinnerList}>
            {dinnerItems.map((item, index) => (
              <Text key={index} style={styles.dinnerItem}>
                {item.name} ({item.weight})
              </Text>
            ))}
            <Text style={styles.dinnerArrow}>↓</Text>
          </View>
          <Text style={styles.calorieText}>650칼로리</Text>
          <Image source={require('../../assets/images/image/table.jpg')} style={styles.dinnerImage} />
        </View>

        <Text style={styles.question}>1. 희자 할머니는 보리밥(210g)과 된장찌개(150g), 미역초무침(85g)을 먹었습니다. 총 칼로리를 적어보세요.</Text>
        <TextInput
          style={styles.input}
          value={userAnswer1}
          onChangeText={setUserAnswer1}
          placeholder="정답 입력"
          keyboardType="numeric"
        />

        <Text style={styles.question}>2. 희자 할머니의 점심 식단을 600칼로리에 맞게 메뉴를 골라 적어보세요. (밥, 국, 반찬 골고루 적으세요)</Text>
        <TextInput
          style={styles.input}
          value={userAnswer2}
          onChangeText={setUserAnswer2}
          placeholder="정답 입력"
        />

        <Button title="제출" onPress={checkAnswers} />
        
        {resultMessage ? (
          <Text style={styles.resultMessage}>{resultMessage}</Text>
        ) : null}
        <Button title="다음 페이지" onPress={() => navigation.navigate('Page50')} />
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
    alignItems: 'center',
  },
  viewLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  dinnerTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  dinnerList: {
    alignItems: 'center',
    marginBottom: 10,
  },
  dinnerItem: {
    fontSize: 16,
    textAlign: 'center',
  },
  dinnerArrow: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  calorieText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageBox: {
    width: '30%',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 5,
  },
  imageName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageDetails: {
    fontSize: 14,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  resultMessage: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});

export default Page49;
