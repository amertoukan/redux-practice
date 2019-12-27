import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
 
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store'; 
import Form from './components/form'; 
class App extends Component {
  render(){


  return (
    <Provider store={store}>
    <div className="App">
 <Form />
 <Posts />
    </div>
    </Provider>
  );
}}

export default App;
