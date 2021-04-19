import React from 'react'
import "./Section6.css"
import Card from "./Card"
import Button from '@material-ui/core/Button';
import TransitionsModal from "./Modal"
// import ImageSlider from "./ImageSlider"
function Section6() {
    return (
        <div className="section6">
            <div ><h1>Other rides in Athens</h1></div>
            <div className="section6_boxes" style={{display:"flex"}}>
               <div style={{margintop:"6px"}}> <TransitionsModal /></div>
               <div style={{margintop:"6px"}}>  <TransitionsModal /></div>
               <div style={{margintop:"6px"}}> <TransitionsModal /></div>
              
         

             </div>
             {/* <div style={{margintop:"6px"}}> <ImageSlider /></div> */}
              
            <div style={{marginTop:"50px"}}>  <Button variant="contained" style={{fontSize:"19px",color:"grey",backgroundColor:"#FAFAFA",width:"290px",height:"50px"}}>All Rides</Button></div>
            <div style={{marginTop:"90px"}}><h1 style={{color:"gray"}}>Questions Left?</h1>
            <hr></hr>
            </div>
            <div style={{marginTop:"70px"}}>  <Button variant="contained" style={{fontSize:"19px",color:"grey",backgroundColor:"#FAFAFA",width:"290px",height:"50px"}}>Contact Support</Button></div>
        
        
        
        </div>
    )
}

export default Section6
