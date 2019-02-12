import { combineReducers } from 'redux';
import sliderReducer from './sliderReducer';
import videosReducer from './videosReducer';


const rootReducer = combineReducers({
    slider: sliderReducer,
    videos: videosReducer
})

export default rootReducer;