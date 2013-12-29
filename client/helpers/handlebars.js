Handlebars.registerHelper('compareStatus', function(n) {
  
  if (n === 'Bu') {
   return true;
  }
});

Handlebars.registerHelper('couleurDuVin', function(t) {

  
  if (t === 'Rouge') {
   return true;
  }
  
});
Router.configure({
  autoRender: false,
  loadingTemplate: 'loading',
   before: function () {
    var user = Meteor.user();
    if (user) {
      this.render('maCaveTemplate');
      this.stop(); // stop the rest of the controller from running
    }
     else
      return 'accessDenied';
  }
});

