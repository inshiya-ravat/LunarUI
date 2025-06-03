# LunarUI - A Component Library

![Npm Version](https://img.shields.io/npm/v/simlib.svg)
![NPM Last Update](https://img.shields.io/npm/last-update/simlib)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/simlib)

This is a component library created by Trainees at Simform.

- **Browse all components :** [https://simlib.netlify.app/](https://simlib.netlify.app/)
- **Checkout on npm :** [https://www.npmjs.com/package/simlib](https://www.npmjs.com/package/simlib)
- **Install from npm :**

```bash
npm i lunarUI@latest
```

- To use the component, import it like this,

```typescript
import { Camera } from 'lunarUI';
```

## Development

### Checkout components in development :

- [https://dev--simlib.netlify.app/](https://dev--simlib.netlify.app/)

### How to contribute ?

- Fork this repo in your account. (Make sure to uncheck "Copy the `main` branch only")
- Create your feature branch from `dev` branch. And work on this branch only.
- After the implementation, raise PR from `your feature branch` to `dev` branch of `main repo`.
- Ask for the review.

### How to implement ?

- Create a seperate folder for your component in `lib/components`. (i.e. `lib/components/Camera/`)
- Create your component inside that folder. (i.e. `Camera.tsx`);
- Create the Stories for your component in the same folder. (i.e. `Camera.stories.ts`)
- Do not make changes to `any` file outside your component folder.

### Naming Conventions

- For feature branch names, follow this convention :
  - `component-name/sub-category`
  - For Example : Loader/linear-loader
- For commit messages, follow this convention :
  - `action: description`
  - For Example : "fix: fix bugs related to linear loader"

### Components Offered :

- Camera
