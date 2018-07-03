import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import MainNavigator from "./src/component/navigation/MainNavigator";
import reducer from "./src/reducers";
import { setLocalNotification } from "./src/utils/notification";
import CardStatusBar from './src/component/CardStatusBar';


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CardStatusBar backgroundColor="#fff"  />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});
