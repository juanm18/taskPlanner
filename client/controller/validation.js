app.controller('validateUserController', function(taskFactory, $scope, $location){
  $scope.addUser = function(){
    taskFactory.validateUser({username:$scope.newUser}, function(response, myid, name){
      $scope.userID = myid;
      $scope.Name = name;
      $scope.newUser='';
      $location.url('/tasks')

    });
  }

  console.log('validation controller');
})
