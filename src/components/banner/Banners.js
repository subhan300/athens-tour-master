import React,{useEffect,useState} from 'react'
import "./Banner.css"
import Button from '@material-ui/core/Button';

function Banners() {
    useEffect(
        async()=>{
            const api=await fetch("api/backend/v1/order/orderbyadmin/431")
            const r=await api.json()
            console.log(r,"api")




    },[])
    return (
        <div className="banner">
             <div>
                 <p className="banner_text" data-aos="fade-left" style={{fontSize:"20px"}}>UP TO 6 STOPS</p>
                 <h1 className="banner_text" data-aos="fade-left"  >Athens By Night Tour</h1>
<p className="banner_text" style={{fontSize:"20px",fontWeight:"lighter"}}>Fall In Love With Athens On A Personalized Evening Ride <br></br> Of Its Famous Sites And Illuminated Landmarks</p>



             </div>
             <div>
                 <p className="banner_text">From</p>
                 <h1 className="banner_text">$ 130</h1>
                 <p className="banner_text">For 1-4 Persons</p>
                 <br>
                 </br>
                 <div  className="banner_text" style={{border:"1px solid white",width:"290px",display:"flex",justifyContent:"space-between",padding:"15px"}}>
                         <div style={{marginLeft:"2px"}}><img style={{width:"50px"}} src="data:image/png;base64,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"></img></div>   <div style={{alignSelf:"flex-end"}}>  we are rated Excelletent on<br></br>Tripadvisor 400+ reviews</div>
                 </div>
                 <br></br>
                 <div ><Button style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >See the route</Button></div>

             </div>
            
        </div>
    )
}

export default Banners