import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../containers/LandingPage";

const withRoutes = (App) => (props) => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    }
  ]);

  return (
    <RouterProvider router={routes}>
      <App {...props}  />
    </RouterProvider>
  );
};

export default withRoutes;