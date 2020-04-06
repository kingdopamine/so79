import React from 'react';
import HomeNav from './HomeNav/HomeNav'
import background from '../src/so79background.jpg'
import './App.css';


class App extends React.Component{
 /* constructor(props){
    super(props)

  } */

  render(){
    return (
      <div className="Homepage">
       <div id="background">
         <img src={background} id="background-image" alt="background"></img>
       </div>
       <HomeNav/>
      </div>
    );
  }
  
}

export default App;
