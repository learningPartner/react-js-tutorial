import { Routes, Route, Link } from "react-router";
import "./App.css";
import Admin from "./components/Admin";
import DataEventBindig from "./components/DataEventBinding";
import UseEffectEx from "./components/UseEffectEx";
import UseStateEx from "./components/UseStateEx";
import ListEx from "./components/ListEx";
import ConditionRender from "./components/ConditionRender";
import User from "./components/User";
import NotFound from "./components/NotFound";
import GetApi from "./components/GetApi";
import PostApi from "./components/PostApi";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item" >
                <Link className="nav-link" to={'/Data-Binding'}>Data Binding</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to={'/useeffect'}>useeffect</Link>
              </li>
              <li className="nav-item" >
                 <Link className="nav-link" to={'/usestate'}>usestate</Link>
              </li>
              <li className="nav-item" >
                 <Link className="nav-link" to={'/list'}>list</Link>
              </li>
              <li className="nav-item" >
                 <Link className="nav-link" to={'/conditionrender'}>conditionrender</Link>
              </li>
                <li className="nav-item" >
                 <Link className="nav-link" to={'get-api'}>GET</Link>
              </li>
                <li className="nav-item" >
                 <Link className="nav-link" to={'post-api'}>POST</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<DataEventBindig />}></Route>
        <Route path="/Data-Binding" element={<DataEventBindig />}></Route>
        <Route path="/useeffect" element={<UseEffectEx />}></Route>
        <Route path="/usestate" element={<UseStateEx />}></Route>
        <Route path="/list" element={<ListEx />}></Route>
        <Route path="/user/:userid" element={<User />}></Route>
        <Route path="/conditionrender" element={<ConditionRender />}></Route>
        <Route path="/get-api" element={<GetApi />}></Route>
          <Route path="/post-api" element={<PostApi />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
