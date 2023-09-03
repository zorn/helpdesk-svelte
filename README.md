# TODO

* Figure out why something is pounding the graph api with the introspection request over and over.
  * A: it was the internal setting
* Form to create a new ticket
* form validations
* add more field types to demo input variety
* edit / delete tickets
* graph subscriptions
* add representatives crud and their views.
* Figure out tabs / spaces in formatter.
* For a ticket creation form, figure out how we can get the form validation rules to pick up requirements from graphql and then also handle validation errors returns in a graph response.
* figure out why a type for representative is not being created in artifacts
  * There is only a type generated once it is referenced in the code.
* figure out if I can suppress the "Your Node interface is not properly defined, please fix your schema to be able to use this interface." warning since I have added manual type `resolve.queryField` values to the config per type.
* When I first start the app the Ticket page does not load and is blank.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
