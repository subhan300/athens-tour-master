import React from 'react'
import Question from "./Ask_component"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import "./Section5.css"
function Terms() {
  function myFunctionc() {
    var dots = document.getElementById("dotsc");
    var moreText = document.getElementById("morec");
    var btnText = document.getElementById("myBtnc");
    console.log(btnText,"text")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.appendChild =<ExpandMoreIcon />;
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.appendChild=<ExpandLessIcon />;
      moreText.style.display = "inline";
    }
  }

  return (
 <div>
      <div style={{display:"flex",justifyContent:"space-between"}}  >
            <div  >
            <p style={{color:"black",fontSize:"24px",marginTop:"8px",fontWeight:"bold"}}>
                Terms Of Services<span id="dotsc" style={{color:"white"}}>.</span>
           
              <span id="morec" >
                   <Question />
              </span>
            
            </p>
            </div>
            <div onClick={()=>{myFunctionc()}} style={{flex:.7}} className="FT"></div>
            <div  onClick={()=>{myFunctionc()}}  style={{color:"black",fontSize:"13px",flex:.3}} className="expand"  id="myBtnc">
                Expand &nbsp;<span style={{color:"black"}} ><ExpandMoreIcon /></span>
            </div>
            <div style={{flex:.1,color:"white"}} className="right_adjust">end</div>

    </div>
 </div>
  )
}

export default Terms
