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

const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <HeroUIProvider>
        <RouterProvider router={router}></RouterProvider>
      </HeroUIProvider>
    </>
  );
}

export default App;
