import "./display-repos.css";

export function DisplayRepos(props){
    let display="";

    if(props.data != 'No Data')
    {
        display=<div>
            {props.data.map((repo, index)=>{
                let repoName=repo.name;
                let archived=repo.archived;
                let defaultBranch=repo.default_branch;
                let description=repo.description;
                let forks=repo.forks;
                let forksCount=repo.forks_count;
                let hasDownloads=repo.has_downloads;
                let hasIssues=repo.has_issues;
                let hasProjects=repo.has_projects;
                let hasWiki=repo.has_wiki;
                let homepage=repo.homepage;
                let language=repo.language;
                let liscence=repo.liscence;
                let privateRepo=repo.private;
                let watchersCount=repo.watchers_count;
                let visibility=repo.visibility;
                let url=repo.svn_url;

                return(
                    <div key={index}>
                        <h3>{repoName}</h3>
                        <ul>
                            <li key="1">Default Branch: {defaultBranch}</li>
                            <li key="2">Description: {description}</li>
                            <li key="3">Forks: {forks}</li>
                            <li key="4">Forks Count: {forksCount}</li>
                            <li key="5">Homepage: {homepage}</li>
                            <li key="6">Language: {language}</li>
                            <li key="7">Private Repo: {privateRepo}</li>
                            <li key="8">Watchers Count: {watchersCount}</li>
                            <li key="9">Visibility: {visibility}</li>
                            <li key="10">URL: <a href={url} target="_blank">{url}</a></li>
                        </ul>
                    </div>
                );

            })}
        </div>;
    }
    return (
        <div>
            {display && <h2 id="repos-title">Repositories</h2>}
            {display && <hr/>}
            <div id="div-repos">
                {display}
            </div>
        </div>);
}