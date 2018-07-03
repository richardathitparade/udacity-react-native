import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Constants } from "expo";
function CardStatusBar({ backgroundColor, ...props }) {
 
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
export default CardStatusBar;
