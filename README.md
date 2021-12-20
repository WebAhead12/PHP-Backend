# PHP-Backend
![](https://i.imgur.com/y7czOMX.png)
## Server Routes
 - "/" -> gets you to the first page which you login on it
 - POST "/login" -> logs in the user in the db {username,password}
 - POST "/register" -> creates the user in the db {username:String,password:String}
 - POST "/create" creates the user's module in db {module : {image:String(base64), text:String, position:[Int X,Int Y], size:[Int Width, int Height]}}
 - POST "/update" updates the user's module in db {module : {image:String(base64), text:String, position:[Int X,Int Y], size:[Int Width, int Height]}, userId:Int(from authenticaion header)}
 - POST "/delete" deletes the user's module in db {userId:Int(from authenticaion header)}
 - GET "/logout" -> logs out the user from the website
 - GET "/modules/:name" send the users modules

## Folder Structure
- Main Folder:
    - Database
        - connection.js 
        - init.sql
    - Middleware:
        - error.js
        - verifyUser.js
    - Utils
        - modules.js
        - users.js
    - server.js
    - router.sj
    - .env
    - package.json †

## Features
- add/save module which u can write in them or place icons/images
- drag notes and place them whereever you want
- edit/delete module
- login/register

## WireFrames
### login:
![](https://i.imgur.com/ha7VZez.png)

## register:
![](https://i.imgur.com/6QjDhyW.png)

## menu closed:
![](https://i.imgur.com/jRvloF3.png)

## menu opened:
![](https://i.imgur.com/be4QR80.png)

## edit mode:
![](https://i.imgur.com/hkwYBRR.png)





