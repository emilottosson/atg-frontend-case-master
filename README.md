# Instructions

To run the application locally, follow the steps below:

##### Open and run from zip files:

1. Unzip the project folder.
2. Place the folder where you want it on your computer.
3. Install npm or yarn, I will not show how to do that so take your time and go to next step when that is done. (Skip this step if you already have npm or yarn installed).
4. Use the terminal and step to project folder.<br />
   `$ cd <path to project folder>`
5. Install dependencies using npm or yarn.<br />
   npm: `$ npm install`<br />
   yarn: `$ yarn`
6. Start application using npm or yarn.<br />
   npm: `$ npm start`<br />
   yarn: `$ yarn start`

## Linting

The project uses ESLint and prettier

### `npx prettier --write .`

This command formats all files supported by Prettier in the current directory and its subdirectories.

It’s recommended to always make sure that prettier --write . only formats what you want in your project. Use the .prettierignore file to ignore things that should not be formatted.

### `ESLint`

To specify configuration information for an entire directory and all of its subdirectories you can setup ESLint rules in the eslintrc.json file.

Here are some of the options that you can configure in ESLint:

Environments - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
Globals - the additional global variables your script accesses during execution.
Rules - which rules are enabled and at what error level.
Plugins - which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.

## Tests

Use `npm test` to run the tests. Below are some short descriptions of each test.

**Renders track name**

This test checks if the track name are shown correctly with respect to the data sent to the component.

This test was created to ensure that we display the correct track name from the data we get when rendering the Table component. This is important to be sure that the correct information are shown.

**Handles onclick on race horse**

This test checks if the correct expandable div opens and closes with respect to which row has been clicked.

This test was created to ensure that the div containing additional information opens and closes as expected. It should also ensure that the correct div has been toggled. This is important because we want to be sure that we are showing the user all the correct information on the row that the user has taken action on.

**Check if dropdown exists**

This test checks if the dropdown exists.

This test was created to ensure that are rendering the dropdown. The dropdown is important because this are the requirement to get everything else to work.

**Check if value changes when user using dropdown**

This test checks if the value is correct when selecting different options in the dropdown menu.

This test was created to ensure that we get the correct value from the options when choosing a horse betting type. The value is important because this will affect the data we get when we fetch our productApi.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
