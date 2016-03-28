/**
 * Created by Qjiang on 3/25/2016.
 */
angular.module('app')
.controller('todoController',['$scope','$http',function($scope,$http){
    var url="http://localhost:3000";
    $scope.saveItem = function(save){
        $http.post(url+"/add",{name:save.name,priority:save.priority,time:Date.now()}).success(function(){
            loadItem();
        });
    };

    function loadItem() {
        $http.get(url).success(function (items) {
            $scope.items = items;
        });
    }
    loadItem();
}]);