app.factory('taskFactory', function($http){
  console.log('factory created');

  var factory = {};

  factory.validateUser = function(username , callback){
    $http.post('/user', username).then(function(response){
      var myid = response.data.user._id
      var name = response.data.user.username
      callback(response, myid,name)
      factory.name = name
      factory.myid = myid
    })
  }

  factory.CreateTask = function(data){
    $http.post('/task', data).then(function(response){
      console.log('creating task');
    })
  }

  factory.getData = function(retrieved){
    $http.get('/task').then(function(response){
      retrieved(response.data);
    })
  }

  factory.getLoggedInUser = function(loggedInUser){
    $http.get('/user').then(function(response){
      var myid = response.data.user._id
      var name = response.data.user.username
      console.log(response);
      loggedInUser(response,myid,name);
      factory.name = name
      factory.myid = myid
    })
  }
  factory.fupdateStatus = function(task, status, callback){
    console.log(task);
    console.log(status);
    $http.put('/update', {id:task._id, status:status}).then(function(response){
      callback(response);
    })
  }
  return factory;
})
