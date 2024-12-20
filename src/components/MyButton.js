import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ title, loginInfo = { userId: "", pass: "" }, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(loginInfo)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  loginInfo: PropTypes.shape({
    userId: PropTypes.string,
    pass: PropTypes.string,
  }),
  onPress: PropTypes.func.isRequired,
};

MyButton.defaultProps = {
  loginInfo: { userId: "", pass: "" },
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 16,
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyButton;
