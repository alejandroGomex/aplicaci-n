const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  
});

module.exports= mongoose.model('user_schema_collection',user_schema);
