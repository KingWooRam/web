import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      {/* 앱 이름 */}
      <Text style={styles.title}>Diabetes care</Text>

      {/* 앱 설명 */}
      <Text style={styles.subtitle}>함께 하는 쉬운 건강 관리</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // 텍스트를 가운데 정렬
    marginBottom: 20, // 아래 컴포넌트와 간격
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5, // 앱 이름과 설명 텍스트 사이 간격
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // 설명 텍스트 색상 (연한 회색)
  },
});

export default Title;
