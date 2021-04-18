import React from 'react'
import Question from "./Ask_component"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
function TreeView() {
  function myFunctionb() {
    var dots = document.getElementById("dotsb");
    var moreText = document.getElementById("moreb");
    var btnText = document.getElementById("myBtnb");
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
    <div style={{display:"flex",justifyContent:"space-between"}}   >
           <div>
           <p style={{color:"black",fontSize:"25px",marginTop:"8px",fontWeight:"bold"}}>
                Frequently Asked<span id="dotsb">?</span>
           
              <span id="moreb">
                   <Question />
              </span>
            
            </p>
           </div>
            <div onClick={()=>{myFunctionb()}} style={{flex:.7}}></div>
            <div  style={{color:"black",fontSize:"13px",flex:.3}}  id="myBtnb" onClick={()=>{myFunctionb()}} >
                Expand &nbsp;<span style={{color:"black"}}><ExpandMoreIcon /></span>
            </div>

    </div>
  )
}

export default TreeView

