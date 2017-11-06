// configure module
myApp.config(function($stateProvider, $httpProvider) {

    // define routes
    var homeState = {
        name: 'home',
        url: '/',
        template: '<h3>Welcome Home!</h3>'
    }

    var listState = {
        name: 'list',
        url: '/list',
        component: 'list'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(listState);
});