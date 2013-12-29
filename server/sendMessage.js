Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster%40cavio.mailgun.org:8qnke-7gkfp6@smtp.mailgun.org:25';
});


Meteor.methods({
  'sendMessage': function ( mailM, fromM, messageM) {
      this.unblock();
      Email.send({
        from: mailM,
        to: "popgabor@gmail.com",
        subject: "Hello from "+fromM,
        text: messageM
      });
    
      
       
    
   }
});
