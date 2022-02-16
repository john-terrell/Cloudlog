/*! Leaflet.Geodesic 2.6.1 - (c) Henry Thasler - https://github.com/henrythasler/Leaflet.Geodesic */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("leaflet")):"function"==typeof define&&define.amd?define(["exports","leaflet"],n):n(((t="undefined"!=typeof globalThis?globalThis:t||self).L=t.L||{},t.L.geodesic={}),t.L)}(this,(function(t,n){"use strict";function e(t){if(t&&t.__esModule)return t;var n=Object.create(null);return t&&Object.keys(t).forEach((function(e){if("default"!==e){var i=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,i.get?i:{enumerable:!0,get:function(){return t[e]}})}})),n.default=t,Object.freeze(n)}var i=e(n),a=function(t,n){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},a(t,n)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}a(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var s=function(){return s=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},s.apply(this,arguments)};function r(t,n,e){if(e||2===arguments.length)for(var i,a=0,o=n.length;a<o;a++)!i&&a in n||(i||(i=Array.prototype.slice.call(n,0,a)),i[a]=n[a]);return t.concat(i||Array.prototype.slice.call(n))}var l=function(){function t(t){this.options={wrap:!0,steps:3},this.ellipsoid={a:6378137,b:6356752.3142,f:1/298.257223563},this.options=s(s({},this.options),t)}return t.prototype.toRadians=function(t){return t*Math.PI/180},t.prototype.toDegrees=function(t){return 180*t/Math.PI},t.prototype.mod=function(t,n){var e=t%n;return e<0?e+n:e},t.prototype.wrap360=function(t){return 0<=t&&t<360?t:this.mod(t,360)},t.prototype.wrap=function(t,n){return void 0===n&&(n=360),-n<=t&&t<=n?t:this.mod(t+n,2*n)-n},t.prototype.direct=function(t,n,e,i){void 0===i&&(i=100);var a=this.toRadians(t.lat),o=this.toRadians(t.lng),s=this.toRadians(n),r=e,l=1e3*Number.EPSILON,h=this.ellipsoid,c=h.a,p=h.b,u=h.f,g=Math.sin(s),f=Math.cos(s),d=(1-u)*Math.tan(a),M=1/Math.sqrt(1+d*d),L=d*M,y=Math.atan2(d,f),v=M*g,w=1-v*v,b=w*(c*c-p*p)/(p*p),m=1+b/16384*(4096+b*(b*(320-175*b)-768)),O=b/1024*(256+b*(b*(74-47*b)-128)),S=r/(p*m),P=null,R=null,E=null,D=null,x=0;do{E=Math.cos(2*y+S),D=S,S=r/(p*m)+O*(P=Math.sin(S))*(E+O/4*((R=Math.cos(S))*(2*E*E-1)-O/6*E*(4*P*P-3)*(4*E*E-3)))}while(Math.abs(S-D)>l&&++x<i);if(x>=i)throw new EvalError("Direct vincenty formula failed to converge after ".concat(i," iterations \n                (start=").concat(t.lat,"/").concat(t.lng,"; bearing=").concat(n,"; distance=").concat(e,")"));var j=L*P-M*R*f,G=Math.atan2(L*R+M*P*f,(1-u)*Math.sqrt(v*v+j*j)),N=u/16*w*(4+u*(4-3*w)),_=o+(Math.atan2(P*g,M*R-L*P*f)-(1-N)*u*v*(S+N*P*(E+N*R*(2*E*E-1)))),T=Math.atan2(v,-j);return{lat:this.toDegrees(G),lng:this.toDegrees(_),bearing:this.wrap360(this.toDegrees(T))}},t.prototype.inverse=function(t,n,e,a){void 0===e&&(e=100),void 0===a&&(a=!0);var o=t,s=n,r=this.toRadians(o.lat),l=this.toRadians(o.lng),h=this.toRadians(s.lat),c=this.toRadians(s.lng),p=Math.PI,u=Number.EPSILON,g=this.ellipsoid,f=g.a,d=g.b,M=g.f,L=c-l,y=(1-M)*Math.tan(r),v=1/Math.sqrt(1+y*y),w=y*v,b=(1-M)*Math.tan(h),m=1/Math.sqrt(1+b*b),O=b*m,S=Math.abs(L)>p/2||Math.abs(h-r)>p/2,P=L,R=null,E=null,D=S?p:0,x=0,j=S?-1:1,G=null,N=1,_=null,T=1,q=null,A=null,C=0;do{if(G=m*(R=Math.sin(P))*(m*R)+(v*O-w*m*(E=Math.cos(P)))*(v*O-w*m*E),Math.abs(G)<u)break;if(j=w*O+v*m*E,A=P,P=L+(1-(q=M/16*(T=1-(_=v*m*R/(x=Math.sqrt(G)))*_)*(4+M*(4-3*T))))*M*_*((D=Math.atan2(x,j))+q*x*((N=0!==T?j-2*w*O/T:0)+q*j*(2*N*N-1))),(S?Math.abs(P)-p:Math.abs(P))>p)throw new EvalError("λ > π")}while(Math.abs(P-A)>1e-12&&++C<e);if(C>=e){if(a)return this.inverse(t,new i.LatLng(n.lat,n.lng-.01),e,a);throw new EvalError("Inverse vincenty formula failed to converge after ".concat(e," iterations \n                    (start=").concat(t.lat,"/").concat(t.lng,"; dest=").concat(n.lat,"/").concat(n.lng,")"))}var I=T*(f*f-d*d)/(d*d),k=I/1024*(256+I*(I*(74-47*I)-128)),B=d*(1+I/16384*(4096+I*(I*(320-175*I)-768)))*(D-k*x*(N+k/4*(j*(2*N*N-1)-k/6*N*(4*x*x-3)*(4*N*N-3)))),J=Math.abs(G)<u?0:Math.atan2(m*R,v*O-w*m*E),U=Math.abs(G)<u?p:Math.atan2(v*R,-w*m+v*O*E);return{distance:B,initialBearing:Math.abs(B)<u?NaN:this.wrap360(this.toDegrees(J)),finalBearing:Math.abs(B)<u?NaN:this.wrap360(this.toDegrees(U))}},t.prototype.intersection=function(t,n,e,a){var o=this.toRadians(t.lat),s=this.toRadians(t.lng),r=this.toRadians(e.lat),l=this.toRadians(e.lng),h=this.toRadians(n),c=this.toRadians(a),p=r-o,u=l-s,g=Math.PI,f=Number.EPSILON,d=2*Math.asin(Math.sqrt(Math.sin(p/2)*Math.sin(p/2)+Math.cos(o)*Math.cos(r)*Math.sin(u/2)*Math.sin(u/2)));if(Math.abs(d)<f)return t;var M=(Math.sin(r)-Math.sin(o)*Math.cos(d))/(Math.sin(d)*Math.cos(o)),L=(Math.sin(o)-Math.sin(r)*Math.cos(d))/(Math.sin(d)*Math.cos(r)),y=Math.acos(Math.min(Math.max(M,-1),1)),v=Math.acos(Math.min(Math.max(L,-1),1)),w=h-(Math.sin(l-s)>0?y:2*g-y),b=(Math.sin(l-s)>0?2*g-v:v)-c;if(0===Math.sin(w)&&0===Math.sin(b))return null;if(Math.sin(w)*Math.sin(b)<0)return null;var m=-Math.cos(w)*Math.cos(b)+Math.sin(w)*Math.sin(b)*Math.cos(d),O=Math.atan2(Math.sin(d)*Math.sin(w)*Math.sin(b),Math.cos(b)+Math.cos(w)*m),S=Math.asin(Math.min(Math.max(Math.sin(o)*Math.cos(O)+Math.cos(o)*Math.sin(O)*Math.cos(h),-1),1)),P=s+Math.atan2(Math.sin(h)*Math.sin(O)*Math.cos(o),Math.cos(O)-Math.sin(o)*Math.sin(S));return new i.LatLng(this.toDegrees(S),this.toDegrees(P))},t.prototype.midpoint=function(t,n){var e=this.toRadians(t.lat),a=this.toRadians(t.lng),o=this.toRadians(n.lat),s=this.toRadians(n.lng-t.lng),r=Math.cos(e),l=0,h=Math.sin(e),c={x:r+Math.cos(o)*Math.cos(s),y:l+Math.cos(o)*Math.sin(s),z:h+Math.sin(o)},p=Math.atan2(c.z,Math.sqrt(c.x*c.x+c.y*c.y)),u=a+Math.atan2(c.y,c.x);return new i.LatLng(this.toDegrees(p),this.toDegrees(u))},t}(),h=function(){function t(t){this.geodesic=new l,this.steps=t&&void 0!==t.steps?t.steps:3}return t.prototype.recursiveMidpoint=function(t,n,e){var i=[t,n],a=this.geodesic.midpoint(t,n);return e>0?(i.splice.apply(i,r([0,1],this.recursiveMidpoint(t,a,e-1),!1)),i.splice.apply(i,r([i.length-2,2],this.recursiveMidpoint(a,n,e-1),!1))):i.splice(1,0,a),i},t.prototype.line=function(t,n){return this.recursiveMidpoint(t,n,Math.min(8,this.steps))},t.prototype.multiLineString=function(t){for(var n=[],e=0,i=t;e<i.length;e++){for(var a=i[e],o=[],s=1;s<a.length;s++)o.splice.apply(o,r([o.length-1,1],this.line(a[s-1],a[s]),!1));n.push(o)}return n},t.prototype.lineString=function(t){return this.multiLineString([t])[0]},t.prototype.splitLine=function(t,n){var e={point:new i.LatLng(89.9,-180.0000001),bearing:180},a={point:new i.LatLng(89.9,180.0000001),bearing:180},o=new i.LatLng(t.lat,t.lng),s=new i.LatLng(n.lat,n.lng);o.lng=this.geodesic.wrap(o.lng,360),s.lng=this.geodesic.wrap(s.lng,360),s.lng-o.lng>180?s.lng=s.lng-360:s.lng-o.lng<-180&&(s.lng=s.lng+360);var r=[[new i.LatLng(o.lat,this.geodesic.wrap(o.lng,180)),new i.LatLng(s.lat,this.geodesic.wrap(s.lng,180))]];if(o.lng>=-180&&o.lng<=180){if(s.lng<-180){var l=this.geodesic.inverse(o,s).initialBearing;(h=this.geodesic.intersection(o,l,e.point,e.bearing))&&(r=[[o,h],[new i.LatLng(h.lat,h.lng+360),new i.LatLng(s.lat,s.lng+360)]])}else if(s.lng>180){l=this.geodesic.inverse(o,s).initialBearing;(h=this.geodesic.intersection(o,l,a.point,a.bearing))&&(r=[[o,h],[new i.LatLng(h.lat,h.lng-360),new i.LatLng(s.lat,s.lng-360)]])}}else if(s.lng>=-180&&s.lng<=180)if(o.lng<-180){l=this.geodesic.inverse(o,s).initialBearing;(h=this.geodesic.intersection(o,l,e.point,e.bearing))&&(r=[[new i.LatLng(o.lat,o.lng+360),new i.LatLng(h.lat,h.lng+360)],[h,s]])}else if(o.lng>180){var h;l=this.geodesic.inverse(o,s).initialBearing;(h=this.geodesic.intersection(o,l,e.point,e.bearing))&&(r=[[new i.LatLng(o.lat,o.lng-360),new i.LatLng(h.lat,h.lng-360)],[h,s]])}return r},t.prototype.splitMultiLineString=function(t){for(var n=[],e=0,i=t;e<i.length;e++){var a=i[e];if(1!==a.length){for(var o=[],s=1;s<a.length;s++){var r=this.splitLine(a[s-1],a[s]);o.pop(),o=o.concat(r[0]),r.length>1&&(n.push(o),o=r[1])}n.push(o)}else n.push(a)}return n},t.prototype.wrapMultiLineString=function(t){for(var n=[],e=0,a=t;e<a.length;e++){for(var o=[],s=null,r=0,l=a[e];r<l.length;r++){var h=l[r];if(null===s)o.push(new i.LatLng(h.lat,h.lng)),s=new i.LatLng(h.lat,h.lng);else{var c=Math.round((h.lng-s.lng)/360);o.push(new i.LatLng(h.lat,h.lng-360*c)),s=new i.LatLng(h.lat,h.lng-360*c)}}n.push(o)}return n},t.prototype.circle=function(t,n){for(var e=[],a=0;a<this.steps;a++){var o=this.geodesic.direct(t,360/this.steps*a,n);e.push(new i.LatLng(o.lat,o.lng))}return e.push(new i.LatLng(e[0].lat,e[0].lng)),e},t.prototype.splitCircle=function(t){var n=this.splitMultiLineString([t]);return 3===n.length&&(n[2]=r(r([],n[2],!0),n[0],!0),n.shift()),n},t.prototype.distance=function(t,n){return this.geodesic.inverse(new i.LatLng(t.lat,this.geodesic.wrap(t.lng,180)),new i.LatLng(n.lat,this.geodesic.wrap(n.lng,180))).distance},t.prototype.multilineDistance=function(t){for(var n=[],e=0,i=t;e<i.length;e++){for(var a=i[e],o=0,s=1;s<a.length;s++)o+=this.distance(a[s-1],a[s]);n.push(o)}return n},t.prototype.updateStatistics=function(t,n){var e={};e.distanceArray=this.multilineDistance(t),e.totalDistance=e.distanceArray.reduce((function(t,n){return t+n}),0),e.points=0;for(var i=0,a=t;i<a.length;i++){var o=a[i];e.points+=o.reduce((function(t){return t+1}),0)}e.vertices=0;for(var s=0,r=n;s<r.length;s++){o=r[s];e.vertices+=o.reduce((function(t){return t+1}),0)}return e},t}();function c(t){return"object"==typeof t&&null!==t&&"lat"in t&&"lng"in t&&"number"==typeof t.lat&&"number"==typeof t.lng}function p(t){return t instanceof Array&&"number"==typeof t[0]&&"number"==typeof t[1]}function u(t){return t instanceof i.LatLng||p(t)||c(t)}function g(t){if(t instanceof i.LatLng)return t;if(p(t))return new i.LatLng(t[0],t[1]);if(c(t))return new i.LatLng(t.lat,t.lng);throw new Error("L.LatLngExpression expected. Unknown object found.")}var f=function(t){function n(n,e){var a=t.call(this,[],e)||this;return a.defaultOptions={wrap:!0,steps:3},a.statistics={},a.points=[],i.Util.setOptions(a,s(s({},a.defaultOptions),e)),a.geom=new h(a.options),void 0!==n&&a.setLatLngs(n),a}return o(n,t),n.prototype.updateGeometry=function(){var n;if(n=this.geom.multiLineString(this.points),this.statistics=this.geom.updateStatistics(this.points,n),this.options.wrap){var e=this.geom.splitMultiLineString(n);t.prototype.setLatLngs.call(this,e)}else t.prototype.setLatLngs.call(this,this.geom.wrapMultiLineString(n))},n.prototype.setLatLngs=function(t){return this.points=function(t){var n=[],e=u(t[0])?[t]:t,i=new Error("L.LatLngExpression[] | L.LatLngExpression[][] expected. Unknown object found.");if(!(e instanceof Array))throw i;for(var a=0,o=e;a<o.length;a++){var s=o[a];if(!(s instanceof Array))throw i;for(var r=[],l=0,h=s;l<h.length;l++){var c=h[l];if(!u(c))throw i;r.push(g(c))}n.push(r)}return n}(t),this.updateGeometry(),this},n.prototype.addLatLng=function(t,n){var e=g(t);return 0===this.points.length?this.points.push([e]):void 0===n?this.points[this.points.length-1].push(e):n.push(e),this.updateGeometry(),this},n.prototype.fromGeoJson=function(t){var n=[],e=[];return"FeatureCollection"===t.type?e=t.features:"Feature"===t.type?e=[t]:["MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"].includes(t.type)?e=[{type:"Feature",geometry:t,properties:{}}]:console.log('[Leaflet.Geodesic] fromGeoJson() - Type "'.concat(t.type,'" not supported.')),e.forEach((function(t){switch(t.geometry.type){case"MultiPoint":case"LineString":n=r(r([],n,!0),[i.GeoJSON.coordsToLatLngs(t.geometry.coordinates,0)],!1);break;case"MultiLineString":case"Polygon":n=r(r([],n,!0),i.GeoJSON.coordsToLatLngs(t.geometry.coordinates,1),!0);break;case"MultiPolygon":t.geometry.coordinates.forEach((function(t){n=r(r([],n,!0),i.GeoJSON.coordsToLatLngs(t,1),!0)}));break;default:console.log('[Leaflet.Geodesic] fromGeoJson() - Type "'.concat(t.geometry.type,'" not supported.'))}})),n.length&&this.setLatLngs(n),this},n.prototype.distance=function(t,n){return this.geom.distance(g(t),g(n))},n}(i.Polyline),d=function(t){function n(n,e){var a=t.call(this,[],e)||this;a.defaultOptions={wrap:!0,steps:24,fill:!0,noClip:!0},a.statistics={},i.Util.setOptions(a,s(s({},a.defaultOptions),e));var o=a.options;return a.radius=void 0===o.radius?1e6:o.radius,a.center=void 0===n?new i.LatLng(0,0):g(n),a.geom=new h(a.options),a.update(),a}return o(n,t),n.prototype.update=function(){var n=this.geom.circle(this.center,this.radius);if(this.statistics=this.geom.updateStatistics([[this.center]],[n]),this.statistics.totalDistance=this.geom.multilineDistance([n]).reduce((function(t,n){return t+n}),0),this.options.wrap){var e=this.geom.splitCircle(n);t.prototype.setLatLngs.call(this,e)}else t.prototype.setLatLngs.call(this,n)},n.prototype.distanceTo=function(t){var n=g(t);return this.geom.distance(this.center,n)},n.prototype.setLatLng=function(t,n){this.center=g(t),this.radius=n||this.radius,this.update()},n.prototype.setRadius=function(t,n){this.radius=t,this.center=n?g(n):this.center,this.update()},n}(i.Polyline);void 0!==window.L&&(window.L.Geodesic=f,window.L.geodesic=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new(f.bind.apply(f,r([void 0],t,!1)))},window.L.GeodesicCircle=d,window.L.geodesiccircle=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new(d.bind.apply(d,r([void 0],t,!1)))}),t.GeodesicCircleClass=d,t.GeodesicLine=f,Object.defineProperty(t,"__esModule",{value:!0})}));
