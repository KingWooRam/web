import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import Title from './Title';
import EventInput from './EventInput';
import MyButton from './MyButton';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const loginInfo = { userId: 'baekseok', pass: '11991' };

  const checkLogin = () => {
    if (userId !== loginInfo.userId) {
      alert('아이디 오류입니다');
      return;
    } else if (password !== loginInfo.pass) {
      alert('비밀번호 오류입니다');
      return;
    }
    alert('로그인 성공!');
    navigation.navigate('Page46');
  };


  return (
    <View style={styles.container}>
      <Logo />

      <Title />

      <EventInput placeholder="아이디를 입력하세요." onChange={setUserId} />

      <EventInput placeholder="비밀번호를 입력하세요." onChange={setPassword} />

      <MyButton title="로그인" onPress={checkLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
