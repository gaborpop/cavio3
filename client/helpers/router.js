/* Meteor.Router.add({
  '/': 'accueilTemplate',
  '/contact': 'contactForm',
  '/macave':'maCaveTemplate',
  '/macave/:_id/edit': {
    to: 'vinEdit',
    and: function(id) { Session.set('currentVinId', id); }
  },
  '/reset-password/:_id': {
    to: 'passwordRecovery',
    and: function(id) { Session.set('resetPassword', id); }
  }

  
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  }
})
Meteor.Router.filter('requireLogin', {only: 'maCaveTemplate'});   */
Router.map( function () {
  
  this.route('accueilTemplate', {
    path: '/'
  });
  this.route('contactForm', {
    path: '/contact'
  });
   this.route('maCaveTemplate', {
    path: '/macave'
  });
  this.route('vinEdit', {
  // get parameter via this.params
    path: '/macave/:_id/edit',
    data: function(id) {
      Session.set('currentVinId', this.params._id);
    }
  });
  this.route('passwordRecovery', {
  // get parameter via this.params
    path: '/reset-password/:_id',
    data: function(id) {
      Session.set('resetPassword', this.params._id);
    }
  });
  
  
});

















