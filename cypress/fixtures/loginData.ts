export const fieldsInputOutput = [
    {
        // ****************** BUG *********************//
        // Bug in v2 version of the app - Text updated to Please enter both username and password
        "erroMessage": "Both Username and Password must be present"
    },
    {
        "password": "sdf",
        "erroMessage": "Username must be present"
    },
    {
        // ****************** BUG *********************//
        // Bug in v2 version of the app - No error message shown when no password is entered. 
        // The locator where the error is buried inside another function
        "userName": "sdf",
        "erroMessage": "Password must be present"
    },
    {
        "userName": "validUsername",
        "password": "validPassword"
    }
]