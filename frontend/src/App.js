import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Initative from './pages/Initative';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/initiative", element: <Initative /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
