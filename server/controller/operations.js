var mongoose = require('mongoose');
var session = require('express-session');

var User = mongoose.model("User");


module.exports = {
  index:function(request, response){
    console.log('index!');
  },

  createUser: function(request, response){
    console.log(request.body);
    User.find({username: request.body.username}, function(err, user){
      console.log('here');
      if (err){
        console.log("Error");
      } else if (user){
        request.session.userId = user._id;
        request.session.name = user.username;
        response.json({user:user});
      }
      else {
          var user = new User({
            console.log('hrerer');
              username: request.body.username
          });

          user.save(function(err){
              if (err){
                console.log("Something went wrong. Could not create User");
              } else{
                  console.log('Successfuly created user');
                  request.session.userId = user._id;
                  request.session.name = user.username;
                  response.json({
                    user:user
                  });
                }
              })
              console.log('createUser');
            }
          })
        },

   retrieve: function(request, response) {
     console.log(request.session);
     User.findOne({_id:request.session.userId}, function(err, user){
       if(err){
         console.log("No user in session", err);
       }
       else if(user){
         console.log('user in session:', user);
         response.json({
           user:user
         });
       }
     })
   },

  createTask: function(request, response){
    var task = new Task({
      task:request.body.task,
      username: request.session.name,
      status: 'ToDo'
    });
    task.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        console.log('created task');
        response.json(task)
      }
    });
    console.log('task create');
  },

  retrieveList: function(request, response){
     Task.find({username:request.session.name}, function(err, task){
       response.json({task:task})
     })
     console.log('retrieved tasks');
   },
   update: function(request, response){
     Task.findOne({_id:request.body.id}, function(err, task){
       task.status = request.body.status
       task.save(function(err){
         if(err){
           console.log(err);
         }
         else{
           console.log('Successfuly updated status');
           response.json(task);
           console.log(task);
         }
       })
     })
   }
}
