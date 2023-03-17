import React from 'react';

const Follower = ({ avatar_url, login, html_url }) => {
  return (
    <article className="followers">
      <div className="followers_box">
        <img className="followers_box_img" src={avatar_url} alt={login} />
        <p className="followers_box_title">{login}</p>
        <a className="followers_box_a" href={html_url}>
          VIEW PROFILE
        </a>
      </div>
    </article>
  );
};

export default Follower;
