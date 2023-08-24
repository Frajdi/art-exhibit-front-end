import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "../containers/LandingPage";
import ArtistsPage from "../containers/ArtistsPage";

const withRoutes = (App) => (props) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LandingPage />
        </motion.div>
      ),
    },
    {
      path: "/artists",
      element: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ArtistsPage />
        </motion.div>
      ),
    },
  ]);

  console.log(routes)

  return (
    <AnimatePresence>
      <RouterProvider router={routes}>
        <App {...props} />
      </RouterProvider>
    </AnimatePresence>
  );
};

export default withRoutes;
