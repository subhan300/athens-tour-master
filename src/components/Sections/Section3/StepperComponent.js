import React ,{useEffect,useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Data from "../Section2/data.json"
import {GlobalContext} from "../../GlobalContext/GlobalContext"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(3),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Meeting Point', 'Greek Gods & Philosophers', 'All About Hermes'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
             .`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              `;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const {initial_value}=useContext(GlobalContext);
  console.log(initial_value[0],"stppercomponnet")
  // function myFunctionf() {
  //   var dots = document.getElementById("dotsf");
  //   var moreText = document.getElementById("moref");
  //   // var btnText = document.getElementById("myBtnf");
  //   // console.log(btnText,"text")
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     // btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     // btnText.innerHTML = "Read less";
  //     moreText.style.display = "flex";
  //   }
  // }


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {/* {steps.map((label, index) => ( */}
          <Step>
          <StepLabel>
Meeting Point</StepLabel>
            <StepContent>
            <div>Panepistimo- Athen</div>
            </StepContent>
          </Step>
          <Step >
        
        <StepLabel >
        
        <div style={{marginTop:"30px"}}> 
        <div style={{fontSize:"21px"}}>   All About Hermes
        </div>
        
    <div style={{fontSize:"16px"}}> Stroll along the former street of the stock market and hear the story of God of commerce </div>
        
        
        
        
        </div>
        
        </StepLabel>
        
        </Step>
        <Step >
        
        <StepLabel >
        
        <div style={{marginTop:"30px"}}> 
        <div style={{fontSize:"21px"}}>   
        All About Hermes
        </div>
        
    <div style={{fontSize:"16px"}}>Stroll along the former street of the stock market and hear the story of God of commerce </div>
        
        
        
        
        </div>
        
        </StepLabel>
        
        </Step>

          {
        initial_value[0]?Data.data.map(val=>{return(
          <Step >
        
          <StepLabel >
          
          <div style={{marginTop:"30px"}}> 
          <div style={{fontSize:"21px"}}>   {val.title}
          </div>
          
      <div style={{fontSize:"16px"}}>  {val.description}</div>
          
          
          
          
          </div>
          
          </StepLabel>
          
          </Step>
      )}
      ) :null
          }

        
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}

