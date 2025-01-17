import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import imageLogo from "../images/green-range-logo12.8.png";
import "./style.css";
import { Card, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Didact Gothic",
    width: "250px",
    alignItems: "center"
  },
  subtitle: {
    fontSize: "18px",
    padding: "10px",
    fontStyle: "italic",
    fontFamily: "Didact Gothic"
  },
  p: {
    fontSize: "15px",
    fontStyle: "italic",
    fontFamily: "Didact Gothic"
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Didact Gothic",
    textAlign: "center",
    color: "darkorchid"
  },
  card: {
    minWidth: "210px",
    textAlign: "center"
  }
}));

export default function Testimonials() {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.title}>
        What our customers are saying about us!
      </Typography>
      <Container className="container-card">
        <Card className="comment-card">
          <Paper className={classes.root}>
            <img src={imageLogo} alt="Logo" style={{ width: 30, height: 30 }} />
            <Typography variant="h6" className={classes.subtitle}>
              "Green Range is on my side every week. It's simple, easy to use
              and the meal suggestions are amazing.”
            </Typography>

            <Typography component="p" className={classes.p}>
              Emmanuelle Smith - Minneapolis
            </Typography>
          </Paper>
        </Card>
        <Card className="comment-card">
          <Paper className={classes.root}>
            <img src={imageLogo} alt="Logo" style={{ width: 30, height: 30 }} />
            <Typography variant="h6" className={classes.subtitle}>
              "I love to come home and start to cooking with my husband. Green
              Range made our dinners more enjoyable.”
            </Typography>
            <Typography component="p" className={classes.p}>
              Cassia Johnson - Duluth
            </Typography>
          </Paper>
        </Card>
        <Card className="comment-card">
          <Paper className={classes.root}>
            <img src={imageLogo} alt="Logo" style={{ width: 30, height: 30 }} />
            <Typography variant="h6" className={classes.subtitle}>
              "I really don't have time for shopping at groceries stores. With
              Green Range I have fresh ingredients so quickly and I make less
              garbage than I've imagined.”
            </Typography>
            <Typography component="p" className={classes.p}>
              Peter Marshals - Fargo
            </Typography>
          </Paper>
        </Card>
        <Card className="comment-card">
          <Paper className={classes.root}>
            <img src={imageLogo} alt="Logo" style={{ width: 30, height: 30 }} />
            <Typography variant="h6" className={classes.subtitle}>
              "My favorite thing in Green Range are the freshness of the
              ingredients and how fast is the delivery.”
            </Typography>

            <Typography component="p" className={classes.p}>
              Richard Swanson - Eagan
            </Typography>
          </Paper>
        </Card>
      </Container>
    </Container>
  );
}
