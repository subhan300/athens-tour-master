import React from 'react'
import "./Section5.css"
import TreeView from "./TreeView"
import Slider from "./Slider"
function Section5() {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
        console.log(btnText,"text")
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
  

    return (
        <div className="section5">
          <div>  
              <h1 style={{color:"grey"}}>What you can expect</h1>
              <div>
                <Slider/>
              </div>
            <p style={{color:"grey",fontSize:"15px",marginTop:"8px"}}>
              Discover the history and the myths of Ancient Athens on a 
              private tour with a local guide. Admire the best<br></br>
              places related to Greek Gods and hear the tales behind
              <span id="dots"> ...</span>
              <span id="more">erisque enim ligula venenatis dolor. Maecenas 
                nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
                luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, 
                sed ullamcorper ipsum dignissim ac. In at libero sed nunc 
                venenatis imperdiet sed ornare turpis. Donec vitae dui eget
                tellus gravida venenatis. Integer fringilla congue eros non 
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
              <span style={{color:"pink"}} onClick={()=>{myFunction()}} id="myBtn">
                read more
              </span>
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
