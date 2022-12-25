 1. install npm i react-toastify
 2. what react-toastify does is it just shows an alert of invalid credentials with a nice ui
 3. We have used userInfo in useContext and if it does exist then we will show a dropdown button 
 else we will just go to signin page.
 4. we have declared singout and signin action in store.js file.
 5. we have used useNavigate hook so that we can redirect to a page after being signing in.
 6. we have used useEffect hook so that if use is logged in then he can't be logged out from that page.
 7. the main part we have handled is submit handler to submit the credentials 