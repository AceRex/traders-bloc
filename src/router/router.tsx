import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../pages/loading";
import KYB from "../pages/kyb";

const SignUp = lazy(() => import("../pages/signup"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/kyb"
        element={
          <Suspense fallback={<Loading />}>
            <KYB />
          </Suspense>
        }
      />
    </>
  )
);
export default router;
