import React from "react";
import { Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    margin: 4,
    height: 330,
  },
  cardInner: {
    marginTop: "40%",
    marginBottom: "40%",
  },
}));

export const NewModelConfig = () => {
  const classes = useStyles();

  return (
    <div>
        <Grid item md={4}>
        <Link to="/library">
          <Card className={classes.card}>
            <CardContent className={classes.cardInner}>
              <AddIcon style={{ fontSize: 50 }} />
            </CardContent>
          </Card>
        </Link>
        </Grid>
    </div>
  );
};

export default NewModelConfig;
