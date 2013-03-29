	var cornerAdBigLoaded = false;
	
	function printCornerAd(config){
		var toPrint 	= '',
			attrStr 	= '',
			thumbPath	= '',
			imgPath		= '';
		
		if(config['thumbPath']){
			thumbPath = config['thumbPath'];
			delete config['thumbPath'];
		}
		
		if(config['imgPath']){
			imgPath = config['imgPath'];
			delete config['imgPath'];
			thumbPath = (thumbPath.length == 0) ? imgPath : thumbPath;
		}
		
		for(attr in config){
			attrStr += attr+'='+escape(config[attr])+'&';
		}
		
		var swfLocation = corner_ad['url']+'/js/cornerAd.swf';		
        
		// Big corner 
		toPrint +='<div id="bigCorner" style="z-index:100000;position:absolute;left:0px; top:0px;">';
		toPrint +='	<object  id="cornerAd" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="500" height="500">';
	  toPrint +='		<param name="movie" value="'+swfLocation+'?'+attrStr+'imgPath='+imgPath+'&isBig=true" />';
	  toPrint +='		<param name="quality" value="high" />';
	  toPrint +='		<param name="wmode" value="transparent" />';
	  toPrint +='		<param name="allowScriptAccess" value="always" />';
	  toPrint +='		<embed name="cornerAd" allowscriptaccess="always" src="'+swfLocation+'?'+attrStr+'imgPath='+imgPath+'&isBig=true" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="500" height="500"></embed>';
		toPrint +='	</object>';
		toPrint +='</div>';
		
		// Short corner 
		toPrint +='<div id="shortCorner" style="z-index:99999;position:absolute;left:0px; top:0px;">';
		toPrint +='	<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="100" height="100">';
	  toPrint +='		<param name="movie" value="'+swfLocation+'?'+attrStr+'imgPath='+thumbPath+'" />';
	  toPrint +='		<param name="quality" value="high" />';
	  toPrint +='		<param name="wmode" value="transparent" />';
	  toPrint +='		<param name="allowScriptAccess" value="always" />';
	  toPrint +='		<embed allowscriptaccess="always" src="'+swfLocation+'?'+attrStr+'imgPath='+thumbPath+'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100" height="100"></embed>';
		toPrint +='	</object>';
		toPrint +='</div>';
		
		var body = document.getElementsByTagName('BODY');
		if(body.length > 0){
			var cornerContainer = document.createElement('DIV'), divs;
			body[0].appendChild(cornerContainer);
			divs = document.getElementsByTagName('DIV');
			divs[divs.length - 1].innerHTML += toPrint;
		}
	}
	
	function changeAddCornerSize(setBig, fromBig){
			if(fromBig){
				cornerAdBigLoaded = true;
				if(setBig)
					setBig = false;
			}
			if(!cornerAdBigLoaded){
				setTimeout(function(){changeAddCornerSize(setBig, fromBig);}, 500);
			}else{
				var bigMovie 		= document.getElementById('bigCorner'),
					shortMovie 	= document.getElementById('shortCorner'),
					ad;
			
				if(bigMovie && shortMovie){
					if(setBig){
						bigMovie.style.top = '0px';
						shortMovie.style.top = '-1000px';
						
						if (navigator.appName.indexOf("Microsoft") != -1) {
	        		ad = window['cornerAd'];
		    		} else {
		        	ad = document['cornerAd'];
		    		}
						
						if(ad){
							ad.nextStep();
						}
					}else{
						bigMovie.style.top = '-1000px';
						shortMovie.style.top = '0px';
					}	
				}
			}	
	}