import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from "./Components/UserInfo";

function App() {
  const [users, setUsers] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  // console.log(users);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res))
      .then(setIsLoding(false))
      .catch((err) => console.log(err));
  };
  // getUsers()
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList data={users} isLoding={isLoding} />}
          />
          <Route path="info/:id" element={<UserInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
