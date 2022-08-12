import React, { useEffect, useState } from "react";
import Link from "../components/Link/Link";
import List from "../components/List";
import './Profile.css';

function Profile({ gitHubName}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const items = [{
    field: 'html_url',
    value: <Link url={data.html_url} title={ data.html_url} />,
  },
    {
      field: 'repos_url',
      value: <Link url={data.repos_url} title={ data.repos_url} />,
    },
    { field: 'name', value: data.name },
    { field: 'company', value: data.company },
    { field: 'location', value: data.location },
    { field: 'email', value: data.email },
    { field: 'bio', value: data.bio },
  ]


  useEffect(() => {
    async function fetchData() {
      const profile = await fetch("https://api.github.com/users/holoplot");
      const information = await profile.json();

      if (information) {
        setData(information);
        setLoading(false);
      }
    }
    fetchData();
  }, [gitHubName]);

  return (
    <div className='Profile-container'>
      <h2>Holoplot - General Overview</h2>
      {
        loading
          ?
          (<span>Loading...</span>)
          :
          (
        <div>
          <img
            className='Profile-avatar'
            src={data.avatar_url}
            alt={data.name}
          />
          <List items={items} />
        </div>
      )}
    </div>
  );
}

export default Profile;