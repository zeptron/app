import React from "react";
import { Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    tertiary: green[500],
  },
  card: {
    width: 300,
    margin: 4,
  },
  media: {
    height: 140,
  },
  cardInner: {
    marginTop: "41%",
    marginBottom: "41%",
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export const NewModelConfig = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" justify="center" spacing={2}>
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
