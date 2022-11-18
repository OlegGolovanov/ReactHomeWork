import headerSlice from "../components/header/headerSlice";
import mediaSlice from "../components/app/mediaSlice";
import hamburgerSlice from "../components/hamburger/hamburgerSlice";
import lotsSlice from "../components/lots/lotsSlice";

import { combineReducers } from 'redux'



export default combineReducers({
    headerSlice,
    mediaSlice,
    hamburgerSlice,
    lotsSlice
})