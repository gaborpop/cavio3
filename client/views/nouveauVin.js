Template.tableauVinTemplate.events({
  'submit form': function(e) {
    e.preventDefault();
    
    
    
    
    var vin = {
      nomVin: $(e.target).find('[name=nom_vin]').val(),
      regionVin: $(e.target).find('[name=region_vin] :selected').text(),
      couleurVin: $(e.target).find('[name=couleur_vin] :selected').text(),
      appellationVin: $(e.target).find('[name=appellation_vin]').val(),
      statusVin: 'nonBu',
      noteVin: $(e.target).find('[name=note_vin] :selected').text().split(' : ')[1],
      anneeVin: $(e.target).find('[name=annee_vin]').val(),
      commentaireVin: $(e.target).find('[name=commentaireVin]').val()
    }
    $(e.target).find('[name=nom_vin]').val(""),
    $(e.target).find('[name=region_vin] :selected').text("Bordeaux"),
    $(e.target).find('[name=couleur_vin] :selected').text("Rouge"),
    $(e.target).find('[name=appellation_vin]').val(""),
      
    $(e.target).find('[name=note_vin] :selected').text("Note : 1"),
    $(e.target).find('[name=annee_vin]').val(""),
    $(e.target).find('[name=commentaireVin]').val("")
          
      
    Meteor.call('vin', vin, function(error, id) {
      

      Router.go('maCaveTemplate', id);
    });


  }
});