angular.module('poolin.controllers', [])

    .controller("myCtrl", function ($scope, $timeout, $window, $document) {


        $scope.linewidth = 0;
        $scope.hideline = 0;
        $scope.showtagline = 0;
        $scope.navcolor = 0;
        $scope.appendnumber="+91";



        $(document).ready(function(){
            $(window).scroll(function() { // check if scroll event happened
                if ($(document).scrollTop() > 350) { // check if user scrolled more than 50 from top of the browser window
                    $(".navbar-fixed-top").css("background-color", "#0C77AD"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".hidelogo").css("opacity", "1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                } else {
                    $(".navbar-fixed-top").css("background-color", "#2E3842"); // if not, change it back to transparent
                    $(".hidelogo").css("opacity", "0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                }
            });
        });

       /* angular.element($window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                alert('bottom reached');
            }
        });*/



      /*  $scope.$watch(function () {
            return $window.scrollY;
        }, function (scrollY) {
            if(scrollY > 200){
                $scope.navcolor = 1;

            }
        });*/


        $timeout(function () {
            $scope.linewidth = !$scope.linewidth;
            $scope.hideline = !$scope.hideline;
        }, 500);

        $timeout(function () {
            $scope.showlogo = 1;

        }, 1);

        $timeout(function () {
            $scope.showtagline = 1;
            $scope.appendnumber="+91";


        }, 3000);


        $scope.firstDivHide = 0;
        $scope.secondDivHide = 0;
        $scope.firstDivShow = 1;
        $scope.secondDivShow = 1;

        $scope.showline = 1;
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
