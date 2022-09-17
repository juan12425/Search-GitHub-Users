
import './App.css';
import {useEffect} from "react";
import {Form} from './form/form';

function App() {
  const getUsers = async () =>
  {
    const user=await fetch("https://api.github.com/users/deekshasharma");
    const data=await user.json();
    return data;
  }
  useEffect(()=>{
    getUsers().then(response=>console.log(response));
  },[]);
  return (
    <div>
      <h1>GitHub Users Info</h1>
      <Form />
    </div>
  );
}

export default App;
