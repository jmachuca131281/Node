const bcrypt = require('bcrypt')
const ps = '12345Segura'

bcrypt.hash(ps, 5, function(err, hash){
  console.log(hash);
  bcrypt.compare(ps, hash, function(err, res){
    // console.log(err);
    console.log(res);
  })
})