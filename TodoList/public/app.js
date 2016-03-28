/**
 * Created by Qjiang on 3/25/2016.
 */
var todo=angular.module('todo',[]);

todo.controller("todoController",function($http)
{
    var controller = this;
    $http.get("http://localhost:3000").success(function (data) {
        controller.items = data;
    })
})