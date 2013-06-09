exports.index = function(req, res){
  res.render('index', { title: 'JzD'});
};

exports.main = function(req,res){
	if(req.app.get('user')){
		req.session.user = req.session.user || req.app.get('user');
		res.render('main', { title: 'JzD', username: req.session.user.username});
	} else{
    	res.render('main', { title: 'JzD', username: 'Twoja nazwa użytkownika'});
    }
};