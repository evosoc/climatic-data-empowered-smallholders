# Climatic Data (em)powered Smallholders
This is a project for the IBM Call for Code. The objective of this demo is to show how timely weather data mixed with 
community sourced advice can help the productivity of small holder farmers.  

WARNING:  
This is not production code.  Do not use for production purposes without modification. This codebae does not represent how a
production version would/should be developed and is used for example purposes. 

## Code Overview
This is a demo version of the application to act as a working MVP.  Some features have been mocked and others are lives sources.

The basic tech stack is:
- ReactNative
- Expo.io development tools
- IBM Cloud Functions for backend data
- The Weather Company with live geo located weather data.


The mobile app connects to IBM Cloud functions that retrieves data from The Weather Company an IBM service.  

### Mobile Application - WeatherDirect
The mobile application has been written with React Native and published using Expo.  The application can be viewed 
using the expo app at:

  [https://expo.io/@stanacton/weather-direct](https://expo.io/@stanacton/weather-direct)
  
Instructions on trying the app are:

1. Download the Expo app for [iOS](https://itunes.apple.com/app/apple-store/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
1. Visit [https://expo.io/@stanacton/weather-direct](https://expo.io/@stanacton/weather-direct)
1. If on Android, open the Expo app and scan the QR code on the page.  If on iOS, you will have to "Request a link"

Note: That have been some issues with Expo freezing at the splash screen for this app on Android.

The source code can be viewed in the repository. 

### The Weather Service
The retrieve the live weather data for each user, an IBM Cloud Function has been deployed for the mobile application to connect to.  




