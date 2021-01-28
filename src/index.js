import React from 'react';
import ReactDOM from 'react-dom'
import "./index.css";
import {CounterApp} from './counterApp'

const divRoot = document.querySelector("#root");


ReactDOM.render(<CounterApp />, divRoot)


//para mostrarle a Juan
/* const peticion = async () => {
  const apiKey="v8bgSxcKBfONH6L4D2iHHUS26abxpzKB"
  const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  const {data} =  await peticion.json();

  const { url } = data.images.original;

  const img = document.createElement("img");

  const divRoot = document.querySelector("#root");

  img.src=url;

  document.body.append(img)


} 

peticion() */