import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import VegetableCardList from "./VegetableCardList";
import './Home.scss'
import axios from "axios";

export default function Home() {
  const [state, setState] = useState({
    vegetables: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/vegetables/search")
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
  }, []);


  const handleChange = () => {
    console.log(state.vegetables)
 }

//  const vegetables = [0];

  return (
    <div className='homepage'>
      <SearchBar handleChange={handleChange}/>
      <VegetableCardList vegetables={[state.vegetables]}/>
    </div>
  );
}
