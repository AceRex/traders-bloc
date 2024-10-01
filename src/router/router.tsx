import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./protecteroute";

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
const KYB = lazy(() => import("../pages/kyb"));
// eslint-disable-next-line react-refresh/only-export-components
const Loading = lazy(() => import("../pages/loading"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/sign-up"
        element={
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/kyb"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <KYB />
            </Suspense>
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/invoice_submit"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <InvoiceSubmit />
            </Suspense>
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/milestone"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <Milestones />
            </Suspense>
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/funding_request"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <FundingRequest />
            </Suspense>
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/transaction_tracking"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <Transaction />
            </Suspense>
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          </ProtectedRoute>
        }
      />
    </>
  )
);
export default router;
