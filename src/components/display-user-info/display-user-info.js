
export function DisplayUserInfo(props)
{
    let display="";

    if(props.data != "No Data")
    {
        const userName=props.data.name;
        const id=props.data.id;
        const img=props.data.avatar_url;
        const githubURL=props.data.html_url;
        const bio=props.data.bio;
        const name=props.data.name;
        const location=props.data.location;

        display=<div>
            <img src={img}/>
            <ul>
                <li>Name: {name}</li>
                <li>User Name: {userName}</li>
                <li>User Bio: {bio}</li>
                <li>User ID: {id}</li>
                <li><a href={githubURL} target="_blank">GitHub Link</a></li>
                <li>Location: {location}</li>
            </ul>
        </div>    
    }
    return display;
}