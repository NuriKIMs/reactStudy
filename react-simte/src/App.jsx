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
  // const [count, setCount] = useState(0)

  return <RouterProvider router={routes} />;
}

export default App;
