import React from "react";
import DeckList from "../DeckList";
import AddDeck from '../AddDeck';
import { TabNavigator } from "react-navigation";
import {FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Decks",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={30} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  }
});
export default Tabs;
