import "./App.css";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import LoginForm from "./Pages/Components/loginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Pages/Components/NavBar";
// import Layout from "./Pages/Components/layout";
// import { Outlet } from "react-router"; // Import Outlet from "react-router"



function App() {
    return (
      <div className="App">
        <Router>
          {/* <NavBar /> Include the NavBar component */}
          <Routes>
            <Route exact path="/login" element={<LoginForm />} /> {/* Add this route */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search/:id" element={<SearchResult />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;