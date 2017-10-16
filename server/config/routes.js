var taskList = require('../controller/operations');
module.exports = function(app){
  app.post('/user', taskList.createUser)
  app.get('/user', taskList.retrieve)
  app.post('/task', taskList.createTask)
  app.get('/task', taskList.retrieveList)
  app.put('/update', taskList.update)
}
