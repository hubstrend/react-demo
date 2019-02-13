import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";

import Layout from '../hoc/layout';
import videoListAll from '../actions';
import rootReducer from '../reducers';
import Videos from '../reducers/videosReducer';
 

// const reducers = createStore(rootReducer);

// const videos = (state = {}, action) => {
//     switch (action.type) {
//         case 'GET_VIDEOS_ALL':
//             return {...state, videos: action.payload};
//         default:
//             return state
//     }
// };
 

const makeStore = (initialState, options) => {
    return createStore(Videos, initialState);
};


class MyApp extends App {
 
    static async getInitialProps({Component, ctx}) {
 
        // we can dispatch from here too
        // ctx.store.dispatch({type: 'GET_VIDEOS_ALL', payload: 'videos'});
 
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
 
        return {pageProps};
 
    }
 
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>                    
                </Provider>
            </Container>
        );
    }
 
}
 
export default withRedux(makeStore)(MyApp);