# Module 5 Assignment: NextJS Recipe App

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

For this assignment, you'll be using NextJS and the Spoonacular API to create an app that allows users to search for and read recipes.

&nbsp;
## Setup

[Sign up for a Spoonacular account and request an API key.](https://spoonacular.com/food-api/console#Dashboard)

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Create a `.env.local` file that is modeled after the `.env.EXAMPLE` file. Then replace the API key with your key. It should look like:

```
API_KEY=your_spoonacular_key_here
```

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

To start developing, run `npm run dev`.

&nbsp;
## Instructions

To complete the recipe application, follow the instructions below.

In `/pages/search.jsx`:
- Complete the `getServerSideProps` function.
- Complete the `handleSubmit` function.
- Render the search results using the `RecipePreview` component.

In `/pages/recipe/[id].jsx`:
- Complete the `getServerSideProps` function.
- Render the `RecipeInfo` or `RecipeError` components as appropriate.

&nbsp;
## App Behavior

Your site should behave in the same manner as [this example site](https://yummy-recipe-example.vercel.app/).

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, your program MUST:

  * Be implemented according to the above [instructions](#instructions).
  * Pass all [automated tests](#testing).
  * Be [deployed](#deployment) correctly.
  * Be [submitted](#submission) correctly. 

&nbsp;
## Testing

Automated tests are included with this assignment. To receive full credit, all automated tests must pass.

To run the tests, run:

```
npm test
```

To run the tests only once, run:

```
npm test -- run
```

&nbsp;
## Deployment

This assignment may be deployed for free with [Vercel](https://vercel.com/docs).

To deploy, make an account with Vercel and either [attach Vercel to your GitHub repository](https://vercel.com/docs/concepts/get-started/deploy#create-and-deploy-a-project) or [use the Vercel CLI](https://vercel.com/docs/cli) to [deploy](https://vercel.com/docs/cli/deploy) your site.

Vercel is pre-configured to be able to recognize and deploy NextJS websites. However, you will need to add environmental variables to your Vercel configuration as appropriate. In this application, both the `API_KEY` variable will be necessary for the deployment to function correctly. 

&nbsp;
## Submission

When submitting this assignment, please include **ALL** of the following:

  * A link to the assignment's GitHub repository.
  * A link to the deployed application.
  * A screenshot of the automated test results.

Please verify that your links are correct when submitting.

