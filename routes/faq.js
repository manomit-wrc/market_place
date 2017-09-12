module.exports = function(app, faq, faq_category) {
 	
 	var Faq = faq;
 	var FaqCategory = faq_category;
	
	app.get('/admin/faq', function(req, res) {
		Faq.belongsTo(FaqCategory, {foreignKey: 'faq_category_id'});
		Faq.findAll({
      		include: [{model: FaqCategory}]
    	}).then(function(faq){
			res.render('admin/faq/index',{layout:'dashboard', title:'Admin - FAQ', faq:faq, message:req.flash('message')[0]});
		});
		
	});

	app.get('/admin/faq/add', function(req, res){
		FaqCategory.findAll(
			{
				where:
				{
					status:'1'
				}
			}
			).then(function(faq_category){
				res.render('admin/faq/add',{
					layout:'dashboard',
					title:'Admin - FAQ',
					faq_category:faq_category, 
					error_message:req.flash('error_message')[0],
					body:req.flash('body')[0]
				});
			});
		
	});

	app.post('/admin/faq/add', function(req, res){
		 Faq.create({
		  faq_category_id: req.body.faq_category_id,
	      question: req.body.question,
	      answer: req.body.answer
			}).then(function(result){

				res.redirect('/admin/faq');
			}).catch(function(err){
				var validation_error = err.errors;
				req.flash('error_message', validation_error[0].message);
				req.flash('body',req.body);
				res.redirect('/admin/faq/add');
		    	
			});
	});

	app.get('/admin/faq/edit/:id', function(req, res){
		Faq.findById(req.params['id'],{
      		include: [{model: FaqCategory}]
    	}).then(function(faq){
    		FaqCategory.findAll(
			{
				where:
				{
					status:'1'
				}
			}
			).then(function(faq_category){
				res.render('admin/faq/edit',{
					layout:'dashboard',
					title:'Admin - FAQ',
					faq_category:faq_category,
					faq:faq
				});
			});
		});
	});

	app.post('/admin/faq/edit/:id', function(req, res){
		Faq.update({
    	  faq_category_id: req.body.faq_category_id,
	      question: req.body.question,
	      answer: req.body.answer
	    },{ where: { id: req.params['id'] } }).then(function(result){
	    	req.flash('message', 'Faq edited successfully');
	    	res.redirect('/admin/faq');
	    }).catch(function(err){
	    	
	    	var validation_error = err.errors;
	    	req.flash('error_message', validation_error[0].message);
	    	var redirectUrl = '/admin/practice-area/edit/' + req.params['pid'];
  			res.redirect(redirectUrl);
	    	
	    });
	});

	app.get('/admin/faq/delete/:id', function(req, res){
		Faq.destroy({
		    where: {
		       id:req.params['id']
		    }
		}).then(function(response){
			req.flash('message', 'Faq deleted successfully');
			res.redirect('/admin/faq');
		});
	});


};