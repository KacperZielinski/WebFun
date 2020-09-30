(function() {

    var app = angular.module('helloModule', []);

    var HelloController = function($scope) {
        $scope.hello = "Hello!";
    }

    app.controller('HelloController', HelloController);
    
}());