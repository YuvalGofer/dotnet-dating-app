validation:
_ we can add validation in different levels - db level - entity level (not really relevant in our case, cant validate hash/salt)
_ we'll use the level of the dto
_ we can validate before the dto reach the action(endpoint), it's a feature of the ApiController attribute
_ goto RegisterDto \* test the empty username (also with both username & password empty) in postman... we should get an status 400 error

next up: the login method
