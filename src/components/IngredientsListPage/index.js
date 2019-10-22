import React from "react";
import Link from "@material-ui/core/Link";
import { Container, makeStyles } from "@material-ui/core";

import IngredientsTable from "./table";

const useStyles = makeStyles(theme => ({
    linkButton: {
        background: "rgb(159,65,152)",
        width: "600px",
        color: "white",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "30px",
        padding: "10px",
        boxShadow: "1px 2px 2px 1px #ccc",
        marginTop: "30px"
    },
    container: {
        direction: "row",
        justify: "center",
        justifyContent: "center"
    },
}));



export default function IngredientsPage() {

    const classes = useStyles();

    return (
        <>

            <IngredientsTable />
            <Container className={classes.container}>
                <Link className={classes.linkButton}>Place your order</Link>
            </Container>
        </>
    )
};

