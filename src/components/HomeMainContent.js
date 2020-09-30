import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  ulList: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "100%",
    background: "#cacaca",
    margin: "0",
    padding: "0"
  },
  liItem: {
    display: "block",
    flex: "0 0 auto",
    listStyleType: "none",
    background: "#red"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  cardHeader: {
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
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

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
      <li key={letter} className={classes.liItem}>
        {letter}
      </li>
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
              <ul className={classes.ulList}>
                <AlphaList />
              </ul>
            </Typography>
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
