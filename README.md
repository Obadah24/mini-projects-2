### in brief about the mini project

This mini project i used both of useState and UseEffect Hooks to fetch a person's data from free Api.
as you know that Hooks are Funtions that let you hook into React state and lifecycle features from components.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Assuming we have a component called `UserList` that displays a list of users fetched from an API, here's an example of a unit test for the fetch operation using React Testing Library and Jest:

Here's what's happening in each step of the test:

1. We import the necessary functions from React Testing Library and our component `Fetch1`.
2. We define a test suite for `Fetch1`.
3. We use Jest's `beforeEach` function to spy on the global `fetch` function before each test case.
4. We use Jest's `afterEach` function to restore the original implementation of the `fetch` function after each test case.
5. We define a test case that checks if the component displays the fetched BTC/USD data.
6. We create a mock response that represents the data we expect to receive from the API.
7. We mock the `fetch` function to return the mock response when called with the correct URL.
8. We render the component using `render` from React Testing Library.
9. We wait for the component to render and fetch data using `findByTestId` and passing in the `testid` we set in our component.
10. We check that the fetched BTC/USD data is displayed using `toHaveTextContent`.
11. We check that the `fetch` function was called with the correct URL using `toHaveBeenCalledWith`.
12. We define another test case that checks if the component displays an error message if the API call fails.
13. We mock the `fetch` function to reject with an error when called with the correct URL.
14. We render the component using `render`.
15. We wait for the component to render and fetch data using `findByTestId`.
16. We check that the error message is displayed using `toHaveTextContent`.
17. We check that the `fetch` function was called with the correct URL using `toHaveBeenCalledWith`.
