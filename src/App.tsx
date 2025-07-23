import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage"
import LogInPage from "./pages/LogInPage"
import CreateSessionPage from "./pages/CreateSessionPage"
import JoinSessionPage from "./pages/JoinSessionPage"
import SessionPage from "./pages/SessionPage"
import sessionLoader from "./pages/sessionLoader"


const router = createBrowserRouter([
  {
  path: '/',
  element: <Root />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: "/register",
      element: <RegistrationPage />
    },
    {
      path: "/login",
      element: <LogInPage />
    },
    {
      path: "session/:id",
      element: <SessionPage />,
      loader: sessionLoader,
    },
    {
      path: "/session/create",
      element: <CreateSessionPage />
    },
    {
      path: "/session/join",
      element: <JoinSessionPage />
    }
  ]}
])

function App() {



  return (
    <RouterProvider router={router} />
  )
}

export default App
