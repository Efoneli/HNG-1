import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact";
import './main.css';
import Home from "./pages/Home";
import Layouts from "./components/layouts/Layouts";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={ <Layouts /> }>
       <Route index element={<Home />} />
      
      <Route path="/contact" element={<Contact />} />

     </Route>
      )
    );
    return <RouterProvider router={router} />;
}

export default App;