module.exports = function (app,organization){
	var Organization = organization;

	app.get('/admin/organization', function (req, res) {
		//for fetch use findAll()
		Organization.findAll().then(function(result){
			console.log(result);
			res.render('admin/organization/index',{layout:'dashboard',details:result});
		});
	});
}