import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Octokit } from "octokit";
import './RepoCommit.css';


function RepoCommits({ gitHubName = "holoplot" }) {
  const [repoCommit, setRepoCommit] = useState([]);
  const [loading, setLoading] = useState(true);
  const octokit = new Octokit({
    auth: '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'
  })
  const { name } = useParams();
  const perPage = 20;

  async function fetchCommitData() {
    try {
      const { data } = await octokit.request(
        `GET /repos/${gitHubName}/${name}/commits`,
        { per_page: perPage }
      );
      setRepoCommit(data);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchCommitData();

  });

  return (
    <div className="Commit-container">
      <h2 className="commit-history-header">{ name }'s Commit History <br/> (up to 20): </h2>
      {
        loading
          ?
          <span>Loading...</span>
          :
          <div>
            <ul className="repocommits-general">
              {repoCommit
                .map(commit => {
                  console.log(commit);
                  return (
                    <li className="repolist-item" key={commit.id}>
                      {commit.commit.author.name}: <br />
                      {commit.commit.message}
                    </li>
                  )
                }
                )}
            </ul>
          </div>
      }
    </div>
  )
}

export default RepoCommits;