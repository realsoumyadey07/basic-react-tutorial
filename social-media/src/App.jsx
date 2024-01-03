import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="d-flex content">
        <Sidebar />
        <div className="main-content">
          <CreatePost />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
