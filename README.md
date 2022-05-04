# pepegram-vue

An attempt to copy the famous social media plattform Instagram. The application is hosted with google firebase [here](https://pepegram-f8405.web.app/login).


# 1. Main Stacks

1. Google Firebase as backend (because free 😎)
2. VueJS
3. NuxtJS
4. TailwindCSS

# 2. Preview

## I. Login page

![alt text](https://raw.githubusercontent.com/robyhartonodev/pepegram-vue/master/assets/images/demos/pepegram-login.PNG)

## II. Home page - Pepegram | Instagram (Web)

![alt text](https://raw.githubusercontent.com/robyhartonodev/pepegram-vue/master/assets/images/demos/pepegram-home.PNG)

![alt text](https://raw.githubusercontent.com/robyhartonodev/pepegram-vue/master/assets/images/demos/instagram-web-home.PNG)


# 3. Build Setup

```bash
# Copy .env.example as .env and adjust firebase credentials
$ cp .env.example .env

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

# 4. Features

## I. Authentication

1. Login
2. Register
3. Change password
4. Reset password

## II. Base

1. Flash message - show errors, successes, etc.

## III. Cores - TODOs

1. [x] Instagram UI Pages - Story, Settings, Home
2. [ ] Follow functionality
3. [ ] Post functionality
4. [ ] Story functionality
5. [ ] User profile CRUD functionality
6. [ ] Unit Test
7. [ ] E2E Test
8. [ ] Test coverage
9. [ ] CI/CD with e.g. Github Action, Travis, etc.
