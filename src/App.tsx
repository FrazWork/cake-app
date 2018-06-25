import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './styles/App.css';
import 'bulma/css/bulma.css';
import CakeView from './components/cakeView';
import CakeList from './components/cakeList';
import AddCake from './components/addCake';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Cake Application</h1>
                </header>
                <Switch>
                    <Route exact={true} path='/' component={CakeList}/>
                    <Route path='/cake/:id' component={CakeView} />
                    <Route path='/addcake/' component={AddCake} />
                </Switch>
            </div>
            
        );
    }
}

export default App;
