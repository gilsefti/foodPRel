mainApp.controller('FBLoginCtrl', function ($scope, UserService, $state) {

    $scope.fbLogin = function () {
    
        if (!window.cordova) {
            var appId = "509210995889450";//prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }
        var success = function () {
            alert(JSON.stringify(response));
            $state.go("LB");
        }
        var fail = function (response) {
            alert(JSON.stringify(response));
        }

        facebookConnectPlugin.login([], success, fail);

    }



    $scope.logout = function () {
        facebookConnectPlugin.logout(success, fail);
        var success = function (response) {


        }
        var fail = function (response) { alert("logout failed") }
    }
});
