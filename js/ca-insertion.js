jQuery(function(){
	(function($){
        window ['open_insertion_corner_ad_window'] = function(){
        	var cont = '<div title="Insert Corner Ad" style="text-align:center;"><div style="padding-top:20px;">Select the AD to insert<br /><select id="corner_ad" style="width:250px;">'+corner_ad.list+'</select></div></div>';
			
			$(cont).dialog({
				dialogClass: 'wp-dialog',
				modal: true,
				closeOnEscape: true,
                close: function(){
                    $(this).remove();
                },
				buttons: [
					{text: 'OK', click: function() {
						var ca  = '[corner-ad id='+$('#corner_ad').val()+']';
						if(send_to_editor) send_to_editor(ca);
						$(this).dialog("close"); 
					}}
				]
			});
		};    
	})(jQuery)
})