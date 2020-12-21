import React from 'react'
import SuggestionItem from "./SuggestionItem";

const SuggestionList = ()  => {
    return (
        <div className="suggestion">
          <div className="row justify-content-md-center border  first-col-right">
              <p style={{fontWeight:"bolder", fontSize:"18px", marginLeft:"0", paddingLeft:"0"}}>Suggestions</p>
          </div>
          <SuggestionItem  src="../../../images/avatar-home.png" name="John Doe" username="@hdhdhdhd"/>
          <SuggestionItem  src="../../../images/avatar-home.png" name="John ToTo" username="@zzzzzzzz"/>
          <SuggestionItem  src="../../../images/avatar-home.png" name="John MoMo" username="@ldldldl"/>
        <div className="row justify-content-md-center border  last-col-right">
          <p  style={{fontWeight:"bolder", color:"#26A5F2"}}><a href="/">Voir plus</a></p>
        </div>

        </div>
    )
}

export default  SuggestionList