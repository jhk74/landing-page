import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DaylianCain from "../src/assets/Daylian_Cain.png"
import Rectangle from "../src/assets/Rectangle.png";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from "../src/assets/VectorGrid.png";
import Gradcap from "../src/assets/VectorgradCap.png";
// import Line from "../src/assets/VectorLine.png";
import Enroll from "../src/assets/VectorEnroll.png";
import Dots from "../src/assets/VectorDots.png";
import Trophy from "../src/assets/VectorTrophy.png";
import YSM from "../src/assets/YSM.png";
import BlackRectangle from "../src/assets/BlackRectangle.png";
import TradingHands from "../src/assets/TradingHands.png";

const useStyles = makeStyles((theme) => ({
  spacing: 10,
  appBar: {
    minHeight: 64,
    backgroundColor: "#fff",
  },
  bottomBar: {
    top: 'auto',
    backgroundColor: "#fff",
    bottom: 0
  },

  button: {
    maxWidth: 173, 
    maxHeight: 48,
    minWidth: 173, 
    minHeight: 48, 
    paddingTop: 7.5, 
    paddingBottom: 8.5,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(15),
  },
  title: {
    marginLeft: theme.spacing(15),
    color: "#12181D",
    fontSize: 24,
    fontWeight: 700,
    flexGrow: 1,
    paddingTop: 15.5,
    paddingBottom: 16.5,
  },
  footer: {
    marginLeft: theme.spacing(15),
    color: "#12181D",
    fontSize: 24,
    fontWeight: 700,
    paddingRight: 23.02,
    paddingTop: 15.5,
    paddingBottom: 16.5,
  }, 
  menu: {
    color: "#4A535A",
    fontSize: 16,
    fontWeight: 600,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: 21,
    paddingBottom: 21,
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DaylianCain})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  info: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    paddingTop: "45.08px",
    paddingBottom: "65px",
    display: "flex",
    position: "relative",
  },
  learn: {
    display: "flex",
    position: "relative",
    alightItems: "center",
    justifyContent: "center",
  },
  curriculum: {
    paddingTop: "64.04px",
    maxWidth: "1026px",

    flexDirection: "column",
  }

}));



