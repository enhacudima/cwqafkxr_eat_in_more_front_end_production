(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eadd3e3"],{2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("6b75");function s(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||a(t)||Object(o["a"])(t)||r()}},"3c93":function(t,e,i){},7958:function(t,e,i){},a293:function(t,e,i){"use strict";var n=i("53ca"),s=(i("d3b7"),i("dd89"));function a(){return!0}function o(t,e,i){if(!t||!1===r(t,i))return!1;var a=Object(s["a"])(e);if("undefined"!==typeof ShadowRoot&&a instanceof ShadowRoot&&a.host===t.target)return!1;var o=("object"===Object(n["a"])(i.value)&&i.value.include||function(){return[]})();return o.push(e),!o.some((function(e){return e.contains(t.target)}))}function r(t,e){var i="object"===Object(n["a"])(e.value)&&e.value.closeConditional||a;return i(t)}function l(t,e,i,n){var s="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&o(t,e,i)&&setTimeout((function(){r(t,i)&&s&&s(t)}),0)}function c(t,e){var i=Object(s["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var h={inserted:function(t,e,i){var n=function(n){return l(n,t,e,i)},s=function(i){t._clickOutside.lastMousedownWasOutside=o(i,t,e)};c(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",s,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:s}},unbind:function(t,e,i){t._clickOutside&&(c(t,(function(e){var n;if(e&&null!=(n=t._clickOutside)&&n[i.context._uid]){var s=t._clickOutside[i.context._uid],a=s.onClick,o=s.onMousedown;e.removeEventListener("click",a,!0),e.removeEventListener("mousedown",o,!0)}})),delete t._clickOutside[i.context._uid])}};e["a"]=h},b848:function(t,e,i){"use strict";var n=i("2909"),s=i("58df");function a(t){for(var e=[],i=0;i<t.length;i++){var s=t[i];s.isActive&&s.isDependent?e.push(s):e.push.apply(e,Object(n["a"])(a(s.$children)))}return e}e["a"]=Object(s["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},b92b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"font-weight-black"},[t._v(" TERMS AND CONDITIONS. (Ver 1.1 2021) ")]),i("section",{attrs:{id:"considerations"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Initial considerations. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatinMore is an online electronic platform, based in South Africa and has its subsidiary in Mozambique EatInMore is dedicated to providing culinary intermediation services, it allows the hiring of services provided by Chefs through the platform. EatInMore is the intermediary in the relationship between users and chefs. ")])]),i("section",{attrs:{id:"user"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" User. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The expected users of the services provided here are individuals aged 18 years or over, residing in South Africa and Mozambique where EatInMore has representations. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore may suspend, permanently or temporarily, the registration of users who for any reason have not complied with the rules contained in this Term. ")])]),i("section",{attrs:{id:"conditions"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Conditions of registration and use. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Access and use of the platform by users constitute and presupposes acceptance of the provisions contained herein. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The user is also aware that this Term may undergo periodic changes without prior notice from EatInMore, or, in general, stop offering or refusing access to the Services or the Platform, in whole or in part, at any time and for any reason. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" It is not allowed for the User to access and / or use the EatInMore platform, if the User does not fully accept, without any reservations, all the provisions of this Terms of Use instrument. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore will notify Users of any changes to the Terms by means of a general notice posted on the Platform, by email or in any other electronic form, personalized or not. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Any and future notices and instructions published by EatInMore on the platform should be understood as supplementary to this Terms of Use instrument, and the User must, in the same way, observe and respect them in full. ")])]),i("section",{attrs:{id:"subscription"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Accounts and subscription. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" To access the Platform and the Services, each User must register on the EatIMore platform, by filling in the registration form, including all necessary personal information. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The creation of a Personal Account requires acceptance of the Terms. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Each time a User accesses his Personal Account he is implicitly accepting the Terms in its most current version. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" By creating a Personal Account, Users accept that EatInMore and other Users may send them correspondence (emails, letters or text messages) or contact them in any other way, as part of the normal operation of their use of the Services. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Users are responsible for any consequences caused by the fact that the information provided is incorrect, incomplete or out of date. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Users are responsible for their Personal Account and any security issues related to it, committing themselves to protect their access data. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Users are responsible for all transactions made with their Personal Account, even without their knowledge. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore will not be liable for any damages resulting from the user's proper or inappropriate use of the platform, as well as for any illegal conduct practiced, transmitted or published by the user. The user is fully aware that he will be solely responsible for any violations of the rights of third parties, exempting EatInMore from any obligations or responsibilities, directly or indirectly, for its harmful practice. ")])]),i("section",{attrs:{id:"available"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Services available. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The services offered by EatInMore through the platform consist of introducing chefs and menus, booking and hiring chefs with their respective menus and online payment. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The price of the service provided includes the Chef's remuneration and EatInMore's 15% commission for its Services and provision of the Platform. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The contracting of services must be done at least 48 hours before the date intended for the execution of the same and is considered confirmed by paying the full price. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The payment of the service must be made by the user at the time of contracting it through the payment methods available on the platform and it can only be canceled according to the rules set out in the terms and conditions. ")])]),i("section",{attrs:{id:"cancellation"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Contract cancellation. ")]),i("section",{attrs:{id:"cancellationuser"}},[i("p",{staticClass:"font-weight-regular"},[t._v(" Cancellation by user. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Users can cancel the services contracted with the EatInMore platform, according to the deadlines and penalties below. Cancellations can be made via the own cancellation link located on the platform. ")]),i("ul",[i("ul",[i("p",[t._v(" • The cancellation of the contracting of a service with more than 5 (five) days prior to the event will be refunded in 100% of the paid amount less the transaction costs; ")]),i("p",[t._v(" • Cancellation with less than 5 (five) days of the event: 50% of the amount paid will be refunded; ")]),i("p",[t._v(" • Cancellation with less than 2 (two) days for the event: no refund will be made by EatInMore. ")])])])])]),i("section",{attrs:{id:"cancellationEatInMore"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Cancellation by EatInMore. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" In the event that the Chef is not available, for whatever reason, even though he is unrelated to EatInMore, for the provision of the contracted services, it will ensure their replacement by another Chef of equivalent quality and style. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" If the user does not accept the replacement of the Chef and / or services, it will be refunded at 100% of the amount paid. The costs incurred in this operation by EatInMore will be deducted from the chefs. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" In the event that, for some reason, it is not possible for EatInMore to ensure the aforementioned replacement of the Chef and / or services, the user will be refunded at 100% of the amount paid. ")])]),i("section",{attrs:{id:"Privacy"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Information Privacy. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore will not make available, sell, rent or negotiate the information of its users with other companies, except in case of prior and express authorization by them. These data will only be used by the users themselves for their registration on the EatInMore platform, as well as by the Chefs who are hired, who will be aware of the data of the respective user and location of the service. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Users expressly agree that EatInMore may share their data with competent public authorities, in case it is compelled to do so by court order. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore has information protection and security mechanisms. All user information is stored on high security servers. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore will take all possible measures to maintain the confidentiality and security described here, but will not be liable for any damage that may be caused by the breach of these measures by third parties using public networks or the Internet to access users' information. ")])]),i("section",{attrs:{id:"liability"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Exclusion of liability. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore assumes no responsibility other than that associated with its role as an intermediary for Chefs and users. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore is not contractually involved in providing the services. Contracts are concluded directly between Chefs and users. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" Chefs are entirely responsible for the purchase of the necessary ingredients to provide the contracted service. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The costs of transport / traveling to the user's home are the sole responsibility of the Chefs. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore has no responsibility related to the terms of business, contract compliance and the performance of the service by Chefs. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore's responsibilities are limited to its functions as owner of the platform and as an intermediary between Chefs and users. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore will not be responsible for the poor provision of services by the Chefs hired by the user. Any failure in the provision of services by the Chef, including failure to show up on the reserved date, will be the sole and exclusive responsibility of the contracted Chef, with the user being responsible for adopting legal measures to obtain eventual damage repairs exclusively by the contracted Chef. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore and the hired chef cannot be held responsible for not attending the event due to strikes / stoppages that affect the means of transport in all its forms.. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" EatInMore does not validate the identity of users and is not responsible for any inaccuracies or inaccuracies in relation to the information provided by them. ")])]),i("section",{attrs:{id:"property"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Intellectual property. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" All platforms content and respective brand and image are the property of EatInMore. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" The elements of the platform, brand and image may not be used by Users without the prior authorization of EatInMore, whether for commercial or non-commercial purposes. ")])]),i("section",{attrs:{id:"Jurisdiction"}},[i("p",{staticClass:"font-weight-medium"},[t._v(" Law and Jurisdiction. ")]),i("p",{staticClass:"font-weight-light"},[t._v(" These Terms have been drafted in Republic of South Africa, in accordance with South African law. ")])])]),i("v-navigation-drawer",{attrs:{app:"",clipped:"",right:"",dense:""}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[i("v-icon",[t._v("mdi-book-open")]),t._v(" Contents ")],1)],1)],1),i("v-divider"),i("v-list",{attrs:{shaped:"",dense:""}},[i("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,n){return i("v-list-item",{key:n,on:{click:function(i){return t.$vuetify.goTo(e.link)}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("v-divider",{staticClass:"mx-4"}),i("v-row",{attrs:{dense:"",justify:"center",align:"center"}},t._l(t.icons,(function(e){return i("v-btn",{key:e,staticClass:"mx-1",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)],1)},s=[],a={data:function(){return{items:[{title:"Considerations",link:"#considerations",icon:"mdi-ray-start-vertex-end"},{title:"User",link:"#user",icon:"mdi-account"},{title:"Conditions",link:"#conditions",icon:"mdi-hvac"},{title:"Subscription",link:"#subscription",icon:"mdi-playlist-check"},{title:"Available",link:"#available",icon:"mdi-airplane-takeoff"},{title:"Cancellation",link:"#cancellation",icon:"mdi-sword-cross"},{title:"Cancellation by User",link:"#cancellationuser",icon:"mdi-account-minus"},{title:"Cancellation by EatInMore",link:"#cancellationEatInMore",icon:"mdi-account-question"},{title:"Privacy",link:"#Privacy",icon:"mdi-vpn"},{title:"Liability",link:"#liability",icon:"mdi-billiards-rack"},{title:"Property",link:"#property",icon:"mdi-shield-sun-outline"},{title:"Jurisdiction",link:"#Jurisdiction",icon:"mdi-gavel"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},o=a,r=i("2877"),l=i("6544"),c=i.n(l),h=i("8336"),d=i("62ad"),u=i("ce7e"),f=i("132d"),v=i("8860"),p=i("da13"),m=i("5d23"),g=i("1baa"),y=i("f774"),b=i("0fd9"),w=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=w.exports;c()(w,{VBtn:h["a"],VCol:d["a"],VDivider:u["a"],VIcon:f["a"],VList:v["a"],VListItem:p["a"],VListItemContent:m["b"],VListItemGroup:g["a"],VListItemTitle:m["d"],VNavigationDrawer:y["a"],VRow:b["a"]})},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),s=(i("3c93"),i("a9ad")),a=i("7560"),o=i("f2e7"),r=i("58df"),l=Object(r["a"])(s["a"],a["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=l,h=i("80d2"),d=i("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["v"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["y"].up,h["y"].pageup],i=[h["y"].down,h["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,s=e.shiftKey||e.deltaX?"x":"y",a="y"===s?e.deltaY:e.deltaX||e.deltaY;"y"===s?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=a<0,r=a>0;return!(i||!o)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(h["g"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var s=0;s<e.length;s++){var a=e[s];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return!this.shouldScroll(a,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f774:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("c7cd"),i("99af"),i("7958"),i("adda")),a=i("3a66"),o=i("a9ad"),r=i("b848"),l=i("e4cd"),c=i("e707"),h=i("d10f"),d=i("7560"),u=i("a293"),f=i("dc22"),v=i("c3f0"),p=i("80d2"),m=i("58df"),g=Object(m["a"])(Object(a["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),o["a"],r["a"],l["a"],c["a"],h["a"],d["a"]);e["a"]=g.extend({name:"v-navigation-drawer",directives:{ClickOutside:u["a"],Resize:f["a"],Touch:v["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(n["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&l["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(p["h"])(this.height),top:this.isBottom?"auto":Object(p["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(p["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(p["h"])(this.computedTransform,"%"),")"),width:Object(p["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(p["t"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(p["t"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})}}]);
//# sourceMappingURL=chunk-0eadd3e3.553489eb.js.map