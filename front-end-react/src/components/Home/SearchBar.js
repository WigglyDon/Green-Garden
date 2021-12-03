import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(props) {
  return (
    <div className="search">
      <input
        onChange={props.handleChange}
        type="text"
        placeholder="Find your next crop!"
      ></input>
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
    </div>
  );
}
