import React, { useEffect, useState } from "react";
import RecipeCard from "../HomePage/Card";
import { Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import Plans from "./Plans";

const useStyles = makeStyles(theme => ({
  container: {
      direction: "row",
      justify: "center"
  },
  header: {
      fontSize: 40,
      color: "rgb(159,65,152)",
      textAlign: "center",
      marginTop: "30px",
  }
}));

export default function HomePage() {
  const [plans, setPlans] = useState([]);

  function getPlans() {
      API.getPlans(new Date("10/21/2019"), new Date("10/25/2019")).then(
          function (res) {
              setPlans(res.data);
          }
      );
  }

  useEffect(() => getPlans());

  const classes = useStyles();
  return (
    <>
    <Typography className={classes.header}></Typography>
    <Container className={classes.container}>
        {plans.map(plan => (
            <RecipeCard plan={plan} key={plan._id} />
        ))}
    </Container>
</>
  );
}
