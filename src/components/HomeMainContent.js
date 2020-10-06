import React, { useState } from "react";
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
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

let itemsList = [
  {
    name: "A",
    group: "health"
  },
  {
    name: "AIDS and HIV",
    group: "health"
  },
  {
    name: "Air Quality",
    group: "environment"
  },
  {
    name: "Alcohol Abuse",
    group: "health"
  },
  {
    name: "Asthma",
    group: "health"
  },
  {
    name: "B",
    group: "health"
  },
  {
    name: "Babies Born Healthy",
    group: "health"
  },
  {
    name: "Back to School Vaccination Requirements",
    group: "health"
  },
  {
    name: "C",
    group: "health"
  },
  {
    name: "Cancer",
    group: "health"
  },
  {
    name: "Chickenpox",
    group: "health"
  },
  {
    name: "Cigarettes",
    group: "health"
  },
  {
    name: "Climate Change",
    group: "environment"
  },
  {
    name: "Coronavirus ",
    group: "health"
  },
  {
    name: "Critical Congenital Heart Disease Screening",
    group: "health"
  },
  {
    name: "​D",
    group: "health"
  },
  {
    name: "Developmental Disabilities Administration",
    group: "health"
  },
  {
    name: "Diabetes",
    group: "health"
  },
  {
    name: "Down Syndrome",
    group: "health"
  },
  {
    name: "Drinking Water",
    group: "health"
  },
  {
    name: "Drug Abuse",
    group: "health"
  },
  {
    name: "E",
    group: "health"
  },
  {
    name: "Environmental Health",
    group: "health"
  },
  {
    name: "F",
    group: "health"
  },
  {
    name: "Family Planning",
    group: "health"
  },
  {
    name: "Flu (Influenza)",
    group: "health"
  },
  {
    name: "Food Allergies",
    group: "health"
  },
  {
    name: "G",
    group: "health"
  },
  {
    name: "Genital Herpes",
    group: "health"
  },
  {
    name: "Gonorrhea",
    group: "health"
  },
  {
    name: "H",
    group: "health"
  },
  {
    name: "Heart Disease",
    group: "health"
  },
  {
    name: "Heat-Related Illness Prevention",
    group: "health"
  },
  {
    name: "Hepatitis",
    group: "health"
  },
  {
    name: "HIV/AIDS",
    group: "health"
  },
  {
    name: "I",
    group: "health"
  },
  {
    name: "Influenza",
    group: "health"
  },
  {
    name: "Injury Prevention",
    group: "health"
  },
  {
    name: "J",
    group: "health"
  },
  {
    name: "Job Safety",
    group: "physical"
  },
  {
    name: "K",
    group: "health"
  },
  {
    name: "Kawasaki Disease",
    group: "health"
  },
  {
    name: "Kids in Safety Seats (KISS)",
    group: "health"
  },
  {
    name: "L",
    group: "health"
  },
  {
    name: "Lead",
    group: "health"
  },
  {
    name: "Local Health Departments",
    group: "social"
  },
  {
    name: "Lyme Disease",
    group: "health"
  },
  {
    name: "M",
    group: "health"
  },
  {
    name: "Medicaid",
    group: "health"
  },
  {
    name: "Mental Health",
    group: "health"
  },
  {
    name: "N",
    group: "health"
  },
  {
    name: "Nutrition",
    group: "health"
  },
  {
    name: "O",
    group: "health"
  },
  {
    name: "Obesity",
    group: "health"
  },
  {
    name: "Occupational Safety and Health",
    group: "health"
  },
  {
    name: "Opioid Overdose Prevention",
    group: "health"
  },
  {
    name: "P",
    group: "health"
  },
  {
    name: "Pregnancy, Risk Monitoring",
    group: "health"
  },
  {
    name: "R",
    group: "health"
  },
  {
    name: "Radon",
    group: "health"
  },
  {
    name: "Rape and Sexual Assault, Prevention",
    group: "health"
  },
  {
    name: "Reproductive Health",
    group: "health"
  },
  {
    name: "S",
    group: "health"
  },
  {
    name: "Second-Hand Smoke",
    group: "health"
  },
  {
    name: "Sexually Transmitted Infections",
    group: "health"
  },
  {
    name: "Syphilis",
    group: "health"
  },
  {
    name: "T",
    group: "health"
  },
  {
    name: "Teen Pregnancy Prevention",
    group: "health"
  },
  {
    name: "Tetanus ",
    group: "health"
  },
  {
    name: "Tobacco",
    group: "health"
  },
  {
    name: "Tuberculosis",
    group: "health"
  },
  {
    name: "Typhoid Fever (PDF)",
    group: "health"
  },
  {
    name: "V",
    group: "health"
  },
  {
    name: "Vaccines for Children",
    group: "health"
  },
  {
    name: "Vaping",
    group: "health"
  },
  {
    name: "W",
    group: "health"
  },
  {
    name: "WIC",
    group: "health"
  },
  {
    name: "West Nile Virus",
    group: "health"
  },
  {
    name: "Y",
    group: "health"
  },
  {
    name: "Youth Camps",
    group: "social"
  },
  {
    name: "Youth Smoking",
    group: "health"
  }
];

const useStyles = makeStyles((theme) => ({
  mainContent: {
    minWidth: 275,
    backgroundColor: "#eee"
  },
  ulList: {
    columns: "3 auto",
    "@media (max-width: 480px)": {
      columns: "2 auto"
    },
    "& > *": {
      textDecoration: "none"
    }
  },
  listItem: {
    listStyleType: "none"
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
  const [filters, setFilters] = React.useState(() => [
    "all",
    "health",
    "environment",
    "social",
    "physical"
  ]);
  let filteredItems = [...itemsList];

  const handleFilter = (event, newFilters) => {
    console.log("New Filters: ", newFilters);

    if (event.currentTarget.value === "all") {
      // If All if previously selected: ie we want all filters off
      if (filters.includes("all")) {
        setFilters([]);
        // If All if not previously selected: ie we want all filters on
      } else {
        setFilters(["all", "health", "environment", "social", "physical"]);
      }
      // If some other button besides All is selected
    } else {
      // Want to exlude All when other filters are selected
      setFilters(newFilters.filter((x) => x !== "all"));
    }
  };

  function ItemsList(props) {
    return props.items.map((item, index) => (
      <a href="/">
        <li key={item.name} className={classes.listItem}>
          {item.name}
        </li>
      </a>
    ));
  }

  const classes = useStyles();
  filteredItems = filters
    ? itemsList.filter((item) =>
        item.group.includes(
          filters.find((filter) => filter.includes(item.group))
        )
      )
    : itemsList;
  console.log("This state:", filters, " items count: ", filteredItems.length);
  return (
    <Grid container spacing={2} className={classes.mainContent}>
      <Grid item xs={12}>
        {/* Filter by Group buttons */}
        <ToggleButtonGroup
          value={filters}
          onChange={handleFilter}
          aria-label="text formatting"
          color="primary"
          size="small"
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="health" aria-label="health">
            Health
          </ToggleButton>
          <ToggleButton value="environment" aria-label="environment">
            Environment
          </ToggleButton>
          <ToggleButton value="physical" aria-label="physical">
            Physical
          </ToggleButton>
          <ToggleButton value="social" aria-label="social">
            Social
          </ToggleButton>
        </ToggleButtonGroup>
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
          <ItemsList items={filteredItems} />
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeMainContent;
