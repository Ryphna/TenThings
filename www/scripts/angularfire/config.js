angular.module('firebase.config', [])
  .constant('FBURL', 'https://blistering-heat-3375.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
