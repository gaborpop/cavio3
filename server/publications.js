Meteor.publish('vins', function() {
  return Vins.find({userId: this.userId });
});