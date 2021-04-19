import React,{useContext} from 'react'
import "./Section2.css"
import Cards from "./Card"
import Card from '@material-ui/core/Card';
import InputTextField from "./InputTextField"
import InputTextField2 from "./InputTextFiled2"
import Button from '@material-ui/core/Button'
import Data from "./data.json";
import {GlobalContext} from "../../GlobalContext/GlobalContext"

function Section2() {
    const {initial_value}=useContext(GlobalContext);
  
    function myFunctione() {
        var dots = document.getElementById("dotse");
        var moreText = document.getElementById("moree");
        var btnText = document.getElementById("myBtne");
        console.log(btnText,"text")
        
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
          initial_value[1](false)
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "flex";
          initial_value[1](true)
        }
      }
  

    return (
        <>
        <div  className="section2_main" id='stops'>
         
           <div className="section2_components" id="section_component_left">

           <div><Cards title={"Greek Gods & Philosophers"} description={"Walk along the trilogy of buildings representing the Greek Gods and philosophers of Greece"} /></div>
           <div><Cards title={"Greek Gods & Philosophers"} description={"Walk along the trilogy of buildings representing the Greek Gods and philosophers of Greece"} /></div>
           <div><Cards title={"Greek Gods & Philosophers"} description={"Walk along the trilogy of buildings representing the Greek Gods and philosophers of Greece"} /></div>
           <div><Cards title={"Greek Gods & Philosophers"} description={"Walk along the trilogy of buildings representing the Greek Gods and philosophers of Greece"} /></div>
                
            <span id="dotse"></span>
            <div id="moree" style={{display:"none", }}>{Data.data.map((val)=><Cards title={val.title} description={val.description} />)}</div>

     
                                 
           </div>
           
             
         
         
           <div className="section2_components"  id="section_component_right">
                
                <Card className="right_card">

                    <h4 style={{color:"gray"}}>Book A Transfer</h4>

                    <InputTextField input_data="From (airport,port,address)" />
                    <InputTextField input_data="To (airport,port,address)" />
                    <InputTextField2 />

                </Card>
               
               
               
               
          </div>

        </div>

  
        <div className="btn-load">
            
           <div id="myBtnea"> <Button onClick={()=>{myFunctione()}} id="myBtne" style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >
            See More</Button>
            </div>
            </div>
    

</>
    )
}

export default Section2
