import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Fallback from "./pages/loading";

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
