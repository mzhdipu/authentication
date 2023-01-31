// import logo from './logo.svg';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Root/Router/Router";

function App() {
  return (
    <div className="w-10/12 m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
