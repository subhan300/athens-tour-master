import React from 'react'
import Question from "./Ask_component"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import "./Section5.css"
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
    <div className="tree" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}   >
           <div>
           <p style={{color:"black",fontSize:"25px",marginTop:"8px",fontWeight:"bold"}}>
                Frequently Asked<span id="dotsb">?</span>
           
              <span id="moreb">
                   <Question />
              </span>
            
            </p>
           </div>
            <div onClick={()=>{myFunctionb()}} style={{flex:.7}}  className="FT"></div>

            <div  style={{color:"black",fontSize:"13px",flex:.3}} className="expand"  id="myBtnb" onClick={()=>{myFunctionb()}} >
                Expand &nbsp;<span style={{color:"black"}}><ExpandMoreIcon /></span>
            </div>
            <div style={{flex:.1,color:"white"}} className="right_adjust">end</div>

    </div>
  )
}

export default TreeView

