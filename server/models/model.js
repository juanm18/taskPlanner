var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type: String, unique:true}
});

var TaskSchema = mongoose.Schema({
  task: String,
  status: String,
  username: String
},{timestamps: true
});
mongoose.model('User', UserSchema);
mongoose.model('Task', TaskSchema);
