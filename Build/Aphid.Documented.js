/*
 * Aphid Framework
**/

/**
 * ==Aphid Framework==
 *
 * The Aphid namespace is the main container for the various Aphid frameworks
 * and contains other metadata for Aphid, including version.
 *
 * Aphid is a lightweight framework for modern web applications that utilize
 * new and emerging standards, such as HTML5 and CSS3. The framework also
 * attempts to degrade gracefully for older browsers, where possible.
 *
 * The design of Aphid was heavily influenced by the delegate and notification
 * patterns of Cocoa and Cocoa Touch and much of the view stack mimicks that
 * of UIKit from the iPhone SDK. The overall goal of Aphid, however, is to
 * create just a very thin layer on top of HTML and CSS so that we're able to
 * take full advantage of the flexibility of those technologies while simply
 * assisting the developer in compartmentalizing the behavioral aspects of
 * their application.
 *
**/

/** section: Aphid Framework
 * Aphid
**/
var Aphid = {

  /**
   * Aphid.Version = "0.9.1-PRE"
   *
   * The version number for Aphid in the *major.minor.build* format *(e.g. 1.0.123)*.
  **/
  Version: '0.9.1-PRE'

};

/**
 * Aphid.Support
 *
 * Contains common support code that is used by Aphid Core, Aphid UI and any
 * application that is based on the Aphid framework and libraries.
**/

Aphid.Support = {};

/**
 * Aphid.Support.Compatibility
 *
 * Compatibility code to bring emerging standards support to legacy browsers,
 * such as Internet Explorer.
**/

Aphid.Support.Compatibility = {};

