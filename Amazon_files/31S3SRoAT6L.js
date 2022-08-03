'use strict';mix_d("DealsSolitaireCards__deals-shoveler-v2:deals-shoveler-v2__WakXPQsV","exports tslib @c/dom @c/aui-utils @p/a-truncate @p/gw-event-manager".split(" "),function(v,r,w,z,A,B){function t(b){return b&&"object"===typeof b&&"default"in b?b:{"default":b}}var x=t(w),C=t(A),D=t(B),E=function(b){return 9<b?String(b):"0"+b},y=function(b){if(0>=b)return"00:00";var a=Math.floor(b/36E5);b=[Math.floor(b/6E4%60),Math.floor(b/1E3%60)];0<a&&b.unshift(a);return b.map(E).join(":")},G=function(b){Array.prototype.slice.call(b.getElementsByClassName("badge-countdown-timer")).forEach(function(a){(new F(a)).start()})},
F=function(){function b(a){this.timerElement=a;this.msToEvent=parseInt(a.dataset.targetTime,10);this.timerElement.innerText=y(this.msToEvent)}b.prototype.start=function(){var a=this;isNaN(this.msToEvent)||(this.counterStartTime=Date.now(),this.counterInterval=z.interval(function(){return a.updateTime()},500))};b.prototype.updateTime=function(){var a=Date.now()-this.counterStartTime;0>=this.msToEvent-a&&clearInterval(this.counterInterval);this.timerElement.innerText=y(this.msToEvent-a)};return b}(),
H=function(b){Array.prototype.slice.call(b.getElementsByClassName("_deals-shoveler-v2_style_badgeContainer__2V4ps")).forEach(function(a){var c,d,f,e,u=32<(null!==(d=null===(c=null===a||void 0===a?void 0:a.getBoundingClientRect())||void 0===c?void 0:c.height)&&void 0!==d?d:0)?"_deals-shoveler-v2_style_badgeTwoLineContainer__238Xf":"_deals-shoveler-v2_style_badgeOneLineContainer__SDZkK";null===(f=null===a||void 0===a?void 0:a.classList)||void 0===f?void 0:f.remove("_deals-shoveler-v2_style_badgeLayoutCheck__DLY5W");
null===(e=null===a||void 0===a?void 0:a.classList)||void 0===e?void 0:e.add(u)})},n={day:function(){return 24}},l={per:{day:function(){return l.per.hour()*n.day()},hour:function(){return 60}}},m={per:{day:function(){return m.per.hour()*n.day()},hour:function(){return m.per.minute()*l.per.hour()},minute:function(){return 60}}},g={per:{day:function(){return g.per.hour()*n.day()},hour:function(){return g.per.minute()*l.per.hour()},minute:function(){return g.per.second()*m.per.minute()},second:function(){return 1E3}}},
h={per:{day:function(){return h.per.hour()*n.day()},hour:function(){return h.per.minute()*l.per.hour()},millisecond:function(){return 1E4},minute:function(){return h.per.second()*m.per.minute()},second:function(){return h.per.millisecond()*g.per.second()}}},k;(function(b){b[b.Ticks=0]="Ticks";b[b.Milliseconds=1]="Milliseconds";b[b.Seconds=2]="Seconds";b[b.Minutes=3]="Minutes";b[b.Hours=4]="Hours";b[b.Days=5]="Days"})(k||(k={}));var I=function(b,a){switch(a){case k.Days:return b/g.per.day();case k.Hours:return b/
g.per.hour();case k.Minutes:return b/g.per.minute();case k.Seconds:return b/g.per.second();case k.Milliseconds:return b;case k.Ticks:return b*h.per.millisecond();default:throw Error("Invalid TimeUnit.");}},p=function(b,a){1!==Math.abs(b)&&(a+="s");return b+" "+a},q=function(b){function a(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];c=b.call(this,1<c.length?a.millisecondsFromTime(c[0]||0,c[1]||0,2<c.length&&c[2]||0,3<c.length&&c[3]||0):0<c.length&&c[0]||0)||this;d=g.per;var f=Math.abs(c.getTotalMilliseconds()),
e=Math.floor(f);c.tick=(f-e)*h.per.millisecond();c.day=e/d.day()|0;e-=c.day*g.per.day();c.hour=e/d.hour()|0;e-=c.hour*d.hour();c.minute=e/d.minute()|0;e-=c.minute*d.minute();c.second=e/d.second()|0;e-=c.second*d.second();c.millisecond=e;c;return c}r.__extends(a,b);a.prototype.toString=function(){var c=[];this.day&&c.push(p(this.day,"day"));this.hour&&c.push(p(this.hour,"hour"));this.minute&&c.push(p(this.minute,"minute"));this.second&&c.push(p(this.second,"second"));1<c.length&&c.splice(c.length-
1,0,"and");return c.join(", ").replace(", and, "," and ")};a.toMilliseconds=function(c){return a.millisecondsFromTime(c.hour,c.minute,c.second,c.millisecond)};a.from=function(c,d,f,e){void 0===f&&(f=0);void 0===e&&(e=0);return new a(c,d,f,e)};a.millisecondsFromTime=function(c,d,f,e){void 0===f&&(f=0);void 0===e&&(e=0);c*=l.per.hour();c=(c+d)*m.per.minute();c+=f;c*=g.per.second();return c+=e};return a}(function(){function b(a){void 0===a&&(a=0);this._quantity=a;this.total={days:a/g.per.day(),hours:a/
g.per.hour(),milliseconds:a,minutes:a/g.per.minute(),seconds:a/g.per.second(),ticks:a*h.per.millisecond()}}Object.defineProperty(b.prototype,"direction",{get:function(){return 0<this.getTotalMilliseconds()?1:0>this.getTotalMilliseconds()?-1:0},enumerable:!1,configurable:!0});b.prototype.getTotalMilliseconds=function(){return this._quantity};b.prototype.equals=function(a){return a&&a.total?this.getTotalMilliseconds()===a.total.milliseconds:!1};b.prototype.getTotal=function(a){return I(this.getTotalMilliseconds(),
a)};b.getTotalMillisecondsFrom=function(a){return a?(a.days||0)*g.per.day()+(a.hours||0)*g.per.hour()+(a.minutes||0)*g.per.minute()+(a.seconds||0)*g.per.second()+(a.milliseconds||0)+(a.ticks||0)/h.per.millisecond():0};return b}()),J=function(){function b(a,c,d,f,e){void 0===c&&(c=Infinity);void 0===d&&(d=a);this._interval=a;this._maxCount=c;this._initialDelay=d;this._onComplete=f;this._onCountDown=e;this._count=0;if(null===a)throw Error("interval Must be a valid number.");if(0>a)throw Error("interval Cannot be negative.");
}Object.defineProperty(b.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"isRunning",{get:function(){return!!this._cancel},enumerable:!1,configurable:!0});b.prototype.start=function(){if(!this._cancel&&this._count<this._maxCount){var a=setTimeout(this._onTick,this._interval+this._initialDelay,this,!1);this._cancel=function(){clearTimeout(a)}}};b.prototype.stop=function(){this.cancel()};b.prototype.reset=function(){this.stop();
this._count=0};b.prototype.complete=function(){this.cancel();this._onComplete();return this._count};b.prototype.cancel=function(){return this._cancel?(this._cancel(),this._cancel=void 0,!0):!1};b.prototype._onTick=function(a,c){var d=a._count++,f=a._maxCount,e=a._count>=f;c&&(a.cancel(),a.start());d<f&&a._onCountDown(a._interval*(f-a._count),a._interval*a.count);if(e)a.stop(),a._onComplete();else{var u=setTimeout(a._onTick,a._interval,a,!1);a._cancel=function(){clearTimeout(u)}}};b.startNew=function(a,
c,d,f,e){void 0===c&&(c=Infinity);void 0===d&&(d=a);a=new b(a,c,d,f,e);a.start();return a};return b}(),L=function(){function b(a,c){this.timerLabelElement=a.getElementsByClassName("gwTimerLabel")[0];this.timerAriaLabelElement=a.getElementsByClassName("gwTimerAriaLabel")[0];this.sharedViewModel=JSON.parse(a.dataset.sharedModel);this.countDownTimerLabel={ariaLabel:this.timerAriaLabelElement.innerHTML,label:this.timerLabelElement.innerHTML};this.onCountDownCallback=this.onCountDownCallback.bind(this);
this.onCompleteCallback=this.onCompleteCallback.bind(this);var d=this.sharedViewModel.clockTime;d=q.millisecondsFromTime(d.hour,d.minute,d.second);var f=c.interval;this.timer=new J(f,Math.floor(d/f),c.initialDelay,this.onCompleteCallback,this.onCountDownCallback);this.remainingClockTime=new q(d);this.remainingClockTimeDisplay=new K(a)}b.prototype.start=function(){this.timer.start()};b.prototype.updateTimer=function(){this.updateLabel();this.remainingClockTimeDisplay.updateClockTime(this.remainingClockTime)};
b.prototype.updateLabel=function(){this.timerLabelElement.innerHTML=this.countDownTimerLabel.label;this.timerAriaLabelElement.innerHTML=this.countDownTimerLabel.ariaLabel};b.prototype.onCountDownCallback=function(a,c){this.remainingClockTime=new q(a);var d=this.sharedViewModel.timeFormattedLabel;a=this.remainingClockTime;c=d.formattedString;d=d.placeHolders;c=c.replace(d.hour,a.hour.toString());c=c.replace(d.minute,a.minute.toString());c=c.replace(d.second,a.second.toString());this.countDownTimerLabel=
{ariaLabel:c,label:this.countDownTimerLabel.label};this.updateTimer()};b.prototype.onCompleteCallback=function(){this.countDownTimerLabel=this.sharedViewModel.countDownEndLabel;this.remainingClockTime=new q(0);this.updateTimer()};b.secondsCountDownTimer=function(a){return b.from(a,{initialDelay:0,interval:1E3})};b.initializeSecondsCountDownTimers=function(a){var c=[];b.isTimerElement(a)?c.push(b.secondsCountDownTimer(a)):Array.prototype.slice.call(a.getElementsByClassName("gwTimer")).forEach(function(d){d=
b.secondsCountDownTimer(d);d.start();c.push(d)});return c};b.isTimerElement=function(a){return a.classList.contains("gwTimer")?!0:!1};b.from=function(a,c){return new b(a,c)};return b}(),K=function(){function b(a){this.hourElement=a.getElementsByClassName("gwTimerHour")[0];this.minuteElement=a.getElementsByClassName("gwTimerMinute")[0];this.secondElement=a.getElementsByClassName("gwTimerSecond")[0];a=a.getElementsByClassName("gwTimerSeparator");this.minuteSeparatorElement=a[0];this.secondSeparatorElement=
a[1]}b.prototype.updateClockTime=function(a){0<a.hour?(this.hourElement.innerHTML=("0"+a.hour.toString()).slice(-2),this.minuteSeparatorElement.classList.remove("aok-hidden")):(this.hourElement.innerHTML="",this.minuteSeparatorElement.classList.add("aok-hidden"));0<a.minute||0<a.hour?(this.minuteElement.innerHTML=("0"+a.minute.toString()).slice(-2),this.secondSeparatorElement.classList.remove("aok-hidden")):(this.secondSeparatorElement.classList.add("aok-hidden"),this.minuteElement.innerHTML="");
this.secondElement.innerHTML=0<a.second||0<a.hour||0<a.minute?("0"+a.second.toString()).slice(-2):""};return b}(),M=function(b){Array.prototype.slice.call(b.getElementsByClassName("dealAvailabilityMessage")).forEach(function(a){a.getElementsByClassName("staticMessage")[0]||L.initializeSecondsCountDownTimers(a)})},N=function(b){Array.prototype.slice.call(b.getElementsByClassName("a-truncate")).forEach(function(a){return C["default"].get(w.unscope(a)).update()})};v._operationNames=[];v.card=function(){return r.__awaiter(void 0,
void 0,void 0,function(){var b;return r.__generator(this,function(a){b=x["default"].cardRoot.getAttribute("id");D["default"].whenAll([b+"-lazy-cards-loaded"],function(c){void 0===c&&(c=x["default"].cardRoot);H(c);G(c);M(c);N(c)});return[2]})})}});
