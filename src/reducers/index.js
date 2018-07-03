import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckDetailReducer from './DetailReducer';

export default combineReducers({
  decks: DeckReducer,
  deckDetail: DeckDetailReducer
});
