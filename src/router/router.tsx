import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SignUp = lazy(() => import("../pages/signup"));
// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = lazy(() => import("../pages/dashboard"));
// eslint-disable-next-line react-refresh/only-export-components
const Profile = lazy(() => import("../pages/profile"));
// eslint-disable-next-line react-refresh/only-export-components
const Transaction = lazy(() => import("../pages/transaction"));
// eslint-disable-next-line react-refresh/only-export-components
const FundingRequest = lazy(() => import("../pages/fundingRequest"));
// eslint-disable-next-line react-refresh/only-export-components
const Milestones = lazy(() => import("../pages/milestones"));
// eslint-disable-next-line react-refresh/only-export-components
const InvoiceSubmit = lazy(() => import("../pages/invoiceSubmit"));
// eslint-disable-next-line react-refresh/only-export-components
const KYB = lazy(() => import("../pages/../pages/kyb"));
// eslint-disable-next-line react-refresh/only-export-components
const Loading = lazy(() => import("../pages/loading"));

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
        path="/sign-up"
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
