
var loggedIn = false;

/*
    Login:
        Read username field
        Read password field
        Decrypt password file using the key stored in a local file (format - uname:hash(pswd))
        Lookup hash of password using the username
            If username does not exist -> false, login error display message
            If does exist
                compare hash in file to the given password -> login success or failure (Don't tell the user if it was the username or password)

        After successful login, show username instead of the login button

    Register:
        Take username and password
        Store new user in password file
*/

function login() {
    
}