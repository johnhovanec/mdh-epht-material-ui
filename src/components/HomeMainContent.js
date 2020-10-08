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
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// This would be coming in as props from the parent; mocked-up locally for now
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
    // width: "250px",
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
    backgroundColor: fade("#fff", 0.55),
    "&:hover": {
      backgroundColor: fade("#fff", 1)
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
  clearIcon: {
    paddingLeft: theme.spacing(1),
    height: "100%",
    position: "absolute",
    display: "inline-flex",
    alignItems: "space-between",
    justifyContent: "flex-start"
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
  const [buttons, setButtons] = React.useState(() => ["all"]);
  const [searchTerm, setSearchTerm] = React.useState("");

  // Leaving this method in since I think filtering will grow more complex
  const handleFilters = (event, newFilters) => {};

  const handleButtons = (event, selectedButtons) => {
    // If another filter is selected and 'all' is already selected we want to remove 'all'
    if (selectedButtons.includes("all") && buttons.includes("all")) {
      setButtons(selectedButtons.filter((x) => x !== "all"));
      setFilters(selectedButtons.filter((x) => x !== "all"));
      // If 'all' is clicked but not already selected that removes the other filters
    } else if (selectedButtons.includes("all") && !buttons.includes("all")) {
      setButtons(["all"]);
      setFilters(["all", "health", "environment", "social", "physical"]);
    }
    // Setting filters that don't involve all
    else {
      setButtons(selectedButtons);
      setFilters(selectedButtons);
    }
  };

  const handleSearch = (event) => {
    console.log("In search, event value: ", event.target.value);
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchResult = (items) => {
    // Return starts with for a single letter search term
    if (searchTerm.length === 0) {
      return items;
    } else if (searchTerm.length === 1) {
      return items.filter((x) =>
        x.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    } else {
      return filteredItems.filter((x) =>
        x.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const handleSearchCancel = () => {
    console.log("In search cancel");
    setSearchTerm("");
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
  const filteredItems = itemsList.filter((item) =>
    item.group.includes(filters.find((filter) => filter.includes(item.group)))
  );
  console.log("This state:", filters, " items count: ", filteredItems.length);

  const itemsToDisplay = handleSearchResult(filteredItems);

  console.log("searchTerm: ", searchTerm, " searchItems: ", itemsToDisplay);

  return (
    <Grid container spacing={2} className={classes.mainContent}>
      <Grid item xs={12} sm={8}>
        {/* Filter by Group buttons */}
        <ToggleButtonGroup
          value={buttons}
          onChange={handleButtons}
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

      <Grid item xs={12} sm={4}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="small" color="action" />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={handleSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
          />
          <div className={classes.clearIcon}>
            <IconButton
              color="primary"
              aria-label="clear search"
              onClick={handleSearchCancel}
              component="span"
            >
              <ClearIcon fontSize="small" color="action" />
            </IconButton>
          </div>
        </div>
      </Grid>

      {/* Three Column Items List */}
      <Grid item>
        <ul className={classes.ulList}>
          <ItemsList items={itemsToDisplay} />
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeMainContent;
