Template.maCaveTemplate.helpers({
  messageStatusIsTrue: function() {
    return Session.get('messageSent');
    Session.set('messageSent', false);
  },
  

});