import React, {useState} from "react";
import "./App.css";
import SignIn from "../src/Components/Auth/SignIn";
import SignUp from "../src/Components/Auth/SignUp";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import QuestionsView from "../src/Components/question/QuestionsView";
import CodeEditorPage from "../src/Components/CodeEditor/CodeEditorPage";
import Navbar from "./Components/common/Navbar";
import './Components/Styles/Navbar.css'
function App() {
  const[showSidebar, setShowSidebar] = useState(false)
  return (
    <div>
      <div className={`sidebar-${showSidebar?'show':'hide'}`}>
        <div onClick={()=>setShowSidebar(!showSidebar)}>close</div>
        <div>nav links</div>
        <div></div>
    </div>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/allquestions" element={<QuestionsView />} />
        <Route
          path="/code_editor/:serialNo"
          element={<CodeEditorPage />}
        />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
