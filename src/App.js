import React,{ Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap' ; 
import './App.css';
import Menu from './components/MenuComponent'
import { DISHES } from './components/shared/dishes.js'

class App extends Component{
  constructor(props){
    super(props) ;
    this.state = {
      dishes : DISHES ,
    }
  }
  
  render(){
    console.log('app rendered')
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
      </div>
    );
  }

  
}

export default App;
