import {useState} from 'react';
import {DisplayUserInfo} from '../display-user-info/display-user-info'
import {defaultUserInfo} from './default-user-info';
import './form.css';

export function Form()
{
    const [userName, setUserName]=useState("No Username");
    const [userData, setUserData]=useState(defaultUserInfo);

    async function getUser(userToFetch)
    {
        const endpoint="https://api.github.com/users/"+userToFetch;
        const userResponse=await fetch(endpoint);
        const data=await userResponse.json();
        return data;
    }

    function handleInputUserName(event)
    {
        const userNameInput=event.target.value;
        setUserName(()=>userNameInput);
    }

    function handleFormSubmit(event)
    {
        event.preventDefault();
        document.getElementById("user-name-input").value="";
        getUser(userName).then((response)=>{

            if(response.message)
            {
                console.log("Error Fetching User");
            }
            else{
                setUserData(response);
            }
            
           
        }).catch(error=>{
            console.log(error);
        });
    }

    return(
        <div>
            <div id="form-div">
                <form onSubmit={handleFormSubmit}>
                        <input id="user-name-input" type="text" placeholder="Introduce Username" onChange={handleInputUserName} /><br/><br/>
                        <button>Search User</button>
                </form>
                
            </div>
            <DisplayUserInfo data={userData}/>
        </div>
    );
}