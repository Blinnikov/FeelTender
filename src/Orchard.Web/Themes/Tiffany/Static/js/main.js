$(function(){
    var params = {
		changedEl: "select.with_style",
		visRows: 5,
		scrollArrows: false
	}
	cuSel(params);
    $('.flexslider').flexslider({
        animation: "slide",
        width: 940,
        controlNav : true,
        directionNav: true
    });
    $('.top_menu > ul').superfish({
        delay: 300
    });
    $('.jcarousel').jcarousel();
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    $('.tabs li a').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')) {
                $(this).addClass('active').parent().siblings().find('a').removeClass('active');
                var id = $(this).parent().index() + 1;
                $('.tab.tab' + id).addClass('active').siblings().removeClass('active')
            }
        })
    });
    // Profile 
    $('a.change_photo').click(function(e){
        e.preventDefault();
        $('.upload').hide();
        $(this).parent().find('.upload').fadeIn(300);
    });
    $(document).on('click', '.upload .close' ,function(e){
        e.preventDefault();
        $(this).parents().find('.upload').fadeOut(300);
    });
    $('.profile .work a.add_work, .add_photo').click(function(e){
        e.preventDefault();
        $('.upload').hide();
        $(this).parent().parent().find('.upload').fadeIn(300);
    });
});


// CustomFile v1.1 - jQuery plugin
// (c) 2012 Flenov Roman - http://verstkawebsaita.ru
// Homepage: http://verstkawebsaita.ru/masterskaya-verstalshchika/veb-formy/input-file/jquery-plagin-customfile
// Demo page: http://verstkawebsaita.ru/demo/forms/file/1/
(function($){
	$.fn.customFile = function(options) {
    	
		var settings = {
        	inputFileBox: 'input-file-box'
        };
		
		return this.each(function() {
		
			if (options) {
				$.extend(settings, options);
			}
		
			var $this = $(this);
			var inputFileBox = settings.inputFileBox;
			var inputFileBoxClass = '.'+inputFileBox;
			
			$this.wrap("<div class=" + inputFileBox + ">+ загрузить картинку</div>");
			$this.after("<input value='' type='text'>");
			
			var inputFileBoxJq = $this.closest('.'+inputFileBox);
			var fileText = $this.closest(inputFileBoxClass).find(':text');
                                
			$this.css({
				'position':'absolute',
				'left':'-9999px'
			});     	
			
        	inputFileBoxJq.on('click', function(event){	
				var $target = $(event.target);
				if ($target.is(':file')) {
				}
				else {
					$(this).find(':file').trigger('click');
				}
			});	
	
			$this.on('change', function(){
				var valFile = $(this).attr('value');
                fileText.attr('value', $('input[type="file"]').val()).trigger('blur');
			});
			
			
		});
		
	};
})(jQuery);

$(document).ready(function() {
    $('.input_file').customFile();
});