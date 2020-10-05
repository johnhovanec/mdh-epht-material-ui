import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import HomeRightSideContent from "./HomeRightSideContent";
import HomeMainContent from "./HomeMainContent";

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <HomeMainContent />
        </Grid>

        {/* Right-side content */}
        <Grid item xs={12} md={4}>
          <HomeRightSideContent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {},
  appBarSpacer: theme.mixins.toolbar,
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
