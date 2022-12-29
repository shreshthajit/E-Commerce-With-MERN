 Here we will implement select payment method screen by doing the following:

 1. input forms
 2. handle submit

 So we have done the followings:
 1. Created PaymentMethodScreen.js
 in PaymentMethodScreen.js
 a) used navigate hook to go to next section
 b) took value from state to check weather there is a shipping address before going to payment section
 c) used context hook to store the value of payment method using dispatch in submit handler
 d) used the PayementMethodScreen.js component in App.js file
 e) in store.js file
    --> updated reducer function with a new action called SAVE_SHIPPING_METHOD
    --> updated the cart of initial state with payment method section
    --> 
f) in App.js file under signoutHandler we removed paymentmethod from localstorage.

