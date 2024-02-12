# Challenges: Express Basics

## Fake Login

- Create a new Express app named `login-demo`. Create a Git repository for it and push it to GitHub. We recommend you keep it separate from your regular challenges repository.
- The app should allow the user to log in, but since we are not working with **state** or **databases** yet, it will only demonstrate the basic functionality, and won't be a complete solution.
- It should have a Login page, a Home page, an Error page, and a My Account page.

### Routes

#### 1. `GET /`

- Shows a simple web page, welcoming the user. Please add **basic** style with CSS. Please don't add React; just a simple static HTML page is fine.
- The page should have a link to log in, which takes the user to `/login`

#### 2. `GET /echo/:message`

- A simple route which echoes the message sent by the user
- eg. if the user goes to `/echo/hello`, the route should respond with 'hello'
- **BUT** if the user asks for `/echo/secret`, the route should respond with 'the secret is... 42!'

#### 3. `GET /login`

- Shows the user a login page
- The page includes a header and a **form**
- The form includes inputs for email and password, and a submit button
- The form should be sent as a POST request to `/login`
- If the server responds with `success: true`, **redirect** to the My Account page
- If the server responds with `success: false`, **redirect** to the Error page

#### 4. `POST /login`

- Should receive a request to log in.
- Validation: checks the body for `email` and `password` fields.
- If any of these are missing or empty, respond with JSON `{"success": false}`
- If the email and password are not empty, check if they match `user@email.com` and `very-secret`. If they do, respond with JSON: `{"success": true}`
- If they don't, respond with JSON `{"success": false}`

#### 5. `GET /my-account`

- A simple dummy page
- Pretend it contains the user's actual account settings

#### 6. `GET /error`

- A simple error page
- Should display a message linke "Something went wrong with your request" or similar.
