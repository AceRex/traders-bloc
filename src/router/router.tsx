import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../pages/loading";

const Signup = lazy(() => import("../pages/signup"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <Signup />
        </Suspense>
      }
    />
  )
);
export default router;
