import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import './Home.scss'
import axios from "axios";

export default function Home(props:any) {
  const parentState = props;

  const [state, setState] = useState({
    vegetables: [],
    query: ''
  });

  // console.log("BIG LAD", state)



  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/vegetables/search", {
        params: {
          query: state.query
        }
      })
    ])
      .then((all) => {
        const vegetablesData = all[0].data;
        setState((prev) => ({
          ...prev,
          vegetables: vegetablesData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.query]);


  let vegetables = state.vegetables;
  
  const handleChange = (event:any) => {
    setState((prev) => ({
      ...prev,
      query: event.target.value,
    }));
 }



  return (
    <div className='homepage'>
      <SearchBar handleChange={handleChange}/>
      <VegetableCardList state={parentState} vegetables={[vegetables]}/>
    </div>
  );
}
