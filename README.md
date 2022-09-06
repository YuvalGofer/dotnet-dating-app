43 - go to AccountController.cs

if we try it now we'll get an error because we need to token key in the configuration (remember? in the constructor in the token service)

go to appsettings.Development.json

test with postman: login
if we take the returned string and go to jwt.io and use the debugger to see our token, the expiry
we can verify the signature by pasting our super secret string, if we get the save token then the secret string is correct (the server got the token without change by the front end).

next up: how do we authenticate and validate the token is good.



44 - ok so now that we can issue a token
 we can authenticate it in our authentication middleware so we can authenticate user requests.

go to UsersController.cs 

test with postman: GetUsers works, GetUser does not so we need to add a middleware so we could authenticate with out jwt

add package:Microsoft.AspNetCore.Authentication.JwtBearer by Microsoft
and go to startup.cs

we can see there is a difference in the response for GetUser, now we get 401 - unauthorize
why do you think that is?
because we need to actually send the token with the request... duaaa 😆
pay attention to the 'Get User With Bearer token': we need to add a header with key 'Authorization' and the value starts with 'Bearer', space and the token
so lets copy the token from the response (in login) and pasted it the headers in the 'Get User With Bearer token' call in postman
and walla...

removing/changing even one letter will result in 401 

that's it for authentication for now (we'll come back to this latter in the module)
next up: extension methods

45 - lest start with some basic refactoring using extension methods.
this is for DRY and making methods look cleaner and organized 
And extension methods enable us to add methods to existing types without creating a new derived type
or modifying the original type.

we'll extend IServiceCollection (from startup.cs) to contain all the services

create and goto Extensions/ApplicationServiceExtensions - for all application core stuff
create and goto Extensions/IdentityServiceExtensions - for all identity related stuff
go to startup.cs
