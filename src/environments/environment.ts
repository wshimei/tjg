// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDew-3PGEm6OjXnijgSvivO28SNX0Q5HR0',
    authDomain: 'tjg-angular.firebaseapp.com',
    databaseURL: 'https://tjg-angular.firebaseio.com',
    projectId: 'tjg-angular',
    storageBucket: 'tjg-angular.appspot.com',
    messagingSenderId: '928275550562'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
