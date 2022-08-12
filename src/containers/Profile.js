import React, { useEffect, useState } from "react";

function Profile({ gitHubName}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


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
          {/* <List items={items} /> */}
        </div>
      )}
    </div>
  );
}

export default Profile;