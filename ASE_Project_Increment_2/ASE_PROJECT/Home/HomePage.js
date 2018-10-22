var myApp = angular.module("homeApp",[]);
myApp.controller("homeController", function($scope) {
    $scope.config = {
        apiKey: "AIzaSyAQfF0iiIwg1nFOtDdePH2g5Yo97aHt_BY",
        authDomain: "fir-2e680.firebaseapp.com",
        databaseURL: "https://fir-2e680.firebaseio.com",
        projectId: "fir-2e680",
        storageBucket: "fir-2e680.appspot.com",
        messagingSenderId: "336662025492"
    };
    firebase.initializeApp($scope.config);
    $scope.uploadImage = function() {
<<<<<<< HEAD
        $scope.metadata = {};
            var fileUploader = document.getElementById('fileUploader');
=======
        $scope.metadata = {
            "Created By": $scope.createdBy,
            "Contact no": $scope.createdPhno,
            "Category": $scope.createdCategory,
            "Disease": $scope.createdDisease,
            "Diagnosis Cost": $scope.createdCost,
            "Prescription": $scope.createdPrescriptions
        };
        var fileUploader = document.getElementById('fileImageUploaded');
>>>>>>> e84dd9e2ef4c50ec2a0d85cd6031782346537c91
            var file = fileUploader.files[0];
            var extractimage = document.getElementById("fileImageUploaded");
            var imgfile = extractimage.files[0];
            var storageRef = firebase.storage().ref('HealthcareImageStorage/'+file.name);
            var extractedData ="";
            storageRef.put(file, $scope.metadata).then(function(){
                Tesseract.recognize(imgfile.name)
                    .then(function(result) {
                        firebase.storage().ref('HealthcareImageStorage/'+file.name).getDownloadURL().then(function(url) {
                            if (extractedData!== "") {
                                 var jsonData = {
                                 imageURL: url,
                                 medData: extractedData
                                };
                                console.log(url);
                                firebase.database().ref().push(jsonData);
                                console.log("data inserted");
                            }
                        });
                        extractedData=result.text;
                     }).progress(function(result) {
                    document.getElementById("ocr_status")
                        .innerText = result["status"] + " (" +
                        (result["progress"] * 100) + "%)";
                });
            });
            storageRef.getMetadata().then(function(metadata){
            console.log(metadata);
            });
        }
    });
