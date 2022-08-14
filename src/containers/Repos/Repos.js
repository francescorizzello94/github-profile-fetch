import React, { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import List from "../../components/List/List";


function Repos({ gitHubName = "holoplot" }) { 
  const [repos, setRepos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      const repoData = await fetch(`https://api.github.com/users/${gitHubName}/repos`,);
      const repoInformation = await repoData.json();

      if (repoInformation) {
        setRepos(repoInformation);
        setLoading(false);
      }
    }

    fetchRepos();
  }, [gitHubName]);


  return (
    <div className="Projects-container">
      <h2>Holoplot's Repositories</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={repos.map((repo) => ({
              field: repo.name,
              value: (
                <RouterLink to={`/repos/${repo.name}`}>
                  Repo
                </RouterLink>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default Repos;