function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography  className={classes.title}>
            DaylianCain
          </Typography>
          <Typography  className={classes.menu}>
            Overview
          </Typography>
          <Typography className={classes.menu}>
            Program
          </Typography>
          <Typography className={classes.menu}>
            Instructor
          </Typography>
          <Typography className={classes.menu}>
            Benefits
          </Typography>
          <Typography  className={classes.menu}>
            FAQs
          </Typography>
          <Button style={{fontFamily: "IBM Plex Sans", fontSize: '16px'}} variant="contained" color="primary" className={classes.button} >
            Enroll
          </Button>
        </Toolbar>
      </AppBar>

      <Box className={classes.header}>
        <Box style={{paddingTop: "43px", paddingRight: "1133px"}}>
            <img src={YSM} alt="ysm"></img>
        </Box>
        <Box style={{fontFamily: "IBM Plex Sans", fontSize: '48px', fontWeight: "600", paddingBottom: "12px", paddingTop: "125px"}}>
          DAYLIAN CAIN
        </Box>
        <Box style = {{paddingTop: "12px", paddingBottom: "12px"}}>
        <img src={Rectangle} alt="rectangle"></img>
        </Box>
        <Box style={{fontFamily: "IBM Plex Sans", fontSize: '16px', fontWeight: "600", paddingBottom: "45.81px", paddingTop: "12px"}}>
          Senior Lecturer in Negotiations, Leadership, and Ethics
        </Box>
      </Box>

      <Box className={classes.info}>
        <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingTop: "28.65px", paddingBottom: "8px"}}>
          4 WEEK PROGRAM
        </Box>
        <Box style={{fontFamily: "IBM Plex Sans", fontWeight: "600", fontSize: "40px", paddingBottom: "11px"}}>
          Mastering Negotiation
        </Box>
        <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "16px" }}>
          However good your life is, you can do better
        </Box>
        <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "16px" }}>
          Let the other side have your way in every exchange
        </Box>
        <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "16px", paddingBottom: "29.41px"}}>
          Enroll now to get ready to take on the world.
        </Box>
        <Button style={{fontFamily: "IBM Plex Sans", fontSize: '16px', fontWeight: "500", minWidth: "300px", minHeight: "56px", alignSelf: "center"}} variant="contained" color="primary" >
          Enroll Today
        </Button>
        <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingTop: "12.08px", paddingBottom: "18px"}}>
          *Limited seats available
        </Box>
        <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "12px"}}>
          🔑 Secure your spot in the coming cohort, as spots close up fast.
        </Box>
      </Box>

      <Box className={classes.stats}>
        <Box style={{paddingRight:"68px"}}>
          <Box style = {{fontFamily: "Inter", fontWeight: "500", fontSize: "14px", paddingLeft: "207px", paddingBottom: "9px", color: "#F24462"}}>
            <img src={Gradcap} alt="gradcap"></img> COMPLETION TIME
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingLeft: "230.89px", paddingBottom: "10px"}}>
            4 weeks
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "14px", paddingLeft: "230.89px", textDecorationLine: "underline"}}>
            See curriculum
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem/>
        <Box style={{paddingLeft: "27px", paddingRight: "38.07px"}}>
          <Box style = {{fontFamily: "Inter", fontWeight: "500", fontSize: "14px", paddingLeft: "27px", paddingBottom: "9px", color: "#F24462"}}>
            <img src={Enroll} alt="enroll"></img> ENROLL BY
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingLeft: "49.93px", paddingBottom: "10px"}}>
            May 31, 2021
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "14px", paddingLeft: "49.93px", textDecorationLine: "underline"}}>
            See more
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem/>
        <Box style={{paddingLeft: "26.82px", paddingRight: "54.07px"}}>
          <Box style = {{fontFamily: "Inter", fontWeight: "500", fontSize: "14px", paddingLeft: "27px", paddingBottom: "9px", color: "#F24462"}}>
            <img src={Grid} alt="grid"></img> AVAIALABLE STUDENTS
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingLeft: "49.93px", paddingBottom: "10px"}}>
            100
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "14px", paddingLeft: "49.93px", textDecorationLine: "underline"}}>
            See more
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem/>
        <Box style={{paddingLeft: "27.35px", paddingRight: "41px"}}>
          <Box style = {{fontFamily: "Inter", fontWeight: "500", fontSize: "14px", paddingLeft: "27px", paddingBottom: "9px", color: "#F24462"}}>
            <img src={Dots} alt="dots"></img> LIVESTREAM STATS
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingLeft: "50px", paddingBottom: "10px"}}>
            2,000
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "14px", paddingLeft: "50px", textDecorationLine: "underline"}}>
            See more
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem/>
        <Box style={{paddingLeft: "27px"}}>
          <Box style = {{fontFamily: "Inter", fontWeight: "500", fontSize: "14px", paddingLeft: "27px", paddingBottom: "9px", color: "#F24462"}}>
            <img src={Trophy} alt="trophy"></img> REWARDS
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "500", fontSize: "16px", paddingLeft: "50px", paddingBottom: "10px"}}>
            5
          </Box>
          <Box style={{fontFamily: "Inter", fontWeight: "400", fontSize: "14px", paddingLeft: "50px", textDecorationLine: "underline"}}>
            See more
          </Box>
        </Box>
      </Box>
      
      <Divider orientation="horizontal" />
      <Box className={classes.learn}>
        <Box style={{fontFamily: "IBM Plex Sans", fontSize: '24px', fontWeight: "500", paddingTop: "23px", paddingBottom: "29.61px"}}>
          WHAT YOU WILL LEARN
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Container className={classes.curriculum}>
        {/* <Typography style={{fontFamily: "IBM Plex Sans", fontSize: '14px', fontWeight: "500", paddingTop: "28.75px", paddingLeft: "74.86px", }}>
          CURRICULUM
        </Typography> */}
        <img src={BlackRectangle} alt="blackrectangle" style={{paddingTop: "22.5px"}}></img>
        <img src={TradingHands} alt="tradinghands" style={{paddingLeft: "657.89px"}}></img>
        <Typography style={{fontFamily: "IBM Plex Sans", fontSize: '24px', fontWeight: '400', paddingLeft: "75px", paddingTop: "21px"}}>
          Negotiation 101
        </Typography>
      </Container>

      <AppBar className={classes.bottomBar} position="sticky">
        <Toolbar>
          <Typography className={classes.footer}>
            Negotiating confidently
          </Typography>
          <img src={Grid} alt="grid"></img>
          <Typography style={{paddingLeft: "9.74px", fontSize: "14px", fontFamily: "Inter", color: "#F24462", paddingRight: "10px"}}>
            AVAILABLE SEATS
          </Typography>
          <Typography style={{fontSize: "16px", fontFamily: "Inter", color: "#12181D", flexGrow: "1"}}>
            • 100
          </Typography>
          <Button style={{fontFamily: "IBM Plex Sans", fontSize: '16px', fontWeight: "500", minWidth: "300px", minHeight: "56px", marginRight: "150px"}} variant="contained" color="primary" >
          Enroll Today
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
