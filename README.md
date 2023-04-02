# NETFLIX ?! Fullstack practice with TS, react, tailwind, nxetJS, NextAuth, MongoDB

# Live address at:

NO API usage, hard code data input in mongoDB

npx create-next-app --typescript
=> y => name => yes to ESLint => No => No => Enter

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

tailwind.config.js and global.css files modify.

prisma

=> add extension of prisma, also run "npm install -D prisma" and "npx prisma init" => update schema.prisma file as:

datasource db {
provider = "mongodb"
url = env("DATABASE_URL")
}

=> npm install @prisma/client (this is used to interact with database) => create new folder 'lib' with new file inside as 'prismadb.ts' => edit prismadb.ts => add new file under route with 'gitignore' as 'global.d.ts' => create models inside 'shema.prisma' => run "npx prisma db push"

NextAuth

=> new file as "[...nextauth].ts" inside pages/api folder => npm install next-auth bcrypt => npm i axios => npm i @next-auth/prisma-adapter => npm install swr => npm install zustand

Register user / login function / google and github oauth login

Github OAuth => profile settings => developer settings => OAuth app => new OAuth app => after create copy paste client ID and secret into .env file

Google OAuth => google cloud console => create new project => APIs and services inside new project => OAuth consent screen => External => name, email => save and continue until summary => Choose sidebar 'Credentials' => create OAuth client ID => web applicaiton => 'Authorized redirect URls': http://localhost:3000/api/auth/callback/google => copy paste client ID and secret into .env file

Features:

date schemas => login => OAuth => Routes & Profile => Navbar => Billboard => movie test data input mangodb => movie list, movie card => add/delete to my favorite movie list => play button => watch video page => info module

deploy on Vercel
