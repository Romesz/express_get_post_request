exports.index = function(req, res){
  //res.send("get");
  res.render('index', { 
      title     : 'Express GET',
      name      : '',
      printName : ''
  });
};
exports.post = function(req, res){
  //console.log(req);
  //res.send("post");
  res.render('index', {
      title     : 'Express POST',
      name      : req.param('user')
  });
    console.log(req.param('user'));
};