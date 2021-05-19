import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";


const NumberConteiner = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.numebr}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 10, 
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
,
numebr: {
    color:  colors.accent,
    fontSize: 22,
}
})

export default NumberConteiner;
