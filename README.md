# Hand Me Up
http://www.handme-up.com

The fight to reduce food wastage and combat world hunger starts with you.

Our **mobile app** aims to organize motivated volunteers to deliver food that would otherwise be wasted by markets and restaurants to local shelters and food pantries. It's easy to sign-up, find an open delivery, and serve your community. Our **web app** aims to connect food markets and restaurants with the local food pantrys, faccilitaing food distribution.

## Mechanisms
Food givers can register to give food through our site, and can easily sumbit food lists and view previous delivery requests. To keep from biased and selective sending, the food givers do not know the exact drop-off location through this site. Food recievers can enter their organization's information to be the recipient of these deliveries. This data is written to a database, and the mobile app reads this and sends nearby and open deliveries to the volunteers, who can accept and easily navigate between the two locations.

## How it's built
The App:
Our team used the Apache [Cordova](https://cordova.apache.org/) framework for web-based mobile applications. Using a basic [template](http://market.ionic.io/starters/event-app-and-maps) from the [Ionic Framework](http://ionicframework.com/), and several APIs such as google-maps to make a simple, feature rich app for volunteers. We intended to implement an automatically refreshing open delivery list with entries from the database on Azure, but were unable to fully implement it on time.

The Website:
We modified and linked existing bootstrap templates to make handme-up.com, our service's home base. Microsoft's [Azure](https://azure.microsoft.com/en-us/) cloud computing platform to write and read relevant information to a database. This includes data on the food Giver and Reciever registrations, delivery data and volunteer user location.

## How to edit
Editing the app is a bit complicated. First you need npm and Cordova, and you need to install the Ionic framework. It is much easier to run on the command line, but you can also run Ionic applications using the [Ionic Lab](http://lab.ionic.io/). More details on how to edit this App may come soon. Editing the website is much more simple. Everything you need is in the Web folder.

##### These software solutions were "hacks" made for the HackPrinceton 2016 event. More info [here](https://hackprinceton.com/)
