 var ContentApp = angular.module("contentApp", []);
    ContentApp.controller("contentController", function ($scope, $sce) {
        //alert("hello");


        $scope.config = {
            apiKey: "AIzaSyDR-pOQU8in49ymSlBAOkElvuBizepLYnY",
            authDomain: "healthcare-cdms.firebaseapp.com",
            databaseURL: "https://healthcare-cdms.firebaseio.com",
            projectId: "healthcare-cdms",
            storageBucket: "healthcare-cdms.appspot.com",
            messagingSenderId: "478995691799"
        };
        firebase.initializeApp($scope.config);
        firebase.database().ref().once('value', function (snapshot){
            let resData = snapshot.val();
            let keys = Object.keys(snapshot.val());
            $scope.html = "";
            $scope.searchFunction = function(){
                console.log(resData[keys[0]].medData);
                html ="";
                for (var i = 0; i < keys.length; i++) {
                    var input;
                    input = document.getElementById('myinput');
                    filter = input.value.toUpperCase();
                    //alert(filter);
                    var str = resData[keys[i]].medData;
                    var str1 = str.toUpperCase();
                    var n = str1.search(filter);
                    var len = filter.length
                    if(n != -1){
                        //alert(len.toString());
                        if(len == 0 ) {
                            $scope.html = "";
                            for (var i = 0; i < keys.length; i++) {
                                $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                                    "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3>" + resData[keys[i]].medData + "</div></div>";
                                document.getElementById('myHTML').innerHTML = $scope.html;
                            }
                        }
                         else {
                             //alert("else part");
                            $scope.html = "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                                "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3>" + resData[keys[i]].medData + "</div></div>";
                            //alert("Hello");
                            document.getElementById('myHTML').innerHTML = $scope.html;
                    }
                    }
                }
            };

            for (var i = 0; i < keys.length; i++) {
                $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                    "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3>" + resData[keys[i]].medData + "</div></div>";
                document.getElementById('myHTML').innerHTML = $scope.html;
            }

        });
    });

