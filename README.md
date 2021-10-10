# Demo Adonis Package

**Experimental**. Create an external package with custom routes, controllers and models. Used by `main-app`.

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

# Run main-app
npm run dev
```

Finally, access custom routes defined by my-package in browser:
- http://localhost:3333/my-package/hi 
- http://localhost:3333/my-package/ :point_left: Return empty array
- http://localhost:3333/my-package/:id :point_left: 404 (no User record)

## TODO

- Expose models in `my-package` to be used in `main-app` (such as in seeder)
- Make `instruction` script to generate some file in `main-app` using templates in `my-package`, such as DB migration and seeder.