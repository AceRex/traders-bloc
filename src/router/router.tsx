import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signup from "../pages/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    //   <Route path="/" element={<Root />}>
    <Route path="/" element={<Signup />} />
    //   </Route>
  )
);
export default router;
