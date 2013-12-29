Vins = new Meteor.Collection('vins');
Vins.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  vin: function(postAttributes) {
    var user = Meteor.user();
  
      

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

   


    // pick out the whitelisted keys
    var vin = _.extend(_.pick(postAttributes, 'nomVin', 'regionVin', 'couleurVin','appellationVin','noteVin','anneeVin','commentaireVin'), {
      userId: user._id, 
      author: user.username, 
      statusVin: 'nonBu',
      submitted: new Date().getTime(),
      modifiedStatus: new Date().getTime()
    });

    var vinId = Vins.insert(vin);
    return vinId;
    
  },
  modifyS: function(vinId) {
    
    
    
    var vin1 = Vins.findOne(vinId);
   
    if (vin1.statusVin === 'nonBu') {
        Vins.update(vin1._id, {
          $set: {statusVin: 'Bu', modifiedStatus: new Date().getTime() }
        });
    }
    else {
       Vins.update(vin1._id, {
          $set: {statusVin: 'nonBu'}
        });
    };
  }
 
});