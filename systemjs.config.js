/**
 * System configuration for Angular 2 Timesheet Demo
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'src':                        'src',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    'moment':                     'node_modules/moment'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'src':                        { defaultExtension: 'js' },    
    'rxjs':                       { defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
