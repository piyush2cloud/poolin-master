angular.module('poolin.controllers',[])

    .controller("myCtrl", function ($scope , $timeout,$window) {

        $scope.getposition = function(){
            console.log($window.scrollY);

        }


        setInterval(function(){

            if($window.scrollY > 300){
                $scope.navcolor = 1;
            }
            console.log($window.scrollY);



        }, 100)


        $scope.linewidth = 0;
        $scope.hideline = 0;
        $scope.showtagline = 0;
        $scope.navcolor = 0;


        $timeout(function () {
            $scope.linewidth = !$scope.linewidth;
            $scope.hideline = !$scope.hideline;
        }, 500);

        $timeout(function () {
            $scope.showlogo = 1;

        }, 1);

        $timeout(function () {
            $scope.showtagline = 1;

        }, 3000);


    $scope.firstDivHide = 0;
    $scope.secondDivHide = 0;
    $scope.firstDivShow = 1;
    $scope.secondDivShow = 1;

        $scope.showline =1;
        $scope.hideline = 0;

    $scope.fadeRight = function () {
        $scope.secondDivHide = 1;
        $scope.firstDivShow = 1;
        $scope.firstDivHide = 0;
    }

    $scope.fadeLeft = function () {
        $scope.firstDivHide = 1;
        $scope.secondDivShow = 1;
        $scope.secondDivHide = 0;
    }


});
