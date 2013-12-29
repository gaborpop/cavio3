Template.tableauVinTemplateRight.helpers({
  vinsBus: function() {
    return Vins.find({statusVin : 'Bu'}, {sort: {submitted: -1}});
  },
  submittedModifiedText: function() {
    var newDate = new Date(this.modifiedStatus);
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var year = newDate.getFullYear()
    
    return (day + "." + month + "." + year); 
  }

  
});  

Template.tableauVinTemplateRight.events ({
  'click .modifyStatus': function(e) {
    e.preventDefault();
   
    Meteor.call('modifyS', this._id);
  }
  
  
});  