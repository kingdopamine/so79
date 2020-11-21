import React from 'react';

import './App.css';

import {
  BrowserRouter as Router, 
  Route,  
} from 'react-router-dom';



import Homepage from './pages/Homepage/Homepage'
import Design from './pages/Design/design'
import AboutUs from './pages/AboutUs/AboutUs'
import Aprons from './pages/Aprons/Aprons'
import Bags from './pages/Bags/Bags'
import Contact from './pages/Contact/Contact'
import SO79Collection from './pages/SO79Collection/SO79Collection'
import TShirts from './pages/TShirts/TShirts'
import Checkout from './pages/Checkout/Checkout'
import Navigation from './pages/Navigation/Navigation'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      navDisplay:"main-menu-style",
      igicon:"menu2",
      bagicon:"menu21",
      basketAmount:"basketAmount",
      SO79Collection:JSON.parse(localStorage.getItem('SO79Collection')) || [],
      SO79CollectionSubtotal:JSON.parse(localStorage.getItem('SO79CollectionSubtotal')) || 0,
      //totalItems:JSON.parse(localStorage.getItem('totalItems')) || 0,
    }
    this.navHide = this.navHide.bind(this);
    this.pusher = this.pusher.bind(this)
    
    }
    
    componentDidMount(){
      //localStorage.clear()
    }
    

    navHide(){
      setTimeout(()=>{
        if(this.state.navDisplay==="main-menu-style"){
          localStorage.clear()
          /*this.setState({navDisplay:"menuOff",igicon:"menuHidden",bagicon:"menuHidden",basketAmount:"menuHidden"})*/
        } 
        
      })
      
    }

    SO79Collection(collection){
    
      localStorage.setItem('SO79Collection', JSON.stringify(collection));
      let arr = []
      collection.map((quantity)=>{
        arr.push(quantity.quantity);
      })
      let collectionQuant = arr.reduce((a,b)=>a+b);
      localStorage.setItem('totalItems', JSON.stringify(collectionQuant));
      this.pusher();
      this.forceUpdate();
      
      
      
    }

    pusher(){
      let arr = [];
      
      this.state.SO79Collection.map((collection)=>{
        arr.push(parseInt(collection.price.slice(1)));
        let subtotal = arr.reduce((a,b)=>a+b);
        localStorage.setItem('SO79CollectionSubtotal', JSON.stringify(subtotal))
      })
    }




  render(){
    
    
    return (

      <div>
        <Navigation menuShow={this.state.navDisplay} igicon={this.state.igicon} bagicon={this.state.bagicon} basketAmount={this.state.basketAmount} SO79={this.state.SO79Collection} totalItems={JSON.parse(localStorage.getItem('totalItems')) || 0}/>
        <Router>
          {<Route exact path="/" render={()=> <Homepage navHide={this.navHide()} />}/>}
          {<Route exact path="/create-your-own" component={Design} />}
          {<Route exact path="/about-us" component={AboutUs} />}
          {<Route exact path="/aprons" component={Aprons} />}
          {<Route exact path="/bags" component={Bags} />}
          {<Route exact path="/contact-complete-bespoke" component={Contact} />}
          {<Route exact path="/so79-collection" render={()=> <SO79Collection SO79={this.state.SO79Collection} changeSO79={this.SO79Collection.bind(this)} />}/>}
          {<Route exact path="/tshirts" component={TShirts} />}
          {<Route exact path="/checkout" render={()=> <Checkout SO79Collection={this.state.SO79Collection} SO79CollectionSubtotal={this.state.SO79CollectionSubtotal}/>}/>}
        </Router>

        
      </div>
      

      
      
      
    );
  } 
  
}

export default App;
