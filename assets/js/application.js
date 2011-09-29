$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		routes: {
			"": "home",
			"home": "home",
			"about": "about",
			"contact": "contact"
		},

		deselectPills: function(){
			$('ul.pills li').removeClass('active');
		},

		selectPill: function(pill){
			this.deselectPills();
			$(pill).addClass('active');
		},

		hidePages: function(){
			$('div.pages').hide();
		},

		showPage: function(page){
			this.hidePages();
			$(page).show();
		},

		home: function() {
			this.showPage('div#home-page');
			this.selectPill('li.home-pill');
		},

		about: function() {
			this.showPage('div#about-page');
			this.selectPill('li.about-pill');
		},

		contact: function() {
			this.showPage('div#contact-page');
			this.selectPill('li.contact-pill');
		}

	});

	var ApplicationView = Backbone.View.extend({

		el: $('body'),

		events: {
			'click ul.pills li.home-pill a': 'displayHome',
			'click ul.pills li.about-pill a': 'displayAbout',
			'click ul.pills li.contact-pill a': 'displayContact'
		},

		initialize: function(){
			this.router = new ApplicationRouter();
		},

		displayHome: function(){
			this.router.navigate("home", true);
		},

		displayAbout: function(){
			this.router.navigate("about", true);
		},

		displayContact: function(){
			this.router.navigate("contact", true);
		}

	});

	new ApplicationView();
	
	Backbone.history.start();

});

