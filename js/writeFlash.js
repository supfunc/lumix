function onAutoUpdateError(){
	window.location = noflashRedirect;
}	

function writeFlash( url, bgcol, w, h, obj ){
	// Version check for the Flash Player that has the ability to start Player Product Install (6.0r65)
	var hasProductInstall = DetectFlashVer(6, 0, 65);
	
	// Version check based upon the values entered above in "Globals"
	var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	// Location visited after installation is complete if installation is required
	if( window.opener == undefined ) {
		var MMredirectURL = document.location;
	} else {
		var MMredirectURL = window.opener.location;
	}
	// Check to see if a player with Flash Product Install is available and the version does not meet the requirements for playback
	if ( hasProductInstall && !hasReqestedVersion ) {
		// Stored value of document title used by the installation process to close the window that started the installation process
		// This is necessary to remove browser windows that will still be utilizing the older version of the player after installation is complete
		// DO NOT MODIFY THE FOLLOWING TWO LINES
		document.title = document.title.slice(0, 47) + " - Flash Player Installation";
		var MMdoctitle = document.title;
		var productInstallOETags = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" width='+w+' height='+h+' id="flash_obj" align="middle">'
		+ '<param name="allowScriptAccess" value="sameDomain" />'
		+ '<param name="movie" value="playerProductInstall.swf?MMredirectURL='+MMredirectURL+'&MMplayerType=ActiveX&MMdoctitle='+MMdoctitle+'" />'
		+ '<param name="loop" value="false" />'
		+ '<param name="quality" value="high" />'
		+ '<param name="scale" value="noscale" />'
		+ '<param name="salign" value="lt" />'
		+ '<param name="bgcolor" value='+bgcol+' />'
		+ '<param name="FlashVars" value='+obj.getFlashVariables()+' />'		
		+ '<embed src="playerProductInstall.swf?MMredirectURL='+MMredirectURL+'&MMplayerType=PlugIn" loop="false" quality="high" scale="noscale" salign="lt" bgcolor='+bgcol+' width='+w+' height='+h+' FlashVars='+obj.getFlashVariables()+' name="flash_obj" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
		+ '</object>';		
		document.write(productInstallOETags);   // embed the Flash Product Installation SWF
	} else if (hasReqestedVersion) {  // if we've detected an acceptable version
		var oeTags = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" width='+w+' height='+h+' id="flash_obj" align="middle">'
		+ '<param name="allowScriptAccess" value="sameDomain" />'
		+ '<param name="movie" value='+url+' />'
		+ '<param name="loop" value="false" />'
		+ '<param name="quality" value="high" />'
		+ '<param name="scale" value="noscale" />'
		+ '<param name="salign" value="lt" />'
		+ '<param name="bgcolor" value='+bgcol+' />'
		+ '<param name="FlashVars" value="'+obj.getFlashVariables()+'" />'		
		+ '<embed src='+url+' loop="false" quality="high" scale="noscale" salign="lt" bgcolor='+bgcol+' width='+w+' height='+h+' FlashVars='+obj.getFlashVariables()+' name="flash_obj" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
		+ '</object>';
		document.write(oeTags);   // embed the Flash Content SWF when all tests are passed
	  } else {  // flash is too old or we can't detect the plugin
			onAutoUpdateError();
	  } 
}