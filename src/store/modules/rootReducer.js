import { combineReducers } from 'redux';
import engList from './engList/reducer';
import partList from './partList/reducer';

export default combineReducers({
    engList,
    partList,
});
