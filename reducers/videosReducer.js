
const initState = {}

const videosReducer = (state = initState,action) => {

    switch(action.type) {
        case 'GET_VIDEOS_ALL':
            return {...state,list:action.payload}
        default:
            return state
    }

}

export default videosReducer;