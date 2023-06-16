# React Github Widget

React Github Widget is a React component that displays a list of GitHub repositories for a given username. It fetches the repository data from the GitHub API and renders it in a customizable format with additional styling changes.

## How it Works

The React Github Widget component simplifies the process of integrating GitHub repositories into your React applications. It handles data fetching and rendering of the repository list for you.

### Installation

You can install the React Github Widget package using npm or yarn:

```bash
npm install react-github-widget
```

or

```bash
yarn add react-github-widget
```

### Usage

To use the React Github Widget component in your application, follow these steps:

1. Import the component in your file:

   ```jsx
   import ReactGithubWidget from 'react-github-widget';
   ```

2. Place the component in your JSX code, passing the `username` prop with the desired GitHub username:

   ```jsx
   <ReactGithubWidget username="your-username" />
   ```

3. Customize the styling of the component using CSS or the `className` prop.

### Example

Here's an example of using React Github Widget in a React component:

```jsx
import React from 'react';
import ReactGithubWidget from 'react-github-widget';

function App() {
  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ReactGithubWidget username="your-username" />
    </div>
  );
}

export default App;
```

## Features

- Fetches the list of GitHub repositories for a given username.
- Shows the Github User being Fetched username and their Porfile picture.
- Renders each repository with a box layout, displaying repository size, description, coding language, and a color dot representing the coding language.
- Provides customization options for styling using CSS or the `className` prop.

## Future Enhancements

- Pagination support for large repositories.
- Filter and sort options for the repository list.
- Additional customization options for the rendered components.
- Error handling and fallback UI for failed API requests.
- Unit tests and documentation improvements.
- Experiment with different CSS styles to further customize the appearance of the rendered repository list.
- Consider integrating React Github Widget as a component within a larger application, such as a developer portfolio or project showcase page.
- Explore the GitHub API documentation to discover additional data that can be integrated into the component, such as repository descriptions or star counts.

Contributions and feedback from the community are welcome to enhance the functionality and usability of React Github Widget.
