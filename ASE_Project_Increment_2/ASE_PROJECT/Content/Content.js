var ContentApp = angular.module("contentApp",[]);
ContentApp.controller("contentController", function ($scope, $sce) {

    $scope.config = {
        apiKey: "AIzaSyDR-pOQU8in49ymSlBAOkElvuBizepLYnY",
        authDomain: "healthcare-cdms.firebaseapp.com",
        databaseURL: "https://healthcare-cdms.firebaseio.com",
        projectId: "healthcare-cdms",
        storageBucket: "healthcare-cdms.appspot.com",
        messagingSenderId: "478995691799"
    };
    firebase.initializeApp($scope.config);
    firebase.database().ref().once('value', function(snapshot){
        let resData = snapshot.val();
        let keys = Object.keys(snapshot.val());
        $scope.html = "";
        console.log(keys.length);
        for(var i =0;i<keys.length;i++) {
            $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                "<div id='demo' class='infoStyle text-center'><h4>Prescription Information:</h4>"+resData[keys[i]].medData+"</div></div>";
           document.getElementById('myHTML').innerHTML = $scope.html;
        }
    });
});