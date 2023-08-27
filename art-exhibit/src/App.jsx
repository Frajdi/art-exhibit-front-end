import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./containers/LandingPage";
import ArtistsPage from "./containers/ArtistsPage";
import withRouteAnimation from "./animationUtils/RouteAnimation";

const AnimatedLandingPage = withRouteAnimation(LandingPage);
const AnimatedArtistsPage = withRouteAnimation(ArtistsPage);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedLandingPage />} />
        <Route path="/artists" element={<AnimatedArtistsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
