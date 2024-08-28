import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from '../src/pages/Layout/layout';
import CreateCourse from "./pages/CreateCourse/CreateCourse";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            {/* <Route index element={<SignUp />}></Route> */}
            <Route path="/" element={<Layout />}></Route>
            <Route path="/createcourse" element={<CreateCourse />}>
              {/* <Route path="/home" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/transactions" element={<Transactions />}></Route> */}
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
