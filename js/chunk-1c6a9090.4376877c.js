(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6a9090"],{"0e8f":function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("flex")},"253b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("b",[t._v("Transaction:")]),t._v(" "+t._s(t.token)+" "),a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Amount ")])],1),a("v-row",[a("v-col",{staticClass:"orange--text text-h5",attrs:{cols:"6"}},[t._v(" "+t._s(t.book.alphabetic_code)+" "+t._s(t.numberFormat(t.book.boking_amount))+" ")]),a("v-col",{attrs:{cols:"6"}},["3"===t.book.status|3===t.book.status?a("v-chip",{staticClass:"ma-2",attrs:{color:"green",small:""}},[t._v(" Accepted ")]):"4"===t.book.status|4===t.book.status?a("v-chip",{staticClass:"ma-2",attrs:{small:""}},[t._v(" Pending payment ")]):"5"===t.book.status|5===t.book.status?a("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"green"}},[t._v(" Payment accepted ")]):"6"===t.book.status|6===t.book.status?a("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"green"}},[t._v(" Confirmed service ")]):a("v-chip",{staticClass:"ma-2",attrs:{small:""}},[t._v(" Pending ")])],1)],1),a("v-divider"),a("v-row",{staticClass:"pt-6"},[a("v-col",[a("b",[t._v("Transaction Detail")])])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Order ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.order_id)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Client ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.name)+" "+t._s(t.book.lastName)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Address ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.full_address)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Country ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.entity)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" State ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.state_name)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Book date ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.cook_start_date)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Book time ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.Cook_start_time)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Last update ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.updated_at)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Category ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.title)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Phone ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.prefix_phone_1)+"-"+t._s(t.book.phone1)+" ")])],1),a("v-divider"),a("v-row",{staticClass:"pt-6 mb-6"},[a("v-col",{attrs:{cols:"12"}},[t._v(" Location "),a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs11:""}},[a("v-layout",{attrs:{column:""}},[a("v-card",[a("v-layout",{attrs:{column:""}},[a("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"40vmin"},attrs:{center:t.center,zoom:15,"map-style-id":"roadmap",options:t.mapOptions},on:{click:t.handleMapClick}},[a("GmapMarker",{attrs:{position:t.marker.position,clickable:!1,draggable:!1}})],1)],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-row",{staticClass:"pt-6"},[a("v-col",[a("b",[t._v("Kitchen")])])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Grill available ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.grill_available)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Oven available ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.oven_available)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Stove backup ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.stove_backup)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Type stove power source ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.book.type_stove_power_source)+" ")])],1),a("v-divider"),a("v-row",{staticClass:"pt-6"},[a("v-col",[t._v("Meals")])],1),t._l(t.book.meals,(function(e,s){return a("div",{key:s},[a("v-row",[a("v-col",[a("v-list-item-avatar",{attrs:{rounded:!0,size:"100"}},[e.meal_name.file?a("v-img",{attrs:{src:t.$baseUrl+"storage/"+e.meal_name.file},on:{click:function(a){return a.stopPropagation(),t.open("pub-meal/"+e.meal_name.meal_key)}}}):t._e()],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Name ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(e.meal_name.meal_name)+" ")])],1),a("v-divider"),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Details ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(e.meal_name.meal_details)+" ")])],1),a("v-divider")],1)})),a("v-row",{staticClass:"pt-6"},[a("v-col",[a("b",[t._v("Analytics")])])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[t._v(" Date ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" Message ")])],1),a("v-divider"),t._l(t.book.status_detailes,(function(e){return a("div",{key:e.id},[a("v-row",{staticClass:"mt-3 pt-6"},[a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.formatDate(e.created_at))+" ")]),a("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(e.detail)+" "),e.cv?a("v-btn",{staticClass:"ml-1",attrs:{"x-small":"",icon:"",color:"#2D4262",target:"_self"},on:{click:function(a){return a.stopPropagation(),t.open("pub-chef-meals/"+e.cv.key)}}},[a("v-icon",[t._v("mdi-open-in-new")])],1):t._e()],1)],1),t.$can("admin")?a("div",[a("v-divider",{staticClass:"mx-4"}),a("v-row",{staticClass:"pt-3 mb-3"},[a("v-col",[t._v("Note: "+t._s(e.notes))])],1)],1):t._e(),a("v-divider")],1)}))],2)],1)],1)},i=[],o=(a("ac1f"),a("5319"),a("6612")),r=a.n(o),n=a("c1df"),l=a.n(n),c={data:function(){return{userInfo:localStorage.getItem("user"),icon_home:"mdi-account",drawer:!1,book:[],kitchenData:{lat:"",lng:""},loading:!1,selection:1,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],fab:!1,marker:{position:{lat:10,lng:10}},center:{lat:-27.709170290864915,lng:30.871627324999988},mapOptions:{disableDefaultUI:!0,streetViewControl:!1,mapTypeControl:!0,zoomControl:!0,fullscreenControl:!0}}},computed:{token:function(){return this.$route.params.token}},methods:{formatDate:function(t){return l()(t).format("DD-MM-YYYY HH:mm:ss")},open:function(t){var e=this.$router.resolve({path:t}),a=e.href.replace("pub-order/","");window.open(a,"_self")},numberFormat:function(t){return r()(t).format("0,0")},reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.marker.position={lat:e.coords.latitude,lng:e.coords.longitude},t.kitchenData.lat=e.coords.latitude,t.kitchenData.lng=e.coords.longitude,t.panToMarker()}))},handleMarkerDrag:function(t){this.marker.position={lat:t.latLng.lat(),lng:t.latLng.lng()}},panToMarker:function(){this.$refs.mapRef.panTo(this.marker.position)},handleMapClick:function(t){this.marker.position={lat:t.latLng.lat(),lng:t.latLng.lng()}}},mounted:function(){var t=this,e=JSON.parse(this.userInfo);e&&(this.icon_home="mdi-home"),this.axios.get("pub-order-data/"+this.token).then((function(e){return t.book=e.data,t.marker.position.lat=parseFloat(t.book.lat),t.marker.position.lng=parseFloat(t.book.lng),t.center.lat=parseFloat(t.book.lat),t.center.lng=parseFloat(t.book.lng)}))}},v=c,d=a("2877"),u=a("6544"),h=a.n(u),p=a("8336"),m=a("b0af"),f=a("cc20"),g=a("62ad"),b=a("ce7e"),_=a("0e8f"),k=a("132d"),C=a("adda"),y=a("a722"),w=a("8270"),B=a("0fd9"),O=Object(d["a"])(v,s,i,!1,null,null,null);e["default"]=O.exports;h()(O,{VBtn:p["a"],VCard:m["a"],VChip:f["a"],VCol:g["a"],VDivider:b["a"],VFlex:_["a"],VIcon:k["a"],VImg:C["a"],VLayout:y["a"],VListItemAvatar:w["a"],VRow:B["a"]})},"297c":function(t,e,a){"use strict";a("a9e3");var s=a("2b0e"),i=a("37c6");e["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,a){"use strict";var s=a("8e36");e["a"]=s["a"]},"615b":function(t,e,a){},"6ece":function(t,e,a){},8270:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("713a"));e["a"]=i["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},i["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=i["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},"8adc":function(t,e,a){},"8e36":function(t,e,a){"use strict";var s=a("5530"),i=a("ade3"),o=(a("a9e3"),a("c7cd"),a("6ece"),a("0789")),r=a("90a2"),n=a("a9ad"),l=a("fe6c"),c=a("a452"),v=a("7560"),d=a("80d2"),u=a("58df"),h=Object(u["a"])(n["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],v["a"]);e["a"]=h.extend({name:"v-progress-linear",directives:{intersect:r["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["h"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["h"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(d["h"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["h"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["d"]:o["f"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["h"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["t"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},onObserve:function(t,e,a){this.isVisible=a},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["h"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},b0af:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("0481"),a("4069"),a("615b"),a("10d2")),o=a("297c"),r=a("1c87"),n=a("58df");e["a"]=Object(n["a"])(o["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},cc20:function(t,e,a){"use strict";var s=a("3835"),i=a("5530"),o=(a("d3b7"),a("4de4"),a("8adc"),a("58df")),r=a("0789"),n=a("9d26"),l=a("a9ad"),c=a("4e82"),v=a("7560"),d=a("f2e7"),u=a("1c87"),h=a("af2b"),p=a("d9bd");e["a"]=Object(o["a"])(l["a"],h["a"],u["a"],v["a"],Object(c["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},u["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],o=a[1];t.$attrs.hasOwnProperty(i)&&Object(p["a"])(i,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,o=a.data;o.attrs=Object(i["a"])(Object(i["a"])({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var r=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(r,o),e)}})}}]);
//# sourceMappingURL=chunk-1c6a9090.4376877c.js.map