import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                EPHT Landing Page Header
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Card>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                A - Z Content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Help
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  card: {
    height: "100%"
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "#eee"
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
