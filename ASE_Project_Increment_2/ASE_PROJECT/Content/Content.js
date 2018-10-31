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
                    var data1="";
                    input = document.getElementById('myinput');
                    filter = input.value.toUpperCase();
                    var str = resData[keys[i]].medData;
                    var str1 = str.toUpperCase();
                    var n = str1.search(filter);
                    var len = filter.length;
                    if(n != -1){
                        if(len == 0 ) {
                            $scope.html = "";
                            for(var i =0;i<keys.length;i++) {
                                 data1= [resData[keys[i]].medData];
                                $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                                    "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3><img src='https://barcode.tec-it.com/barcode.ashx?data=" + data1[i] +"&code=QRCode&dpi=96&dataseparator=' alt='Barcode Generator TEC-IT'/></div></div>";

                                document.getElementById('myHTML').innerHTML = $scope.html;
                            }

                        }
                         else {
                             data1= [resData[keys[i]].medData];
                            $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                                "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3><img src='https://barcode.tec-it.com/barcode.ashx?data=" + data1[i] +"&code=QRCode&dpi=96&dataseparator=' alt='Barcode Generator TEC-IT'/></div></div>";
                    }
                    }
                    else{
                        $scope.html="";
                        document.getElementById('myHTML').innerHTML = $scope.html;
                    }
                }
            };

            for(var i =0;i<keys.length;i++) {
                var data1= [resData[keys[i]].medData];
                $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                    "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3><img src='https://barcode.tec-it.com/barcode.ashx?data=" + data1[i] +"&code=QRCode&dpi=96&dataseparator=' alt='Barcode Generator TEC-IT'/></div></div>";

                document.getElementById('myHTML').innerHTML = $scope.html;
            }

        });
    });

