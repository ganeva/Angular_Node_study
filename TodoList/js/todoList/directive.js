/**
 * Created by Qjiang on 3/25/2016.
 */
angular.module('app')
.directive("nwItem",function(){
    return{
        scope:{
            itemValue:'='
        },
        restrict:'A',
        replace:true,
        template:"<p ng-class=\"{'color-red':itemValue.priority==='High','color-blue':itemValue.priority==='Regular','color-green':itemValue.priority==='Low'}\">{{itemValue.name +\" \"+itemValue.time.toString()}}</p>",
        link:function(scope,element,attrs){
        }
    };
});