(function() {
    const bitcoinAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    var app = angular.module('helloModule', []);

    var HelloController = function($scope, $http) {

        var onBitcoinResult = function(response) {
            $scope.bitcoin = response.data.bpi.USD.rate;
        }

        var onError = function(reason) {
            $scope.bitcoin = "0.0000000001"
            console.log(reason);
        }

        $http.get(bitcoinAPI).then(onBitcoinResult, onError);
        $scope.hello = "Hello!";
        $scope.currency = "$";

        $scope.search = function(currency) {
            alert('Do something with ' + currency);
        }
    }

    app.controller('HelloController', ['$scope', '$http', HelloController]);

}());