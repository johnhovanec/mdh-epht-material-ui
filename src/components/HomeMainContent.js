import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  alphaList: {
    // display: "flex",
    // flexDirection: 'column',
    // backgroundColor: "red",
  },
  ul_list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    backgroundColor: "red",
    // width: "100%",
    margin: "0",
    padding: "0",
    "& > *": {
      marginRight: "1.1%",
      textDecoration: "none"
    }
  },
  li_item: {
    // display: "block",
    // flex: "0 1 auto",
    listStyleType: "none"
  },
  cardHeader: {
    // display: "flex",
    // flexDirection: "row-reverse",
    // justifyContent: "flex-end",
    backgroundColor: "yellow",
    minWidth: 275
  },
  filterButtons: {
    display: "flex",
    backgroundColor: "lime",
    flexDirection: "row"
    // flexWrap: "no-wrap",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // "& > *": {
    //   margin: "1%"
    // }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: fade("#fff", 0.75),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.07)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

function HomeMainContent() {
  const alphaArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  function AlphaList() {
    return alphaArray.map((letter, index) => (
      <a href="/">
        <li key={index} className={classes.li_item}>
          {letter}
        </li>
      </a>
    ));
  }

  const classes = useStyles();

  return (
    <Card className={null} variant="outlined">
      <CardHeader
        action={
          <CardActions>
            <div className={classes.cardHeader}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
              >
                {/* Filter by Group buttons */}
                {/* <div className={classes.filterButtons}> */}
                <Grid
                  item
                  xs={3}
                  sm={3}
                  container
                  className={classes.filterButtons}
                >
                  <Grid
                    item
                    xs={12}
                    container
                    justify="flex-start"
                    direction="row"
                    flexWrap="nowrap"
                  >
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button size="small">All</Button>
                      <Button size="small">Health</Button>
                      <Button size="small">Environment</Button>
                    </ButtonGroup>
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button size="small">Popular</Button>
                      <Button size="small">Physical</Button>
                      <Button size="small">Social</Button>
                    </ButtonGroup>
                  </Grid>
                  {/* <Grid item xs={12} sm={3}>
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button size="small">Popular</Button>
                      <Button size="small">Physical</Button>
                      <Button size="small">Social</Button>
                    </ButtonGroup>
                  </Grid> */}
                </Grid>
                {/* </div> */}

                {/* Alpha selector */}
                <Grid item xs={10} sm={3} container flexWrap="nowrap">
                  {/* <div className={classes.alphaList}> */}
                  <ul className={classes.ul_list}>
                    <AlphaList />
                  </ul>
                  {/* </div> */}
                </Grid>

                {/* Search input */}
                <Grid item xs={12} sm={3}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </CardActions>
        }
        className={classes.cardHeader}
      />
      <CardContent>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid> */}
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=4</Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default HomeMainContent;
