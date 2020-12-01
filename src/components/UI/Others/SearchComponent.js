import React from 'react'

const SearchComponent = ()  => {
    return (
        <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text icon-search-input">🔎</div>
              </div>
              <input type="text" className="form-control" id="search-input" placeholder="Recherche Twitter"/>
          </div>
    )
}

export default  SearchComponent