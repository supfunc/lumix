function onLoadFlashContainer()
{
	document.getElementById("flashcontainer").style.width = "100%";
	document.getElementById("flashcontainer").style.height = "100%";
	
	resizeFlashContainer();
}

function getWinSize()
{
	var winH, winW;
	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
			winW = window.innerWidth;
			winH = window.innerHeight;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1) {
			winW = document.body.offsetWidth;
			winH = document.body.offsetHeight;
		}
	}
	return { height: winH, width: winW };
}

function resizeFlashContainer()
{
	var winSize = getWinSize();
	var w = winSize.width < minW? minW : "100%";
	var h = winSize.height < minH? minH : "100%";
	
	if( navigator.appName.indexOf("Microsoft") != -1 )
	{
		if( w!="100%" || h!="100%" )
		{
			document.body.scroll = "yes";
		}else{
			document.body.scroll = "no";
		}
	}	
	document.getElementById("flashcontainer").style.width = w;
	document.getElementById("flashcontainer").style.height = h;
}