app.controller('showTaskController', function(taskFactory, $scope) {
  taskFactory.getData(function(data){
    $scope.tasks = data.task;
    console.log(data);
  })
  taskFactory.getLoggedInUser(function (loggedInUser, myid, name) {
    console.log('hi');
    $scope.loggedInUser = loggedInUser;
    $scope.userID = myid;
    $scope.Name = loggedInUser.data.user.username;
    console.log(loggedInUser);
  })

  $scope.updateStatus = function(task, status){
    taskFactory.fupdateStatus(task, status, function(data){
      task.status = status;
    })
  }
  console.log('show Task Controller');
});
