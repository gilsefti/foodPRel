
mainApp.controller("lunchBoxCtrl", function ($scope, $state, LBDishes, UserService) {
    //$scope.props.Title = "Select a dish";
    $scope.LBPlates = {};
    var promiseA = UserService.initUser();
    promiseA.then(function () {
        LBDishes.getDishes(UserService.user().ID).then(function (d) {
            $scope.LBPlates = d;
            for (var i = 0; i < $scope.LBPlates.length; i++) {
                $scope.LBPlates[i].imgLink = serverUrl + "api/Files/DishFiles/" + $scope.LBPlates[i].ID;
                //Do something
            }
        });
    }).catch(function (er)
    { alert(er) });
  
    //dataService.dishModel = {};


    $scope.addDish = function () {
        $state.go("newDish");
    };
    $scope.getDish = function (dish) {
        dataService.dishModel = dish;
        $state.go("addLB");
    };
});

