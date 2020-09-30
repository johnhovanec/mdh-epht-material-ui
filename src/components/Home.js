import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import HomeRightSideContent from "./HomeRightSideContent";
import HomeMainContent from "./HomeMainContent";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Main Content */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                <HomeMainContent />
              </Paper>
            </Grid>

            {/* Right-hand Accordion */}
            <Grid item xs={12} md={4} lg={3}>
              <HomeRightSideContent />
            </Grid>

            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid> */}
          </Grid>
        </Container>
        {/* <Copyright /> */}
      </main>
    </div>
    // <div className={classes.root}>
    //   <Grid container fixed spacing={3}>
    //     <Grid item xs={12}>
    //       <Card>
    //         <CardContent className={classes.cardContent}>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             EPHT Landing Page Header
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>

    //   <Grid container direction="row" justify="center" alignItems="stretch">
    //     <Grid item xs={12} sm={6}>
    //       <Card>
    //         <CardContent className={null}>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             A - Z Content
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12} sm={2}>
    //     <Card>
    //       <CardContent className={null}>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Help
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </div>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
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
