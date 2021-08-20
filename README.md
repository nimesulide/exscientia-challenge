# Exscientia Challenge

The aim of the project is to show a basic workflow of dataset examination and usage of different development tools. To be able to gain better understanding of the dataset, and ease decision making, it's possible to add charts and calculated fields to the workspace.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of `Node` and `npm`

## Installing dependencies

To install required dependencies, use this command in the root of the repository:
```
npm install
```

## Running the application

To run the application, use this command in the root of the repository

```
npm start
```
In a browser window, navigate to
```
http://localhost:3000/
```

## Possible improvements
* Implement production mode. Currently the development mode only running creates a bigger operational payload than expected.
* Usage of permanent database (e.g. MongoDB Atlas). Currently, for the purposes of the project, in-memory MongoDB is used. This should only be used for automated testing purposes.
* Adding automated tests: unit and E2E tests.
* Proper error handling both for client and server. Currently both logs to console. The production solution should send notifications to the user.
* Optimize dashboard layout with no fixed or calculated heights but flexible box sizing.
* Enrich table components with: sorting, filtering values and columns rearranging capabilities.
* For a quicker understanding of the dataset, conditional formatting could be utilized.
* Lazy loading or pagination should be implemented for the datatable to be able to handle lot more rows efficiently.
* Introduce a secure storage for the molecule images.
* Ability to visualize calculated properties on chart for deeper understanding.
* Workflow endpoint to export or save the current dataset with calculated columns and/or selected interesting compounds.
* Improve organization of component files within compounds.