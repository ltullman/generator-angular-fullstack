'use strict';

angular.module('<%= scriptAppName %>')
  .controller('ApplicantCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/applicants').success(function(users) {
      $scope.users = users;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
