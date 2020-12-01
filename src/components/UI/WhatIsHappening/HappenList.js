import React from 'react'
import SearchComponent from '../Others/SearchComponent';
import HappenItem from './HappenItem';

const HappenList = ()  => {
    return (
        <div className="is-happening">
          <SearchComponent/>
          <div className="row justify-content-md-center border  first-col-right">
                    <p style={{fontWeight:"bolder", fontSize:"18px", marginLeft:"0", paddingLeft:"0"}}>Ce qui se passe</p>
                  </div>
            <HappenItem tag="Black Friday" count="13,4"/>
            <HappenItem tag="Black Blocks" count="99,8"/>
            <HappenItem tag="Domains" count="54,8"/>
            <div className="row justify-content-md-center border  last-col-right">
              <p style={{fontWeight:"bolder", color:"#26A5F2"}}><a href="/">Voir plus</a></p>
            </div>
        </div>
    )
}

export default  HappenList