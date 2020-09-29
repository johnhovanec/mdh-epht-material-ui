import React from "react";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MDH EPHT Landing Page (Home)</h1>
      <div></div>
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Header from "./Header";
// import ErrorPage from "./ErrorPage";
// import Asthma from "./Asthma";
// import ChildhoodLead from "./ChildhoodLead";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

// // Params are placeholders in the URL that begin
// // with a colon, like the `:id` param defined in
// // the route in this example. A similar convention
// // is used for matching dynamic segments in other
// // popular web frameworks like Rails and Express.

// export const LandingPage = () => {
//   return (
//     <React.Fragment>
//       {/* <Header /> */}
//       <Router>
//         <div>
//           <h2>MDH EPHT Landing Page</h2>

//           <ul>
//             <li>
//               <Link to="/asthma">Asthma</Link>
//             </li>
//             <li>
//               <Link to="/childhoodlead">Childhood Lead</Link>
//             </li>
//             <li>
//               <Link to="/diabetes">Diabetes</Link>
//             </li>
//           </ul>

//           <Switch>
//             {/* <Route path="/:id" children={<Child />} /> */}
//             {/* <Route exact path="/childhoodlead" component={ChildhoodLead} /> */}
//             <Route path="/asthma">
//               <Asthma />
//             </Route>
//             <Route path="/childhoodlead">
//               <ChildhoodLead />
//             </Route>
//             <Route path="/diabetes">
//               <Diabetes />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </React.Fragment>
//   );
// };

// function Diabetes() {
//   return <h2>Diabetes</h2>;
// }
