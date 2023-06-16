import React, { useEffect, useState } from 'react';
import './react-github-widget.css';
import ReactDOM from 'react-dom';

function ReactGithubList({ username }) {
  const [repositories, setRepositories] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.error('Failed to fetch user profile:', response.status);
          }
        })
        .then((data) => {
          setUserProfile(data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    };

    const fetchRepositories = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.error('Failed to fetch repositories:', response.status);
          }
        })
        .then((data) => {
          setRepositories(data);
        })
        .catch((error) => {
          console.error('Error fetching repositories:', error);
        });
    };

    fetchUserProfile();
    fetchRepositories();
  }, [username]);

  function formatSize(size) {
    const KB = 1024;
    const MB = KB * 1024;
    if (size < KB) {
      return `${size} B`;
    } else if (size < MB) {
      return `${(size / KB).toFixed(2)} KB`;
    } else {
      return `${(size / MB).toFixed(2)} MB`;
    }
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="github-widget">
      <h2>Github repositories</h2>
      {userProfile && (
        <div className="userprofile">
          <img className="profile-picture" src={userProfile.avatar_url} alt="Profile" />
          <p>{username}</p>
        </div>
      )}
      <div className="repositories-container">
        {repositories.map((repo) => (
          <div className="repo" key={repo.id}>
            <div className="repo-header">
              <div className="repo-name">
                <a href={repo.html_url}>{repo.name}</a>
              </div>
              {repo.language && (
                <div className="repo-details">
                  <div className={`language-dot ${repo.language.toLowerCase()}`}></div>
                  <span className="repo-language">{repo.language}</span>
                </div>
              )}
            </div>
            {repo.description && <div className="repo-description">{repo.description}</div>}
            <div className="repo-details">
              <span className="repo-size">{formatSize(repo.size)}</span>
              <span className="repo-updated">Last updated on {formatDate(repo.updated_at)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactGithubList;

window.ReactGithubWidget = {
  render: function render(containerId, username) {
    ReactDOM.render(
      <ReactGithubList username={username} />,
      document.getElementById(containerId)
    );
  },
};
