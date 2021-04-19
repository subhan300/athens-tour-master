import React from 'react'
import "./Section4.css"
import Stars from "./ReviewComponent"
import Button from '@material-ui/core/Button';
function Section4() {
    function myFunctiond() {
        var dots = document.getElementById("dotsd");
        var moreText = document.getElementById("mored");
        var btnText = document.getElementById("myBtnd");
        console.log(btnText,"text")
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.appendChild=<div  onClick={()=>{myFunctiond()}} id="myBtnd"><Button style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >Load More</Button></div>;
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.appendChild=    <div  onClick={()=>{myFunctiond()}} id="myBtnd"><Button style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >Close </Button></div>;
          moreText.style.display = "inline";
        }
      }
    return (
        <div className="section4" id='reviews'>
              <div>
                  <h3 style={{marginLeft:"5px",paddingBottom:'18px'}}>Travelere's review</h3>
                 <div className="main_box">
                 <div className="box"><img style={{width:"120px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img></div>
                  <div className="box"><img style={{width:"120px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img></div>
                 </div>
                 <p style={{color:"grey",fontSize:"17px",marginTop:"24px",marginLeft:"7px"}}>Friendly and informative. So passionate about Athens and a pleasure to have as a<br></br> driver, We had an amazing time!</p>
            {/* 1 review */}
            <div className="review" style={{paddingTop:"10px"}}>
                          <img style={{width:"80px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img>
                   
                          <div>
                             <Stars />
                        </div>
            </div>
                    
          <p style={{paddingTop:"10px",color:"grey"}} className="review_text">We had a great time with Manos. He is knowledgeable and entertaining. Ile<br></br>could easily switch languages to explain things to my husband in Italian.</p>
           {/* 1 show abouve review */}
           <div id="mored">
                 {[1,2,3].map((val)=>{return(
                               
                               <>
                                                 <div className="review" style={{paddingTop:"10px"}}>
                          <img style={{width:"80px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img>
                   
                          <div>
                             <Stars />
                        </div>
                    </div>
                    
               <span id="dotsd"></span>     <p className="review_text" style={{paddingTop:"10px",color:"grey"}}>We had a great time with Manos. He is knowledgeable and entertaining. Ile<br></br>could easily switch languages to explain things to my husband in Italian.</p>



                               </>


                 )})}
                
              </div>

             
              <div  onClick={()=>{myFunctiond()}} id="myBtnd"><Button style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >Load More</Button></div>

                     
                   

                
                
              
             
              <hr></hr>

              <div className="price">
                  <div><h3>Price included</h3>
                    <ul style={{color:"grey"}}>
                  <li>Hotel pickup and dropoffWell maintained<br></br>car with an English speaking driver</li>
                  <li>Personal English-Speaking professional</li>
                  <li>Free wifi onboard</li>
<li>Fuel and Tolls</li>
<li>All taxes, fees and handling charge</li>
</ul>
                  </div>
                  <div className="NOT" style={{ filter:"blur('8px')"}}>
                      <h3> Not included</h3>
                      <ul style={{color:"grey"}}>
                  <li>Hotel pickup and dropoffWell maintained<br></br>car with an English speaking driver</li>
                  <li>Personal English-Speaking professional</li>
                  <li>Free wifi onboard</li>
<li>Fuel and Tolls</li>
<li>All taxes, fees and handling charge</li>
</ul>
                  
                  
                  </div>
               </div>
              </div>
              <div></div> 
        </div>
    )
}

export default Section4
