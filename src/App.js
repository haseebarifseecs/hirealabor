import HomePage from "./Components/HomePage";
import BecomeaWorker from "./Components/BecomeaWorker";
import Description from "./Components/AddNewGig/Description";
import description from "./Components/Description";
import Profile from "./Components/Profile";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import { useState, useEffect, createContext } from "react";
import SignUp from "./Components/Singup";
import AddInfoPersonal from "./Components/AddInfoPersonal";
import AddInfoProfessional from "./Components/AddInfoProfessional";
import Pricing from "./Components/AddNewGig/Pricing";
import { auth } from "./services/firebase";
import Overview from "./Components/AddNewGig/Overview";
import Gallery from "./Components/AddNewGig/Gallery";
import DashBoard from "./Components/DashBoard";
import Grid from "./Components/Grid";
import Booking from "./Components/Booking";
import PrivateRoute from "./router/Privateroute";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckOut from "./Components/CheckOut"
function App() {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState({
          authenticated: true,
          initializing: false,
        });
        localStorage.setItem("userId", user.uid);
        localStorage.setItem("username", auth.currentUser.displayName);

        // localStorage.setItem("username")
      } else {
        setAuthState({
          authenticated: false,
          initializing: false,
        });
        localStorage.setItem("userId", null);
      }
    });
  }, [setAuthState]);
  if (authentication.initializing) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/becomeaworker" component={BecomeaWorker} />
      <Route path="/description" component={description} />
      <Route path="/profile" component={Profile} />
      <Route path="/searchResults" component={Cards} />
      <Route path="/search" component={Search} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/checkout" component={CheckOut} />

      <PrivateRoute
        path="/addinfopersonal"
        isAuthenticated={authentication}
        component={AddInfoPersonal}
      />
      <PrivateRoute
        isAuthenticated={authentication}
        path="/addinfoprofessional"
        component={AddInfoProfessional}
      />
      <PrivateRoute
        path="/gig/overview"
        isAuthenticated={authentication}
        component={Overview}
      />
      <PrivateRoute
        path="/gig/pricing"
        isAuthenticated={authentication}
        component={Pricing}
      />
      <PrivateRoute
        path="/gig/Description"
        isAuthenticated={authentication}
        component={Description}
      />
      <PrivateRoute
        path="/gig/Gallery"
        isAuthenticated={authentication}
        component={Gallery}
      />
      <PrivateRoute
        path="/dashboard"
        isAuthenticated={authentication}
        component={DashBoard}
      />
      {/* <Route path="/choose" component={Grid}/> */}
      <PrivateRoute
        path="/choose"
        isAuthenticated={authentication}
        component={Grid}
      />
      <PrivateRoute
        path="/booking"
        isAuthenticated={authentication}
        component={Booking}
      />
    </BrowserRouter>
  );
}

export default App;
