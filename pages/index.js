import React, {Component} from "react";
import {connect} from "react-redux";
 
class Home extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        store.dispatch({type: 'GET_VIDEOS_ALL', payload: 'videos'}); // component will be able to read from store's state when rendered
        return {custom: 'custom'}; // you can pass some custom props to component from here
    }
    render() {
        return (
            <div>
                <div>This is the BODY</div>
            </div>
        )
    }
}
 
export default connect(state=>state)(Home);