import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Subpage from "./routes/Subpage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/subpage",
    element: <Subpage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
