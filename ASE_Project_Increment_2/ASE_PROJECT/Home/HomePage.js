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
        $scope.metadata = {
            "Created By": $scope.createdBy,
            "Contact no": $scope.createdPhno,
            "Category": $scope.createdCategory,
            "Disease": $scope.createdDisease,
            "Diagnosis Cost": $scope.createdCost,
            "Prescription": $scope.createdPrescriptions
        };
        var fileUploader = document.getElementById('fileImageUploaded');
            var file = fileUploader.files[0];
            var storageRef = firebase.storage().ref('HealthcareImageStorage/'+file.name);
            storageRef.put(file, $scope.metadata).then(function(){
                console.log("Upload successfull");
            });
            storageRef.getMetadata().then(function(metadata){
            console.log(metadata);
            });
    }
    });
