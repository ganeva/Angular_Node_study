/**
 * Created by Qjiang on 3/24/2016.
 */
var app=angular.module("app",['ngRoute'])
.config(
    ['$routeProvider',function($routeProvider){
        $routeProvider
            .when("/todoList",{
                templateUrl : "todoList/index.html",
                controller:"todoController",
            })
            .when("/Done",{
                templateUrl : "Done/index.html"
            })
            .when("/",{
                templateUrl : "todoList/index.html",
                controller:"todoController",
            })
            .otherwise({redirectTo:"/"});
    }]
);
