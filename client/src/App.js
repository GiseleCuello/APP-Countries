import { Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import ActivityForm from "./Views/Form/Form";
import Activity from "./Components/Activity/Activity";
import About from "./Components/About/AboutText";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/postactivity" element={<ActivityForm />}></Route>
        <Route path="/activities" element={<Activity />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
