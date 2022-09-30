import './App.css';
import UserList from './components/UserList/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
   const [data , setData] = useState();
    const [error , setError] = useState(null);
    useEffect(() => {
      function fetchData() {
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
          .then(res => res.json())
          .then(res => setData(res))
          .catch(err => setError(err));
      }
   
      fetchData();
    }, []);
  return (
    <div className="App">
     <UserList/>
    </div>
  );
}

export default App;
