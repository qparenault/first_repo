// <reference path="angular.js"/>

var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http', function($scope,$http){

    /*
myApp.controller('AppCtrl', ['$scope','$http', '$serviceName', function($scope,$http, $server){
                
    $scope.docs =  $serviceName.GetPatientList();

=> CREATE A CUSTOM SERVICE THAT DOES A POST REQUEST TO THE DB AND THEN CALL IT HERE WITH PARTICULAR ARGUMENTS

    $http.get("/contactlist").then(successCallBack,errorCallBack);     // Sends a GET request to the serveur (server.js)
        
    function successCallBack(response){
        $scope.docs = response.data;         // $scope => To pass data to the HTML file
    };                                       // response.data => To get the data from response

    function errorCallBack(error){
        console.log(error);
    }; 
    */
    
    $scope.queryDB = function(){                    // Gets the input value from the html file
        var filter = {[$scope.key1] : $scope.value1, [$scope.key2] : $scope.value2};  // Creates a variable in JSON format
                                                    // $scope gets the variables keys and values from the HTML file
                                        
        if (!($scope.key2 && $scope.value2)){      
                filter = {[$scope.key1] : $scope.value1};  
            }     

    $http.post('/PatientList', filter).then(successCallBack,errorCallBack); 
        function successCallBack(response){// response.data => To get the data from response
            res = response.data;         // $scope => To pass data to the HTML file
            $scope.docs = res.result;
            $scope.num = res.YesNo;
        };                                       
        function errorCallBack(reason){
            $scope.error = reason.data;
            console.log("ERROR");
        }; 
    };
}]);

