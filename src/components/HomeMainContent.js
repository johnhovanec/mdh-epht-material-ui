import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  ul_list: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    background: "#cacaca",
    margin: "0",
    padding: "0",
    "& > *": {
      margin: "2%",
      textDecoration: "none"
    }
  },
  li_item: {
    display: "block",
    flex: "0 1 auto",
    listStyleType: "none"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#eee"
  },
  filterButtons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > *": {
      margin: "1%"
    }
  },
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
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
    return alphaArray.map((letter) => (
      <a href="/">
        <li key={letter} className={classes.li_item}>
          {letter}
        </li>
      </a>
    ));
  }

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        action={
          <CardActions>
            <div className={classes.filterButtons}>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button>All</Button>
                <Button>Health</Button>
                <Button>Environment</Button>
              </ButtonGroup>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button>Popular</Button>
                <Button>Physical</Button>
                <Button>Social</Button>
              </ButtonGroup>
            </div>

            <Typography color="textSecondary">
              <ul className={classes.ul_list}>
                <AlphaList />
              </ul>
            </Typography>

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
          </CardActions>
        }
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HomeMainContent;
