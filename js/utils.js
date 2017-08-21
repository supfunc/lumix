// surpress errors on bad browsers
//window.onerror = null;

function FlashDetect()
{
	this.properties = [];
	this.values = [];
		
	this.addVariable = function(prop,value)
	{
		this.properties.push(prop);
		this.values.push(value);
	}
	this.writeFlash = function( url, bgcol, w, h )
	{
		writeFlash( url, bgcol, w, h, this );
	}
	this.getFlashVariables = function()
	{
		var str = "";
		var max = this.properties.length;
		for (i=0;i<max;i++)
		{
			str += "" + this.properties[i] + "=" + this.values[i] + "";
			if( i < (max-1) ) {
				str += "&";
			}
		}
		return str;
	};	
};

// deconecpt flashobject
function getQueryParamValue(param)
{
	var q = document.location.search || document.location.hash;
	if(q){
		var startIndex = q.indexOf(param +"=");
		var endIndex = (q.indexOf("&", startIndex) > -1) ? q.indexOf("&", startIndex) : q.length;
		if (q.length > 1 && startIndex > -1) {
			return q.substring(q.indexOf("=", startIndex)+1, endIndex);
		}
	}
	return "";
}

/*
Anchor handling

These functions are required by the AS2.0 class com.deconstruct.utils.Anchor
*/

var anchorSeparator = "#";
var origTitle = document.title;

function setAnchor(path)
{
	var myURL = new String(document.location);
	var oldPath = myURL.split(anchorSeparator)[1];
	myURL = myURL.split(anchorSeparator)[0];
	if (path == undefined)
	{
		document.location = myURL + anchorSeparator + "";
	} else if (oldPath != path) {
		prevPath = path;
		document.location = myURL + anchorSeparator + path;
	}
}
function getAnchor()
{
	var sUrl = new String(document.location);
	var aUrl = sUrl.split(anchorSeparator);
	if(aUrl.length > 1)
	{
		return aUrl[1];
	} else {
		return false;
	}
}
function setTitle( titleSuffix )
{
	document.title = titleSuffix!=undefined? origTitle + " | " + titleSuffix : origTitle;
}