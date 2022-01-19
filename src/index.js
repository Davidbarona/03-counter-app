import React from 'react'
import  ReactDOM  from 'react-dom';
import CounterApp from './CounterApp';
import  FirstApp from  './FirstApp'
import './index.css'



const divRoot = document.querySelector('#root')

ReactDOM.render(<FirstApp greeting="Hi,I'm Goku"/>,divRoot)
// ReactDOM.render(<CounterApp/>,divRoot)

