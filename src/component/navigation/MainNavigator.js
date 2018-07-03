import React from "react";
import DeckDetail from '../DeckDetail';
import AddQuestion from '../AddQuestion';
import Quiz from '../Quiz';
import { createStackNavigator, StackNavigator } from "react-navigation";
import Tabs from './Tabs';
const MainNavigator =  createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: "Flash Cards",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white"

      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#eee" 
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white"

      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white"

      }
    }
  }
});
export default MainNavigator;
