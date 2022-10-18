# <p align = "center"> DrivenPass </p>

<p align="center">
   <img style="width:300px" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-dimitripontocss-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/dimitripontocss/projeto19-drivenpass?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description

This is a Api made for users who are looking to keep their sensitive info safe and with easy access. If you have registered on a site and usualy don't remember your password on the first try this application is made for you, with the need of remembering only one password you have access to everything you need.

---

## :computer: Tecnologies used

- REST APIs
- JWTs
- Node.js
- TypeScript
- Prisma (ORM)
- Postgres

---

## :rocket: Routes

```yml
POST /sign-up
    - Route used to register new users
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
}
```

```yml
POST /sign-in
    - SignIn route, you receive a Token if data is correct
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "password": "loremipsum"
    }
```

```yml
POST /credential (authenticated)
    - Post a new credential
    - headers: { "Authorization": "Bearer $token" }
    - body:   {
                "title": "loremipsum",
                "url": "https://loremipsum.com",
                "username": "loremipsum",
                "password": "loremipsum"
            }
```

```yml
GET /credentials (authenticated)
    - Get all user credentials
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /credential/(idCredential) (authenticated)
    - Get single user credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /credential/(idCredential) (authenticated)
    - Delete a single user credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /safeNote (authenticated)
    - Post a new safeNote
    - headers: { "Authorization": "Bearer $token" }
    - body:   {
                "title": "loremipsum", max=50
                "content": "loremipsum" max=1000
            }
```

```yml
GET /safeNotes (authenticated)
    - Get all user safeNotes
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /safeNote/(idSafeNote) (authenticated)
    - Get single user safeNote
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /safeNote/(idSafeNote) (authenticated)
    - Delete a single user safeNote
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /card (authenticated)
    - Post a new card
    - headers: { "Authorization": "Bearer $token" }
    - body:   {
                "title": "loremipsum",
                "number": "*****",
                "owner": "loremipsum",
                "securityCode": "***", length=3
                "expirationDate": "*****",length=5
                "password": "****",length=4
                "isVirtual": false || true,
                "type": DEBIT || CREDIT || BOTH
            }
```

```yml
GET /cards (authenticated)
    - Get all user cards
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /card/(idCard) (authenticated)
    - Get single user card
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /card/(idCard) (authenticated)
    - Delete a single user card
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /wifi (authenticated)
    - Post new wifi information
    - headers: { "Authorization": "Bearer $token" }
    - body:   {
                "title": "loremipsum",
                "wifiName": "loremipsum",
                "password": "loremipsum"
            }
```

```yml
GET /wifis (authenticated)
    - Get all user wifis infos
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /wifi/(idWifi) (authenticated)
    - Get single user wifi info
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /wifi/(idWifi) (authenticated)
    - Delete a single user wifi info
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

---

## 🏁 Running the application

This project was made with Node.Js, so in order to run it at your machine you gotta have a stable version of Node.Js and NPM installed.

First, clone this directory:

```
git clone https://github.com/dimitripontocss/projeto19-drivenpass
```

After, inside the directory, run this command to install the dependencies:

```
npm install
```

After its done run this command to build the aplication:

```
npm build
```

And then this command to run the server:

```
npm start
```
