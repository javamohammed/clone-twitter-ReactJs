import React from 'react'

const HappenItem = props  => {
    return (
      <div className="row justify-content-md-center border border-top-0 second-col-right">
          <p className="text-second-col-right">
            {props.tag}<br/>
          <span style={{color:"gray"}}>{props.count} k Tweets</span><br/>
          </p>
    </div>
    )
}

export default  HappenItem