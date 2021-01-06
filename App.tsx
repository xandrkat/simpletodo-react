import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { HomeScreen } from "./screens/Home";
import { AboutScreen } from "./screens/About";

import { todoReducer } from "./framework/redux/reducers/todoReducer";

const preloadedState = {
    name: "To-Do app",
    tasks: {}
};

// Initial main state value (Redux state)
const store = createStore(
    todoReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
);

const AppStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        About: AboutScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppNavigation = createAppContainer(AppStackNavigator);

function App() {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}

export default App;