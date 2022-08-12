import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: 'personal-access-token123'
})

function RepoCommits({ gitHubName = "holoplot" }) { 
  const [repoCommit, setRepoCommit] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    async function fetchCommitData() {
      const commit = await octokit.request(
        `GET/https://api.github.com/repos/${gitHubName}/${name}/commits`,
        {
          owner: 'OWNER',
          repo: 'REPO'
        }
      );
      const commitInformation = commit.json();

      if (commitInformation) {
        setRepoCommit(commitInformation);
        setLoading(false);
      }
    }

    if (gitHubName && name) {
      fetchCommitData();
    }
  }, [gitHubName, name]);

  return (
    <div className="Commit-container">
      <h2>Commit: {repoCommit.name}</h2>
      {
        loading
          ?
          <span>Loading...</span>
          :
          <div></div>
      }
    </div>
  )
}

export default RepoCommits;