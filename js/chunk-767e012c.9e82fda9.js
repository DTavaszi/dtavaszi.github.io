(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-767e012c"],{"0ae3":function(e,t,i){"use strict";var r=i("cdb1"),s=i.n(r);s.a},"582a":function(e,t,i){e.exports=i.p+"img/Services-Auto-CROP.898bcc20.png"},"6ca7":function(e,t,i){},ac7c:function(e,t,i){"use strict";i("d3b7"),i("25f0");var r=i("5530"),s=(i("6ca7"),i("ec29"),i("9d26")),a=i("c37a"),n=i("fe09");t["a"]=n["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(r["a"])({},a["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(r["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},c680:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pb-12"},[r("v-img",{attrs:{src:i("582a")}}),r("div",{staticClass:"mx-auto py-12 divider-bottom",staticStyle:{"max-width":"1000px"}},[e._v(" Vancouver Global Shipping can arrange for global automobile shipping. We ensure safe and secure transport of vehicles, either via air or ocean freight. Our network is experienced in handling even the most luxurious vehicles in a time efficient and cost effective manner. The CONTAINER method offers a secure and safer way of freight ocean shipping. When you are shipping multiple cars or want to ship additional items inside your vehicle, then shipping a car inside a container is a good option. Container shipping offers you a wider choice of destinations and booking schedules while allowing for secure transshipment. The RORO shipping method is usually the most comfortable and cheapest way to ship a car, a truck, a boat or heavy machinery overseas. Your vehicle is driven on to the RORO ship at port of departure (“Rolled on”) and driven off the RORO ship when she arrives at a destination port (“Rolled off”). ")]),r("Form",{staticClass:"mx-auto mt-12"})],1)},s=[],a=(i("b0c0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"py-4",attrs:{"max-width":"900"}},[i("v-card-title",{staticClass:"d-flex no-wrap flex-nowrap"},[i("v-spacer"),i("div",{staticClass:"headline text-center text--lighten-2 keep-all"},[e._v(" Automobile Service Quote ")]),i("v-spacer")],1),e.$vuetify.breakpoint.smAndDown?i("v-divider",{staticClass:"mb-4"}):e._e(),i("v-card-text",[i("v-form",{ref:"form"},[i("v-row",[i("v-col",{attrs:{cols:12,xs:12,sm:6,md:6}},[i("div",{staticClass:"black--text title mb-4"},[e._v("Contact Info")]),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pr-1"},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" FIRST NAME ")]),i("v-text-field",{attrs:{dense:"",outlined:"",rules:[e.rules.required]},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" LAST NAME ")]),i("v-text-field",{attrs:{dense:"",outlined:"",rules:[e.rules.required]},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" COMPANY NAME ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.companyName,callback:function(t){e.$set(e.form,"companyName",t)},expression:"form.companyName"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" EMAIL ")]),i("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],dense:"",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" PHONE NUMBER ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.phoneNumber,callback:function(t){e.$set(e.form,"phoneNumber",t)},expression:"form.phoneNumber"}})],1)],1)],1),i("v-col",[i("div",{staticClass:"black--text title mb-4"},[e._v("Routing Info")]),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:12,xs:12,sm:6,md:6}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" ORIGIN COUNTRY ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.originCountry,callback:function(t){e.$set(e.form,"originCountry",t)},expression:"form.originCountry"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" ADDRESS OF ORIGIN ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.addressOfOrigin,callback:function(t){e.$set(e.form,"addressOfOrigin",t)},expression:"form.addressOfOrigin"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" DESTINATION COUNTRY ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.destinationCountry,callback:function(t){e.$set(e.form,"destinationCountry",t)},expression:"form.destinationCountry"}})],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" ADDRESS OF DESTINATION ")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.addressOfDestination,callback:function(t){e.$set(e.form,"addressOfDestination",t)},expression:"form.addressOfDestination"}})],1)],1)],1)],1),i("div",{staticClass:"black--text title"},[e._v("Freight Info")]),i("v-row",[i("v-col",[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" DESCRIPTION OF FREIGHT CONTENT ")]),i("v-textarea",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.freight.freightDescription,callback:function(t){e.$set(e.form.freight,"freightDescription",t)},expression:"form.freight.freightDescription"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:6,xs:6,sm:6,md:3}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v("MAKE")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.freight.make,callback:function(t){e.$set(e.form.freight,"make",t)},expression:"form.freight.make"}})],1),i("v-col",{attrs:{cols:6,xs:6,sm:6,md:3}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v("MODEL")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.freight.model,callback:function(t){e.$set(e.form.freight,"model",t)},expression:"form.freight.model"}})],1),i("v-col",{attrs:{cols:6,xs:6,sm:6,md:3}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v("YEAR")]),i("v-text-field",{attrs:{rules:[e.rules.required],dense:"",outlined:""},model:{value:e.form.freight.year,callback:function(t){e.$set(e.form.freight,"year",t)},expression:"form.freight.year"}})],1),i("v-col",{attrs:{cols:6,xs:6,sm:6,md:3}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" APPROXIMATE VALUE ")]),i("v-text-field",{attrs:{rules:[e.rules.required],prefix:"$",suffix:"USD",type:"number",dense:"",outlined:""},model:{value:e.form.freight.approximateValue,callback:function(t){e.$set(e.form.freight,"approximateValue",t)},expression:"form.freight.approximateValue"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:12,xs:12,sm:6,md:6}},[i("div",{staticClass:"black--text caption font-weight-medium"},[e._v(" SERVICE REQUIRED ")]),i("v-select",{staticStyle:{"max-width":"250px"},attrs:{rules:[e.rules.required],"single-line":"",label:"Select an option",items:e.services,"item-text":"name","item-value":"name",dense:"",outlined:""},model:{value:e.form.serviceRequired,callback:function(t){e.$set(e.form,"serviceRequired",t)},expression:"form.serviceRequired"}})],1),i("v-col",{attrs:{cols:12,xs:12,sm:12,md:6}},[i("div",{staticClass:"black--text caption font-weight-medium",staticStyle:{"margin-bottom":"-15px"}},[e._v(" SHIPMENT TYPE ")]),i("v-checkbox",{attrs:{"hide-details":"",dense:"",color:"black",multiple:"",value:"AIR FREIGHT",rules:[e.rules.oneOrMore]},scopedSlots:e._u([{key:"label",fn:function(){return[i("span",{staticClass:"font-weight-light black--text"},[e._v("Air Freight")])]},proxy:!0}]),model:{value:e.form.freight.shipmentType,callback:function(t){e.$set(e.form.freight,"shipmentType",t)},expression:"form.freight.shipmentType"}}),i("v-checkbox",{attrs:{"hide-details":"",dense:"",color:"black",multiple:"",value:"OCEAN FREIGHT-CONTAINERIZED",rules:[e.rules.oneOrMore]},scopedSlots:e._u([{key:"label",fn:function(){return[i("span",{staticClass:"font-weight-light black--text"},[e._v(" Ocean Freight - Containerized ")])]},proxy:!0}]),model:{value:e.form.freight.shipmentType,callback:function(t){e.$set(e.form.freight,"shipmentType",t)},expression:"form.freight.shipmentType"}}),i("v-checkbox",{attrs:{"hide-details":"",dense:"",color:"black",multiple:"",value:"OCEAN FREIGHT-RORO",rules:[e.rules.oneOrMore]},scopedSlots:e._u([{key:"label",fn:function(){return[i("span",{staticClass:"font-weight-light black--text"},[e._v("Ocean Freight - Roll on roll off")])]},proxy:!0}]),model:{value:e.form.freight.shipmentType,callback:function(t){e.$set(e.form.freight,"shipmentType",t)},expression:"form.freight.shipmentType"}})],1)],1)],1)],1),i("v-card-actions",{staticClass:"pr-10"},[i("v-spacer"),i("v-btn",{staticClass:"px-10",attrs:{color:e.sent?"success":"primary",loading:e.isSending,rounded:""},on:{click:function(t){return e.send()}}},[e.sent?[i("v-icon",[e._v("done")]),e._v(" Sent ")]:[e._v(" Send ")]],2)],1)],1)}),n=[],o=(i("99af"),i("d3b7"),i("25f0"),i("96cf"),i("1da1")),l=i("bc3a"),c=i.n(l),u="http://vancouverglobalshipping.com/WebsiteFormEmailer",d={data:function(){return{sent:!1,isSending:!1,firstName:"",lastName:"",form:{fullName:"",companyName:"",email:"",phoneNumber:"",originCountry:"",addressOfOrigin:"",destinationCountry:"",addressOfDestination:"",serviceRequired:"",service:"Automobile Service Quote",freight:{freightDescription:"",make:"",model:"",year:"",approximateValue:"",shipmentType:[]}},services:[{name:"Port to Port"},{name:"Port to Door"},{name:"Door to Port"},{name:"Door to Door - all inc."}],rules:{required:function(e){return!!e||"Required"},oneOrMore:function(e){return e&&e.length>0},email:function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}}}},filters:{uppercase:function(e){return e?(e=e.toString(),e.toUpperCase()):""}},watch:{"form.make":function(e){this.form.make=this.$options.filters.uppercase(e)}},methods:{send:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=3;break}return console.log("Form invalid"),t.abrupt("return");case 3:return e.isSending=!0,t.prev=4,e.form.fullName="".concat(e.firstName," ").concat(e.lastName),t.next=8,c.a.post(u,e.form);case 8:i=t.sent,i.data.err?console.error(i.data.err):(e.sent=!0,e.$emit("submitted"),console.log(i)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),console.error(t.t0.toString());case 15:e.isSending=!1;case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))()}}},m=d,f=i("0c7c"),p=i("6544"),h=i.n(p),v=i("8336"),g=i("b0af"),x=i("99d9"),b=i("ac7c"),k=i("62ad"),C=i("ce7e"),w=i("4bd4"),O=i("132d"),y=i("0fd9"),I=i("b974"),N=i("2fa4"),R=i("8654"),S=i("a844"),E=Object(f["a"])(m,a,n,!1,null,null,null),T=E.exports;h()(E,{VBtn:v["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCheckbox:b["a"],VCol:k["a"],VDivider:C["a"],VForm:w["a"],VIcon:O["a"],VRow:y["a"],VSelect:I["a"],VSpacer:N["a"],VTextField:R["a"],VTextarea:S["a"]});var _={components:{Form:T},computed:{imageHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"600px";case"sm":return"600px";case"md":return"600px";case"lg":return"600px";case"xl":return"600px";default:return"600px"}}}},$=_,A=(i("0ae3"),i("adda")),D=Object(f["a"])($,r,s,!1,null,"b036905c",null);t["default"]=D.exports;h()(D,{VImg:A["a"]})},cdb1:function(e,t,i){}}]);
//# sourceMappingURL=chunk-767e012c.9e82fda9.js.map