/**
 * class Aphid.Support.Compatibility.HTML5
 *
 * Compatibility code to bring emerging standards support to legacy browsers,
 * such as Internet Explorer.
**/

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
document.createElement("canvas").getContext||(function(){var s=Math,j=s.round,F=s.sin,G=s.cos,V=s.abs,W=s.sqrt,k=10,v=k/2;function X(){return this.context_||(this.context_=new H(this))}var L=Array.prototype.slice;function Y(b,a){var c=L.call(arguments,2);return function(){return b.apply(a,c.concat(L.call(arguments)))}}var M={init:function(b){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var a=b||document;a.createElement("canvas");a.attachEvent("onreadystatechange",Y(this.init_,this,a))}},init_:function(b){b.namespaces.g_vml_||
b.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");b.namespaces.g_o_||b.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!b.styleSheets.ex_canvas_){var a=b.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=b.getElementsByTagName("canvas"),d=0;for(;d<c.length;d++)this.initElement(c[d])},
initElement:function(b){if(!b.getContext){b.getContext=X;b.innerHTML="";b.attachEvent("onpropertychange",Z);b.attachEvent("onresize",$);var a=b.attributes;if(a.width&&a.width.specified)b.style.width=a.width.nodeValue+"px";else b.width=b.clientWidth;if(a.height&&a.height.specified)b.style.height=a.height.nodeValue+"px";else b.height=b.clientHeight}return b}};function Z(b){var a=b.srcElement;switch(b.propertyName){case "width":a.style.width=a.attributes.width.nodeValue+"px";a.getContext().clearRect();
break;case "height":a.style.height=a.attributes.height.nodeValue+"px";a.getContext().clearRect();break}}function $(b){var a=b.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}M.init();var N=[],B=0;for(;B<16;B++){var C=0;for(;C<16;C++)N[B*16+C]=B.toString(16)+C.toString(16)}function I(){return[[1,0,0],[0,1,0],[0,0,1]]}function y(b,a){var c=I(),d=0;for(;d<3;d++){var f=0;for(;f<3;f++){var h=0,g=0;for(;g<3;g++)h+=b[d][g]*a[g][f];c[d][f]=
h}}return c}function O(b,a){a.fillStyle=b.fillStyle;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.lineWidth=b.lineWidth;a.miterLimit=b.miterLimit;a.shadowBlur=b.shadowBlur;a.shadowColor=b.shadowColor;a.shadowOffsetX=b.shadowOffsetX;a.shadowOffsetY=b.shadowOffsetY;a.strokeStyle=b.strokeStyle;a.globalAlpha=b.globalAlpha;a.arcScaleX_=b.arcScaleX_;a.arcScaleY_=b.arcScaleY_;a.lineScale_=b.lineScale_}function P(b){var a,c=1;b=String(b);if(b.substring(0,3)=="rgb"){var d=b.indexOf("(",3),f=b.indexOf(")",d+
1),h=b.substring(d+1,f).split(",");a="#";var g=0;for(;g<3;g++)a+=N[Number(h[g])];if(h.length==4&&b.substr(3,1)=="a")c=h[3]}else a=b;return{color:a,alpha:c}}function aa(b){switch(b){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}function H(b){this.m_=I();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=k*1;this.globalAlpha=1;this.canvas=b;
var a=b.ownerDocument.createElement("div");a.style.width=b.clientWidth+"px";a.style.height=b.clientHeight+"px";a.style.overflow="hidden";a.style.position="absolute";b.appendChild(a);this.element_=a;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var i=H.prototype;i.clearRect=function(){this.element_.innerHTML=""};i.beginPath=function(){this.currentPath_=[]};i.moveTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};
i.lineTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};i.bezierCurveTo=function(b,a,c,d,f,h){var g=this.getCoords_(f,h),l=this.getCoords_(b,a),e=this.getCoords_(c,d);Q(this,l,e,g)};function Q(b,a,c,d){b.currentPath_.push({type:"bezierCurveTo",cp1x:a.x,cp1y:a.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});b.currentX_=d.x;b.currentY_=d.y}i.quadraticCurveTo=function(b,a,c,d){var f=this.getCoords_(b,a),h=this.getCoords_(c,d),g={x:this.currentX_+
0.6666666666666666*(f.x-this.currentX_),y:this.currentY_+0.6666666666666666*(f.y-this.currentY_)};Q(this,g,{x:g.x+(h.x-this.currentX_)/3,y:g.y+(h.y-this.currentY_)/3},h)};i.arc=function(b,a,c,d,f,h){c*=k;var g=h?"at":"wa",l=b+G(d)*c-v,e=a+F(d)*c-v,m=b+G(f)*c-v,r=a+F(f)*c-v;if(l==m&&!h)l+=0.125;var n=this.getCoords_(b,a),o=this.getCoords_(l,e),q=this.getCoords_(m,r);this.currentPath_.push({type:g,x:n.x,y:n.y,radius:c,xStart:o.x,yStart:o.y,xEnd:q.x,yEnd:q.y})};i.rect=function(b,a,c,d){this.moveTo(b,
a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath()};i.strokeRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.stroke();this.currentPath_=f};i.fillRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.fill();this.currentPath_=f};i.createLinearGradient=function(b,
a,c,d){var f=new D("gradient");f.x0_=b;f.y0_=a;f.x1_=c;f.y1_=d;return f};i.createRadialGradient=function(b,a,c,d,f,h){var g=new D("gradientradial");g.x0_=b;g.y0_=a;g.r0_=c;g.x1_=d;g.y1_=f;g.r1_=h;return g};i.drawImage=function(b){var a,c,d,f,h,g,l,e,m=b.runtimeStyle.width,r=b.runtimeStyle.height;b.runtimeStyle.width="auto";b.runtimeStyle.height="auto";var n=b.width,o=b.height;b.runtimeStyle.width=m;b.runtimeStyle.height=r;if(arguments.length==3){a=arguments[1];c=arguments[2];h=g=0;l=d=n;e=f=o}else if(arguments.length==
5){a=arguments[1];c=arguments[2];d=arguments[3];f=arguments[4];h=g=0;l=n;e=o}else if(arguments.length==9){h=arguments[1];g=arguments[2];l=arguments[3];e=arguments[4];a=arguments[5];c=arguments[6];d=arguments[7];f=arguments[8]}else throw Error("Invalid number of arguments");var q=this.getCoords_(a,c),t=[];t.push(" <g_vml_:group",' coordsize="',k*10,",",k*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var E=[];E.push("M11=",
this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(q.x/k),",","Dy=",j(q.y/k),"");var p=q,z=this.getCoords_(a+d,c),w=this.getCoords_(a,c+f),x=this.getCoords_(a+d,c+f);p.x=s.max(p.x,z.x,w.x,x.x);p.y=s.max(p.y,z.y,w.y,x.y);t.push("padding:0 ",j(p.x/k),"px ",j(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")}else t.push("top:",j(q.y/k),"px;left:",j(q.x/k),"px;");t.push(' ">','<g_vml_:image src="',b.src,
'"',' style="width:',k*d,"px;"," height:",k*f,'px;"',' cropleft="',h/n,'"',' croptop="',g/o,'"',' cropright="',(n-h-l)/n,'"',' cropbottom="',(o-g-e)/o,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};i.stroke=function(b){var a=[],c=P(b?this.fillStyle:this.strokeStyle),d=c.color,f=c.alpha*this.globalAlpha;a.push("<g_vml_:shape",' filled="',!!b,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',k*10," ",k*10,'"',' stroked="',
!b,'"',' path="');var h={x:null,y:null},g={x:null,y:null},l=0;for(;l<this.currentPath_.length;l++){var e=this.currentPath_[l];switch(e.type){case "moveTo":a.push(" m ",j(e.x),",",j(e.y));break;case "lineTo":a.push(" l ",j(e.x),",",j(e.y));break;case "close":a.push(" x ");e=null;break;case "bezierCurveTo":a.push(" c ",j(e.cp1x),",",j(e.cp1y),",",j(e.cp2x),",",j(e.cp2y),",",j(e.x),",",j(e.y));break;case "at":case "wa":a.push(" ",e.type," ",j(e.x-this.arcScaleX_*e.radius),",",j(e.y-this.arcScaleY_*e.radius),
" ",j(e.x+this.arcScaleX_*e.radius),",",j(e.y+this.arcScaleY_*e.radius)," ",j(e.xStart),",",j(e.yStart)," ",j(e.xEnd),",",j(e.yEnd));break}if(e){if(h.x==null||e.x<h.x)h.x=e.x;if(g.x==null||e.x>g.x)g.x=e.x;if(h.y==null||e.y<h.y)h.y=e.y;if(g.y==null||e.y>g.y)g.y=e.y}}a.push(' ">');if(b)if(typeof this.fillStyle=="object"){var m=this.fillStyle,r=0,n={x:0,y:0},o=0,q=1;if(m.type_=="gradient"){var t=m.x1_/this.arcScaleX_,E=m.y1_/this.arcScaleY_,p=this.getCoords_(m.x0_/this.arcScaleX_,m.y0_/this.arcScaleY_),
z=this.getCoords_(t,E);r=Math.atan2(z.x-p.x,z.y-p.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{var p=this.getCoords_(m.x0_,m.y0_),w=g.x-h.x,x=g.y-h.y;n={x:(p.x-h.x)/w,y:(p.y-h.y)/x};w/=this.arcScaleX_*k;x/=this.arcScaleY_*k;var R=s.max(w,x);o=2*m.r0_/R;q=2*m.r1_/R-o}var u=m.colors_;u.sort(function(ba,ca){return ba.offset-ca.offset});var J=u.length,da=u[0].color,ea=u[J-1].color,fa=u[0].alpha*this.globalAlpha,ga=u[J-1].alpha*this.globalAlpha,S=[],l=0;for(;l<J;l++){var T=u[l];S.push(T.offset*q+
o+" "+T.color)}a.push('<g_vml_:fill type="',m.type_,'"',' method="none" focus="100%"',' color="',da,'"',' color2="',ea,'"',' colors="',S.join(","),'"',' opacity="',ga,'"',' g_o_:opacity2="',fa,'"',' angle="',r,'"',' focusposition="',n.x,",",n.y,'" />')}else a.push('<g_vml_:fill color="',d,'" opacity="',f,'" />');else{var K=this.lineScale_*this.lineWidth;if(K<1)f*=K;a.push("<g_vml_:stroke",' opacity="',f,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',aa(this.lineCap),
'"',' weight="',K,'px"',' color="',d,'" />')}a.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",a.join(""))};i.fill=function(){this.stroke(true)};i.closePath=function(){this.currentPath_.push({type:"close"})};i.getCoords_=function(b,a){var c=this.m_;return{x:k*(b*c[0][0]+a*c[1][0]+c[2][0])-v,y:k*(b*c[0][1]+a*c[1][1]+c[2][1])-v}};i.save=function(){var b={};O(this,b);this.aStack_.push(b);this.mStack_.push(this.m_);this.m_=y(I(),this.m_)};i.restore=function(){O(this.aStack_.pop(),
this);this.m_=this.mStack_.pop()};function ha(b){var a=0;for(;a<3;a++){var c=0;for(;c<2;c++)if(!isFinite(b[a][c])||isNaN(b[a][c]))return false}return true}function A(b,a,c){if(!!ha(a)){b.m_=a;if(c)b.lineScale_=W(V(a[0][0]*a[1][1]-a[0][1]*a[1][0]))}}i.translate=function(b,a){A(this,y([[1,0,0],[0,1,0],[b,a,1]],this.m_),false)};i.rotate=function(b){var a=G(b),c=F(b);A(this,y([[a,c,0],[-c,a,0],[0,0,1]],this.m_),false)};i.scale=function(b,a){this.arcScaleX_*=b;this.arcScaleY_*=a;A(this,y([[b,0,0],[0,a,
0],[0,0,1]],this.m_),true)};i.transform=function(b,a,c,d,f,h){A(this,y([[b,a,0],[c,d,0],[f,h,1]],this.m_),true)};i.setTransform=function(b,a,c,d,f,h){A(this,[[b,a,0],[c,d,0],[f,h,1]],true)};i.clip=function(){};i.arcTo=function(){};i.createPattern=function(){return new U};function D(b){this.type_=b;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}D.prototype.addColorStop=function(b,a){a=P(a);this.colors_.push({offset:b,color:a.color,alpha:a.alpha})};function U(){}G_vmlCanvasManager=
M;CanvasRenderingContext2D=H;CanvasGradient=D;CanvasPattern=U})();

Aphid.Support.Compatibility.HTML5 = {

  /**
   * Aphid.Support.Compatibility.HTML5.Elements = [ 'abbr', 'article', 'aside', 'audio', 'canvas', 'details', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'mark', 'meter', 'nav', 'output', 'progress', 'section', 'summary', 'time', 'video' ]
   *
   * An Array containing the names of each of the elements found in the HTML5
   * specification.
   *
   * `abbr` `article` `aside` `audio` `canvas` `details` `figcaption` `figure`
   * `footer` `header` `hgroup` `mark` `meter` `nav` `output` `progress`
   * `section` `summary` `time` `video`
  **/
  Elements: [
    'abbr', 'article', 'aside', 'audio', 'canvas', 'details', 'figcaption',
    'figure', 'footer', 'header', 'hgroup', 'mark', 'meter', 'nav', 'output',
    'progress', 'section', 'summary', 'time', 'video'
  ],

  /**
   * Aphid.Support.Compatibility.HTML5.createHTML5Elements() -> null
   *
   * Iterates the `Aphid.Support.Compatibility.HTML5_ELEMENTS` array, creating a
   * new element in the document for each, using `document.createElement(...)`.
  **/
  createElements: function()
  {
    this.Elements.each(this._createElement);
  },

  _createElement: function(elementName)
  {
    document.createElement(elementName);
  }

}
//
// Add support to the browser for the new HTML5 tags. Without this, Internet
// Explorer will not apply any styles to tags it does not recognize.
//
if (Prototype.Browser.IE)
  Aphid.Support.Compatibility.HTML5.createElements();
/**
 * Aphid.Support.Compatibility.String
**/

Aphid.Support.Compatibility.String = {}

/**
 * mixin Aphid.Support.Compatibility.String.Trim
 *
 * Adds the *trim()*, *trimLeft()* and *trimRight()* methods to the String
 * class for legacy browsers that do not define these methods.
**/
Aphid.Support.Compatibility.String.Trim = {

  /**
   * Aphid.Support.Compatibility.String.Trim#trim() -> String
   *
   * Trims any leading and trailing whitepace from the string.
   *
   * **Example**
   *
   *     "  Foo Bar  ".trim()
   *     // => "Foo Bar"
   *
  **/
  trim: function()
  {
    return this.replace(/^\s+|\s+$/g,"");
  },

  /**
   * Aphid.Support.Compatibility.String.Trim#trimLeft() -> String
   *
   * Trims any leading whitepace from the string.
   *
   * **Example**
   *
   *     "  Foo Bar  ".trimLeft()
   *     // => "Foo Bar  "
   *
  **/
  trimLeft: function()
  {
    return this.replace(/^\s+/,"");
  },

  /**
   * Aphid.Support.Compatibility.String.Trim#trimRight() -> String
   *
   * Trims any trailing whitepace from the string.
   *
   * **Example**
   *
   *     "  Foo Bar  ".trimRight()
   *     // => "  Foo Bar"
   *
  **/
  trimRight: function()
  {
    return this.replace(/\s+$/,"");
  }

}

//
// Extend the String class only for browsers that do not already define the
// *trim()* method on String.
//
if (Object.isUndefined("".trim))
  Object.extend(String.prototype, Aphid.Support.Compatibility.String.TrimSupport);
/**
 * Aphid.Support.Extensions
 *
 * Extentions to the core JavaScript engine as well as vendored, 3rd-party
 * libraries.
**/

Aphid.Support.Extensions = {};

/**
 * Aphid.Support.Extensions.Vendor
 *
 * Extensions to 3rd-party JavaScript libraries and frameworks, such as
 * Prototype and script.aculo.us.
 *
**/

Aphid.Support.Extensions.Vendor = {};

/**
 * Aphid.Support.Extensions.Vendor.Prototype
 *
 * Custom extensions to the Prototype framework.
**/

Aphid.Support.Extensions.Vendor.Prototype = {};

/**
 * mixin Aphid.Support.Extensions.Vendor.Prototype.Element
**/

Aphid.Support.Extensions.Vendor.Prototype.Element = {

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element#fromString(htmlString) -> Element
   *
   * - htmlString (String): an HTML-formatted string with a single outer
   *   element.
   *
   * Returns a new Element instance from an HTML string.  This is primarily
   * useful for accessing the result of a Template evaluation that returns an
   * HTML snippet before adding the snippet to the DOM.
   *
   * **Example**
   *
   *     var myElement = Element.fromString('<div class="new">Foo</div>');
   *     // => Element
   *
  **/
  fromString: function(string)
  {
    return new Element('div').update(string.trim()).firstChild;
  }

};

Object.extend(Element, Aphid.Support.Extensions.Vendor.Prototype.Element);

/**
 * mixin Aphid.Support.Extensions.Vendor.Prototype.Element.Methods
**/
Aphid.Support.Extensions.Vendor.Prototype.Element.Methods = {

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getBorderHeight(element) -> Integer
   *
   * - element (Element): The element to get the border height from
   *
   * Returns the cumulative height of the Element's top and bottom borders.
  **/
  getBorderHeight: function(element)
  {
    element = $(element);
    var height = parseInt(element.getStyle('border-top-width'));
    height += parseInt(element.getStyle('border-bottom-width'));
    return height;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getBorderWidth(element) -> Integer
   *
   * - element (Element): The element to get the border width from
   *
   * Returns the cumulative width of the Element's left and right borders.
  **/
  getBorderWidth: function(element)
  {
    element = $(element);
    var width = parseInt(element.getStyle('border-left-width'));
    width += parseInt(element.getStyle('border-right-width'));
    return width;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getInnerHeight(element) -> Integer
   *
   * - element (Element): The element to get the inner height from
   *
   * Returns the height of the Element without padding or borders.
  **/
  getInnerHeight: function(element)
  {
    element = $(element);
    var height = element.getHeight();
    height -= parseInt(element.getStyle('padding-top'));
    height -= parseInt(element.getStyle('padding-bottom'));
    height -= parseInt(element.getStyle('border-top-width'));
    height -= parseInt(element.getStyle('border-bottom-width'));
    return height;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getInnerWidth(element) -> Integer
   *
   * - element (Element): The element to get the inner width from
   *
   * Returns the width of the Element without padding or borders.
  **/
  getInnerWidth: function(element)
  {
    element = $(element);
    var width = element.getWidth();
    width -= parseInt(element.getStyle('padding-left'));
    width -= parseInt(element.getStyle('padding-right'));
    width -= parseInt(element.getStyle('border-left-width'));
    width -= parseInt(element.getStyle('border-right-width'));
    return width;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getMaximumHeight(element) -> Integer | false
   *
   * - element (Element): The element to get the maximum height from
   *
   * Returns the maximum height of an Element, as defined by the max-height
   * CSS property. Returns false if a maximum height was not specified.
  **/
  getMaximumHeight: function(element)
  {
    element = $(element);
    var maxHeight = parseInt(element.getStyle('max-height'));
    if (isNaN(maxHeight)) return false;
    return maxHeight;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getMaximumWidth(element) -> Integer | false
   *
   * - element (Element): The element to get the maximum width from
   *
   * Returns the maximum width of an Element, as defined by the max-width
   * CSS property. Returns false if a maximum width was not specified.
  **/
  getMaximumWidth: function(element)
  {
    element = $(element);
    var maxWidth = parseInt(element.getStyle('max-width'));
    if (isNaN(maxWidth)) return false;
    return maxWidth;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getMinimumHeight(element) -> Integer | false
   *
   * - element (Element): The element to get the minimum height from
   *
   * Returns the minimum height of an Element, as defined by the max-width
   * CSS property. Returns false if a minimum height was not specified.
  **/
  getMinimumHeight: function(element)
  {
    element = $(element);
    var minHeight = parseInt(element.getStyle('min-height'));
    return minHeight;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getMinimumWidth(element) -> Integer | false
   *
   * - element (Element): The element to get the minimum width from
   *
   * Returns the minimum width of an Element, as defined by the max-width
   * CSS property. Returns false if a minimum width was not specified.
  **/
  getMinimumWidth: function(element)
  {
    element = $(element);
    var minWidth = parseInt(element.getStyle('min-width'));
    return minWidth;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getOuterHeight(element) -> Integer
   *
   * - element (Element): The element to get the outer height from
   *
   * Returns the height of the Element, including any margins.
  **/
  getOuterHeight: function(element)
  {
    element = $(element);
    var height = element.getHeight();
    height += parseInt(element.getStyle('margin-top'));
    height += parseInt(element.getStyle('margin-bottom'));
    return height;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getOuterWidth(element) -> Integer
   *
   * - element (Element): The element to get the outer width from
   *
   * Returns the width of the Element, including any margins.
  **/
  getOuterWidth: function(element)
  {
    element = $(element);
    var width = element.getWidth();
    width += parseInt(element.getStyle('margin-left'));
    width += parseInt(element.getStyle('margin-right'));
    return width;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#insert() -> Element
   *
   * Adds support for inserting an Array of Elements
  **/
  insert: Element.insert.wrap(
    function(insert, element, insertation)
    {
      if (!Object.isArray(insertation))
        return insert(element, insertation);
      element = $(element);
      insertation.each(insert.curry(element));
      return element;
    }
  ),

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#getData(element, attribute) -> String | false
   *
   * - element (Element): The element to retrieve the data value from
   * - attribute (String): The name of the data attribute to retrieve
   *
   * Convenience method for retrieving the value of an HTML5 data attribute
   * on an Element.
  **/
  getData: function(element, attribute)
  {
    var value = element.getAttribute("data-" + attribute);
    if (!value) return false;
    return value;
  },

  /**
   * Aphid.Support.Extensions.Vendor.Prototype.Element.Methods#setData(element, attribute, value) -> Element
   *
   * - element (Element): The element to set the data attribute on
   * - attribute (String): The name of the data attribute to set (without the "data-" prefix)
   * - value (String): The value to set on the data attribute
   *
   * Convenience method for setting an HTML5 data attribute on an Element.
   * This method returns the element so that you may chain calls.
  **/
  setData: function(element, attribute, value)
  {
    element.setAttribute("data-" + attribute, value);
    return element;
  }

};

Element.addMethods(Aphid.Support.Extensions.Vendor.Prototype.Element.Methods);
/**
 * mixin Aphid.Support.Extensions.Object
 *
 * Extensions to the core JavaScript Object implementation.
**/
Aphid.Support.Extensions.Object = {

  /**
   * Aphid.Support.Extensions.Object.isEvent() -> Boolean
   *
   * Returns true if the object is an Event (i.e. MouseEvent, KeyEvent, etc).
  **/
  isEvent: function(object)
  {
    return Object.isArray(object.toString().match('Event'));
  },

  /**
   * Aphid.Support.Extensions.Object.applyOptionsToInstance(instance, options) -> null
   *
   * - instance (Object): The instance that the options should be applied to
   * - options (Hash): Instance property values that should be applied
   *
   * Iterates the options and sets any matching property values on the
   * provided instance. Only pre-defined properties on the instance will be
   * set with matching values from the options hash.
  **/
  applyOptionsToInstance: function(instance, options)
  {
    options = $H(options);
    options.each(function(pair) {
      // if (Object.isFunction(pair.value)) return;
      if (Object.isUndefined(instance[pair.key])) return;
      $L.debug("Setting " + pair.key + " = " + pair.value, "Object#applyOptionsToInstance");
      instance[pair.key] = pair.value;
    });
  }

}

Object.extend(Object, Aphid.Support.Extensions.Object);
/**
 * mixin Aphid.Support.Extensions.Array
 *
 * Extensions to the core JavaScript Array implementation.
 *
**/
Aphid.Support.Extensions.Array = {

  /**
   * Aphid.Support.Extensions.Array#random() -> Object
   *
   * Returns a random element from the array.
  **/
  random: function()
  {
    return this[parseInt(Math.random() * this.length)];
  },

  /**
   * Aphid.Support.Extensions.Array#randomize() -> Array
   *
   * Returns the array with its contents rearranged in random order.
  **/
  randomize: function()
  {
    for (var rnd, tmp, i = this.length; i; rnd = parseInt(Math.random() * i), tmp = this[--i], this[i] = this[rnd], this[rnd] = tmp);
  }

}

Object.extend(Array.prototype, Aphid.Support.Extensions.Array);
/**
 * mixin Aphid.Support.Extensions.String
 *
 * Extensions to the core JavaScript String implementation.
 *
**/
Aphid.Support.Extensions.String = {

  /**
   * Aphid.Support.Extensions.String#attributize() -> String
   *
   * Converts a String from a camelized format to a dasherized format suitable
   * for use as part of an HTML attribute name.
   *
   * Calling this method is equivalent to calling Prototype's `underscore` and
   * `dasherize` methods on the String.
   *
   * #### Example
   *
   *     "multipleSelectionEnabled".attributize();
   *     // => "multiple-selection-enabled"
   *
  **/
  attributize: function()
  {
    return this.underscore().dasherize();
  },

  /**
   * Aphid.Support.Extensions.String#lowerCaseFirst() -> String
   *
   * Converts the first character of a string to its lower-case form, without
   * changing the case of the rest of the string.
  **/
  lowerCaseFirst: function()
  {
    return this.charAt(0).toLowerCase() + this.substring(1);
  },

  /**
   * Aphid.Support.Extensions.String#upperCaseFirst() -> String
   *
   * Converts the first character of a string to its upper-case form, without
   * changing the case of the rest of the string.
  **/
  upperCaseFirst: function()
  {
    return this.charAt(0).toUpperCase() + this.substring(1);
  },

  /**
   * Aphid.Support.Extensions.String#toInt() -> Number
  **/
  toInt: function()
  {
    return parseInt(this);
  },

  /**
   * Aphid.Support.Extensions.String#pluralize(count[, plural]) -> String
  **/
  pluralize: function(count, plural)
  {
    if (Object.isUndefined(plural))
      plural = this + 's';
    return (count == 1 ? this + '' : plural);
  }

};
Object.extend(String.prototype, Aphid.Support.Extensions.String);

/**
 * Aphid.Support.Extensions.String.random([length = 10]) -> String
 *
 * Returns a random string of *length* consisting of upper and lower-case
 * letters and numbers.
**/
String.random = function(length)
{
  if (Object.isUndefined(length)) length = 10;
  var chars = $R('a', 'z').toArray().concat($R('A', 'Z').toArray()).concat($R(0, 9).toArray());
  return $R(1, length).inject('', function(m, i) { return m + chars.random() });
}
/**
 * class Aphid.Support.Cookie
 *
 * A utility class for simplifying the management of browser cookies. This
 * class is also aliased as the `$C` global (i.e. `$C.get('someCookie')`).
 *
 * **Setting a Session Cookie**
 *
 * Cookies set without an expiration date are session cookies and will be
 * expired when the user closes their browser.
 *
 *     Aphid.Support.Cookie.set("someCookie", "someValue");
 *     // => "someCookie=someValue"
 *
 * **Setting a Cookie w/Expiration**
 *
 * An expiration date may be specified, in number of days, as the third
 * parameter to the `set` method. You may also use a float as the expiration
 * to denote partial days (i.e. 2.5).
 *
 *     Aphid.Support.Cookie.set("someCookie", "someValue", 2.5);
 *     // => "someCookie=someValue; expires=Sat, 03 Jul 2010 05:41:45 GMT"
 *
 * **Reterieving Cookies**
 *
 * You may retrieve the cookie value by name. If the cookie is not set, null
 * will be returned.
 *
 *     Aphid.Support.Cookie.get("someCookie");
 *     // => "someValue"
 *
**/

// TODO Add support for setting and retrieving JSON cookies...

Aphid.Support.Cookie = {

  /**
   * Aphid.Support.Cookie.set(name, value[, daysToExpire]) -> String
   *
   * - name (String): the name of the cookie
   * - value (String): the value to be set in the cookie
   * - daysToExpire (Integer): the optional number of days before the cookie
   *   should expire
   *
   * Sets a browser cookie with the provided *name* and *value*. If
   * *daysToExpire* has not been provided, the cookie will be valid for the
   * current browser session only.
   *
   * This method returns the cookie string as it was sent to the browser.
  **/
  set: function(name, value, daysToExpire)
  {
    var expire = '';
    if (!Object.isUndefined(daysToExpire))
    {
      var date = new Date()
      date.setTime(date.getTime() + (86400000 * parseFloat(daysToExpire)));
      expire = '; expires=' + date.toGMTString();
    }
    return (document.cookie = escape(name) + '=' + (value || '') + expire);
  },

  /**
   * Aphid.Support.Cookie.get(name) -> String | false
   *
   * - name (String): the name of the cookie
   *
   * Attempts to return the cookie value by looking it up by name. If a cookie
   * could not be located, _false_ will be returned so that you may simply
   * check the existence of a cookie with `if (Aphid.Support.Cookie.get('cookieName')) { ... }`.
  **/
  get: function(name)
  {
    var cookie = document.cookie.match(new RegExp('(^|;)\\s*' + escape(name) + '=([^;\\s]*)'));
    return (cookie ? cookie[2] : false);
  },

  /**
   * Aphid.Support.Cookie.erase(name) -> String | false
   *
   * - name (String): the name of the cookie
   *
   * Erases a previously set cookie and returns the value of the cookie that
   * was erased. If a cookie could not be located, _false_ will be returned.
  **/
  erase: function(name)
  {
    var cookie = Aphid.Support.Cookie.get(name) || false;
    Aphid.Support.Cookie.set(name, '', -1);
    return cookie;
  },

  /**
   * Aphid.Support.Cookie.acceptsCookies(name) -> Boolean
   *
   * Tests the browser for cookie support.
  **/
  acceptsCookies: function()
  {
    if (typeof navigator.cookieEnabled == 'boolean')
      return navigator.cookieEnabled;
    Cookie.set('_test', '1');
    return Cookie.erase('_test') != false;
  }

}

$C = Aphid.Support.Cookie;
/**
 * class Aphid.Support.Logger
 *
 * Logging utility class for Aphid with support for multiple levels of
 * verbosity.
 *
 * **Usage Example**
 *
 *     var logger = new Aphid.Support.Logger(Aphid.Support.Logger.DEBUG_LEVEL);
 *     logger.info("Loading assets from server", "AssetLoader");
 *     // => "[AssetLoader] Loading assets from server" to the console
 *
**/
Aphid.Support.Logger = Class.create({

  /**
   * Aphid.Support.Logger#level -> Number
   *
   * A number from 0 to 3 that represents the level of verbosity that should
   * be evaluated when the various instance methods are called. See constants
   * on [[Aphid.Support.Logger]] for available levels.
  **/
  level: false,

  /**
   * new Aphid.Support.Logger([level])
   *
   * Initializes a new Logger instance with an optional log *level*.
  **/
  initialize: function(level)
  {
    this.level = Object.isUndefined(level) ? Aphid.Support.Logger.INFO_LEVEL : level;
  },

  /**
   * Aphid.Support.Logger#debug(message[, prefix]) -> null
   *
   * - message (String): the message to be displayed in the console
   * - prefix (String): an optional prefix to be displayed before the message
   *   that will be wrapped in square brackets (i.e. "\[*prefix*] *message*").
   *
   * Prints the *message* to the console at the *debug* level (if
   * [[Aphid.Support.Logger#level]] instance variable is set to at least
   * `DEBUG_LEVEL`).
  **/
  debug: function(message, prefix)
  {
    if (!window.console) return;
    if (this.level < Aphid.Support.Logger.DEBUG_LEVEL) return;
    if (prefix)
      window.console.debug('[' + prefix + '] ' + message);
    else
      window.console.debug(message);
  },

  /**
   * Aphid.Support.Logger#info(message[, prefix]) -> null
   *
   * - message (String): the message to be displayed in the console
   * - prefix (String): an optional prefix to be displayed before the message
   *   that will be wrapped in square brackets (i.e. "\[*prefix*] *message*").
   *
   * Prints the *message* to the console at the *info* level (if
   * [[Aphid.Support.Logger#level]] instance variable is set to at least
   * `INFO_LEVEL`).
  **/
  info: function(message, prefix)
  {
    if (!window.console) return;
    if (this.level < Aphid.Support.Logger.INFO_LEVEL) return;
    if (prefix)
      window.console.info('[' + prefix + '] ' + message);
    else
      window.console.info(message);
  },

  /**
   * Aphid.Support.Logger#warn(message[, prefix]) -> null
   *
   * - message (String): the message to be displayed in the console
   * - prefix (String): an optional prefix to be displayed before the message
   *   that will be wrapped in square brackets (i.e. "\[*prefix*] *message*").
   *
   * Prints the *message* to the console at the *warn* level (if
   * [[Aphid.Support.Logger#level]] instance variable is set to at least
   * `WARNING_LEVEL`).
  **/
  warn: function(message, prefix)
  {
    if (!window.console) return;
    if (this.level < Aphid.Support.Logger.WARNING_LEVEL) return;
    if (prefix)
      window.console.warn('[' + prefix + '] ' + message);
    else
      window.console.warn(message);
  },

  /**
   * Aphid.Support.Logger#error(message[, prefix]) -> null
   *
   * - message (String): the message to be displayed in the console
   * - prefix (String): an optional prefix to be displayed before the message
   *   that will be wrapped in square brackets (i.e. "\[*prefix*] *message*").
   *
   * Prints the *message* to the console at the *error* level (if
   * [[Aphid.Support.Logger#level]] instance variable is set to at least
   * `ERROR_LEVEL`).
  **/
  error: function(message, prefix)
  {
    if (!window.console) return;
    if (this.level < Aphid.Support.Logger.ERROR_LEVEL) return;
    if (prefix)
      window.console.error('[' + prefix + '] ' + message);
    else
      window.console.error(message);
  }

});

/**
 * Aphid.Support.Logger.DEBUG_LEVEL = 4;
 *
 * Displays all messages, including those that are simply for debugging
 * purposes.
**/
Aphid.Support.Logger.DEBUG_LEVEL = 4;

/**
 * Aphid.Support.Logger.INFO_LEVEL = 3;
 *
 * Displays messages of informational significance, as well as all warning
 * and error messages.
**/
Aphid.Support.Logger.INFO_LEVEL = 3;

/**
 * Aphid.Support.Logger.WARNING_LEVEL = 2;
 *
 * Displays warning messages that may or may not need attention, as well all
 * error messages.
**/
Aphid.Support.Logger.WARNING_LEVEL = 2;

/**
 * Aphid.Support.Logger.ERROR_LEVEL = 1;
 *
 * Displays only critical error messages that need attention.
**/
Aphid.Support.Logger.ERROR_LEVEL = 1;

$L = new Aphid.Support.Logger();
/**
 * Aphid.Core
 *
 * Contains the core scaffolding code that all Aphid-based applications
 * require, which includes the Modal-View-Controller stack support code.
**/

Aphid.Core = {};

/**
 * class Aphid.Core.Application
 *
 * Abstract class that should be subclassed by an application that wishes to
 * be managed by the Aphid framework.
 *
 * By subclassing this Aphid.Core.Application, your application delegate
 * automatically gains a logging instance and other pre-flight setup required
 * to bootstrap a new Aphid-based application instance.
 *
 * ### Usage Example
 *
 *     var Application = Class.create(Aphid.Core.Application, {
 *       initialize: function($super)
 *       {
 *         $super();
 *         this.logger.info("Initializing the Foo Application...", "Application");
 *       }
 *     });
 *
 * ### Default Initialization
 *
 * If you do not create your own subclass of Aphid.Core.Application, a default
 * instance will be initialized for you.
 *
**/

var Application;

Aphid.Core.Application = Class.create({

  /**
   * Aphid.Core.Application#logger -> Aphid.Support.Logger | false
   *
   * A global, shared instance of [[Aphid.Support.Logger]].
  **/
  logger: false,

  /**
   * Aphid.Core.Application#logLevel -> Integer
   *
   * The default log level to be used by the global, shared instance of
   * [[Aphid.Support.Logger]].
  **/
  logLevel: Aphid.Support.Logger.DEBUG_LEVEL,

  /**
   * Aphid.Core.Application#loadingIndicator -> Aphid.Support.LoadingIndicator | false
   *
   * A global, shared instance of [[Aphid.Support.LoadingIndicator]].
  **/
  loadingIndicator: false,

  /**
   * Aphid.Core.Application#mainWindow -> Aphid.UI.Window | false
   *
   * An instance of [[Aphid.UI.Window]] that represents the current document
   * body.
  **/
  mainWindow: false,

  /**
   * Aphid.Core.Application#baseViewPath -> String | false
   *
   * The base view path (or URL) that view templates should be loaded from,
   * by default.
  **/
  baseViewPath: false,

  /**
   * new Aphid.Core.Application()
   *
   * Initializes the Logger.
  **/
  initialize: function()
  {
    this._initializeLogger();
    this._initializeLoadingIndicator();
    this.mainWindow = new Aphid.UI.Window();
    this.baseViewPath = "Views";
  },

  /**
   * Aphid.Core.Application#applicationDidFinishInitialization() -> null
   *
   * This callback is triggered after the Application instance has been
   * initialized and can be overloaded in your subclass to perform any actions
   * that need to be performed after initialization has completed.
  **/
  applicationDidFinishInitialization: function()
  {

  },

  /*
   * Aphid.Core.Application#_initializeLoadingIndicator() -> Aphid.UI.LoadingIndicator
   *
   * Initializes a new LoadingIndicator instance to be shared by the
   * application.
   */
  _initializeLoadingIndicator: function()
  {
    this.loadingIndicator = new Aphid.UI.LoadingIndicator();
    Ajax.Responders.register({
      onCreate:   this.loadingIndicator.show.bind(this.loadingIndicator),
      onComplete: this.loadingIndicator.hide.bind(this.loadingIndicator)
    });
    return this.loadingIndicator;
  },

  /*
   * Aphid.Core.Application#_initializeLogger() -> Aphid.Support.Logger
   *
   * Initializes a new Logger instance to be shared by the Application. The
   * Logger instance is accessible as Application.sharedInstance.logger as
   * well as the shortcut $L (i.e. $L.warn("Danger, Will Robinson! Danger!")).
   */
  _initializeLogger: function()
  {
    this.logger = new Aphid.Support.Logger(this.logLevel);
    return this.logger;
  }

});

/*
 * Aphid.Core.Application.bootstrap() -> null
 *
 * Initializes the application delegate (an instance of Application that
 * subclasses [[Aphid.Core.Application]] or a default instance of
 * [[Aphid.Core.Application]] if a custom subclass does not exist).
 *
 * This method should be called after the DOM has been loaded and should never
 * be called directly by your application.
**/
Aphid.Core.Application.bootstrap = function()
{
  if (Object.isUndefined(Application))
  {
    $L.warn("Initializing a default application delegate as 'Application' ... You should define your own Aphid.Core.Application subclass.", "Aphid.Core.Application");
    Application = Class.create(Aphid.Core.Application);
  }
  Application.sharedInstance = new Application();
  if (!Object.isUndefined(Application.sharedInstance.applicationDidFinishInitialization))
    Application.sharedInstance.applicationDidFinishInitialization();
}
document.observe('dom:loaded', Aphid.Core.Application.bootstrap);
/**
 * class Aphid.Model
 *
 * An abstract class that provides basic functionality for models that, when
 * subclassed, makes loading and initializing model objects simple and
 * consistent.
 *
 * ### Custom Models
 *
 * To create a custom model, you will need to subclass [[Aphid.Model]] and
 * define at least two properties: [[Aphid.Model#attributes]] and
 * [[Aphid.Model#url]].
 *
 * #### Example
 *
 *     var Contact = Class.create(Aphid.Model, {
 *       url: "http://example.com/contacts?id=#{identifier}",
 *       attributes: [ "name", "email" ]
 *     });
 *
 * You may also wish to implement custom proxies to initialize certain
 * attributes of the model as an instance of a specific class. See
 * [[Aphid.Model#proxies]] for more information on their usage.
 *
 * ### URL Formats
 *
 * The [[Aphid.Model#url]] attribute supports string interpolation so that you
 * may customize where in the URL the record identifier is injected. Your URL
 * must include `#{identifier}` at the point that you wish to add the record
 * identifier:
 *
 *     url: "http://example.com/contacts/#{identifier}?option=foo"
 *
 * ### Loading & Initializing Models from Web Service by Identifier
 *
 * Typically, you will want to initialize your model by loading its attributes
 * from a remote web service by a unique identifier. To do this, you must
 * first define the [[Aphid.Model#url]] property on the model definition.
 * Then you may simply pass in an identifier key to the initializer with the
 * id of the record to be loaded.
 *
 * #### Example
 *
 *     // Load by a numerical identifier
 *     var contact = new Contact({ identifier: 123 });
 *     // ... or a string identifier
 *     var contact = new Contact({ identifier: '8iCuNscVT2yzBc13aMjySrBVCfF' });
 *
 * #### Model "Loaded" State
 *
 * Since models are loaded asynchronously when loaded by an identifier, it is
 * important to monitor the model's load state before attempting to access its
 * properties or operate on the object.
 *
 * The [[Aphid.Model#isLoaded]] instance property is a boolean attribute that
 * denotes whether or not the model has been fully loaded or not. You may need
 * to check this property before operating on the model to ensure that you are
 * working with a fully initialized instance of the model and retry your
 * operation with a timer if it is still loading.
 *
 * #### Delegate Notifications of Load State Changes
 *
 * Alternatively, you may implement the `modelDidFinishLoading` method in your
 * delegate and assign the delegate to your model during initialization.  implementingobject
 * in the class responsible for loading the model and assign the object that
 * implements the method during initialization as the delegate for the model:
 *
 *     var ContactController = Class.create(Aphid.UI.ViewController, {
 *       contact: false,
 *       viewDidLoad: function()
 *       {
 *         this.contact = new Contact(123);
 *       },
 *       modelDidFinishLoading: function(model)
 *       {
 *         this.displayContact();
 *       }
 *     });
 *
 * ### Initializing Models from JSON
 *
 * If you already have a JSON string that represents the serialized state of
 * your model, you may initialize it by specifying it as the value of the
 * `json` parameter during initialization.
 *
 * #### Example
 *
 *     var contactJSON = '{"name":"John Doe","email":"jdoe@example.com"}';
 *     var contact = new Contact({ json: contactJSON });
 *     contact.name; // John Doe
 *
 * ### Initializing Models from Objects
 *
 * If you already have an object, such as a hash, that represents the
 * serialized state of your model, you may initialize it by specifying it as
 * the value of the `object` parameter during initialization.
 *
 * This can be useful if you wish to initialize a new instance of an existing
 * record, but wish to change a few attributes to make it unique before you
 * save it.
 *
 * #### Example
 *
 *     var contactAttributes = {
 *       name: "John Doe",
 *       email: "jdoe@example.com"
 *     };
 *     var contact = new Contact({ object: contactAttributes });
 *     contact.name; // John Doe
 *
 * ### Initializing Models from HTML
 *
 * Another method of initializing a model is from an HTML element that
 * specifies its attributes using HTML5 data attributes (_data-*_). You may
 * initialize a model from either an HTML string or an Element instance.
 *
 * This can be useful when you are initializing from a statically-generated
 * page.
 *
 * #### Example
 *
 *     // <div id="contact_123" data-name="John Doe" data-email="jdoe@example.com">
 *     //   John Doe - <a href="mailto:jdoe@example.com">jdoe@example.com</a>
 *     // </div>
 *     var contact = new Contact({ element: $('contact_123') });
 *     contact.name; // John Doe
 *
 * ### Delegate Methods
 *
 * While it's not typical to have a delegate for your model, in cases where
 * asynchronous loading or other operations are taking place it can be useful
 * to be notified when various state changes occur.
 *
 *  * `modelDidFinishLoading(model)` - Called when the model has finished
 *    loading and is fully initialized after an asynchronous load operation.
 *
**/

Aphid.Model = Class.create({

  /**
   * Aphid.Model#delegate -> Object
   *
   * An object that will receive calls for delegate methods of this class.
  **/
  delegate: false,

  /**
   * Aphid.Model#url -> Object
   *
   * The URL template to be used when loading model objects remotely by a
   * record identifier. This string must include `#{identifier}` at the point
   * where the identifier should be placed.
   *
   * #### Example
   *
   *     "http://example.com/contacts/#{identifier}?option=foo"
   *
  **/
  url: false,

  /**
   * Aphid.Model#identifier -> String | Integer
   *
   * The unique identifier that represents the record for this model instance.
   * If an identifier is specified during initialization, it will be retrieved
   * from the remote server that has been configured for this model class.
  **/
  identifier: false,

  /**
   * Aphid.Model#element -> Element | false
   *
   * The HTML Element that the instance was initialized with, or false if
   * the instance was not initialized from an Element.
  **/
  element: false,

  /**
   * Aphid.Model#object -> Element | false
   *
   * The object (i.e. a hash or an existing instance of this model class) that
   * the instance was initialized with, or false if the instance was not
   * initialized from an existing object.
  **/
  object: false,

  /**
   * Aphid.Model#json -> Element | false
   *
   * The JSON string that the instance was initialized with, or false if the
   * instance was not initialized from JSON.
  **/
  json: false,

  /**
   * Aphid.Model#attributes -> Array
   *
   * An array of all possible attribute names that instances of the model will
   * contain. When initializing the object from another object, JSON string,
   * or HTML element (using data-* attributes), these attribute names will be
   * referenced to set values from the initialization data.
  **/
  attributes: [],

  /**
   * Aphid.Model#proxies -> Hash
   *
   * Proxies allow you to specify the name of a class that should be
   * initialized with the value of the attribute. This is useful if you are
   * initializing an instance of a model from a JSON object that contains the
   * attributes for related classes.
   *
   * ### Example
   *
   * Lets say we have a Contact model that contains 3 attributes: _name_,
   * _email_ and _address_. _Name_ and _email_ are simple string attributes,
   * but what if we want _address_ to be an instance of the Address class? To
   * accomplish this, we would first define our models as so:
   *
   *     var Address = Class.create(Aphid.Model, {
   *       attributes: [ "street", "city", "state", "zip" ],
   *       toString: function() {
   *         return this.street + "\n" + this.city + ", " + this.state + " " + this.zip;
   *       }
   *     });
   *     var Contact = Class.create(Aphid.Model, {
   *       attributes: [ "name", "email", "address" ],
   *       proxies: { address: Address }
   *     });
   *
   * Now we can pass in a Hash as the value to the address attribute and
   * the Contact model will automatically initialize a new instance of Address
   * using the provided Hash:
   *
   *     var contact = new Contact({
   *       name: "John Doe",
   *       email: "jdoe@example.com",
   *       address: {
   *         street: "123 Sample Street",
   *         city: "Anytown",
   *         state: "TX",
   *         zip: 12345
   *       }
   *     })
   *
   * The _address_ attribute on the Contact model will now return an instance
   * of the Address class:
   *
   *     contact.address.toString();
   *     // "123 Sample Street
   *     //  Anytown, TX 12345"
   *
  **/
  proxies: {},

  /**
   * Aphid.Model#isLoaded -> Boolean
   *
   * Denotes whether the model has been fully loaded and innitialized. Since
   * the loading of model data can happen asynchronously, this attribute may
   * be referenced and monitored to know when the model has finished loading.
  **/
  isLoaded: false,

  // -------------------------------------------------------------------------

  /**
   * new Aphid.Model([options])
   *
   * - options (Hash): Initial property values to be set on the Model instance
  **/
  initialize: function(options)
  {
    Object.applyOptionsToInstance(this, options);

    if (this.identifier)
      this._initializeFromIdentifier();
    else if (this.element)
      this._initializeFromElement();
    else if (this.object)
      this._initializeFromObject();
    else if (this.json)
      this._initializeFromJSON();
    else
      this._initializeEmptyObject();
  },

  /*
   * Aphid.Model#_initializeFromIdentifier() -> null
   *
   * Initializes the instance by attempting to load the record from a remote
   * datasource using the identifier provided as an option during
   * initialization.
   *
   * Implement the delegate methods `modelDidFinishLoading` to be notified
   * when the model has been completely initialized.
   *
   * TODO Implement error handling for when the request fails
  **/
  _initializeFromIdentifier: function()
  {
    $L.info("Initializing from Record Identifier...", "Aphid.Model");

    // Assemble URL
    var urlTemplate = new Template(this.url);
    var url = urlTemplate.evaluate({ identifier: this.identifier });

    // TODO Error handling for when the string did not have any variables

    // Request Options
    var options = {
      method: 'get',
      contentType: 'application/json',
      onSuccess: function(transport)
      {
        this.object = transport.responseJSON;
        this._initializeFromObject();
        this.isLoaded = true;
        if (this.delegate && this.delegate.modelDidFinishLoading)
          this.delegate.modelDidFinishLoading(this);
      }.bind(this),
      onFailure: function(transport)
      {
        var alertView = new Aphid.UI.AlertView();
        alertView.title = "Error Loading Resource";
        alertView.message = "Failed to load an instance of <strong>" + this.displayName + "</strong> using the identifier: <strong>" + this.identifier + "</strong>";
        alertView.status = "Error " + transport.status + " - " + transport.statusText;
        alertView.showAnimated();
      }.bind(this)
    };

    // Make Request
    new Ajax.Request(url, options);
  },

  /*
   * Aphid.Model#_initializeFromElement() -> null
   *
   * Initializes the instance from the HTML Element provided as an option
   * during initialization.
  **/
  _initializeFromElement: function()
  {
    $L.info("Initializing from Element...", "Aphid.Model");
    if (Object.isString(this.element))
      this.element = Element.fromString(this.element);
    this.attributes.each(
      function(attribute)
      {
        $L.debug('Setting value of attribute "' + attribute + '" to "' + this.element.getAttribute('data-' + attribute) + '"');
        this[attribute] = this.element.getAttribute('data-' + attribute);
      }.bind(this)
    );
    this._instantiateProxies();
  },

  /*
   * Aphid.Model#_initializeFromObject() -> null
   *
   * Initializes the instance from a JavaScript object by applying any of the
   * attributes for this model that are found in the object to the instance.
  **/
  _initializeFromObject: function()
  {
    $L.info("Initializing from Object...", "Aphid.Model");
    this.attributes.each(
      function(attribute)
      {
        $L.debug('Setting value of attribute "' + attribute + '" to "' + this.object[attribute] + '"');
        this[attribute] = this.object[attribute];
      }.bind(this)
    );
    this._instantiateProxies();
  },

  /*
   * Aphid.Model#_initializeFromJSON() -> null
   *
   * Initializes the instance from the JSON string provided as an option
   * during initialization by first evaluating the string and then passing it
   * on to [[Aphid.Model#_initializeFromObject()]].
  **/
  _initializeFromJSON: function()
  {
    $L.info("Initializing from JSON...", "Aphid.Model");
    this.object = this.json.evalJSON();
    this._initializeFromObject();
  },

  /*
   * Aphid.Model#_initializeEmptyObject() -> null
   *
   * Initializes an empty instance with each attribute set to null.
  **/
  _initializeEmptyObject: function()
  {
    $L.info("Initializing empty object...", "Aphid.Model");
    this.attributes.each(
      function(attribute)
      {
        this[attribute] = null;
      }.bind(this)
    );
  },

  // Proxies -----------------------------------------------------------------

  /*
   * Aphid.Model#_instantiateProxies() -> null
   *
   * Instantiates any configured proxies on the model instance.
  **/
  _instantiateProxies: function()
  {
    $H(this.proxies).each(this._instantiateProxy, this);
  },

  /*
   * Aphid.Model#_instantiateProxy(proxy) -> null
   *
   * - proxy (Hash): a key/value pair containing the attribute (as the key)
   *   and the class to be instantiated (as the value).
   *
   * Instantiates a new instance of the configured class for the given
   * proxy (attribute). If the attribute's value is an array, each element of
   * the array will be instantiated as the configured proxy class.
  **/
  _instantiateProxy: function(proxy)
  {
    var attribute = proxy[0],
        klass     = proxy[1];
    if (Object.isArray(this[attribute]))
      this[attribute] = this[attribute].collect(function(tuple) {
        var instance = new klass({ object: tuple })
        return instance;
      });
    else
      this[attribute] = new klass({ object: this[attribute] });
  },

  // -------------------------------------------------------------------------

  /**
   * Aphid.Model#serialize() -> Hash
   *
   * Returns a Hash containing the keys and values that make up the instance
   * attributes for the model. This Hash is suitable for initializing another
   * instance of the model or to convert to JSON for transport to a remote
   * web service.
  **/
  serialize: function()
  {
    var attributes = {};

    this.attributes.each(function(attribute)
    {
      // Undefined Properties
      if (Object.isUndefined(this[attribute]) || this[attribute] == null)
        attributes[attribute] = "";

      // Arrays (Values, Model Relationships, etc)
      else if (Object.isArray(this[attribute]))
      {
        attributes[attribute] = this[attribute].collect(
          function(tuple) {
            return Object.isUndefined(tuple.serialize) ? tuple : tuple.serialize()
          }
        );
      }

      // Model Relationships
      else if (this[attribute].serialize)
        attributes[attribute] = this[attribute].serialize();

      // Simple Value
      else
        attributes[attribute] = this[attribute];
    }, this);

    return attributes;
  },

  // -------------------------------------------------------------------------

  /**
   * Aphid.Model#toTemplateReplacements() -> Hash
   *
   * Returns a Hash suitable for use with Prototype's Template and string
   * interpolation functionality.
  **/
  toTemplateReplacements: function()
  {
    var attributes = {};
    this.attributes.each(
      function(attribute)
      {
        attributes[attribute] = this[attribute];
      }.bind(this)
    );
    return attributes;
  }

});
/**
 * Aphid.UI
 *
 * Contains the base UI components (controls, views, etc) that comprise
 * typical Aphid-based applications.
**/

Aphid.UI = {};

/**
 * class Aphid.UI.View
 *
 * This class serves as a lightweight wrapper for a DOM element and as a
 * scaffold on which to build functionality on top of the wrapped HTML.
 *
 * **TODO** Document the 3 ways that views can be initialized: from an element,
 * a template or an outlet...
 *
 * ### Implementing Custom Views
 *
 * In general, [[Aphid.UI.View]] should be subclassed and not initialized
 * directly so that you may implement the functionality that is specific to
 * your custom view's requirements. To implement a custom view, simply create
 * a subclass of [[Aphid.UI.View]]:
 *
 *     var FooBarView = Class.create(Aphid.UI.View, {
 *       displayName: "FooBarView",
 *       fooLabel: false,
 *       contentView: false,
 *       viewDidFinishLoading: function()
 *       {
 *         this.fooLabel.element.update('Bar!');
 *       }
 *     });
 *
 * In this example, the `displayName` property specifies the name of the view
 * itself. This will be used to load the template (see the *View Templates*
 * section below for more details). The `fooLabel` and `contentView`
 * properties are outlets that will be wired up to elements within the view
 * template. Finally, the `viewDidFinishLoading` callback is called once the
 * view has loaded and in this example we are setting new content on our
 * `fooLabel` outlet.
 *
 * ### View Templates
 *
 * View templates are loaded asynchronously when the instance is first
 * initialized. The view template itself should be located in the path
 * that is defined by the `baseViewPath` instance property on your Application
 * delegate (which defaults to the relative path of *Views*). The filename of
 * the template should match the value of the [[Aphid.UI.View#displayName]]
 * property (i.e. *Views/FooBarView.html*).
 *
 *     <header>
 *       <h1 data-outlet="fooLabel">Foo</h1>
 *     </header>
 *     <section data-outlet="contentView">
 *       ...
 *     </section>
 *
 * View templates that are not wrapped in a single containing element will
 * automatically be wrapped in a <section/> element with the DOM ID set to
 * the `displayName` instance property.
 *
 * #### Outlets
 *
 * In traditional JavaScript integrations, you must peruse the DOM to select
 * the elements on which you wish to operate. In Aphid, we go one step further
 * and introduce the concept of outlets.
 *
 * An outlet is a reference to an element within a view template that is
 * automatically connected to your view instance once the view template has
 * been loaded. Outlets may be created by adding a custom attribute to the
 * element you wish to connect to named `data-outlet`. For example:
 *
 *     <header>
 *       <h1 data-outlet="viewHeader">...</h1>
 *     </header>
 *
 * You must also define an instance property in your custom view subclass
 * with the same name as the `data-outlet` attribute's value.
 *
 * When the view template loads, it will be scanned for all elements that
 * contain the data-outlet attribute and those elements will be wrapped by
 * a vanilla [[Aphid.UI.View]] instance and assigned to your view's matching
 * instance property.
 *
 * #### Delegates & Data Sources on Outlets
 *
 * By default, delegates and data sources (if applicable) will be
 * automatically assigned to the view that owns the outlet.
 *
 * #### Actions
 *
 * Similar to outlets, actions allow you to easily map element events to
 * methods in your view subclass. For example, if you defined a `doSomething`
 * method in your subclass, you could connect a button to it with the
 * following:
 *
 *     <input type="button" data-action="doSomething" />
 *
 * This will call the `doSomething()` method on your subclass with the
 * triggered event as the first parameter. Your method signature should look
 * similar to the following:
 *
 *     doSomething: function(event)
 *     {
 *       alert('Doing it!');
 *     }
 *
 * **NOTE:** Actions are still under development and have a few shortcomings
 * that will need to be addressed, such as how to handle different event types
 * and custom parameter passing. For advanced usage and for the time being, it
 * is recommended that you set an outlet on the element and set up your own
 * event observers.
 *
 * ### Delegates Methods
 *
 *  - `viewDidFinishLoading` — Called once the view template has been fully
 *    loaded and initialized. This should only ever be called once for a
 *    given view instance upon its first initialization.
 *
**/

Aphid.UI.View = Class.create(
{

  /**
   * Aphid.UI.View#delegate -> Object
   *
   * An object that will receive calls for delegate methods of this class.
  **/
  delegate: false,

  /**
   * Aphid.UI.View#displayName -> String
   *
   * A friendly displayName for the view. Defining this property can help
   * track down issues as it will be used when logging errors and warnings or
   * other informational messages.
  **/
  displayName: false,

  /**
   * Aphid.UI.View#template -> String
   *
   * The base filename of the view template that should be loaded for this
   * view.
   *
   * For example, if *template* is set to "MainView", Aphid will attempt to
   * load *Views/MainView.html*. The directory in which view templates are
   * loaded from is managed by the Application delegate's baseViewPath
   * property.
  **/
  template: false,

  /**
   * Aphid.UI.View#element -> Element
   *
   * The root HTML element that contains the view.
  **/
  element: false,

  /**
   * Aphid.UI.View#outlet -> Element
   *
   * The HTML element that defines an outlet that references the view that
   * should be loaded.
  **/
  outlet: false,

  /**
   * Aphid.UI.View#subviews -> Array
   *
   * An array of all View instances that have been added to this view as a
   * subview.
  **/
  subviews: false,

  /**
   * Aphid.UI.View#superview -> Aphid.UI.View | false
   *
   * The superview that the View instances is currently a subview of. This may
   * change at any time and may be false if the view does not have a superview.
  **/
  superview: false,

  /**
   * Aphid.UI.View#isLoaded -> Boolean
   *
   * If the View has been loaded, this property will be set to true.
  **/
  isLoaded: false,

  /**
   * Aphid.UI.View#isLoading -> Boolean
   *
   * If the View is currently in the process of being loaded from the server,
   * this property will be set to true.
  **/
  isLoading: false,

  /**
   * Aphid.UI.View#initializedFromTemplate -> Boolean
   *
   * If the View instance was initialized from a template (using outlets),
   * this will be set to true.
  **/
  initializedFromOutlet: false,

  // Initializers ------------------------------------------------------------

  /**
   * new Aphid.UI.View([options])
   *
   * - options (Hash): Initial property values to be set on the View instance
   *
   * Initializes a new View instance.
  **/
  initialize: function(options)
  {
    Object.applyOptionsToInstance(this, options);

    // Default State
    this.subviews  = $A();
    this.isLoaded  = false;
    this.isLoading = false;

    // Initialize from Outlet
    if (this.outlet)
      this._initializeFromOutlet();

    // Initialize from Element
    else if (this.element)
      this._initializeFromElement();

    // Initialize from Template
    else if (this.template)
      this._initializeFromTemplate();

  },

  _initializeFromElement: function()
  {
    $L.info("Initializing from Element", "Aphid.UI.View");
    this._setupView();
  },

  _initializeFromTemplate: function()
  {
    $L.info("Initializing from Template", "Aphid.UI.View");
    this._loadTemplate();
  },

  _initializeFromOutlet: function()
  {
    $L.info("Initializing from Outlet", "Aphid.UI.View");
    if (this.template)
      this._initializeFromTemplate();
    else
    {
      this.element = this.outlet;
      this._setupView();
    }
  },

  // View Management ---------------------------------------------------------

  /**
   * Aphid.UI.View#setView(view) -> null
   *
   * - view (View): the view that should be set
   *
   * Clears all subviews of the current view and sets the specified *view* as
   * the current view's only subview.
  **/
  setView: function(view)
  {
    this._setView(view, false);
  },

  /**
   * Aphid.UI.View#setViewAnimated(view[, animated = true]) -> null
   *
   * - view (View): the view that should be set
   * - animated (Boolean): true if the view should be presented with animation
   *
   * Clears all subviews of the current view and presents the specified *view*
   * with an animated effect (currently this effect is *appear*).
  **/
  setViewAnimated: function(view, animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    this._setView(view, animated);
  },

  /*
   * Aphid.UI.View#_setView(view[, animated = false]) -> null
   *
   * - view (View): the view that should be set
   * - animated (Boolean): true if the view should be presented with animation
   *
   * Clears all subviews of the current view and presents the specified *view*
   * with an animated effect (currently this effect is *appear*).
  **/
  _setView: function(view, animated)
  {
    if (Object.isUndefined(animated)) animated = false;

    // Remove existing views
    // TODO Add viewWillDisappear/viewDidDisappear callbacks
    this.subviews.invoke('removeFromSuperview', animated);

    // Clear the Subviews
    this.subviews = $A();

    // Add the specified view as the view's only subview
    this.addSubviewAnimated(view, animated);
  },

  /**
   * Aphid.UI.View#addSubview(view) -> null
   *
   * - view (View): the view that should be set
   *
   * Adds the specified *view* as a subview of the view instance.
  **/
  addSubview: function(view)
  {
    // If the view is loading, we need to wait for it to finish loading before
    // we can add it to the DOM.
    if (view.isLoading)
      this._addSubview.bind(this).delay(0.1, view, false);

    // Otherwise, we can add it immediately.
    else
      this._addSubview(view, false);
  },

  /**
   * Aphid.UI.View#addSubviewAnimated(view[, animated = true]) -> null
   *
   * - view (View): the view that should be set
   * - animated (Boolean): true if the view should be presented with animation
   *
   * Adds the specified *view* as a subview of the view instance and presents
   * it with an animated effect, by default.
  **/
  addSubviewAnimated: function(view, animated)
  {
    if (Object.isUndefined(animated)) animated = false;

    // If the view is loading, we need to wait for it to finish loading before
    // we can add it to the DOM.
    if (view.isLoading)
      this._addSubview.bind(this).delay(0.1, view, animated);

    // Otherwise, we can add it immediately.
    else
      this._addSubview(view, animated);
  },

  /*
   * Aphid.UI.View#_addSubview(view[, animated = false]) -> null
   *
   * - view (View): the view that should be set
   * - animated (Boolean): true if the view should be presented with animation
   *
   * Adds the specified *view* as a subview of the view instance and optionally
   * presents it with an animated effect.
  **/
  _addSubview: function(view, animated)
  {
    if (Object.isUndefined(animated)) animated = false;

    // If the view has still not been loaded, delay this call again...
    if (!view.isLoaded)
    {
      // TODO We need to add a counter to this so that we don't wait longer
      // a few seconds before giving up and raising a warning...
      this._addSubview.bind(this).delay(0.1, view, animated);
      return;
    }

    $L.info('Adding "' + (view.displayName || "Unknown") + '" as a subview to "' + (this.displayName || "unknown") + '" (animated: ' + animated + ')', 'Aphid.UI.View');

    // Setup the View
    view.element.hide();
    view.superview = this;
    this.subviews.push(view);

    // "View Will Appear..."
    if (view.viewWillAppear)
      view.viewWillAppear();

    // Insert the view into the DOM
    this.element.insert(view.element);

    // Display the View
    animated ? view.element.appear({ duration: 0.25 }) : view.element.show();

    // "View Did Appear..."
    if (view.viewDidAppear)
      view.viewDidAppear();
  },

  /**
   * Aphid.UI.View#removeFromSuperview() -> null
   *
   * Removes the view from its superview, if it belongs to another view.
  **/
  removeFromSuperview: function()
  {
    this._removeFromSuperview(false);
  },

  /**
   * Aphid.UI.View#removeFromSuperviewAnimated([animated = true]) -> null
   *
   * - animated (Boolean): true if the view should be dismissed with animation
   *
   * Removes the view from its superview, with an optional animated effect.
   * This method will return immediately if the view does not belong to a
   * superview.
  **/
  removeFromSuperviewAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    this._removeFromSuperview(animated);
  },

  /*
   * Aphid.UI.View#_removeFromSuperview([animated = false]) -> null
   *
   * - animated (Boolean): true if the view should be dismissed with animation
   *
   * Removes the view from its superview, with an optional animated effect.
   * This method will return immediately if the view does not belong to a
   * superview.
  **/
  _removeFromSuperview: function(animated)
  {
    if (Object.isUndefined(animated)) animated = false;
    if (!this.superview)
      return;

    // "View Will Disappear"
    if (this.viewWillDisappear)
      this.viewWillDisappear();

    // Hide the View
    animated ? this.element.fade({ duration: 0.25 }) : this.element.hide();

    // Remove the View's element from the DOM
    if (this.element.parentNode != null)
      this.element = this.element.remove()

    // Remove from superview's subviews
    this.superview.subviews = this.superview.subviews.without(this);

    // Remove reference to superview
    this.superview = false;

    // "View Did Disappear"
    // TODO if animated, this needs to be called when the animation has completed instead...
    if (this.viewDidDisappear)
      this.viewDidDisappear();
  },

  // View Loading ------------------------------------------------------------

  /*
   * Aphid.UI.View#_loadTemplate() -> null
   *
   * Loads the View template (as derived from the *template* and
   * *Application.baseViewPath* properties) asynchronously.
  **/
  _loadTemplate: function()
  {
    var viewPath = Application.sharedInstance.baseViewPath + '/' + this.template + '.html',
        options  = {
          asynchronous: true,
          method: 'get',
          onComplete: this._templateDidFinishLoading.bind(this),
          onFailure: function(transport)
          {
            if (transport.status == 404)
              $L.error("Missing Template (" + Application.sharedInstance.baseViewPath + "/" + this.template + ".html)", "Aphid.UI.View");
          }.bind(this)
        };

    this.isLoaded  = false;
    this.isLoading = true;

    new Ajax.Request(viewPath, options);
  },

  /*
   * Aphid.UI.View#_viewDidFinishLoading(transport) -> null
   *
   * Callback method that is called once the view has finished loading
   * asynchronously. This method sets up the View instance by wiring any
   * outlets and actions found in the template and then calls the appropriate
   * delegate methods.
   *
   * TODO This method should probably just be viewDidFinishLoading so that subclasses can call it instead of making it a delegate call
   *
  **/
  _templateDidFinishLoading: function(transport)
  {
    var loadedTemplate = Element.fromString(transport.responseText);

    // If the view was initialized from a template, we need to insert the
    // template into the placeholder element that initialized the view
    // instance.
    if (this.outlet)
    {
      this.element = this.outlet.update(loadedTemplate);
      // // TODO We may need to ensure that we aren't doubling-up on the wrapper element with the same ID, etc...
      // this.element.update(template);
    }

    // // Otherwise, set the template directly on the object and let its delegate
    // // deal with it.
    else
    {
      if (Object.isElement(loadedTemplate))
        this.element = loadedTemplate;
      else
        this.element = new Element("section", { className: "view" }).update(transport.responseText);
    }

    // Process the template by connecting outlets and actions and calling any
    // callbacks and delegate methods.
    this._setupView();
  },

  // View Processing ---------------------------------------------------------

  /*
   * Aphid.UI.View#_setupView() -> null
   *
   * Processes the view template which has already been loaded remotely or was
   * present in the page when initialized with an element. This will connect
   * all outlets and actions to the view instance and call the appropriate
   * callbacks.
  **/
  _setupView: function()
  {
    this._connectToOutlets();
    this._wireActionsToInstance();
    this.isLoaded  = true;
    this.isLoading = false;
    this.viewDidLoad();
    if (this.delegate && this.delegate.viewDidFinishLoading)
      this.delegate.viewDidFinishLoading(this);
  },

  // View Outlets ------------------------------------------------------------

  /*
   * Aphid.UI.View#_connectToOutlets() -> null
   *
   * Scans the view template for elements that have the *data-outlet*
   * attribute defined and attempts to wire them up to the View instance by
   * the specified name.
   *
   * For example, if you have a property named `someView` defined on your View
   * class and the following in your view template:
   *
   *     <section data-outlet="someView">...</section>
   *
   * ... your view instance will automatically have the `someView` property
   * reference a View instance that wraps the DOM element.
   *
   * * TODO This is still a little early in its implementation and needs to be
   *      thought out better on how to handle different event types or
   *      different element types.
  **/
  _connectToOutlets: function()
  {
    if (this.element.childElements().length == 0) return;

    var outletElements = this.element.select('*[data-outlet]');
    $L.debug('Found ' + outletElements.length + ' ' + "outlet".pluralize(outletElements.length) + ' in the view (' + this.displayName + ')...', 'Aphid.UI.View');

    outletElements.each(
      function(element)
      {
        var outlet    = element.getAttribute('data-outlet'),
            viewClass = element.getAttribute('data-view-class');

        // If a custom view class was not provided, default to Aphid.UI.View
        if (!viewClass)
        {
          viewClassImplementation = eval("Aphid.UI.View");
          viewClass = "Aphid.UI.View";
        }
        else
          viewClassImplementation = eval(viewClass);

        if (!Object.isUndefined(this[outlet]))
        {
          var instance;
          $L.info('Connecting outlet "' + outlet + '" to view (class: ' + viewClass + ')...', 'Aphid.UI.View');
          try {

            // Set options from data-* attributes...
            var options = $H();
            $H(viewClassImplementation.prototype).keys().each(
              function(property)
              {
                // Disallow Private Properties
                if (property.startsWith('_'))
                  return;
                // Disallow Functions
                if (Object.isFunction(viewClassImplementation.prototype[property]))
                  return;
                var value;
                if ((value = element.readAttribute("data-" + property.attributize())) != null)
                {
                  if (value == "true") value = true;
                  if (value == "false") value = false;
                  options.set(property, value);
                }
              }
            );
            instance = new viewClassImplementation(options.merge({
              outlet: element,
              delegate: this,
              dataSource: this,
              superview: this
            }));
          }
          catch (error)
          {
            $L.error("Unable to connect outlet (" + outlet + ") to view class (" + viewClass + ")... " + error);
            return;
          }
          this[outlet] = instance;
          this.subviews.push(instance);
        }
        else
          $L.warn('Unable to connect outlet "' + outlet + '" to view controller as the controller does not define a matching member variable', 'Aphid.UI.View');
      }.bind(this)
    );
  },

  // View Actions ------------------------------------------------------------

  /*
   * Aphid.UI.View#_wireActionsToInstance() -> null
   *
   * Scans the view template for elements that have the *data-action*
   * attribute defined and sets up Event observers to call the specified
   * method on the View instance when the Element triggers the appropriate
   * event.
   *
   * For example, if you have a method named `doSomething` defined on your View
   * class and the following in your view template:
   *
   *     <input type="button" data-action="doSomething" />
   *
   * ... the element will automatically be set up to call doSomething() on
   * your view instance when the user clicks the button.
   *
   * TODO This is still a little early in its implementation and needs to be
   *      thought out better on how to handle different event types or
   *      different element types.
  **/
  _wireActionsToInstance: function()
  {
    if (this.element.childElements().length == 0) return;

    var actionElements = this.element.select('*[data-action]');
    $L.debug('Found ' + actionElements.length + ' ' + "action".pluralize(actionElements.length) + ' in the view (' + this.displayName + ')...', 'Aphid.UI.View');

    actionElements.each(
      function(element)
      {
        var action = element.getAttribute('data-action');
        if (!Object.isUndefined(this[action]))
        {
          element.observe('click',
            function(event)
            {
              // TODO See if this can be made into this[action]()
              eval('this.' + action + '()');
            }.bind(this)
          );

          // var instance = eval("new " + viewClass + "()");
          // instance.initializeFromTemplate(element);
          // this[outlet] = instance;
        }
        else
          $L.warn('Unable to connect action "' + action + '" to view controller as the controller does not define the requested method', 'Aphid.UI.View');
      }.bind(this)
    );
  },

  // Callbacks ---------------------------------------------------------------

  viewDidLoad: function()
  {
  }

});

// Method Name Mappings for Debugging ----------------------------------------

Aphid.UI.View.prototype.setView.displayName = "Aphid.UI.View.setView";
Aphid.UI.View.prototype.setViewAnimated.displayName = "Aphid.UI.View.setViewAnimated";
Aphid.UI.View.prototype._setView.displayName = "Aphid.UI.View._setView";
Aphid.UI.View.prototype.addSubview.displayName = "Aphid.UI.View.addSubview";
Aphid.UI.View.prototype.addSubviewAnimated.displayName = "Aphid.UI.View.addSubviewAnimated";
Aphid.UI.View.prototype._addSubview.displayName = "Aphid.UI.View._addSubview";
Aphid.UI.View.prototype.removeFromSuperview.displayName = "Aphid.UI.View.removeFromSuperview";
Aphid.UI.View.prototype.removeFromSuperviewAnimated.displayName = "Aphid.UI.View.removeFromSuperviewAnimated";
Aphid.UI.View.prototype._removeFromSuperview.displayName = "Aphid.UI.View._removeFromSuperview";
Aphid.UI.View.prototype._loadTemplate.displayName = "Aphid.UI.View._loadTemplate";
Aphid.UI.View.prototype._templateDidFinishLoading.displayName = "Aphid.UI.View._templateDidFinishLoading";
Aphid.UI.View.prototype._connectToOutlets.displayName = "Aphid.UI.View._connectToOutlets";
Aphid.UI.View.prototype._wireActionsToInstance.displayName = "Aphid.UI.View._wireActionsToInstance";
/**
 * class Aphid.UI.Window < Aphid.UI.View
 *
 * The root view class for the application. All views in the application are
 * at some point in the view heirarchy children of this view.
 *
 * This element property for the Window is the document's BODY element.
**/
Aphid.UI.Window = Class.create(Aphid.UI.View, {

  displayName: "Aphid.UI.Window",

  /*
   * Aphid.UI.Window#_overlayElement -> Element | false
   *
   * The semi-translucent overlay element that is displayed behind modal
   * views, alert and message dialogs.
  **/
  _overlayElement: false,

  /**
   * new Aphid.UI.Window([options])
   *
   * - options (Hash): Initial property values to be set on the Window instance
   *
   * Initializes a new Window instance.
  **/
  initialize: function($super, options)
  {
    options = $H(options);
    options.set("element", document.body);
    options.set("outlet", false);
    options.set("template", false);

    $super(options);
  },

  /**
   * Aphid.UI.Window#displayOverlay() -> null
   *
   * Displays a semi-translucent overlay over the entire window. The style,
   * including the `z-index` that the overlay appears at, are defined by the
   * CSS "overlay" class in the `Window.less` file.
  **/
  displayOverlay: function()
  {
    this.displayOverlayAnimated(false);
  },

  /**
   * Aphid.UI.Window#displayOverlayAnimated([animated = true]) -> null
   *
   * Displays a semi-translucent overlay over the entire window, optionally
   * presenting it with an animated effect. The style, including the `z-index`
   * that the overlay appears at, are defined by the CSS "overlay" class in
   * the `Window.less` file.
  **/
  displayOverlayAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    // Display the Overlay
    if (!this._overlayElement)
    {
      this._overlayElement = new Element("div", { className: 'overlay' });
      this._overlayElement.hide();
      Element.insert(document.body, { top: this._overlayElement });
    }
    animated ? this._overlayElement.appear({ duration: 0.25 }) : this._overlayElement.show();
  },

  /** related to: Aphid.UI.Window#dismissOverlayAnimated
   * Aphid.UI.Window#dismissOverlay() -> null
   *
   * Dismisses the overlay that was displayed from a call to
   * [[Aphid.UI.Window#displayOverlay]] or [[Aphid.UI.Window#displayOverlayAnimated]].
  **/
  dismissOverlay: function()
  {
    this.dismissOverlayAnimated(false);
  },

  /** related to: Aphid.UI.Window#dismissOverlay
   * Aphid.UI.Window#dismissOverlayAnimated([animated = true]) -> null
   *
   * Dismisses the overlay that was displayed from a call to
   * [[Aphid.UI.Window#displayOverlay]] or [[Aphid.UI.Window#displayOverlayAnimated]],
   * optionally with an animated effect.
  **/
  dismissOverlayAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    animated ? this._overlayElement.fade({ duration: 0.25 }) : this._overlayElement.hide();
  }

});

// Controllers ---------------------------------------------------------------

/**
 * class Aphid.UI.ViewController < Aphid.UI.View
 *
 * You should use view controllers for major views that are responsible for
 * many subviews (including view controller subviews). Situations where a
 * view controller may be desirable over a view would be the main interfaces
 * of a web application.
 *
 * View controllers are typically long-lived and include additional callbacks
 * and delegates that notify the class of view state changes, such as
 * notifying that the view will be displayed or hidden, etc.
 *
**/
Aphid.UI.ViewController = Class.create(Aphid.UI.View,
{

  /*
   * Aphid.UI.ViewController#_modalViewContainer -> Element | false
   *
   * The container element that will contain the modal view controller's view.
  **/
  _modalViewContainer: false,

  /**
   * Aphid.UI.ViewController#modalViewController -> ViewController | false
   *
   * The currently presented modal view controller whose parent is this view
   * controller, or false if no view controller is currently modal.
  **/
  modalViewController: false,

  // -------------------------------------------------------------------------

  /**
   * new Aphid.UI.ViewController([options])
   *
   * - options (Hash): Initial property values to set on the View Controller instance
   *
   * Initializes a new View Controller.
  **/
  initialize: function($super, options)
  {
    $super(options);
  },

  // Modal View Controllers --------------------------------------------------

  /**
   * Aphid.UI.ViewController#presentModalViewController(viewController) -> null
   *
   * - viewController (ViewController): the view controller that should be presented
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller.
  **/
  presentModalViewController: function(viewController)
  {
    $L.info("presentModalViewController", "Aphid.UI.ViewController");
    this.presentModalViewControllerAnimated(viewController, false);
  },

  /**
   * Aphid.UI.ViewController#presentModalViewControllerAnimated(viewController[, animated = true]) -> null
   *
   * - viewController (ViewController): the view controller that should be presented
   * - animated (Boolean): true if the view controller should be presented with animation
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller with an animated effect, by default.
  **/
  presentModalViewControllerAnimated: function(viewController, animated)
  {
    if (Object.isUndefined(animated)) animated = true;

    // If the view is loading, we need to wait for it to finish loading before
    // we can present it.
    if (viewController.isLoading)
      this._presentModalViewController.bind(this).delay(0.1, viewController, animated);

    // Otherwise, we can present it immediately.
    else
      this._presentModalViewController(viewController, animated);
  },

  /*
   * Aphid.UI.View#_presentModalViewController(viewController[, animated = false]) -> null
   *
   * - viewController (ViewController): the view controller that should be presented
   * - animated (Boolean): true if the view controller should be presented with animation
   *
   * Presents the specified *viewController* as the modal view of the current
   * view controller, presenting it optionally with an animated effect.
  **/
  _presentModalViewController: function(viewController, animated)
  {
    if (Object.isUndefined(animated)) animated = false;

    // If the view has still not been loaded, delay this call again...
    if (!viewController.isLoaded)
    {
      // TODO We need to add a counter to this so that we don't wait longer
      // a few seconds before giving up and raising a warning...
      this._presentModalViewController.bind(this).delay(0.1, viewController, animated);
      return;
    }

    $L.info('Adding "' + viewController.displayName + '" as a subview to "' + (this.displayName || "unknown") + '" (animated: ' + animated + ')', 'Aphid.UI.ViewController');

    // Display the Overlay
    var mainWindow = Application.sharedInstance.mainWindow;
    mainWindow.displayOverlayAnimated(animated);

    // Display the Modal View Container
    if (!this._modalViewContainer)
    {
      this._modalViewContainer = new Element("div", { className: 'modalView' });
      this._modalViewContainer.hide();
      document.body.insert(this._modalViewContainer);
    }
    animated ? this._modalViewContainer.appear({ duration: 0.5 }).morph({ top: "10%", bottom: "10%" }, { duration: 0.25 }) : this._modalViewContainer.show();

    // Setup the View
    viewController.element.hide();
    viewController.superview = this;

    this.modalViewController = viewController;
    // TODO This should be parentViewController
    this.subviews.push(this.modalViewController);

    // "View Will Appear..."
    if (this.modalViewController.viewWillAppear)
      this.modalViewController.viewWillAppear();

    // Insert the view into the DOM
    this._modalViewContainer.insert(this.modalViewController.element);

    // Display the View
    animated ? this.modalViewController.element.appear({ duration: 0.25 }) : this.modalViewController.element.show();

    // "View Did Appear..."
    if (this.modalViewController.viewDidAppear)
      this.modalViewController.viewDidAppear();
  },

  /**
   * Aphid.UI.View#dismissModalViewController() -> null
   *
   * Dismisses the current modal view controller, if present.
  **/
  // TODO if this is called on the modal view controller itself, it should be forwarded to its parent view controller
  dismissModalViewController: function()
  {
    this.dismissModalViewControllerAnimated(false);
  },

  /**
   * Aphid.UI.View#dismissModalViewController([animated = true]) -> null
   *
   * - animated (Boolean): true if the view controller should be dismissed with animation
   *
   * Dismisses the current modal view controller, if present, with animation
   * by default.
  **/
  dismissModalViewControllerAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;
    if (!this.modalViewController) return;

    // Hide the Overlay
    var mainWindow = Application.sharedInstance.mainWindow;
    mainWindow.dismissOverlayAnimated(animated);

    // Hide the Modal View Container
    animated ? this._modalViewContainer.fade({ duration: 0.25 }) : this._modalViewContainer.hide();
    animated ? this._modalViewContainer.update.delay(0.25) : this._modalViewContainer.update();

    // Unset the Modal View Controller
    this.modalViewController = false;
  }

});
/**
 * class Aphid.UI.TabViewController < Aphid.UI.ViewController
 *
 * Tab View Controller
 *
 * #### Initializing From HTML
 *
 * **TODO** This is out of date...
 *
 *     // In your View Template:
 *     <ul class="tabs">
 *       <li class="tab" data-tab="tab-1" data-view="firstTabView">Tab 1</li>
 *       <li class="tab" data-tab="tab-2" data-view="secondTabView">Tab 2</li>
 *     </ul>
 *
 *     <section data-outlet="firstTabView">
 *       First Tab!
 *     </section>
 *
 *     <section data-outlet="secondTabView">
 *       Second Tab!
 *     </section>
 *
 * #### Delegate Methods
 *
 *  * `tabViewShouldSelectTab(tabView, tab)` - Called just before the tab
 *    selection process begins. Returning false will prevent the tab from
 *    being selected.
 *
 *  * `tabViewSelectionDidChange(tabView, selectedTab)` - Called when the
 *    current tab selection has changed.
 *
 * #### Subclassing Notes
 *
 * If you wish to subclass [[Aphid.UI.TabViewController]] instead of wrapping
 * an instance and implementing the delegate pattern, you may also override
 * the following methods:
 *
 *  * `shouldSelectTab(tab)` - Called just before the tab selection process
 *    begins. Returning false will prevent the tab from being selected.
 *
 *  * `didSelectTab(tab)` - Called when the current tab selection has changed.
 *
**/

Aphid.UI.TabViewController = Class.create(Aphid.UI.ViewController, {

  displayName: "TabViewController",

  /**
   * Aphid.UI.TabViewController#persistSelectedTab -> Boolean
   *
   * If persistSelectedTab is *true* the selected tab will be persisted as a
   * cookie and the persisted selection will be re-applied on page reloads.
   * The default value is *false*.
  **/
  persistSelectedTab: false,

  /**
   * Aphid.UI.TabViewController#tabs -> Array | false
   *
   * An array of the tabs being managed by this controller.
  **/
  tabs: false,

  /**
   * Aphid.UI.TabViewController#defaultTab -> Element | String | false
   *
   * An element reference or a string reference to a data-tab attribute value
   * that identifies the default tab.
  **/
  defaultTab: false,

  /**
   * Aphid.UI.TabViewController#selectedTab -> Element | false
   *
   * The currently selected tab item, or false if no item is currently
   * selected.
  **/
  selectedTab: false,

  /*
   * Aphid.UI.TabViewController#contentView -> Element | false
   *
   * TODO ...
  **/
  contentView: false,

  // Initialization ----------------------------------------------------------

  /**
   * new Aphid.UI.TabViewController()
   *
   * Initializes a new instance.
  **/
  initialize: function($super, options)
  {
    $super(options);
  },

  viewDidLoad: function($super)
  {
    $super();

    this.element.addClassName("TabViewController");

    var tabElements = this.element.select('li');
    this.tabs = tabElements
    this._setupObservers();

    // Select Persisted Tab...
    if (this.persistSelectedTab)
    {
      var selectedTab = $C.get(this.displayName + '.selectedTab');
      if (selectedTab)
      {
        $L.info('Restoring previously selected tab "' + selectedTab + '"');
        this.selectTab(selectedTab);
        return;
      }
    }

    // ... or Default Tab
    $L.info('Selecting default tab "' + this.defaultTab + '"');
    this.selectDefaultTab();
  },

  // Tab Selection -----------------------------------------------------------

  /**
   * Aphid.UI.TabViewController#selectTab(tab) -> null
   *
   * - tab (Element | String): the element of the tab that should be selected
   *   or the name of the tab, as specified in the tab's data-tab attribute.
   *
   * Selects the specified *tab*.
  **/
  selectTab: function(tab)
  {
    // Allow selectTab to be called with an Event or an Element
    if (!Object.isElement(tab))
    {
      if (Object.isString(tab))
      {
        var tabName = tab;
        tab = this._findTabByName(tabName);
        if (Object.isUndefined(tab))
        {
          $L.warn('Tried to select a tab (' + tabName + ') that could not be found in the template');
          return;
        }
      }
    }

    // Check with shouldSelectTab to be sure that we are in a state that will
    // allow for its selection...
    if (!this._shouldSelectTab(tab))
      return;

    // Select the Tab
    this.tabs.invoke('removeClassName', 'current');
    tab.addClassName('current');

    // Set Current Tab State
    this.selectedTab = tab;

    // Call the internal callback that will handle anything that needs to
    // happen after a tab has been selected, including notifying the delegate.
    this._didSelectTab(tab);
  },

  /**
   * Aphid.UI.TabViewController#selectDefaultTab() -> null
   *
   * Selects the default tab, as defined by the
   * [[Aphid.UI.TabViewController#defaultTab]] property, or the first tab in
   * the tab view if a default tab has not been defined.
  **/
  selectDefaultTab: function()
  {
    if (this.defaultTab)
      this.selectTab(this.defaultTab);
    else
      this.selectTab(this.tabs.first());
  },

  // Event Handling ----------------------------------------------------------

  /*
   * Aphid.UI.TabViewController#_setupObservers() -> null
   *
   * Iterates across each tab item in the tab view, adding event observers for
   * handling the events that we're interested in.
  **/
  _setupObservers: function()
  {
    this.tabs.invoke('observe', 'click', this._handleClickEvent.bind(this));
  },

  _handleClickEvent: function(event)
  {
    event.stop();
    var tab = event.findElement('li');
    this.selectTab(tab);
  },

  // Support Methods ---------------------------------------------------------

  /*
   * Aphid.UI.TabViewController#_findTabByName(tabName) -> Element | false
   *
   * - tabName (String): the name of the tab, as specified in the tab items
   *   data-tab attribute.
   *
   * Iterates the `tabs` property and returns the first tab element that
   * matches the data-tab attribute with the provided *tabName*.
  **/
  _findTabByName: function(tabName)
  {
    return this.tabs.find(
      function(tab)
      {
        if (tab.getAttribute('data-tab') == tabName)
          return true;
      }
    )
  },

  // Callbacks ---------------------------------------------------------------

  /*
   * Aphid.UI.TabViewController#_shouldSelectTab(tab) -> Boolean
   *
   * Checks for basic conditions that should prevent tab selection from
   * occurring, such as the tab already being selected. It also evaluates the
   * `shouldSelectTab` callback and the `tabViewShouldSelectTab` delegate
   * method before returning *true* or *false*.
   *
   * Delegates have the final say in whether or not the tab should be
   * selected.
  **/
  _shouldSelectTab: function(tab)
  {
    var shouldSelect = true;
    if (tab == this.selectedTab)
      shouldSelect = false;
    if (this.shouldSelectTab)
      shouldSelect = this.shouldSelectTab(tab);
    if (this.delegate && this.delegate.tabViewShouldSelectTab)
      shouldSelect = this.delegate.tabViewShouldSelectTab(this, tab);
    return shouldSelect;
  },

  /*
   * Aphid.UI.TabViewController#_didSelectTab(tab) -> null
   *
   * Performs any internal actions after a tab has been selected before
   * calling the `didSelectTab` callback and the `tabViewSelectionDidChange`
   * delegate method.
  **/
  _didSelectTab: function(tab)
  {
    // Persist Tab Selection
    if (this.persistSelectedTab)
    {
      var tabName = tab.getAttribute('data-tab');
      $C.set(this.displayName + '.selectedTab', tabName);
    }

    // Call the public callback, that may have been implemented by a subclass.
    if (this.didSelectTab)
      this.didSelectTab(tab);

    // Call the tabViewSelectionDidChange method on the delegate, if the
    // delegate has defined it.
    if (this.delegate && this.delegate.tabViewSelectionDidChange)
      this.delegate.tabViewSelectionDidChange(this, tab);
  }

});
/**
 * class Aphid.UI.SplitViewController < Aphid.UI.ViewController
 *
 * This class (which extends Draggable from Scriptaculous) handles the
 * resizing of two horizontally adjacent panes.
 *
 * Minimum and maximum widths as described in the min-width and max-width
 * properties of the left pane will be enforced.
 *
**/

Aphid.UI.SplitViewController = Class.create(Aphid.UI.ViewController, {

  // Panes
  firstView: false,
  secondView: false,

  // SplitView Configuration
  constraint: false, // "horizontal, vertical"

  // Instance Properties
  draggableInstance: false,

  // Initialization ----------------------------------------------------------

  initialize: function($super, options)
  {
    $super(options);
  },

  viewDidLoad: function($super)
  {
    $super();
    $L.info('viewDidLoad', 'Aphid.UI.SplitViewController');
    this.element.addClassName('SplitViewController');
  },

  viewDidFinishLoading: function(view)
  {
    if (view == this.firstView)
    {
      var minHeight = parseInt(this.firstView.element.getStyle('min-height')),
          maxHeight = parseInt(this.firstView.element.getStyle('max-height')),
          minWidth  = parseInt(this.firstView.element.getStyle('min-width')),
          maxWidth  = parseInt(this.firstView.element.getStyle('max-width'));
    }

    if (this.firstView.isLoaded && this.secondView.isLoaded)
    {
      this.draggableInstance = new Aphid.UI.SplitViewController.Draggable(
        this.firstView.element,
        this.secondView.element,
        {
          constraint: this.constraint,
          minHeight: minHeight,
          maxHeight: maxHeight,
          minWidth: minWidth,
          maxWidth: maxWidth,
          onStart: this.onStart.bind(this),
          onDrag: this.onDrag.bind(this),
          change: this.change.bind(this),
          onEnd: this.onEnd.bind(this)
        });
    }
  },

  // Pane Callbacks ----------------------------------------------------------

  onStart: function(arg)
  {
    $L.debug("onStart", "Aphid.UI.SplitViewController");
  },

  onDrag: function(arg)
  {
    $L.debug("onDrag", "Aphid.UI.SplitViewController");
  },

  change: function(arg)
  {
    $L.debug("change", "Aphid.UI.SplitViewController");
  },

  onEnd: function(arg)
  {
    $L.debug("onEnd", "Aphid.UI.SplitViewController");
  },

});

/*
 * class Aphid.UI.SplitViewController.Draggable
 *
 * Draggable is a custom subclass of Draggable from script.aculo.us that adds
 * support for minimum/maximum widths and heights, as defined by the
 * min-width and min-height CSS properties.
 *
 * ### TODO
 *
 *  * Move some of the logic out of this to a delegate or callback
**/
Aphid.UI.SplitViewController.Draggable = Class.create(Draggable, {

  // DOM Elements
  firstPane: null,
  secondPane: null,
  dragHandle: null,

  // Callbacks
  afterResize: null,

  initialize: function($super, firstPane, secondPane)
  {
    var options = arguments[3] || { };
    if (!options.constraint)
      options.constraint = 'horizontal';

    this.firstPane = $(firstPane);
    this.secondPane = $(secondPane);

    // Set up Drag Handle
    this._insertDragHandle(options.constraint);
    $super(this.dragHandle, options);
    this._setupObservers();
    this._initializePaneDimensions();
  },

  updateDrag: function($super, event, pointer)
  {
    $L.debug("updateDrag", "Aphid.UI.SplitViewController.Draggable")
    var minWidth, maxWidth, minHeight, maxHeight;
    var offset = this.firstPane.cumulativeOffset();

    if (this.options.constraint == 'vertical')
    {
      minHeight = this.firstPane.getMinimumHeight();
      maxHeight = this.firstPane.getMaximumHeight();

      if (event.clientY - this.dragHandleClickOffset <= minHeight + offset[1])
      {
        this.resizeVertical(minHeight + offset[1]);
        this._persistState();
        return;
      }
      else if (event.clientY - this.dragHandleClickOffset >= maxHeight + offset[1])
      {
        this.resizeVertical(maxHeight + offset[1]);
        this._persistState();
        return;
      }

      $super(event, pointer);

      var height = event.clientY - this.dragHandleClickOffset;
      this.resizeVertical(height);
      // this.resizeVertical(event.clientY - offset[1]);
    }
    else
    {
      minWidth = this.firstPane.getMinimumWidth();
      maxWidth = this.firstPane.getMaximumWidth();

      if (event.clientX - this.dragHandleClickOffset <= minWidth + offset[0])
      {
        this.resizeHorizontal(minWidth + offset[0]);
        this._persistState();
        return;
      }
      else if (event.clientX - this.dragHandleClickOffset >= maxWidth + offset[0])
      {
        this.resizeHorizontal(maxWidth + offset[0]);
        this._persistState();
        return;
      }

      $super(event, pointer);

      var width = event.clientX - this.dragHandleClickOffset;
      this.resizeHorizontal(width);
    }
  },

  resizeHorizontal: function(x)
  {
    var cumulativeOffset = this.firstPane.cumulativeOffset()[0],
        borderWidth      = this.firstPane.getBorderWidth(),
        dragHandleWidth  = this.dragHandle.getWidth();
    this.firstPane.setStyle({ width: x - cumulativeOffset + 'px' });
    this.secondPane.setStyle({ left: (x - cumulativeOffset + borderWidth + dragHandleWidth) + 'px' });
    this.dragHandle.setStyle({ left: (x - cumulativeOffset + borderWidth) + 'px' });
  },

  resizeVertical: function(y)
  {
    var cumulativeOffset = this.firstPane.cumulativeOffset()[1],
        borderHeight     = this.firstPane.getBorderHeight(),
        dragHandleHeight = this.dragHandle.getHeight();
    this.firstPane.setStyle({ height: y - cumulativeOffset + 'px' });
    this.secondPane.setStyle({ top: (y - cumulativeOffset + borderHeight + dragHandleHeight) + 'px' });
    this.dragHandle.setStyle({ top: (y - cumulativeOffset + borderHeight) + 'px' });
  },

  // State Management --------------------------------------------------------

  _persistState: function()
  {
    if (this.options.constraint == 'vertical')
      $C.set("ResizablePanes." + this.paneSet, this.firstPane.getHeight());
    else
      $C.set("ResizablePanes." + this.paneSet, this.firstPane.getWidth());
  },

  _restoreState: function()
  {
    var paneSize = parseInt($C.get("ResizablePanes." + this.paneSet));
    var offset   = this.firstPane.cumulativeOffset();

    if (this.options.constraint == 'vertical')
      this.resizeVertical(paneSize + offset[1]);
    else
      this.resizeHorizontal(paneSize + offset[0]);
  },

  _initializePaneDimensions: function()
  {
    if (this.options.constraint == 'vertical')
    {
      var topOffset = parseInt(this.dragHandle.getStyle('top')) + parseInt(this.dragHandle.getStyle('height'));
      this.secondPane.setStyle('top: ' + topOffset  + 'px');
    }
    else
    {
      // var leftOffset = parseInt(this.firstPane.getStyle('width')) + parseInt(this.firstPane.getStyle('left')) + parseInt(this.dragHandle.getStyle('width'))
      var leftOffset = parseInt(this.dragHandle.getStyle('left')) + parseInt(this.dragHandle.getStyle('width'));
      this.secondPane.setStyle('left: ' + leftOffset + 'px');
    }
  },

  // Drag Handle -------------------------------------------------------------

  _insertDragHandle: function(constraint)
  {
    this.dragHandle = new Element("div").addClassName("dragHandle");
    this.dragHandle.addClassName(constraint);
    Element.insert(this.firstPane, { after: this.dragHandle });
  },

  _setupObservers: function()
  {
    this.dragHandle.observe('mouseup', this._resetDragHandleClickOffset.bind(this));
    this.dragHandle.observe('mousedown', this._determineDragHandleClickOffset.bind(this));
  },

  _determineDragHandleClickOffset: function(event)
  {
    if (this.options.constraint == 'vertical')
    {
      var offset = (this.firstPane.cumulativeOffset()[1] + this.firstPane.getHeight() + this.dragHandle.getHeight()) - event.clientY;
      this.dragHandleClickOffset = this.dragHandle.getHeight() - offset;
    }
    else
    {
      var offset = (this.firstPane.cumulativeOffset()[0] + this.firstPane.getWidth() + this.dragHandle.getWidth()) - event.clientX;
      this.dragHandleClickOffset = this.dragHandle.getWidth() - offset;
    }
  },

  _resetDragHandleClickOffset: function(event)
  {
    this.dragHandleClickOffset = null;
    this._persistState();
  }

});

// Views ---------------------------------------------------------------------

/**
 * class Aphid.UI.LoadingIndicator
 *
 * Manages the display of a canvas-based spinning loading indicator.
**/

// TODO Make this a subclass of Aphid.UI.View...

Aphid.UI.LoadingIndicator = Class.create({

  /*
   * Aphid.UI.LoadingIndicator#_canvas -> Element
   *
   * The canvas element where the loading indicator is drawn.
  **/
  _canvas: false,

  /*
   * Aphid.UI.LoadingIndicator#_canvas -> Element
   *
   * The canvas context for the loading indicator.
  **/
  _context: false,

  /**
   * Aphid.UI.LoadingIndicator#barCount -> Integer
   *
   * The number of bars that should be drawn in the spinner. Defaults to 10.
  **/
  barCount: false,

  /**
   * Aphid.UI.LoadingIndicator#barSize -> Object
   *
   * The width and height of the bars. Defaults to `{ width: 4, height: 12 }`.
  **/
  barSize: false,

  /**
   * Aphid.UI.LoadingIndicator#barColor -> String
  **/
  barColor: false,

  /**
   * Aphid.UI.LoadingIndicator#centerPosition -> Object
   *
   * The x and y coordinates for the center point of the loading indicator
   * within the canvas. This should typically be the canvas width and height
   * divided by 2.
  **/
  centerPosition: false,

  /**
   * Aphid.UI.LoadingIndicator#innerRadius -> Integer
   *
   * The inner radius of the spinning indicator. Each bar will be drawn from
   * this point, outward.
  **/
  innerRadius: false,

  /**
   * Aphid.UI.LoadingIndicator#isAnimating -> Boolean
   *
   * Whether or not the loading indicator is currently animating.
  **/
  isAnimating: false,

  /*
   * Aphid.UI.LoadingIndicator#_currentOffset -> Integer
   *
   * Whether or not the loading indicator is currently animating.
  **/
  _currentOffset: 0,

  /**
   * new Aphid.UI.LoadingIndicator()
   *
   * Initializes a new instance of the Loading Indicator.
  **/
  initialize: function()
  {
    $L.info('Initializing...', 'Aphid.UI.LoadingIndicator');

    // Set Defaults
    this.barCount       = 10;
    this.barSize        = { width: 4, height: 12 };
    this.centerPosition = { x: 48, y: 48 };
    this.innerRadius    = 10;

    // Initialize the canvas
    // TODO Size needs to be configurable
    this._canvas = new Element("canvas",
      {
        id: "loadingIndicator",
        width: 96,
        height: 96
      }
    );

    // If ExplorerCanvas is present, initialize the canvas element with it for
    // compatibility with Internet Explorer
    if (!(typeof G_vmlCanvasManager == 'undefined'))
      G_vmlCanvasManager.initElement(this._canvas);

    this._context = this._canvas.getContext("2d")
    Element.insert(document.body, this._canvas);
    this._canvas.hide();

    var color = $(this._canvas).getStyle('color');
    if (color)
    {
      colors = color.split(',');
      red    = parseInt(colors[0].substr(4, 3));
      green  = parseInt(colors[1]);
      blue   = parseInt(colors[2]);
      this.barColor = { red: red, green: green, blue: blue };
    }
    else this.barColor = { red: 85, green: 85, blue: 85 };
  },

  /**
   * Aphid.UI.LoadingIndicator#show() -> null
   *
   * Shows the loading indicator with a fade-in transition.
  **/
  show: function()
  {
    if (this.isAnimating) return;

    $L.info('Showing the loading indicator...', 'Aphid.UI.LoadingIndicator');

    this._startAnimation();
    var opacity = $(this._canvas).getStyle('opacity');
    this._canvas.appear({ duration: 0.35, to: opacity });
  },

  /**
   * Aphid.UI.LoadingIndicator#hide() -> null
   *
   * Hides the loading indicator with a quick, fade-out transition.
  **/
  hide: function()
  {
    $L.info('Hiding the loading indicator...', 'Aphid.UI.LoadingIndicator');
    this._canvas.fade({ duration: 0.15 });
    this._stopAnimation.bind(this).delay(0.15);
  },

  /*
   * Aphid.UI.LoadingIndicator#_startAnimation() -> null
   *
   * Starts the loading indicator animation.
  **/
  _startAnimation: function()
  {
    this.isAnimating = true;
    this._animateNextFrame(0);
  },

  /*
   * Aphid.UI.LoadingIndicator#_stopAnimation() -> null
   *
   * Stops drawing the loading indicator and clears its context state.
  **/
  _stopAnimation: function()
  {
    this.isAnimating = false;
    this._clearFrame(this._context);
  },

  /*
   * Aphid.UI.LoadingIndicator#_draw(context, offset) -> null
  **/
  _draw: function(context, offset)
  {
    this._clearFrame(context);
    context.save();
    context.translate(this.centerPosition.x, this.centerPosition.y);
    for (var i = 0; i < this.barCount; i++)
    {
      var currentBar = (offset + i) % this.barCount,
          pos        = this._calculatePosition(currentBar);
      context.save();
      context.translate(pos.x, pos.y);
      context.rotate(pos.angle);
      this._drawBlock(this._context, i);
      context.restore();
    }
    context.restore();
  },

  /*
   * Aphid.UI.LoadingIndicator#_drawBlock(context, barNumber) -> null
  **/
  _drawBlock: function(context, barNumber)
  {
    context.fillStyle = this._makeRGBA(this.barColor.red, this.barColor.green, this.barColor.blue, (this.barCount + 1 - barNumber) / (this.barCount + 1));
    context.fillRect(-this.barSize.width / 2, 0, this.barSize.width, this.barSize.height);
  },

  /*
   * Aphid.UI.LoadingIndicator#_animateNextFrame() -> null
  **/
  _animateNextFrame: function()
  {
    if (!this.isAnimating) return;
    this._currentOffset = (this._currentOffset + 1) % this.barCount;
    this._draw(this._context, this._currentOffset);
    this._animateNextFrame.bind(this).delay(0.05);
  },

  /*
   * Aphid.UI.LoadingIndicator#_clearFrame() -> null
  **/
  _clearFrame: function(context)
  {
    context.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);
  },

  /*
   * Aphid.UI.LoadingIndicator#_calculateAngle(barNumber) -> Float
  **/
  _calculateAngle: function(barNumber)
  {
    return 2 * barNumber * Math.PI / this.barCount;
  },

  /*
   * Aphid.UI.LoadingIndicator#_calculatePosition(barNumber) -> Object
  **/
  _calculatePosition: function(barNumber)
  {
    var angle = this._calculateAngle(barNumber);
    return {
      y: (this.innerRadius * Math.cos(-angle)),
      x: (this.innerRadius * Math.sin(-angle)),
      angle: angle
    };
  },

  // TODO Move this to Aphid.UI.Support
  _makeRGBA: function()
  {
    return "rgba(" + [].slice.call(arguments, 0).join(",") + ")";
  }

});
/**
 * class Aphid.UI.AlertView < Aphid.UI.View
 *
 * Supports the display of modal alert messages, such as notice of errors or
 * warnings or informational prompts.
 *
 * #### Example
 *
 *     var alertView = new Aphid.UI.AlertView({
 *       title: "Error Loading Resource",
 *       message: "An error occurred while attempting to load the resource.",
 *       status: "Error 404 - Not Found"
 *     });
 *     alertView.showAnimated();
 *
**/
Aphid.UI.AlertView = Class.create(Aphid.UI.View,
{

  /**
   * Aphid.UI.AlertView#title -> String | false
   *
   * The title that should be displayed in the alert dialog.
  **/
  title: false,

  /*
   * Aphid.UI.AlertView#_titleElement -> Element | false
   *
   * A reference to the element that will display the title string in the
   * alert dialog markup.
  **/
  _titleElement: false,

  /**
   * Aphid.UI.AlertView#message -> String | false
   *
   * The message that should be displayed in the alert dialog.
  **/
  message: false,

  /*
   * Aphid.UI.AlertView#_messageElement -> Element | false
   *
   * A reference to the element that will display the message string in the
   * alert dialog markup.
  **/
  _messageElement: false,

  /**
   * Aphid.UI.AlertView#status -> String | false
   *
   * The status message, such as an error code, that should be displayed in
   * the alert dialog.
  **/
  status: false,

  /*
   * Aphid.UI.AlertView#_statusElement -> Element | false
   *
   * A reference to the element that will display the status message string in
   * the alert dialog markup.
  **/
  _statusElement: false,

  // -------------------------------------------------------------------------

  /**
   * new Aphid.UI.AlertView([options])
   *
   * - options (Hash): Initial property values to set on the View Controller instance
   *
   * Initializes a new View Controller.
  **/
  initialize: function($super, options)
  {
    options = $H(options);
    options.set("element", this._element());
    $super(options);
  },

  /*
   * Aphid.UI.AlertView#_element() -> Element
   *
   * Creates the element for the AlertView programmatically.
  **/
  // TODO Programatically declaring a Views element should be a supported feature
  _element: function()
  {

    // Container
    var element = new Element("section");
    element.addClassName("AlertView");

    // Title Element
    var headerElement = new Element("header");
    this._titleElement = new Element("h1");
    headerElement.insert(this._titleElement);
    element.insert(headerElement);

    // Message Element
    this._messageElement = new Element("p").addClassName("message");
    element.insert(this._messageElement);

    // Status Element
    this._statusElement = new Element("p").addClassName("status");
    element.insert(this._statusElement);

    // Close Button
    var closeButton = new Element("input", { type: "button", value: "Dismiss" });
    closeButton.observe("click", this.dismissAnimated.bind(this));
    element.insert(closeButton);

    return element;
  },

  /**
   * Aphid.UI.AlertView#show() -> null
   *
   * Displays the alert view to the user.
  **/
  show: function()
  {
    this.showAnimated(false);
  },

  /**
   * Aphid.UI.AlertView#showAnimated([animated = true]) -> null
   *
   * - animated (Boolean): If true, the alert view will be displayed with an
   *   animated effect.
   *
   * Displays the alert view to the user with an optional animated effect.
  **/
  showAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;

    // TODO Add a queue so that subsequent alerts are not lost...
    if (Aphid.UI.AlertView.currentAlertView) return;

    // Update View
    this._titleElement.update(this.title || "");
    this._messageElement.update(this.message || "");
    this._statusElement.update(this.status || "");

    var mainWindow = Application.sharedInstance.mainWindow;
    mainWindow.displayOverlayAnimated(animated);
    mainWindow.addSubview(this);
  },

  /**
   * Aphid.UI.AlertView#dismiss() -> null
   *
   * Dismisses the alert view from the window.
  **/
  dismiss: function()
  {
    this.dismissAnimated(false);
  },

  /**
   * Aphid.UI.AlertView#dismissAnimated([animated = true]) -> null
   *
   * - animated (Boolean): If true, the alert view will be displayed with an
   *   animated effect.
   *
   * Dismisses the alert view from the window with an optional animated
   * effect.
  **/
  dismissAnimated: function(animated)
  {
    if (Object.isUndefined(animated)) animated = true;

    var mainWindow = Application.sharedInstance.mainWindow;
    mainWindow.dismissOverlayAnimated(animated);

    this.removeFromSuperviewAnimated();

    this.title = false;
    this.message = false;
    this.status = false;
  }

});

Aphid.UI.AlertView.currentAlertView = false;
/**
 * class Aphid.UI.ListView < Aphid.UI.View
 *
 * Manages an HTML unordered list by providing support for selection of the
 * items contained within the list.
 *
 * #### Usage
 *
 * To initialize an instance of [[Aphid.UI.ListView]], you must specify the
 * `data-view-class` attribute on an HTML unordered list element. The value
 * of this attribute should be either [[Aphid.UI.ListView]], for a standard
 * list, or the name of your [[Aphid.UI.ListView]] subclass. For example:
 *
 *     <ul data-outlet="listView" data-view-class="Aphid.UI.ListView">
 *       <li>Inbox</li>
 *       <li>Sent</li>
 *       <li>Trash</li>
 *     </ul>
 *
 * #### Data Source Methods
 *
 *  * `listViewItemCount(listView)` - Should return the number of items
 *    contained within the list view.
 *
 *  * `listViewItemForIndex(listView, index)` - Should return the item to be
 *    displayed at the given index.
 *
 * #### Delegate Methods
 *
 *  * `listViewShouldSelectItem(listView, item)` - Called just before the item
 *    selection process begins. Returning false will prevent the selection
 *    from happening.
 *
 *  * `listViewShouldDeselectItem(listView, item)` - Called just before the
 *    item deselection process begins. Returning false will prevent the
 *    deselection from happening.
 *
 *  * `listViewSelectionDidChange(listView, item)` - Called when the current
 *    selection has changed.
 *
 *  * `listViewShouldClearSelection(listView)` - Called just before the list
 *    selection clearing process begins. Returning false will prevent the
 *    list selection from being cleared.
 *
 *  * `listViewShouldOpenItem(listView, item)` - Called just before the
 *    item opening process begins. Returning false will prevent the item from
 *    being opened.
 *
 *  * `listViewDidOpenItem(listView, openedItem)` - Called when the user has
 *    requested to open an item, usually by double-clicking on the item.
 *
 *  * `listViewOrderDidChange(listView)` - Called when the sort order has
 *    changed, but not necessarily before the user has finished dragging the
 *    item to its final position.
 *
 *  * `listViewOrderDidUpdate(listView)` - Called after the user
 *    has finished dragging.
 *
 * #### Subclassing Notes
 *
 * If you wish to subclass [[Aphid.UI.ListView]] instead of wrapping an
 * instance and implementing the delegate pattern, you may also override the
 * following methods:
 *
 *  * `shouldSelectItem(item)` - Called just before the item selection process
 *    begins. Returning false will prevent the item from being selected.
 *
 *  * `didSelectItem(item)` - Called when the specified item has been
 *    selected.
 *
 *  * `shouldDeselectItem(item)` - Called just before the item deselection
 *    process begins. Returning false will prevent the item from being
 *    deselected.
 *
 *  * `didDeselectItem(item)` - Called when the specified item has been
 *    deselected.
 *
 *  * `shouldClearSelection()` - Called just before the list selection
 *    clearing process begins. Returning false will prevent the list selection
 *    from being cleared.
 *
 *  * `shouldOpenItem(item)` - Called just before the item opening process
 *    begins. Returning false will prevent the item from being opened.
 *
 *  * `didOpenItem(item)` - Called when the specifeid item has been opened.
 *
**/

Aphid.UI.ListView = Class.create(Aphid.UI.View, {

  displayName: "Aphid.UI.ListView",

  /**
   * Aphid.UI.ListView#dataSource -> Object | false
   *
   * If a data source is provided for the list view instance, it will be
   * asked for data.
  **/
  dataSource: false,

  /**
   * Aphid.UI.ListView#items -> Array
   *
   * An array of Elements for each list item that is part of the list.
  **/
  items: false,

  /** related to: Aphid.UI.ListView#selectedItems
   * Aphid.UI.ListView#selectedItem -> Element | false
   *
   * The currently selected list item, or false if no item is currently
   * selected or the list has multiple selection enabled.
  **/
  selectedItem: false,

  /** related to: Aphid.UI.ListView#selectedItem
   * Aphid.UI.ListView#selectedItems -> Array | false
   *
   * The currently selected list items or false if the list has multiple
   * selection disabled.
  **/
  selectedItems: false,

  /**
   * Aphid.UI.ListView#multipleSelectionEnabled -> Boolean
   *
   * If multipleSelectionEnabled is set to true, the list will have multiple
   * selection support applied to it.
  **/
  multipleSelectionEnabled: false,

  /**
   * Aphid.UI.ListView#sortingEnabled -> Boolean
   *
   * If sortingEnabled is set to true, the list will have Sortable applied to
   * it automatically.
  **/
  sortingEnabled: false,

  /**
   * Aphid.UI.ListView#sortableOptions -> Object
   *
   * Options to be passed to the Sortable instance when sorting is enabled.
   * For a list of options, consule the [Sortable documentation](http://wiki.github.com/madrobby/scriptaculous/sortable-create)
   * in the script.aculo.us library. Defaults:
   *
   *     {
   *       handle: "handle",
   *       onChange: this._listViewOrderDidChange.bind(this),
   *       onUpdate: this._listViewOrderDidUpdate.bind(this)
   *     }
  **/
  sortableOptions: false,

  // Initialization ----------------------------------------------------------

  /**
   * new Aphid.UI.ListView()
   *
   * Initializes a new instance.
  **/
  initialize: function($super, options)
  {
    this.items = $A();
    this.sortableOptions = {
      handle: "handle",
      onChange: this._listViewOrderDidChange.bind(this),
      onUpdate: this._listViewOrderDidUpdate.bind(this)
    };
    $super(options);
    if (this.multipleSelectionEnabled)
      this.selectedItems = $A();
    else
      this.selectedItems = false;
    if (this.dataSource)
      this.reloadData();
  },

  /*
   * Aphid.UI.ListView#_initializeStaticListViewItems() -> null
  **/
  _initializeStaticListViewItems: function()
  {
    var items = this.element.select('>li').collect(
      function(element)
      {
        return new Aphid.UI.ListViewItem({ element: element });
      });
    this.setItems(items);
  },

  viewDidLoad: function($super)
  {
    $super();
    if (this._validateContainer())
    {
      this.element.addClassName('ListView');
      this.element.observe('click', this.clearSelection.bind(this));
      this._initializeStaticListViewItems();
    }
  },

  // Items -------------------------------------------------------------------

  /**
   * Aphid.UI.ListView#setItems(items) -> null
   *
   *  - items (Array): Array of [[Aphid.UI.ListViewItem]] instances
   *
   * Sets the specified items as the items on the ListView, removing any
   * existing items in the process.
  **/
  setItems: function(items)
  {
    // Ensure that we are only passed instances of Aphid.UI.ListViewItem...
    if (!items.all(this._validateItem))
    {
      $L.error("All items must be instances of Aphid.UI.ListViewItem!", "Aphid.UI.ListView");
      return;
    }

    // Clear Selection & Container
    this.clearSelection();
    this.element.update();

    this.items = items.each(this.addSubview, this);
    if (this.items.length > 0)
    {
      this._initializeItems();
      if (this.sortingEnabled)
        this._setupSorting();
    }
  },

  /**
   * Aphid.UI.ListView#addItem(item) -> null
   *
   * - item (Element): The item to be added to the list
   *
   * Adds the specified item to the end of the list view.
  **/
  addItem: function(item)
  {
    this.addSubview(item);
    this.items.push(item);
    this._initializeItem(item);
    if (this.sortingEnabled)
      this._setupSorting();
  },

  removeItem: function(item)
  {
    if (!this.items.include(item))
    {
      $L.error("Attempted to remove item that is not a part of the list", this.displayName);
      return;
    }
    this.deselectItem(item);
    item.removeFromSuperview();
    this.items = this.items.without(item);
  },

  /*
   * Aphid.UI.ListView#_initializeItems() -> null
   *
   * Calls [[Aphid.UI.ListView#_initializeItem]] for each item.
  **/
  _initializeItems: function()
  {
    this.items.each(this._initializeItem, this);
  },

  /*
   * Aphid.UI.ListView#_initializeItem(item) -> null
   *
   * - item (Element): the item to be initialized
   *
   * Initializes the item by adding observers and sort handles, if enabled.
  **/
  _initializeItem: function(item)
  {
    item.element.observe('click', this._handleClickEvent.bindAsEventListener(this, item));
    item.element.observe('dblclick', this._handleDoubleClickEvent.bindAsEventListener(this, item));
  },

  // Data Source -------------------------------------------------------------

  /**
   * Aphid.UI.ListView#reloadData() -> null
   *
   * Reloads the items in the list view by asking the data source for each of
   * the list view items in the list.
  **/
  reloadData: function()
  {
    var items     = $A();
    var itemCount = this._listViewItemCount();
    for (var i = 0; i < itemCount; i++)
      items.push(this._listViewItemForIndex(i));
    this.setItems(items);
  },

  /*
   * Aphid.UI.ListView#_listViewItemCount() -> null
   *
   * Proxy method that returns the list view item count as defined by the
   * dataSource. If the object set as the dataSource has not implemented the
   * `listViewItemCount` method, an error will be raised.
  **/
  _listViewItemCount: function()
  {
    var listViewItemCount = 0;
    if (this.dataSource && this.dataSource.listViewItemCount)
      listViewItemCount = this.dataSource.listViewItemCount(this);
    else
      $L.error('Data source does not implement required method "listViewItemCount(listView)"', this.displayName);
    return listViewItemCount;
  },

  /*
   * Aphid.UI.ListView#_listViewItemForIndex(index) -> null
   *
   * Proxy method that returns the list view item for the specified index as
   * returned by the dataSource. If the object set as the dataSource has not
   * implemented the `listViewItemForIndex` method, an error will be raised.
  **/
  _listViewItemForIndex: function(index)
  {
    var listViewItemForIndex;
    if (this.dataSource && this.dataSource.listViewItemForIndex)
      listViewItemForIndex = this.dataSource.listViewItemForIndex(this, index);
    else
      $L.error('Data source does not implement required method "listViewItemForIndex(listView, index)"', this.displayName);
    return listViewItemForIndex;
  },

  // Selection ---------------------------------------------------------------

  /**
   * Aphid.UI.ListView#selectItem(listItem) -> null
   *
   * Selects the specified list item. The list item must be an Element
   * reference to the item to be selected.
  **/
  selectItem: function(item)
  {
    // Ensure that we can select the item...
    if (!this._shouldSelectItem(item))
      return;

    // Clear the previous selection and set the newly selected item, unless
    // multiple selection is enabled.
    if (!this.multipleSelectionEnabled)
    {
      this._clearSelection();
      this.selectedItem = item.select();
      this.scrollToSelectedItem();
    }
    else
      this.selectedItems.push(item.select());

    this._didSelectItem(item);
  },

  /**
   * Aphid.UI.ListView#deselectItem(listItem) -> null
   *
   * Deselects the specified list item, if it is currently selected. The list
   * item must be an Element reference to the item to be deselected.
  **/
  deselectItem: function(item)
  {
    // Ensure that we can deselect the item...
    if (!this._shouldDeselectItem(item))
      return;

    item.deselect();

    if (this.multipleSelectionEnabled)
      this.selectedItems = this.selectedItems.without(item);
    else
      this.selectedItem = false;

    this._didDeselectItem(item);
  },

  /**
   * Aphid.UI.ListView#clearSelection() -> null
   *
   * Clears the currently selected item, if any, leaving the list view in an
   * unselected state.
  **/
  clearSelection: function()
  {
    if (!this._shouldClearSelection())
      return;

    this._clearSelection();

    // Call the listViewSelectionDidChange method on the delegate, if the
    // delegate has defined it.
    if (this.delegate && this.delegate.listViewSelectionDidChange)
      this.delegate.listViewSelectionDidChange(this, false);
  },

  _clearSelection: function()
  {
    if (this.items)
      this.items.invoke('deselect');
    if (this.selectedItem)
      this.selectedItem = false;
    if (this.multipleSelectionEnabled)
      this.selectedItems = $A();
    else
      this.selectedItems = false;
  },

  /**
   * Aphid.UI.ListView#openItem(listItem) -> null
   *
   * Instructs the delegate or subclass that the specified item should be
   * opened or otherwise acted upon. This functionality is implemented by the
   * subclass or delegate and has no behavior by default.
  **/
  openItem: function(item)
  {
    // Ensure that we can open the item...
    if (!this._shouldOpenItem(item))
      return;

    this._didOpenItem(item);
  },

  /**
   * Aphid.UI.ListView#scrollToSelectedItem() -> Boolean
   *
   * Scrolls the list view to fully expose the selected item if it is not
   * fully visible within the list view. Returns true or false depending on
   * whether the scroll was performed.
  **/
  scrollToSelectedItem: function()
  {
    if (this.element.scrollHeight < this.element.getHeight())
      return;

    var selectedItemTop     = this.selectedItem.element.cumulativeOffset().top - this.element.cumulativeOffset().top;
    var selectedItemBottom  = selectedItemTop + this.selectedItem.element.getHeight();
    var currentScrollTop    = this.element.scrollTop;
    var currentScrollBottom = this.element.scrollTop + this.element.getHeight();
    var itemTopMargin       = parseInt(this.selectedItem.element.getStyle("margin-top"));
    var itemBottomMargin    = parseInt(this.selectedItem.element.getStyle("margin-bottom"));
    var scrollTo            = selectedItemTop - itemTopMargin;
    var shouldScroll        = false;

    // selectedItem is above current scroll position
    if (selectedItemTop < currentScrollTop)
      shouldScroll = true;

    // selectedItem is below current, viewable scroll position
    if (selectedItemTop >= currentScrollBottom)
      shouldScroll = true;

    // selectedItem is partially visible below the current, viewable scroll position
    else if (selectedItemBottom > currentScrollBottom)
    {
      shouldScroll = true;
      scrollTo = currentScrollTop + (selectedItemBottom - currentScrollBottom) + itemBottomMargin;
    }

    if (shouldScroll)
      this.element.scrollTop = scrollTo;

    return shouldScroll;
  },

  // Sorting -----------------------------------------------------------------

  /*
   * Aphid.UI.ListView#_setupSorting() -> null
  **/
  _setupSorting: function()
  {
    if (this.element.hasClassName('sortable'))
      Sortable.destroy(this.element);
    else
      this.element.addClassName('sortable');
    this._addDragHandlesToItems();
    this._addOrderedIdentitiesToItems();
    Sortable.create(this.element, this.sortableOptions);
  },

  _addOrderedIdentitiesToItems: function()
  {
    this.items.each(function(item) { item.element.identify() });
  },

  _addDragHandlesToItems: function()
  {
    this.items.each(this._addDragHandleToItem, this);
  },

  _addDragHandleToItem: function(item)
  {
    if (item.element.down('div.handle')) return;
    var dragHandle = new Element('div').addClassName('handle');
    item.element.insert(dragHandle);
  },

  // Call the listViewOrderDidChange method on the delegate, if the
  // delegate has defined it.
  _listViewOrderDidChange: function()
  {
    $L.info('_listViewOrderDidChange', 'Aphid.UI.ListView');
    if (this.delegate && this.delegate.listViewOrderDidChange)
      this.delegate.listViewOrderDidChange(this);
  },

  _listViewOrderDidUpdate: function()
  {
    $L.info('_listViewOrderDidUpdate', 'Aphid.UI.ListView');
    if (this.delegate && this.delegate.listViewOrderDidUpdate)
      this.delegate.listViewOrderDidUpdate(this);
  },

  // Event Handling ----------------------------------------------------------

  /*
   * Aphid.UI.ListView#_handleClickEvent() -> null
   *
   * Handles "click" events that are triggered by the observer on each item.
  **/
  _handleClickEvent: function(event, item)
  {
    event.stop();
    if (this.multipleSelectionEnabled && item.isSelected)
      this.deselectItem(item);
    else
      this.selectItem(item);
  },

  /*
   * Aphid.UI.ListView#_handleDoubleClickEvent() -> null
   *
   * Handles "dblclick" events that are triggered by the observer on each item.
  **/
  _handleDoubleClickEvent: function(event, item)
  {
    event.stop();
    this.selectItem(item);
    this.openItem(item);
  },

  // Callbacks ---------------------------------------------------------------

  /*
   * Aphid.UI.ListView#_shouldSelectItem(item) -> Boolean
   *
   * Checks for basic conditions that should prevent item selection from
   * occurring, such as the item already being selected. It also evaluates the
   * `shouldSelectItem` callback and the `listViewShouldSelectItem` delegate
   * method before returning *true* or *false*.
   *
   * Delegates have the final say in whether or not the item should be
   * selected.
  **/
  _shouldSelectItem: function(item)
  {
    var shouldSelect = true;
    if (item == this.selectedItem)
      shouldSelect = false;
    if (this.shouldSelectItem)
      shouldSelect = this.shouldSelectItem(item);
    if (this.delegate && this.delegate.listViewShouldSelectItem)
      shouldSelect = this.delegate.listViewShouldSelectItem(this, item);
    return shouldSelect;
  },

  /*
   * Aphid.UI.ListView#_didSelectItem(item) -> null
   *
   * Performs any internal actions after an item has been selected before
   * calling the `didSelectItem` callback and the `listViewSelectionDidChange`
   * delegate method.
  **/
  _didSelectItem: function(item)
  {
    // Call the public callback, that may have been implemented by a subclass.
    if (this.didSelectItem)
      this.didSelectItem(item);

    // Call the listViewSelectionDidChange method on the delegate, if the
    // delegate has defined it.
    if (this.delegate && this.delegate.listViewSelectionDidChange)
      this.delegate.listViewSelectionDidChange(this, item);
  },

  /*
   * Aphid.UI.ListView#_shouldDeselectItem(item) -> Boolean
   *
   * Checks for basic conditions that should prevent item deselection from
   * occurring, such as the item not being selected. It also evaluates the
   * `shouldDeselectItem` callback and the `listViewShouldDeselectItem`
   * delegate method before returning *true* or *false*.
   *
   * Delegates have the final say in whether or not the item should be
   * deselected.
  **/
  _shouldDeselectItem: function(item)
  {
    var shouldDeselect = true;
    if (this.multipleSelectionEnabled && !this.selectedItems.include(item))
      shouldDeselect = false;
    else if (!this.multipleSelectionEnabled && item != this.selectedItem)
      shouldDeselect = false;
    if (this.shouldDeselectItem)
      shouldDeselect = this.shouldDeselectItem(item);
    if (this.delegate && this.delegate.listViewShouldDeselectItem)
      shouldDeselect = this.delegate.listViewShouldDeselectItem(this, item);
    return shouldDeselect;
  },

  /*
   * Aphid.UI.ListView#_didDeselectItem(item) -> null
   *
   * Performs any internal actions after an item has been deselected before
   * calling the `didDeselectItem` callback and the `listViewSelectionDidChange`
   * delegate method.
  **/
  _didDeselectItem: function(item)
  {
    // Call the public callback, that may have been implemented by a subclass.
    if (this.didDeselectItem)
      this.didDeselectItem(item);

    // Call the listViewSelectionDidChange method on the delegate, if the
    // delegate has defined it.
    if (this.delegate && this.delegate.listViewSelectionDidChange)
      this.delegate.listViewSelectionDidChange(this, item);
  },

  /*
   * Aphid.UI.ListView#_shouldClearSelection(item) -> Boolean
   *
   * Checks for basic conditions that should prevent the selection from being
   * cleared, such as when no items are currently selected. It also evaluates
   * the `shouldClearSelection` callback and the `listViewShouldClearSelection`
   * delegate method before returning *true* or *false*.
   *
   * Delegates have the final say in whether or not the list selection should
   * be cleared.
  **/
  _shouldClearSelection: function()
  {
    var shouldClearSelection = true;
    if (this.multipleSelectionEnabled && this.selectedItems.length == 0)
      shouldClearSelection = false;
    else if (!this.multipleSelectionEnabled && !this.selectedItem)
      shouldClearSelection = false;
    if (this.shouldClearSelection)
      shouldClearSelection = this.shouldClearSelection();
    if (this.delegate && this.delegate.listViewShouldClearSelection)
      shouldClearSelection = this.delegate.listViewShouldClearSelection(this);
    return shouldClearSelection;
  },

  /*
   * Aphid.UI.ListView#_shouldOpenItem(item) -> Boolean
   *
   * Checks with the subclass and delegate to see if the item should be
   * opened.
   *
   * Delegates have the final say in whether or not the item should be
   * opened.
  **/
  _shouldOpenItem: function(item)
  {
    var shouldOpen = true;
    if (this.shouldOpenItem)
      shouldOpen = this.shouldOpenItem(item);
    if (this.delegate && this.delegate.listViewShouldOpenItem)
      shouldDeselect = this.delegate.listViewShouldOpenItem(this, item);
    return shouldOpen;
  },

  /*
   * Aphid.UI.ListView#_didOpenItem(item) -> null
   *
   * Performs any internal actions after an item has been opened before
   * calling the `didOpenItem` callback and the `listViewDidOpenItem`
   * delegate method.
  **/
  _didOpenItem: function(item)
  {
    // Call the public callback, that may have been implemented by a subclass.
    if (this.didOpenItem)
      this.didOpenItem(item);

    // Call the listViewDidOpenItem method on the delegate, if the delegate
    // has defined it.
    if (this.delegate && this.delegate.listViewDidOpenItem)
      this.delegate.listViewDidOpenItem(this, item);
  },

  // -------------------------------------------------------------------------

  /*
   * Aphid.UI.ListView#_validateContainer() -> Boolean
   *
   * Evaluates the element for this instance to ensure that the element meets
   * all requirements to be used with this class.
  **/
  _validateContainer: function()
  {
    if (this.element.tagName != 'UL')
    {
      $L.error('Container (' + this.element.inspect() + ') is not an Unordered List (<ul>).', 'Aphid.UI.ListView');
      return false;
    }
    return true;
  },

  _validateItem: function(item)
  {
    return (item instanceof Aphid.UI.ListViewItem);
  }

});

// Method Name Mappings for Debugging ----------------------------------------

Aphid.UI.ListView.prototype.initialize.displayName = "Aphid.UI.ListView.initialize";
Aphid.UI.ListView.prototype.setItems.displayName = "Aphid.UI.ListView.setItems";
Aphid.UI.ListView.prototype.addItem.displayName = "Aphid.UI.ListView.addItem";
Aphid.UI.ListView.prototype.selectItem.displayName = "Aphid.UI.ListView.selectItem";
Aphid.UI.ListView.prototype.deselectItem.displayName = "Aphid.UI.ListView.deselectItem";
Aphid.UI.ListView.prototype.clearSelection.displayName = "Aphid.UI.ListView.clearSelection";
Aphid.UI.ListView.prototype.openItem.displayName = "Aphid.UI.ListView.clearSelection";
Aphid.UI.ListView.prototype._initializeItems.displayName = "Aphid.UI.ListView._initializeItems";
Aphid.UI.ListView.prototype._initializeItem.displayName = "Aphid.UI.ListView._initializeItem";
Aphid.UI.ListView.prototype._setupSorting.displayName = "Aphid.UI.ListView._setupSorting";
Aphid.UI.ListView.prototype._addOrderedIdentitiesToItems.displayName = "Aphid.UI.ListView._addOrderedIdentitiesToItems";
Aphid.UI.ListView.prototype._addDragHandlesToItems.displayName = "Aphid.UI.ListView._addDragHandlesToItems";
Aphid.UI.ListView.prototype._addDragHandleToItem.displayName = "Aphid.UI.ListView._addDragHandleToItem";
Aphid.UI.ListView.prototype._listViewOrderDidChange.displayName = "Aphid.UI.ListView._listViewOrderDidChange";
Aphid.UI.ListView.prototype._listViewOrderDidUpdate.displayName = "Aphid.UI.ListView._listViewOrderDidUpdate";
Aphid.UI.ListView.prototype._handleClickEvent.displayName = "Aphid.UI.ListView._handleClickEvent";
Aphid.UI.ListView.prototype._handleDoubleClickEvent.displayName = "Aphid.UI.ListView.prototype._handleDoubleClickEvent"
Aphid.UI.ListView.prototype._shouldSelectItem.displayName = "Aphid.UI.ListView._shouldSelectItem";
Aphid.UI.ListView.prototype._didSelectItem.displayName = "Aphid.UI.ListView._didSelectItem";
Aphid.UI.ListView.prototype._shouldDeselectItem.displayName = "Aphid.UI.ListView._shouldDeselectItem";
Aphid.UI.ListView.prototype._didDeselectItem.displayName = "Aphid.UI.ListView._didDeselectItem";
Aphid.UI.ListView.prototype._shouldClearSelection.displayName = "Aphid.UI.ListView._shouldClearSelection"
Aphid.UI.ListView.prototype._shouldOpenItem.displayName = "Aphid.UI.ListView._shouldOpenItem";
Aphid.UI.ListView.prototype._didOpenItem.displayName = "Aphid.UI.ListView._didOpenItem";
Aphid.UI.ListView.prototype._validateContainer.displayName = "Aphid.UI.ListView._validateContainer";
Aphid.UI.ListView.prototype._validateItem.displayName = "Aphid.UI.ListView._validateItem";
/**
 * class Aphid.UI.ListViewItem < Aphid.UI.View
 *
**/

Aphid.UI.ListViewItem = Class.create(Aphid.UI.View, {

  displayName: "ListViewItem",

  /**
   * Aphid.UI.ListViewItem#isSelected -> Boolean
  **/
  isSelected: false,

  /**
   * Aphid.UI.ListViewItem#listView -> Aphid.UI.ListView
   *
   * The ListView instance that this item belongs to.
  **/
  listView: false,

  // Initialization ----------------------------------------------------------

  /**
   * new Aphid.UI.ListViewItem([options])
   *
   * - options (Hash): Initial property values to be set on the View instance
   *
   * Initializes a new View instance.
  **/
  initialize: function($super, options)
  {
    $super(options);
    if (!this.element)
    {
      $L.info("Initializing default element...", this.displayName)
      this.element = new Element('li');
      this.isLoaded = true;
    }
  },

  viewDidLoad: function($super)
  {
    $super();
  },

  // -------------------------------------------------------------------------

  select: function()
  {
    $L.debug("Selected...", "Aphid.UI.ListViewItem");
    this.element.addClassName('selected');
    this.isSelected = true;
    return this;
  },

  deselect: function()
  {
    $L.debug("Deselected...", "Aphid.UI.ListViewItem");
    this.element.removeClassName('selected');
    this.isSelected = false;
    return this;
  }

});

// Method Name Mappings for Debugging ----------------------------------------

Aphid.UI.ListViewItem.prototype.select.displayName = "Aphid.UI.ListViewItem.select";
Aphid.UI.ListViewItem.prototype.deselect.displayName = "Aphid.UI.ListViewItem.deselect";
