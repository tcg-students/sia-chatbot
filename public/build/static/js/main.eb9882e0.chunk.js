(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(t,e,n){t.exports=n(88)},47:function(t,e,n){},76:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(16),i=n.n(a),c=(n(47),n(11)),u=n(3),l=n(5),s=n(2);var f=function(t){var e=t.displayApplicantInfomation,n=t.sendFormValues,r=t.handleEdit;return o.a.createElement("div",null,e!==[]&&e.map(function(t,e){return o.a.createElement("div",{className:"applicantInfomationContainer"},o.a.createElement("div",{className:"applicantInfomation"},o.a.createElement("p",null,"You are applying with the following infomation:"),o.a.createElement("hr",null),o.a.createElement("ul",{key:e},Object.keys(t).map(function(n){return o.a.createElement("li",{className:"info",style:{color:"#033333"},key:n+e},n,": ",t[n])}))),o.a.createElement("div",{style:{color:"#033333"}},o.a.createElement("p",{style:{color:"white"}},"Would you like to edit?"),o.a.createElement("div",{className:"applicantInfomationButtons"},o.a.createElement("input",{type:"submit",className:"optionButtons",value:"Yes",onClick:r}),o.a.createElement("input",{type:"submit",className:"optionButtons",onClick:n,value:"No"}))))}))},p=function(t){var e=t.createForm,n=t.formStructure,a=t.handleChange,i=t.handleSubmit,c=t.applicationForm;return Object(r.useEffect)(function(){e()},[]),o.a.createElement("div",{className:"wrapper"},o.a.createElement("form",{className:"form",onSubmit:i},n.map(function(t,e){return o.a.createElement("div",{key:e},"textarea"===t.value?o.a.createElement("div",null,o.a.createElement("label",{className:"form-label noneAstericks"},t.name),o.a.createElement("textarea",{className:"form-textarea",type:t.value,name:t.name,placeholder:"Message",onChange:function(t){return a(t)},value:c[t.name]!=={}||null!==c[t.name]||null!==c[t.name]?c[t.name]:""})):o.a.createElement("div",null,o.a.createElement("label",{className:"form-label addAstericks"},t.name.charAt(0).toUpperCase()+t.name.slice(1).match(/([A-Z]?[^A-Z]*)/g).join(" ")),o.a.createElement("input",{placeholder:"Enter your ".concat(t.name.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(" ").toLowerCase()),className:"form-input",type:t.value,name:t.name,onChange:function(t){return a(t)},required:!0,value:void 0!==c[t.name]?c[t.name]:""})))}),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"form-button"},"Submit"))))};var d=function(t){var e=t.editForm,n=t.displayApplicantInfomation;return o.a.createElement("div",null,e&&n.length>0?o.a.createElement(p,t):o.a.createElement(f,t))},h=function(t){var e=t.createForm,n=(t.formStructure,t.handleChange,t.handleSubmit,t.displayApplicantInfomation,t.applicationFormAndApplicantInfoShow),a=(t.sendFormValues,t.handleEdit,t.editForm);return Object(r.useEffect)(function(){e()},[]),o.a.createElement("div",null,n?!a&&o.a.createElement(f,t):o.a.createElement(p,t),a&&o.a.createElement(d,t))},m=n(4),v=n(12),y=n.n(v);function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function f(){}function p(){}function d(){}var h={};c(h,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&n.call(v,o)&&(h=v);var y=d.prototype=f.prototype=Object.create(h);function E(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(y,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var E=function(t){return function(){var e=Object(l.a)(g().mark(function e(n){var r,o;return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(O(!1)),e.next=3,y.a.post("http://localhost:4004/get_initial_nodes",t);case 3:r=e.sent,console.log("response",r.data.rows),o=r.data.rows,n({type:"GETTING_FIRST_NODE_OPTIONS",idObj:t,payload:o});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=function(t){return function(){var e=Object(l.a)(g().mark(function e(n){return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"REMOVE_LAST_NODES",payload:t});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(){return function(){var t=Object(l.a)(g().mark(function t(e){return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e(O(!1)),e({type:"RESET_STATE",payload:[]});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(t){return function(e){e({type:"LOADING",payload:t})}};var x=function(t){var e=t.introTreeMessages,n=(t.nextNodes,Object(r.useState)()),a=Object(s.a)(n,2),i=a[0],c=a[1],u=Object(m.b)(),l=Object(m.c)(function(t){return t.botConversation.currentBotRes});return o.a.createElement("div",{className:"selectInput"},o.a.createElement("input",{className:"form-control",type:"number",value:i,onChange:function(t){return c(t.target.value)},placeholder:"Response Command"}),o.a.createElement("input",{type:"button",className:"btn btn-dark",value:"Send",onClick:function(){var t=l&&l.length>0?l:e;if(t.find(function(t){return void 0===t.node_id})){var n=t[i].id;setTimeout(function(){u(E({treeid:n}))},1e3)}else{var r=i-1,o=l.filter(function(t){return t.option})[r].id;setTimeout(function(){u(E({nodeid:o}))},1e3)}c("")},disabled:!i}))};var j=function(){return o.a.createElement("div",{class:"lds-ellipsis"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},L=(n(76),function(t){var e=t.handleInitialNodeOptions,n=t.introTreeMessages,a=t.nextNodes,i=t.nodeDisplay,c=t.handleScroll,u=t.handleResetChatbot,l=t.nodeTextStyling,s=t.isLoading;return Object(r.useEffect)(function(){i(),c()}),o.a.createElement("div",null,o.a.createElement("div",{className:"chatBotHeaderContainer"},o.a.createElement("div",{className:"chatBotHeader"},o.a.createElement("input",{type:"button",className:"headerButtons",onClick:u,value:"Reset"}),o.a.createElement("div",{style:{display:"flex",marginTop:"auto",gap:"10px"}},o.a.createElement("h1",null,"Sia Bot")))),o.a.createElement("div",{id:"chatbotBodyDiv",className:"chatbotBody"},o.a.createElement("div",null,void 0!==n&&n.map(function(t){return o.a.createElement("div",{className:"introMessage"},o.a.createElement("p",null,t.text))})),o.a.createElement("div",{className:"treeOptions"}),o.a.createElement("div",null,void 0!==a?a&&a.filter(function(t){return 0!==t.id}).map(function(t,n){return t.text?o.a.createElement("div",{style:{padding:".5rem"}},o.a.createElement("p",{className:l(t.text)},t.text)):t.image?o.a.createElement("div",{className:"mapImage",style:{padding:".5rem"}},o.a.createElement("img",{className:"mapImage",src:t.image,alt:"Map Logo"})):t.option?t.option.includes("Back to top")||t.option.includes("No")?o.a.createElement("div",{style:{padding:".5rem"}},o.a.createElement("button",{className:"optionButtons",onClick:function(){return u({nodeid:t.id})}},t.option)):o.a.createElement("div",{style:{padding:".5rem"}},o.a.createElement("button",{className:"optionButtons",onClick:function(){return e({nodeid:t.id})}},t.option)):void 0}):null,s&&o.a.createElement(j,null)),o.a.createElement("div",null,a.map(function(e){if(null!==e.application)return o.a.createElement(h,t)}))),o.a.createElement("div",{className:"chatbotFooter"},o.a.createElement("p",{style:{color:"white"}},"Command:"),o.a.createElement(x,{introTreeMessages:n,nextNodes:a})))}),N=n(19),_=n.n(N),S=n(20),T=n.n(S);function I(){I=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function p(){}function d(){}var h={};c(h,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==e&&n.call(v,o)&&(h=v);var y=d.prototype=f.prototype=Object.create(h);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,c(y,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var k=function(t){var e=Object(r.useState)({}),n=Object(s.a)(e,2),a=n[0],i=n[1],f=Object(r.useState)([]),p=Object(s.a)(f,2),d=(p[0],p[1]),h=Object(r.useState)([]),v=Object(s.a)(h,2),x=v[0],j=v[1],N=Object(r.useState)(!1),S=Object(s.a)(N,2),k=S[0],C=S[1],A=Object(r.useState)([]),M=Object(s.a)(A,2),F=M[0],G=M[1],B=Object(r.useState)([]),D=Object(s.a)(B,2),P=D[0],R=D[1],Y=Object(r.useState)(!1),V=Object(s.a)(Y,2),U=V[0],W=V[1],Z=Object(m.c)(function(t){return t.botConversation.welcomeMessages}),H=Object(m.c)(function(t){return t.botConversation.isLoading}),J=Object(m.c)(function(t){return t.botConversation.optionBotMessages}),X=Object(m.c)(function(t){return t.botConversation.id}),q=(T()(_.a),Object(m.b)());Object(r.useEffect)(function(){return function(){z()}},[]);var z=function(t){K()},K=function(){var t=Object(l.a)(I().mark(function t(){return I().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,setTimeout(function(){q(O(!0)),q(function(){var t=Object(l.a)(g().mark(function t(e){var n,r;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(O(!1)),t.next=3,y.a.get("https://sia-bo.herokuapp.com/treeMessages");case 3:n=t.sent,r=n.data.treeMessages,e({type:"GETTING_FIRST_TREE_WELCOME_MESSAGES",payload:r});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},1e3),setTimeout(function(){q(E({treeid:1}))},1800),G([]),t.abrupt("return");case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(l.a)(I().mark(function t(e){var n;return I().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,q(O(!0)),q({type:"UPDATE_ID",payload:e}),X!==e.nodeid){t.next=5;break}return t.abrupt("return");case 5:if(e.nodeid){for(n in F)F[n].id===e.nodeid&&setTimeout(function(){q(b(e))},1e3);G(J)}setTimeout(function(){q(E(e))},1e3),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}(),$=J.filter(function(t){return 0!==t.id}),tt=$&&$[$.length-1];console.log("obj",tt);console.log("form",x);return o.a.createElement("div",null,o.a.createElement(L,{introTreeMessages:Z,nextNodes:J,nodeDisplay:function(t){d(J)},handleInitialNodeOptions:Q,createForm:function(t){var e=[];if(tt)for(var n in tt.application)e.push({name:n,value:tt.application[n]}),console.log("values",e);j(e)},formStructure:x,handleChange:function(t){i(Object(u.a)({},a,Object(c.a)({},t.target.name,t.target.value)))},handleEdit:function(t){t.preventDefault(),C(!k)},handleSubmit:function(t){t.preventDefault(),C(!1),a&&(R([a]),setTimeout(function(){W(!0)},1e3))},displayApplicantInfomation:P,applicationFormAndApplicantInfoShow:U,isLoading:H,sendFormValues:function(t){var e;q((e=a,function(){var t=Object(l.a)(g().mark(function t(n){var r,o;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("http://localhost:4004/send_email",e);case 2:r=t.sent,o=r.data,n({type:"SEND_APPLICANT_DETAILS",payload:o});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())),T()(_.a).fire({title:"Your details were submitted successfully. We\u2019ll be in contact soon!",timer:5e3,showConfirmButton:!1}),setTimeout(function(){q(w()),z(),Q(),R([]),W(!1),i({})},5e3)},handleScroll:function(t){var e=document.getElementById("chatbotBodyDiv");e.scrollTop=e.scrollHeight},handleResetChatbot:function(t){q(O(!0)),setTimeout(function(){q(w()),z(),Q(),R([]),W(!1),G([])},2e3)},nodeTextStyling:function(t){return/(\d[.])/g.test(t)?"p-tag-text1":"p-tag-text"},editForm:k,applicationForm:a}))};var C=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))},A=n(39),M=n(8),F=n(6),G={logo:[],nodeId:[],currentNodes:[],welcomeMessages:[],optionBotMessages:[],id:null,isLoading:!1},B=Object(M.b)({botConversation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_LOGO":return Object(u.a)({},t,{logo:e.payload});case"GETTING_FIRST_TREE_WELCOME_MESSAGES":return Object(u.a)({},t,{isLoading:!0,welcomeMessages:e.payload});case"GETTING_FIRST_NODE_OPTIONS":var n=[].concat(Object(F.a)(t.optionBotMessages),[{id:0,application:null}],Object(F.a)(e.payload),[{id:0,application:null}]);return Object(u.a)({},t,{optionBotMessages:n,currentBotRes:e.payload});case"UPDATE_ID":return Object(u.a)({},t,{id:e.payload.nodeid?e.payload.nodeid:e.payload.treeid});case"REMOVE_LAST_NODES":var r=Object(F.a)(t.optionBotMessages),o=0,a=0;for(var i in t.optionBotMessages)t.optionBotMessages[i].id===e.payload.nodeid&&(o=i);for(i=o;i<t.optionBotMessages.length;i++)if(0===t.optionBotMessages[i].id){a=i;break}var c=r.splice(0,a);return Object(u.a)({},t,{optionBotMessages:Object(F.a)(c),currentBotRes:e.payload});case"GETTING_NODE_OPTIONS":return Object(u.a)({},t,{botConversationalMessages:[].concat(Object(F.a)(t.botConversationalMessages),Object(F.a)(e.payload))});case"SEND_APPLICANT_DETAILS":return Object(u.a)({},t,{applicantInfomation:e.payload});case"RESET_STATE":return Object(u.a)({},t,{nodeId:[],currentNodes:[],welcomeMessages:[],optionBotMessages:[],id:null});case"LOADING":return Object(u.a)({},t,{isLoading:e.payload});default:return t}}}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,P=Object(M.d)(B,D(Object(M.a)(A.a))),R=(n(86),function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,89)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})});i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:P},o.a.createElement(C,null)))),R()}},[[40,3,2]]]);
//# sourceMappingURL=main.eb9882e0.chunk.js.map