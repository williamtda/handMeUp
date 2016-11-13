/*
name_giver:
Address_gover
phone_giver
food
name_reciever



*/

define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        name: 'Special Event',
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        lat: 51.090209,
        lng: 6.585863,
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        name: 'Special Event',
        city: 'Straußfurt',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.163893,
        lng: 10.986114,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        name: 'Special Event',
        city: 'Gebesee',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.114004,
        lng: 10.933228,
        wheelchair: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        name: 'Special Event',
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        name: 'Special Event',
        city: 'Schwabhausen',
        district: 'Erfurt',
        street: 'Frühlingsstraße',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 48.302842,
        lng: 11.352900,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 6,
        name: 'Science Event',
        city: 'Hachelbich',
        district: 'Kyffhäuserland',
        street: 'Oberdorf',
        number: '10',
        zip: '99707',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 51.344143,
        lng: 10.966972,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 7,
        name: 'Science Event',
        city: 'Berka',
        district: 'Sondershausen',
        street: 'Wittchental',
        number: '10',
        zip: '99706',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 50.941998,
        lng: 10.073971,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 8,
        name: 'Science Event',
        city: 'Roßla',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.463053,
        lng: 11.069677,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 9,
        name: 'Science Event',
        city: 'Kelbra',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.434340,
        lng: 11.101727,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        name: 'Science Event',
        city: 'Tilleda',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.418927,
        lng: 11.143613,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 11,
        name: 'Sport Event',
        city: 'Neuss',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.204197,
        lng: 6.687951,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 12,
        name: 'Sport Event',
        city: 'Krefeld',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.333347,
        lng: 6.584587,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 13,
        name: 'Sport Event',
        city: 'Kempen',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.361224,
        lng: 6.428719,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 14,
        name: 'Sport Event',
        city: 'Mühlheim an der Ruhr',
        district: 'Duisburg',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.421209,
        lng: 6.882591,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 15,
        name: 'Sport Event',
        city: 'Kreuzberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.497492,
        lng: 13.395252,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 16,
        name: 'Sport Event',
        city: 'Charlottenburg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.515881,
        lng: 13.295689,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 17,
        name: 'Sport Event',
        city: 'Schöneberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.480977,
        lng: 13.369846,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 18,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 19,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 20,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 21,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 22,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 23,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 24,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 25,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 26,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 27,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 28,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 29,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 30,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }];

      /* Pages that appear on the side bar for extra information */
      this.pages = [{
        alias: 'about',
        content: '<h1>About HandMeUp</h1><p><strong>The fight to reduce food wastage and combat world hunger starts with you.</strong></p><center><img src="https://raw.githubusercontent.com/willstreet/handMeUp/master/Web/images/logo.png" width="200px" height="auto"></center><p>Our <strong>mobile app</strong> aims to organize motivated volunteers to deliver food that would otherwise be wasted by markets and restaurants to nearby food shelters and soup kitchens. Local communities need food, and markets need a way to deliver them. That\'s where you come in.</p><p>Select from a list of new deliveries on your dashboard that local markets have set up with food pantries. Google Maps directions are provided, as well as any relevant information about the two parties.</p><p>If you run a restaurant, supermarket, or food shelter, apply to this service on <a href="http://www.handme-up.com">our website</a>',
        title: 'About',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>Contact</h1><p>Creators: Goutham Muppala, William Alexander and David Sevilla</p><p>Phone: (908) 300-7887</p><p>Click on "report", found on the bottom right of any open delivery, to report an issue</p>',
        title: 'Contact',
        icon: 'ion-paper-airplane'
      }];
    }
  ]);
});
