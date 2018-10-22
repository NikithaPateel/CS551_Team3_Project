var ContentApp = angular.module("contentApp",[]);
ContentApp.controller("contentController", function ($scope, $sce) {
    var count = 3;
    $scope.html = "";
    for (var i = 1; i <= count; i++) {
        $scope.html = $scope.html + "<div class='imageBlock' ng-click='work()'><img src='" + i + ".jpg' class='imgStyle'>" +
            "<div id='demo' class='infoStyle text-center'>" +
            "Name: Sirisha<br>Disease:Nothing<br>Location:<span id='location'>Kansas City</span></div></div>";
        $scope.myHTML = $sce.trustAsHtml($scope.html);
    }
    
    $scope.work = function () {
        
    }

});