import React, { useEffect, useState } from "react";
import RecipeCard from "../HomePage/Card";
import { Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css"

const useStyles = makeStyles(theme => ({
    container: {
        direction: "row",
        justify: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center",
        marginTop: "50px",
    },
    linkContainer: {
        justifyContent: "center"
    },
    linkButton: {
        background: "rgb(159,65,152)",
        color: "white",
        height: "40px",
        minWidth: "400px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "10px",
        marginTop: "120px",
        marginBottom: "20px",
        fontSize: "30px",
        padding: "10px",
        boxShadow: "1px 2px 2px 1px #ccc"
    }
}));

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    function getRecipes() {
        API.getRecipes(new Date("10/21/2019"), new Date("10/25/2019")).then(
            function (res) {
                setRecipes(res.data);
            }
        );
    }

    useEffect(() => getRecipes());

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.header}>Time to choose your meals for next week</Typography>
            <Container className={classes.linkContainer}>
                <Link
                    to="/home"
                    className={classes.linkButton}>
                    Option 1</Link>
            </Container>
            <Container className={classes.container}>
                {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                ))}
            </Container>

            <Container className={classes.linkContainer}>
                <Link
                    to="/home"
                    className={classes.linkButton}>
                    Option 2</Link>
            </Container>
            <Container className={classes.container}>
                {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                ))}
            </Container>

            <Container className={classes.linkContainer}>
                <Link
                    to="/home"
                    className={classes.linkButton}>
                    Option 3</Link>
            </Container>
            <Container className={classes.container}>
                {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                ))}
            </Container>

        </>
    );
}
