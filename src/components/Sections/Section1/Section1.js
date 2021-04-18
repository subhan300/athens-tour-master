import React,{useState,useEffect} from 'react'
import "./Section1.css"
import $ from 'jquery';

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll

});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if(refElement.length > 0){
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu-center a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
    }
  });
}

function Section1() {
  // hs
    // const[New,setNew]=useState({matches: window.matchMedia("(max-width: 400px)").matches })
    const [show, handleShow] = useState(false);

  //   useEffect(()=>{
  //   const handler = e =>setNew({matches:e.matches});
  //   window.matchMedia("(max-width: 400px)").addListener(handler);
  // },[])

  const handleScroll = () => {
    const offset= window.scrollY;
    if (offset > 480) {
      handleShow(true);
    } 
    else {
      handleShow(false);
    }
  }

  useEffect(()=>{
      window.addEventListener("scroll",handleScroll);  
  },[])
  let navbarClasses= ['section1_menu'];
  if (show) {
    navbarClasses.push('scrolled')
  }


    return (
      <>

      
      <div className={navbarClasses.join(" ")} >
        <div id='menu-center' className="left_section1_menu" >
          <a href="#stops" className="s" ><span className="link_text">Stops</span></a>
          <a href="#about" className="s"><span className="link_text" >About</span></a>
          <a href="#reviews" className="s"><span className="link_text">Reviews</span></a>
          <a href="#questions" className="s"><span className="link_text">Questions</span></a>
        </div>
        <span className="section1_right" style={{color:"gray",fontWeight:"lighter",fontSize:"16px"}}>Share</span>
      </div>
        
      </>
      
    )
}

export default Section1
