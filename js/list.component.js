// initiate list component
myApp.component('list', {
    template: '<h3>Let\'s take a look at some GitHub repos...</h3>' +
        '<div ng-if="loading">' +
        '<img src="./img/Gear.svg">' +
        '</div>' +
        '<ul ng-if="repos">' +
        '<li ng-repeat="repo in repos">{{ repo.id }}. ' +
        '<a target="_blank" href="{{ repo.html_url }}">{{ repo.name }}</a> ' +
        'by ' +
        '{{ repo.owner.login }}</li>' +
        '</ul>' +
        '<p ng-if="error">ERROR!</p>',
    controller: function($http, $scope) {
        $scope.repos = undefined;
        $scope.error = undefined;
        $scope.loading = true;

        // get data from public github api
        $http({
            method: 'GET',
            url: 'https://api.github.com/repositories'
        }).then(function successCallback(response) {
            $scope.repos = response.data;
            $scope.loading = false;
        }, function errorCallback(error) {
            $scope.loading = false;
        });
    }
});