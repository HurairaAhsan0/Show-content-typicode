import {BrowserRouter,Routes,Route } from "react-router-dom"
import CompleteListOfUser from "./components/CompleteListOfUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListofUser from "./components/ListofUser";


function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<ListofUser/>} ></Route>
  <Route path="/User/List" element={<CompleteListOfUser/>} ></Route>
  <Route path="/User/Create" element={<CreateUser/>} ></Route>
  <Route path="/User/Edit" element={<EditUser/>} ></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
