import "./display-user-info.css";
import {DisplayRepos} from "../display-repos/display-repos";
import {useState, useEffect} from "react";

export function DisplayUserInfo(props)
{   
    const [reposData, setReposData]=useState("No Data");

    let display="";

    useEffect(()=>{
        setReposData("No Data");
    }, [props])

    if(props.data != "No Data")
    {
        const username=props.data.login;
        const id=props.data.id;
        const img=props.data.avatar_url;
        const githubURL=props.data.html_url;
        const bio=props.data.bio;
        const name=props.data.name;
        const location=props.data.location;
        const company=props.data.company;
        const email=props.data.email;
        const hireable=props.data.hireable;
        const twitterUsername=props.data.twitter_username;
        const publicRepos=props.data.public_repos;
        const publicGists=props.data.public_gists;
        const followers=props.data.followers;
        const following=props.data.following;
        const createdAt=props.data.created_at;
        const updatedAt=props.data.updated_at;
        const reposURL=props.data.repos_url;

        async function fetchReposInfo()
        {
            const reposResponseJSON=await fetch(reposURL);
            const response=await reposResponseJSON.json();

            return response;
        }

        function handleReposInfoDisplay()
        {
            fetchReposInfo().then(response=>{
                console.log(response);
                setReposData(()=>response);

            }).catch(error=>console.log(error));
        }


        display=<div>
                <h2 id="user-info-title">{username}</h2>
                <div id="div-display">
                <img src={img}/>
                <ul>
                    <li>Name: {name}</li>
                    <li>Username: {username}</li>
                    {bio && <li>Bio: {bio}</li>}
                    <li>User ID: {id}</li>
                    <li><a href={githubURL} target="_blank">GitHub Link</a></li>
                    {location && <li>Location: {location}</li>}
                    {company && <li>Company: {company}</li>}
                    {email && <li>Email: {email}</li>}
                    {hireable && <li>Hireable: {hireable}</li>}
                    {twitterUsername && <li>Twitter Username: {twitterUsername}</li>}
                    <li><a href="#" onClick={handleReposInfoDisplay}>Public Repos</a>: {publicRepos}</li>
                    <li>Public Gists: {publicGists}</li>
                    <li>Followers: {followers}</li>
                    <li>Following: {following}</li>
                    <li>Created At: {createdAt}</li>
                    <li>Updated At: {updatedAt}</li>
                </ul>
            </div> 
        </div>   
    }
    return (
        <div>
            {display}
            <DisplayRepos data={reposData}/>
        </div>
        );
}