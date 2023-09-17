import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./containers/LandingPage";
import ArtistsPage from "./containers/ArtistsPage";
import CategoryPage from "./containers/CategoryPage";
import Settings from "./containers/Settings";
import withRouteAnimation from "./animationUtils/RouteAnimation";
import CommunityPage from "./containers/CommunityPage";
import PortofolioPage from "./containers/PortofolioPage";
import Themes from "./comonents/portofolioCreatePage/Themes";
import CurrentTheme from "./comonents/portofolioCreatePage/CurrentTheme";
import EditPortofolio from "./comonents/portofolioCreatePage/EditPortofolio";
import PortofolioView from "./comonents/portofolioCreatePage/PortofolioView";
import Collcetion from "./containers/Collcetion";
import { useEffect } from "react";

const AnimatedLandingPage = withRouteAnimation(LandingPage);
const AnimatedArtistsPage = withRouteAnimation(ArtistsPage);
const AnimatedCategoryPage = withRouteAnimation(CategoryPage);
const AnimatedSettings = withRouteAnimation(Settings)
const AnimatedCommunityPage = withRouteAnimation(CommunityPage)
const AnimatedPortofolioPage = withRouteAnimation(PortofolioPage)
const AnimatedCollcetion = withRouteAnimation(Collcetion)
const AnimatedThemes = withRouteAnimation(Themes)
const AnimatedCurrentTheme = withRouteAnimation(CurrentTheme)
const AnimatedEditPortofolio = withRouteAnimation(EditPortofolio)
const AnimatedPortofolioView = withRouteAnimation(PortofolioView)

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedLandingPage />} />
        <Route path="/artists" element={<AnimatedArtistsPage />} />
        <Route path="/category" element={<AnimatedCategoryPage />} />
        <Route path="/settings" element={<AnimatedSettings />} />
        <Route path="/community" element={<AnimatedCommunityPage />} />
        <Route path="/portofolio" element={<AnimatedPortofolioPage />} />
        <Route path="/collection" element={<AnimatedCollcetion />} />
        <Route path="/portofolio-theme-pick" element={<AnimatedThemes />} />
        <Route path="/portofolio-create/:theme" element={<AnimatedCurrentTheme />} />
        <Route path="/portofolio-edit" element={<AnimatedEditPortofolio />} />
        <Route path="/view/:artist/:id" element={<AnimatedPortofolioView />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // Prevent the default context menu behavior
    };

    // Attach the event listener to the document
    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
