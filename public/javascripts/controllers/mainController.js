app.controller('MainController', ['$scope', function($scope) {
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    $scope.me = {
        firstName: "Cody",
        middleName: "Truman",
        lastName: "Patterson",
        age: getAge('1991/07/11'),
        occupation: "Software Engineer",
        city: "Visalia",
        state: "California",
        country: "U.S.A."
    };

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