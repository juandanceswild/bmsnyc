    $("#manual2").click(function() {
		$.fancybox([
			'http://farm5.static.flickr.com/4044/4286199901_33844563eb.jpg',
			'http://farm3.static.flickr.com/2687/4220681515_cc4f42d6b9.jpg',
			{
				'href'	: 'http://farm5.static.flickr.com/4005/4213562882_851e92f326.jpg',
				'title'	: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			}
		], {
			'padding'			: 0,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'              : 'image',
			'changeFade'        : 0
		});
	});