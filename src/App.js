import React, {Component} from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import firebase from "firebase";
import Router from "./Router";

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: "AIzaSyC5yHf5PJo-XGLkuJAfiDE-RrHWNucE0Rc",
			authDomain: "manager-45fb6.firebaseapp.com",
			databaseURL: "https://manager-45fb6.firebaseio.com",
			storageBucket: "manager-45fb6.appspot.com",
			messagingSenderId: "650318683056"
		};

		firebase.initializeApp(config);

	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;