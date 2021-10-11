# Demo Adonis Package

**Experimental**. Create an external package with custom routes, controllers and models. Used by `main-app`.

## Target

1. Develop a separate package from the main app that can be distributed independently.
2. Keep the nice DevEx while working in both the main app and the package: type check, intellisense, etc.
3. Package can declare custom routes, controllers, models, etc. Some are booted automatically into the main app without developer doing anything.
4. Main app can refer to stuff from the package, either through IoC resolve or standard module import (also with alias)

The main difficulty to achieve this is the usage of IoC.

## Solution

When use import `@ioc` in the package, need custom step when compile Typescript code.
The package `@adonisjs/ioc-transformer` solves this very purpose.

So how to use it here?

The secret sauce is the file `build.js` which was a (quick and ugly) copy from `@adonijs/assembler` build command.

**Note:**
1. It is for PoC only. More proper build script is required here.
2. `.adonisrc.json` is required by the assembler's compiler, it seems to only use for alias resolve. Suspect that this could be safely removed with some tweak.
3. `ace` file is required. Didn't check why.

## Run

```sh
# Install dependencies
cd my-package
npm i
###
cd main-app
npm i

# Build package
cd my-package
npm run build

# Install package to main-app
cd main-app
npm i ../my-package

# Create `.env` file
cp .env.example .env

# Register provider to main-app
node ace invoke my-package

# Run migration in main-app to create `User` table
node ace migration:run

# Run seed to create Users
node ace db:seed

# Run main-app
npm run dev
```

Finally, access custom routes defined by my-package in browser:
- http://localhost:3333/my-package/
- http://localhost:3333/my-package/users
- http://localhost:3333/my-package/users/:id

And routes defined by the main app:
- http://localhost:3333/ioc
- http://localhost:3333/alias
- http://localhost:3333/pkg


## TODO

- DONE ~~Expose models in `my-package` to be used in `main-app` (such as in seeder)~~
- Make `instruction` script to generate some file in `main-app` using templates in `my-package`, such as DB migration and seeder.
- Documentation
- Apply standard config of Adonis package (eslint, commit convention, etc.)
