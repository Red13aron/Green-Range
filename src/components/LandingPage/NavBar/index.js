import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ButtonSignUp from "../../ButtonSignUp";
import imageLogo from "../images/green-range-logo12.8.png";
import "./style.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginCenter: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: "30px",
    fontFamily: "Chewy",
    color: "white",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "18px",
    padding: "20px",
    fontFamily: "Didact Gothic",
    textDecoration: "none",
    color: "white"
  },
  navBar: {
    backgroundColor: "rgb(206,219,48)",
    padding: "10px",
    textDecoration: "none",
    visited: "white"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <img src={imageLogo} alt="Logo" style={{ width: 70, height: 70 }} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.title} to="/">
              Green Range
            </Link>
          </Typography>
          <Typography
            href="/howitworks"
            variant="h6"
            className={classes.subtitle}
          >
            <Link className={classes.subtitle} to="/howitworks">
              {" "}
              How it works
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            <Link className={classes.subtitle} to="/plans">
              Meal Plans
            </Link>
          </Typography>
          <Typography href="/aboutus" variant="h6" className={classes.subtitle}>
            <Link className={classes.subtitle} to="/aboutus">
              About us
            </Link>
          </Typography>
          <ButtonSignUp href="/login"></ButtonSignUp>
        </Toolbar>
      </AppBar>
    </div>
  );
}
