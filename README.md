# Spotyapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To use the app

1. Login on spotify developer website

Login or create an account on [Spotify developer login/register](https://developer.spotify.com/dashboard/login)

2. Create an app to link with your project

Logged on spotify website go to [Spotify developer dashboard](https://developer.spotify.com/dashboard/applications) and create and app

3. Client and secret ID

Copy and paste the secret and client ID from spotify and replace the values on src/environments/environment.ts

4. Getting the access token

On postman make a GET request to: https://accounts.spotify.com/api/token` then configure the body in this way:

'Content-Type' : application/x-www-form-urlencoded
'grant_type', 'client_credentials')
'client_id', Your client ID)
'client_secret', Your client secret);

Replace the value accessToken with the token you get on response on src/environments/environment.ts

5. Enjoy the app

That's it you are ready to use this app

## For further help

If you find any opportunity to improve the app or any mistake don't hesitate email me: sergio8016@gmail.com
