import { combineReducers } from 'redux';
import engList from './engList/reducer';
import partList from './partList/reducer';
import focus from './focus/reducer';

export default combineReducers({
    engList,
    partList,
    focus,
});
