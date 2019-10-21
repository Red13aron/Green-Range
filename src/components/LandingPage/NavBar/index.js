import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./style.css";
import imageLogo from "../images/green-range-logo12.8.png";

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
    fontSize: "30px"
  },
  subtitle: {
    fontSize: "20px",
    padding: "20px"
  },
  navBar: {
    backgroundColor: "rgb(206,219,48)"
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
            Green Range
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            How it works
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Meal Plans
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            About us
          </Typography>
          <Button href="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
