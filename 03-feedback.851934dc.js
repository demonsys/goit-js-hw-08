var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function w(){var e=d();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return v?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,y&&r?b(e):(r=o=void 0,a)}function S(){var e=d(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},S.flush=function(){return void 0===f?a:O(d())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=y.elements.email,h=y.elements.message,j=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state")||"",w={email:j.email||"",message:j.message||""};b.value=w.email,h.value=w.message,y.addEventListener("input",t((function(){w.email=b.value,w.message=h.value,((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",w)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.851934dc.js.map
