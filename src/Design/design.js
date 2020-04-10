import React from 'react';
import ReactDOM from 'react-dom';
import './design.css';

class Design extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return (
            <p>test motherfucker</p>
        )
    }
};

ReactDOM.render(<Design/>, document.getElementById('design'))