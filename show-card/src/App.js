import {BrowserRouter,Routes,Route } from "react-router-dom"
import CompleteListOfUser from "./components/CompleteListOfUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListofUser from "./components/ListofUser";
import Header from "./components/Header"
import "./App.css";

function App() {
  

  return (
 <div className="App" >
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" exact element={<ListofUser />} ></Route>
  <Route path="/User/List/:userid" element={<CompleteListOfUser  /> } ></Route>
  <Route path="/User/Create" element={<CreateUser/>} ></Route>
  <Route path="/User/Edit" element={<EditUser />} ></Route>
</Routes>
</BrowserRouter>
 </div>
  
  );
}

export default App;
