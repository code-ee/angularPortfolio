app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Portfolio';

    $scope.decor = {
        tri : {
            left: {
                path: 'images/left_tri_dec.png',
                alt: 'left side triangles',
                classDef: 'dec leftDec'
            },
            right: {
                path: 'images/right_tri_dec.png',
                alt: 'right side triangles',
                classDef: 'dec rightDec'
            }
        }
    };

}]);