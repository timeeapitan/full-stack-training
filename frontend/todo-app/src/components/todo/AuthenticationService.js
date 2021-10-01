import React, { Component } from 'react';

class AuthenticationService extends Component {
  registerSuccessfulLogin(username, password) {
    // console.log('registerSuccesfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) {
      return false;
    }

    return true;
  }
}

export default new AuthenticationService();

// For React Components, we export the class directly.
// For Helper Services, we export an INSTANCE of the class - an object
// So, we create an object (new AuthenticationService())
