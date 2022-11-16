import {BrowserRouter,Routes,Route } from "react-router-dom"
import AllPosts from "./components/AllPosts";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
<<<<<<< HEAD
import Posts from "./components/Posts";
import Header from "./components/Header"
import Comments from "./components/Comments";
=======
import ListofUser from "./components/ListofUser";
import Header from "./components/Header/Header";
>>>>>>> a6ebef3808654aa2ba529fc04cec49ef1d243fa5
import "./Styles/App.css";
function App() {
  

  return (
    <BrowserRouter>
<Header/>
 <div >
<Routes>
  <Route path="/" exact element={<Posts />} ></Route>
  <Route path="/User/List/:userid/:Name" element={<AllPosts/> } ></Route>
  <Route path="/User/Create" element={<CreateUser/>} ></Route>
  <Route path="/User/Edit/:Name/:title/:description" element={<EditUser/>} ></Route>
  <Route path="/User/Comments/:Id" element={<Comments/>} ></Route>
</Routes>
 </div>
</BrowserRouter>
  
  );
}

export default App;
