
1. We will create signin api
2. install this: npm i express-async-handler
3. install jsonwebtoken
4. define generateToken
5. install bcryptjs



We have created 2 new component:
userRoutes.js 
utils.js

1.userRoutes: here we have created an api(userRouter) that sends request to database and
if user exist than we will reponse with the user information and 
we will give a token and so we have declared a class called utils.js


steps:
1. open postman 
2. go to http://localhost:5000/api/users/signin 
3. type email and password that were saved in data.js file and send post request from postman
4. if email and password exist it will show us the email and password.
