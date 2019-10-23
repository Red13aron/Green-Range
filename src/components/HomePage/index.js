import React, { useEffect, useState } from "react";
import MealCard from "../MealOptions/Card";
import { Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import "./style.css"

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
    // const [recipes, setRecipes] = useState([]);

    // function getRecipes() {
    //     API.getRecipes(new Date("10/21/2019"), new Date("10/25/2019")).then(
    //         function (res) {
    //             setRecipes(res.data);
    //         }
    //     );
    // }

    // useEffect(() => getRecipes());

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.header}>Your recipes for this weeks dinners!{<br></br>}Click on the arrow below to find easy to follow instructions</Typography>
            <Container className={classes.container}>
                {/* {recipes.map(recipe => ( */}
                    {/* <MealCard recipe={recipe} key={recipe._id} />
                ))} */}
            </Container>
        </>
    );
}
