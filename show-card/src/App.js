import {BrowserRouter,Routes,Route } from "react-router-dom"
import CompleteListOfUser from "./components/CompleteListOfUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListofUser from "./components/ListofUser";
import Header from "./components/Header"
import "./Styles/App.css";

function App() {
  

  return (
    <BrowserRouter>
<Header/>
 <div style={{marginLeft:"25%",marginRight:"25%"}}>
<Routes>
  <Route path="/" exact element={<ListofUser />} ></Route>
  <Route path="/User/List/:userid" element={<CompleteListOfUser/> } ></Route>
  <Route path="/User/Create" element={<CreateUser/>} ></Route>
  <Route path="/User/Edit/:title/:description/:userid/:iid" element={<EditUser/>} ></Route>
</Routes>
 </div>
</BrowserRouter>
  
  );
}

export default App;
