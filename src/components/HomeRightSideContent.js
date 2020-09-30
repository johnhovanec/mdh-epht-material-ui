import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  paragraph: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary
  }
}));

export default function RightMenu() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.paragraph}>
            Lead poisoning affects many children younger than 6 years old in
            Maryland. Lead is often a home health hazard that can harm a child’s
            brain, causing lifelong learning and behavior problems. The symptoms
            of lead poisoning are not always easy to detect, but its effects are
            long-lasting. While blood lead levels in children in Maryland have
            decreased over the years, there are still children newly exposed to
            lead every year. It is one of the most important environmental
            problems for children in Maryland.
            <section>
              <h6 className={classes.secondaryHeading}>Where Lead is Found:</h6>
              <ul>
                <li>
                  Chipping, peeling, flaking or deteriorating lead-based paint
                </li>
                <li>Certain foods and spices</li>
                <li>Toys, jewelry, cosmetics, and other consumer products</li>
                <li>Drinking water, from aging lead pipes or some fixtures</li>
                <li>Soil</li>
                <li>Certain jobs</li>
              </ul>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
