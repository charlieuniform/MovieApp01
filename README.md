# MovieApp01
A simple static HTML movie application with optional messaging for digital screens. Great for use with charlieuniform (Coming soon, currently in Beta.)

This app displays a movie of your choice that fills the entire screen of your digital display. It optionally can show a message timed to fade in and out with the movie loop.

This is a rudimentary content web application that can be shown on a digital screen. Great for use with [Charlie Uniform](https://charlieuniform.com).

You can use it standalone with a browser on your screen if you like. But you can swap it remotely with [Charlie Uniform](https://charlieuniform.com).

## CharlieUniform
ChalieUniform is an application (Coming soon. Currently in Beta) tha lets you manage html content on unattended digital screens. Virtually any HTML content will work on any combination of hardware and browser. 

It is just a browser in full screen mode with your content. You can change that content from anywhere using charlieunifrom without touching the screen itself.

For info about CharlieUniform contact charlieuniformco+info@gmail.com.

## CharlieUniform
[Charlie Uniform](https://charlieuniform.com) is an app for your PC, tablet or cellphone that lets you manage HTML content on unattended digital screens. Virtually any HTML content will work on any combination of hardware and browser. 

It is just a browser in full screen mode with your content. You can change that content from anywhere using Charlie Uniform without touching the screen itself.

For info about CharlieUniform contact charlieuniformco+info@gmail.com.

## Usage
If you create several copies of the app, each with a different movie clip then you can swap them periodically with the [Charlie Uniform](https://charlieuniform.com) app. Your digital screen becomes effective for targeting your audience thruout the day. Maybe a movie on your middle screen between twos screens of your textual menu. The movie in the morning could focus on your breakfast menu items. THe movie in the middle of the day your lunch menu and dinner menu in the evening. Swap them with the [Charlie Uniform](https://charlieuniform.com) app.

## To Change for your Menu
Download the zipfile from github. Extract into you filesystem. The top level directory of the app should be MovieApp01-master, we will change this later. The top level directory or folder name will be the name of the content app in [Charlie Uniform](https://charlieuniform.com). 

You can change the movie by editing the index.html file. Be sure to change the type if it is not a webm movie.
```
<video class="movie" id="movie" autoplay loop>
	<source src="video/<your movie here>" type="video/webm">
</video>
```

Now name the top level folder something to help you know which menu you are using. Say you want to display on one of your digital screens in the morning a movie fetauring your breakfast menu. Out the new movie in the video folder and change the index.html file as above. Now rename the top level directory from "MenuApp01-master" to "BreafastMovie". At this point you can drag and drop the new BreafastMovie directory to [Charlie Uniform](https://charlieuniform.com) app. It is now a content application for use on any of your screens managed by [Charlie Uniform](https://charlieuniform.com). In the morning set the BreafastMovie content app to any of the screens that you want to display it on.


