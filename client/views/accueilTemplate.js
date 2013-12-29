  Template.accueilTemplate.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
      var password = t.find('#account-password').value;
     

        // Trim and validate the input
        var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
        }
        var email1 = trimInput(email);
      
        var isValidPassword = function(val, field) {
          if (val.length >= 6) {
            return true;
          } else {
            Session.set('displayMessage', 'Votre mot de passe doit contenir au moins 6 caractères.')
            return false; 
          }
        }
      
     
    
      if (isValidPassword(password)) {
          Accounts.createUser({email: email1, password : password}, function(err){
              if (err) {
                // Inform the user that account creation failed
              } else {
                // Success. Account has been created and the user
                // has logged in successfully. 
              }
    
            });
      }
      return false;
    }
  });
 Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
      var stringArray = message.split('&amp;');
      //alert(stringArray[0] +" "+ stringArray[1]);
      $( "div.error-mdp" ).append("<span class=\"alert alert-error\">Votre mot de passe doit contenir au moins 6 caractères.</span>");

      Session.set('displayMessage', null);
    }
  });