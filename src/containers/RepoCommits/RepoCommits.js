import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Octokit } from "octokit";


function RepoCommits({ gitHubName = "holoplot" }) { 
  const [repoCommit, setRepoCommit] = useState([]);
  const [loading, setLoading] = useState(true);
  const octokit = new Octokit({
    auth: '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'
  })
  const { name } = useParams();
  const perPage = 20;

  useEffect(() => {
    async function fetchCommitData() {
      const fetchCommit = await octokit.request(
        `GET /repos/{gitHubName}/{name}/commits`,
        {per_page: perPage}
      );
      const commitInformation = fetchCommit.json();

      if (commitInformation) {
        setRepoCommit(commitInformation);
        setLoading(false);
      }
    }

    if (gitHubName && name) {
      fetchCommitData();
    }
  }, []);

  return (
    <div className="Commit-container">
      <h2>Commit: </h2>
      {
        loading
          ?
          <span>Loading...</span>
          :
          <div>
            <ul>
              {repoCommit.map(commit => (
                <li key={commit.id}>
                  {commit.author.name}: {commit.message}
                </li>
              ))}
            </ul>
          </div>
      }
    </div>
  )
}

export default RepoCommits;