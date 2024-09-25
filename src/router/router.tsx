import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../pages/loading";
import KYB from "../pages/kyb";
import InvoiceSubmit from "../pages/invoiceSubmit";
import Milestones from "../pages/milestones";
import FundingRequest from "../pages/fundingRequest";
import Transaction from "../pages/transaction";
import Profile from "../pages/profile";
import Dashboard from "../pages/dashboard";

const SignUp = lazy(() => import("../pages/signup"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Dashboard />
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
      />{" "}
      <Route
        path="/invoice_submit"
        element={
          <Suspense fallback={<Loading />}>
            <InvoiceSubmit />
          </Suspense>
        }
      />{" "}
      <Route
        path="/milestone"
        element={
          <Suspense fallback={<Loading />}>
            <Milestones />
          </Suspense>
        }
      />{" "}
      <Route
        path="/funding_request"
        element={
          <Suspense fallback={<Loading />}>
            <FundingRequest />
          </Suspense>
        }
      />{" "}
      <Route
        path="/transaction_tracking"
        element={
          <Suspense fallback={<Loading />}>
            <Transaction />
          </Suspense>
        }
      />{" "}
      <Route
        path="/profile"
        element={
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        }
      />
    </>
  )
);
export default router;
