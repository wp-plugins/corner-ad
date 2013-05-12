jQuery(function(){
	(function($){
        window["corner_ad_send_to_download_url"] = function(html) {
			var file_url = jQuery(html).attr('href');
			if (file_url) {
				jQuery(corner_ad_img_path_field).val(file_url);
			}
			tb_remove();
			window.send_to_editor = window.corner_ad_send_to_editor_default;

		}
        
		// Main application
		var corner_ad_img_path_field;
		window["corner_ad_send_to_editor_default"] = window.send_to_editor;
		
        jQuery('.corner_ad_button_for_upload').click(function(){
			corner_ad_img_path_field = jQuery(this).parent().find('[name="corner_ad_imgPath"]');
			window.send_to_editor = window.corner_ad_send_to_download_url;
			tb_show('', 'media-upload.php?TB_iframe=true');
			return false;
		});
        
        jQuery('.corner_ad_button_for_add_img_field').click(function(){
            alert('Only one image may be associated to the Ad in the free version of plugin');
			return false;
		});
    })(jQuery)
})