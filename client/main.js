Meteor.subscribe('vins');
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
}

Hooks.onLoggedIn = function () {
    Router.go('maCaveTemplate');
}

Hooks.onLoggedOut = function () {
    Router.go('/');
}


 