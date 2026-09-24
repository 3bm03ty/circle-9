import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { HeroUIProvider } from "@heroui/react";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import ProtectedAuthRoute from "./protectedRoutes/ProtectedAuthRoute";
import CounterContextProvider from "./contexts/counterContext";
import AuthContextProvider from "./contexts/authContext";

const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: (
          <ProtectedAuthRoute>
            <SignUp />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "signin",
        element: (
          <ProtectedAuthRoute>
            <SignIn />
          </ProtectedAuthRoute>
        ),
      },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      {/* 3- Provide whole app with the auth data (isLoggedIn, setIsLoggedIn) */}
      <AuthContextProvider>
        <CounterContextProvider>
          <HeroUIProvider>
            <RouterProvider router={router}></RouterProvider>
          </HeroUIProvider>
        </CounterContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
