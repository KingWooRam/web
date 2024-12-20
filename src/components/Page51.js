import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from "react-native"; 
import styles from "./style5051"; 

const Page51 = ({ navigation }) => {

  const images = {
      Ok: require('../../assets/Pageim/Ok.png'),
    Default: [
      require('../../assets/Pageim/1.png'), 
      require('../../assets/Pageim/2.png'),
      require('../../assets/Pageim/3.png'),
      require('../../assets/Pageim/4.png'),
      require('../../assets/Pageim/5.png'),
      require('../../assets/Pageim/6.png'),
      require('../../assets/Pageim/7.png'),
      require('../../assets/Pageim/8.png'),
      require('../../assets/Pageim/9.png'),
      require('../../assets/Pageim/10.png')
    ]
  };

  const [isCorrect, setIsCorrect] = useState(false);
  const [touches, setTouches] = useState(Array(10).fill(0)); 

  const Pass = () => {
    const correctAnswers = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0]; 
    const score = touches.reduce((acc, touch, index) => {
      return acc + (touch === correctAnswers[index] ? 1 : 0);
    }, 0);
    setIsCorrect(score === 10);
  };

  const handleTouch = (index) => {
    setTouches((prevTouches) => {
      const newTouches = [...prevTouches];
      newTouches[index] = (newTouches[index] + 1) % 2; 
      return newTouches;
    });
  };

  const getImageSource = (base, index) => {
    return touches[index] === 1 ? images.Ok : images.Default[index];
  };

  return (
    <View style={styles.Box4}>
      <Text style={styles.Box3}>당뇨 예방법 기억하기</Text>
      <Text style={styles.subHeaderText}>
        앞서 기억해둔 당뇨 예방법 음식을 찾아 동그라미 하세요.
      </Text>
        
      <View style={styles.imageContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
         <TouchableOpacity key={index} onPress={() => handleTouch(index)} style={{padding:5}}>
              <Image
                source={{ uri: getImageSource(index) }}
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
