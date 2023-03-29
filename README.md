# NETFLIX ?! Fullstack practice with TS, react, tailwind, nxetJS, NextAuth, MongoDB

# Live address at:

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

=> new file as "[...nextauth].ts" inside pages/api folder => npm install next-auth bcrypt => npm i axios
