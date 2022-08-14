import React, { useEffect, useState } from "react";
import './Profile.css';

function Profile({ gitHubName="holoplot"}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${gitHubName}`);
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
        </div>
      )}
    </div>
  );
}

export default Profile;