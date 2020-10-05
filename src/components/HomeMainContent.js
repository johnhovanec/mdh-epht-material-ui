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
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  alphaList: {
    // display: "flex",
    // flexDirection: 'column',
    // backgroundColor: "red",
  },
  // ulList: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "flex-start",
  //   backgroundColor: "red",
  //   width: "33%",
  //   margin: "0",
  //   padding: "0",
  //   "& > *": {
  //     marginRight: "1.1%",
  //     textDecoration: "none"
  //   }
  // },
  ulList: {
    columns: "3 auto",
    "& > *": {
      textDecoration: "none"
    }
  },
  listItem: {
    listStyleType: "none"
  },
  cardHeader: {
    backgroundColor: "#eee"
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

  function ItemsList() {
    return itemsArray.map((item, index) => (
      <a href="/">
        <li key={index} className={classes.listItem}>
          {item}
        </li>
      </a>
    ));
  }

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.cardHeader}>
      <Grid item xs={12}>
        {/* Filter by Group buttons */}
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button size="small">All</Button>
          <Button size="small">Health</Button>
          <Button size="small">Environment</Button>
        </ButtonGroup>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button size="small">Popular</Button>
          <Button size="small">Physical</Button>
          <Button size="small">Social</Button>
        </ButtonGroup>
      </Grid>

      <Grid item xs={12}>
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

      {/* Three Column Items List */}
      <Grid item>
        <ul className={classes.ulList}>
          <ItemsList />
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeMainContent;

const itemsArray = [
  "A",
  "AIDS and HIV",
  "Air Quality",
  "Alcohol Abuse",
  "Asthma",
  "B",
  "Babies Born Healthy",
  "Back to School Vaccination Requirements",
  "C",
  "Cancer",
  "Chickenpox",
  "Cigarettes",
  "Climate Change",
  "Coronavirus ",
  "Critical Congenital Heart Disease Screening",
  "​D",
  "Developmental Disabilities Administration",
  "Diabetes",
  "Down Syndrome",
  "Drinking Water",
  "Drug Abuse",
  "E",
  "Environmental Health",
  "F",
  "Family Planning",
  "Flu (Influenza)",
  "Food Allergies",
  "G",
  "Genital Herpes",
  "Gonorrhea",
  "H",
  "Heart Disease",
  "Heat-Related Illness Prevention",
  "Hepatitis",
  "HIV/AIDS",
  "I",
  "Influenza",
  "Injury Prevention",
  "J",
  "Job Safety",
  "K",
  "Kawasaki Disease",
  "Kids in Safety Seats (KISS)",
  "L",
  "Lead",
  "Local Health Departments",
  "Lyme Disease",
  "M",
  "Medicaid",
  "Mental Health",
  "N",
  "Nutrition",
  "O",
  "Obesity",
  "Occupational Safety and Health",
  "Opioid Overdose Prevention",
  "P",
  "Pregnancy, Risk Monitoring",
  "R",
  "Radon",
  "Rape and Sexual Assault, Prevention",
  "Reproductive Health",
  "S",
  "Second-Hand Smoke",
  "Sexually Transmitted Infections",
  "Syphilis",
  "T",
  "Teen Pregnancy Prevention",
  "Tetanus ",
  "Tobacco",
  "Tuberculosis",
  "Typhoid Fever (PDF)",
  "V",
  "Vaccines for Children",
  "Vaping",
  "W",
  "WIC",
  "West Nile Virus",
  "Y",
  "Youth Camps",
  "Youth Smoking"
];
