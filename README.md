Timer Challenge
===============

This small project was requested by a prospective client to test Angular 
coding skills. I thought it was useful enough to include here.

The solution depends on .NET Core 2.2 for the server.  It has been tested on 
Windows and MacOS.

The app must be run in development mode.  It can be run in Visual Studio in the
normal way.

To run from the command line:

````
dotnet run
````

To run in the development environment, set the ASPNETCORE_ENVIRONMENT environment
variable to `Development`.

Specification
=============

Angular Coding Challenge: Timer
-------------------------------------------

### Requirements

- Create an Angular web applicationthat will start and display a countdown timer.
- The timer should countdown from a specified time which is entered by the user. 
- The time entered should be greater than two minutes.The timer should refresh at least every second and the current countdown time should be displayed onthe page. 
- When each minute elapses the application should display a notification tothe user.
- Each notification should be logged by a backend API.
- When the timer completes (reaches zero) this notification log should be displayed to the user.
- Use any version of Angular/AngularJs.
- The backend api should be a Restful API