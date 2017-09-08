module.exports = function(app, story) {

	var dateFormat = require('dateformat');
	var Story = story;

	app.get('/admin/stories', function(req, res) {
		Story.findAll().then(function(stories){
			res.render('admin/stories/index',{layout:'dashboard', title:'Admin - Stories', stories:stories});
		}).catch(function(err){

		});
	});

	app.get('/admin/stories/add', function(req, res){
		res.render('admin/stories/add',{layout:'dashboard', title:'Admin - Stories'});
	});

	app.post("/admin/stories/add", function(req, res){
		var published_date = req.body.published_date.split("/");
		Story.create({
			published_date: new Date(published_date[2],published_date[1]-1,published_date[0]),
			description: req.body.description
		}).then(function(story){
			res.redirect("/admin/stories");
		}).catch(function(err){

		});
	});

	app.get("/admin/stories/edit/:id", function(req, res){

		Story.findById(req.params['id']).then(function(story){
			res.render('admin/stories/edit',{layout:'dashboard', title:'Admin - Stories', story:story});
		}).catch(function(err){

		});
	});

	app.post("/admin/stories/edit/:id", function(req, res){
		var published_date = req.body.published_date.split("/");
		Story.update({
			published_date: new Date(published_date[2],published_date[1]-1,published_date[0]),
			description: req.body.description
		},{ where: { id: req.params['id'] } }).then(function(story){
			res.redirect("/admin/stories");
		}).catch(function(err){

		});
	});

	app.get("/admin/stories/delete/:id", function(req, res){
		Story.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			res.redirect('/admin/stories');
		});
	});
};