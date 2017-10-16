app.controller('createTaskController', function(taskFactory, $scope){
  $scope.addTask = function(){
    taskFactory.CreateTask({task: $scope.newTask, username:$scope.Name})
  }
  console.log('created controller');
})
