import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const EventInput = (props) => {
  const { onChange, placeholder } = props; 

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder} 
        onChangeText={onChange}
        secureTextEntry={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
  },
});

export default EventInput;
