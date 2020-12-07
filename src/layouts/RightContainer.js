import React from 'react';
import HappenList from '../components/UI/WhatIsHappening/HappenList';
import SuggestionList from '../components/UI/Suggestions/SuggestionList';
import "../css/home.css";

function RightContainer() {
  return (
    <div className="col-sm right-div">
      <div className="col">
      <div className="col-sm menu-right">
        <HappenList/>
        <SuggestionList/>
      </div>
      </div>
    </div>
  );
}

export default RightContainer;
