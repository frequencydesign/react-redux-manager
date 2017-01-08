import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm.js";

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
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
					<LoginForm />
				</View>
			</Provider>
		)
	}
}

export default App;