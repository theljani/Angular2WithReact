/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the src folder
      app: 'dist',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'core-js': 'npm:core-js',
      'systemjs': 'npm:systemjs',
      'reflect-metadata': 'npm:reflect-metadata',
      'zone.js': 'npm:zone.js',
      'redux': 'npm:redux',
      'ng2-cookies': 'npm:ng2-cookies',
      // other libraries
      'rxjs': 'npm:rxjs',
      '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './app.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-cookies': {
        main: './index.js',
        defaultExtension: 'js'
      },
      redux: {
        main: './dist/redux.js',
        defaultExtension: 'js'
      },
      'core-js': {
        main: './client/shim.min.js',
        defaultExtension: 'js'
      },
      'zone.js': {
        main: './dist/zone.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);