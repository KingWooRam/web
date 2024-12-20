import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from "react-native"; // StyleSheet로 스타일 정의
import styles from "./style5051"; // 스타일 임포트

const Page51 = ({ navigation }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [touches, setTouches] = useState(Array(10).fill(0)); // 터치 상태 배열

  const Pass = () => {
    const correctAnswers = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0]; // 정답 배열
    const score = touches.reduce((acc, touch, index) => {
      return acc + (touch === correctAnswers[index] ? 1 : 0);
    }, 0);
    setIsCorrect(score === 10);
  };

  const handleTouch = (index) => {
    setTouches((prevTouches) => {
      const newTouches = [...prevTouches];
      newTouches[index] = (newTouches[index] + 1) % 2; // 0 또는 1로 토글
      return newTouches;
    });
  };

  const getImageSource = (base, index) => {
    return touches[index] === 1 ? "https://imgur.com/4BbTpHD.png" : base;
  };

  return (
    <View style={styles.Box4}>
      <Text style={styles.Box3}>당뇨 예방법 기억하기</Text>
      <Text style={styles.subHeaderText}>
        앞서 기억해둔 당뇨 예방법 음식을 찾아 동그라미 하세요.
      </Text>
      <View style={styles.imageContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleTouch(index)}>
            <Image
              source={{ uri: getImageSource("https://imgur.com/VA573W1.png", index) }}
              style={styles.dButton}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="정답 확인" onPress={Pass} />
      {isCorrect && <Text>정답!</Text>}
      <Button title="다음 페이지" onPress={() => navigation.navigate('Diary')} />
    </View>
  );
};

export default Page51;
