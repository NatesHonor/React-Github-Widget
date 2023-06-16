import React from 'react';
import ReactDOM from 'react-dom';
import './react-github-widget.css';

function ReactGithubList({ username }) {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
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

    fetchRepositories();
  }, [username]);

  return (
    <div className="github-widget-container">
      <h2>GitHub Repositories for {username}</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
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
