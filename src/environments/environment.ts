// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: 'https://gers.com.co/backend/wp-json/jwt-auth/v1/token',
  base: 'https://gers.com.co/backend/wp-json/acf/v3',
  url: 'https://gers.com.co/backend/wp-json/wp/v2',
  menu: 'https://gers.com.co/backend/wp-json/menus/v1',
  domain: 'https://gers.com.co/backend',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
