This is a simple restful SPA webapp, that consists of two interfaces: one that receives a numeric input and store it in a database, and other that receives a number list (corresponding to id's in the numbers database) and presents the sum of the numbers stored in respective id's.

This was developed for practicing/demo purposes, using the following technologies: HTML, CSS, Javascript, React, Axios, Asp.NET Core(C#), MySql.

The UI receives a number (or a number list), then sends the data in JSON format via a POST request to the ASP.NET web api's, which stores the number in the database or return the sum of the values correspondant to the id list.

The app was structured following the MVC architechture. In Model folder, you can find the database script. The form fields are validated using regEx.

Everything was developed and tested with Visual Studio (running the servers from within the IDE), in localhost; so if you want to run this in your PC, you should check the code for port numbers and the database authentication data.
