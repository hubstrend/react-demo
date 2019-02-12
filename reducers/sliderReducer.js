
const initState = {}

const sliderReducer = (state = initState,action) => {

    switch(action.type) {
        case 'GET_HERO_SLIDER':
            return {...state,list:action.payload}
        default:
            return state
    }

}

export default sliderReducer;
