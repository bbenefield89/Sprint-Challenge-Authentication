<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- Middleware: In the simplest of terms, middleware is just a function that is ran at a specific point in our codes life-cycle. For Express, we use middleware to handle data or check data before executing our routes be it GET, POST, etc. With libraries like Mongoose we use middleware to handle our data either before or after it interacts with the database,

- Sessions: Sessions in Express are a way for us to authenticate users after they have already logged into our applications. We set a cookie on the client and when the user makes a request to our server we check if the cookie and the session match. If not we send them packing.

- Bcrypt: Bcrypt is a powerful library that simplifies user-auth security for us. While bcrypt does not necessarrily need to be used specificly for passwords, this is where it really shines. With Bcrypt we can easily hash and salt passwords and compare plain text with the hashed versions.

- JWT: Json Web Tokens are another version of authentication and cryptography. JWT's are long strings made up of three sections delimited by a period(.). The three sections are the HEADER, includes things like the algorithm used and the data type, the PAYLOAD, this is where the users information is stored so take care to not store anything sensitive in here, and the SIGNATURE, this is where to de/encrypting information is living including your secret. These three parts come together to create a string like "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

2.  What does bcrypt do in order to prevent attacks?
> To prevent attacks Bcrypt hashes, and optionally salts, plain text strings. Instead of saving our users data in plain text we are now creating a jumbled up mess of alphanumeric characters. This mess of text is NOT the password. What this means is that the hashed password entered as credentials will not log a user in. Intsead we still use the plain unhashed password and use a method off of the bcrypt library to compare the plain password with the hashed password.

3.  What are the three parts of the JSON Web Token?
- Header: Algorthm and data type information

- Payload: Typically users information, this can be anything you want to store in the token

- Signature: De/encrypting information is in here along with your secret. All of this comes together to form our token here.