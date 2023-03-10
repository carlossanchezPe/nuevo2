import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
import'./Body.css'


class Body extends Component {
    render(){
      const {arreglo}=this.props;
      const {texto1}=this.props;
    return (
        <div className="Body">
         <p> {texto1}</p>
      {
        this.props.arreglo.map((e,index)=>
            <h1 key={index}>{e}</h1>
            )
      }
     
        </div>
    );
  }
    }
  export default Body;


  Body.propTypes={
    arreglo:PropTypes.array,
    texto1:PropTypes.string
  }