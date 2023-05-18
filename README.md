# Tech-Blog-MVC

## Description

For the those interested in the tech sphere and would like to post blogs where people can comment on them this is the application for you. It was built so that you can log into an account, create posts and comment on those posts.

## Installation

Once you have the code open your integrated terminal and run "npm i" in order to download all the needed dependancies. Then in your terminal sign into your sequal and run "SOURCE ./db/schema.sql". From there on the root level add a ".env" file and include the following information.

"DB_NAME"="blog_db"
"DB_USER"="(whatever your user is usually it is ROOT)"
DB_PASSWORD="(your password)!"
SESSION_SECRET="super Secret"

From there run node index.js from the root level in order to get the server running. By default the server runs on port number 3001. If there are no error messages then you can open any of your browsers and from there type "http://localhost:3001/" and you should be brought to the log in page.

## Usage

If you have the server up and running and you are on the login page you can click sign up in order to go to the sign up page and create an account. Add a username, email, and password then click "create account". Once you have successfully created an account it will take you to the home page where all of the posts are. If you would like to create a new post then click the create post button. This will take you to the post create page where you can add the info you would like for the title. Once it is created it will be added to the home page. If you would like to edit a post click on the card associated with the post and it will take you to the edit page. If you would like to remove it then on the home page you can click the delete button.

![log in page](assets/Screenshot%202023-05-17%20at%209.25.34%20PM.png)
  ![home page](assets/Screenshot%202023-05-17%20at%209.26.08%20PM.png)
  ![create post page](assets/Screenshot%202023-05-17%20at%209.26.15%20PM.png)

## Credits

Insomnia - https://docs.insomnia.rest/
Node.js - https://nodejs.org/en
mySQL - https://www.mysql.com/
dotenv - https://www.npmjs.com/package/dotenv
Express - https://www.npmjs.com/package/express
Router - https://www.npmjs.com/package/router\
Handlebars - https://handlebarsjs.com/

## License

MIT License

Copyright (c) 2023 Alex Horning

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
