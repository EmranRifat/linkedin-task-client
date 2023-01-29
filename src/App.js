import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./Pages/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: () =>
        fetch("https://linkdin-task-server-emranrifat.vercel.app/users"),
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
