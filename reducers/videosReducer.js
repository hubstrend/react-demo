
// const initState = {}

// const videosReducer = (state = initState,action) => {

//     switch(action.type) {
//         case 'GET_VIDEOS_ALL':
//             return {...state,list:action.payload}
//         default:
//             return state
//     }

// }

// export default videosReducer;


const videos = (state = {}, action) => {
    switch (action.type) {
        case 'GET_VIDEOS_ALL':
            return {...state, videos: action.payload};
        default:
            return state
    }
};

export default videos;