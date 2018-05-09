var patientMS = angular.module('pms', ['ngRoute']);

patientMS.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './html/home.html',
            controller: 'homeController'
        })
        .when('/results', {
            templateUrl: './html/results.html',
            controller: 'resultsController'
        })
        .when('/addentry', {
            templateUrl: './html/addentry.html',
            controller: 'addController'
        })
        .when('/records', {
            templateUrl: './html/results.html',
            controller: 'recordsController'
        })
}]);

// Home Controller
patientMS.controller('homeController', ['$scope', 'linkService', function($scope, linkService){
    $scope.search = "";
    $scope.$watch('search', function() {
        localStorage.search = $scope.search;
    });
}]);

// Results Controller
patientMS.controller('resultsController', ['$scope', 'linkService', function($scope, linkService){
    if(localStorage.patients) {
        $scope.patients = JSON.parse(localStorage.patients);
    }else {
        $scope.patients = [];
    }
    $scope.search = localStorage.search;
}]);

// Records Controller
patientMS.controller('recordsController', ['$scope', 'linkService', function($scope, linkService){
    if(localStorage.patients) {
        $scope.patients = JSON.parse(localStorage.patients);
    }else {
        $scope.patients = [];
    }
}]);

// Add patient Controller
patientMS.controller('addController', ['$scope', 'linkService', function($scope, linkService){
    if(localStorage.patients) {
        $scope.patients = JSON.parse(localStorage.patients);
    }else {
        $scope.patients = [];
    }
    $scope.firstname="";
    $scope.lastname="";
    $scope.age="";
    $scope.sex="";
    $scope.city="";
    $scope.state="";
    $scope.status="";
    $scope.bloodgroup="";
    $scope.birthdate="";
    $scope.validate = function(){
        
        if($scope.name != "") {
            $scope.patients.push({'firstname':$scope.firstname, 'lastname':$scope.lastname, 'age':$scope.age, 'sex':$scope.sex, 'status':$scope.status, 'city':$scope.city, 'state':$scope.state, 'birthdate':$scope.birthdate, 'bloodgroup':$scope.bloodgroup});
            $scope.firstname="";
            $scope.lastname="";
            $scope.age="";
            $scope.sex="";
            console.info($scope.patients);
            localStorage.patients = JSON.stringify($scope.patients);
        }
        return true;
    };
}]);

// Custom Servcie
patientMS.service('linkService',[function() {
    
}]);


patientMS.directive('listResults', function() {
    return {
        restrict : 'AEC',
        templateUrl: './html/template.html',
        replace : true,
        scope: {
            patientsObject: '='
        
        }
    }
});




