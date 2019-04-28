import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./layouts/Header";
import About from "./layouts/About";
import PageNotFound from "./layouts/PageNotFound";
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import store from "./store";
import SlideShow from "./components/slideshow/SlideShow";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header branding="Volunteer Hub"/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/gallery" component={SlideShow}/>
                                <Route exact path="/about" component={About}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
