import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./router/Router";

function App() {
  /*
  Todos:
  1. user_interaction Toast Notification
  2. finalize photos
  */
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
