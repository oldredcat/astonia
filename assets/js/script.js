$(function(){
	
	"use strict";
	
	//	menu toggle
	$('.top .bar').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('menu').toggleClass('collapsed');
	});
	
	//	menu load
	$.ajax({
	  	url: 'menu.json',
	  	dataType: 'json',
	  	success: function(data){
			var items = [],
				cls,
				trg,
				name;	
			$.each(data, function(key, val){
				
				cls	  = '',
				trg   = '',
				name  = 'Menu item';
				
				if(undefined !== val.marked){
					if(val.marked){
						cls = ' class="active"';
					}
				}
				
				if(undefined !== val.url){
					if(val.url.substring(0,4) === 'http'){
						trg = ' target="_blank"';
					}
				}
				
				if(undefined !== val.name){
					name = val.name;
				}
				
				items.push('<li' + cls + '><a href="' + val.url + '"' + trg +'>' + name + '</a></li>');

			});
			
			$('<ul/>', {
				html: items.join('')
			}).appendTo('.top-menu');
		}
	});
	
	//	video open
	$('.popup').click(function(e){
		e.preventDefault();
		$('#popup, #popup-bg').show();
		var $this = $(this);
		var $iframe = $('<iframe frameborder="0" width="100%">').attr('src', $this.data('link'));
		var $title = $('<h1>').text($this.data('title'));
		$('#video-view').html($title).append($iframe);
		$iframe.wrap('<div class="class-video">');
	});
	
	//	video close
	$('#popup-bg, .close').on('click', function(e){
		e.preventDefault();
		$('#video-view').html('');
		$('#popup, #popup-bg').hide();
	});
	
});