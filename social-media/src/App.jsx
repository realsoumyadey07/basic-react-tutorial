import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
      <div className="app">
        <Navbar />
        <div className="d-flex content">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="main-content">
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
        </div>
      </div>
  );
}

export default App;
