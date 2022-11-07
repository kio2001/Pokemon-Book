import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import "./styles/api.module.css";
import useLocationChange from "./useLocationChange"

const Details = () => {
  const [id,setId] = useState("");
  const [a,setA] = useState("");
  const [type,setType] = useState("");
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((res) => {
      console.log(res.data);
       setA(res.data.sprites.other['official-artwork'].front_default) 
       setType(res.data.types[0].type.name);
       setId(res.data.id);
       setWeight(res.data.weight);
       setHeight(res.data.height);
    });
       
  return(
    <>
    
    <img src={a}/>
    <p>pokemonID　:　{id}</p>
    <p>type　:　{type}</p>
    <p>weight　:　{weight}</p>
    <p>height　:　{height}</p>

    </>
  )
};
export default Details;
