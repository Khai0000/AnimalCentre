import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Initative from "./pages/Initative";
import Event from "./pages/Event";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import Partnership from "./pages/Partnership";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/initiatives", element: <Initative /> },
        {
          path: "/events",
          element: <Event />,
          children: [
            { path: "/events", element: <EventPage /> },
            { path: "/events/:id", element: <EventDetailPage /> },
          ],
        },
        { path: "/partnerships", element: <Partnership/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
