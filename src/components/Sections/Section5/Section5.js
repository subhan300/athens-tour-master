import React from 'react'
import "./Section5.css"
import TreeView from "./TreeView"
import Slider from "./Slider"
function Section5() {
    return (
        <div className="section5">
          <div>  
              <h1 style={{color:"grey"}}>What you can expect</h1>
              <div><Slider /></div>
               
             <p style={{color:"grey",fontSize:"15px",marginTop:"8px"}}>Discover the history and the myths of Ancient Athens on a private tour with a local guide. Admire the best<br></br>
             places related to Greek Gods and hear the tales behind...<span style={{color:"pink"}}>read more</span>

</p>
<TreeView/>         
          </div>
          <div>  
              {/* <h1 style={{color:"grey"}}>What you can expect</h1> */}
          </div>
        </div>
    )
}

export default Section5
