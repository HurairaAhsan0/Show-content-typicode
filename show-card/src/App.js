import {BrowserRouter,Routes,Route } from "react-router-dom"
import AllPosts from "./components/AllPosts";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Posts from "./components/Posts";
import Header from "./components/Header"
import "./Styles/App.css";
function App() {
  

  return (
    <BrowserRouter>
<Header/>
 <div >
<Routes>
  <Route path="/" exact element={<Posts />} ></Route>
  <Route path="/User/List/:userid" element={<AllPosts/> } ></Route>
  <Route path="/User/Create" element={<CreateUser/>} ></Route>
  <Route path="/User/Edit/:iid" element={<EditUser/>} ></Route>
</Routes>
 </div>
</BrowserRouter>
  
  );
}

export default App;
