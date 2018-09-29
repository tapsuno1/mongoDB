var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something.
var Todo = mongoose.model('Todos', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true

  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo}
