(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{247:function(t,i,s){"use strict";var e=s(26),a=s(32),r=s(64),n=s(63),o=s(83),c=s(82),d=s(35),l={name:"ProductVariations",props:{product:{type:Object,required:!0},selectedId:String,maxOptionsBtns:{type:Number,default:100},gridsData:{type:Array,default(){if("object"==typeof window&&window.storefront&&window.storefront.data)return window.storefront.data.grids}}},data:()=>({selectedOptions:{},filteredGrids:{}}),computed:{i19select:()=>Object(a.a)(e.sd),i19selectVariation:()=>Object(a.a)(e.td),variationsGrids(){return Object(r.a)(this.product)},orderedGrids(){return Object.keys(this.variationsGrids)},variationsImgs(){const t=[];return this.product.variations.forEach((i=>{t.push({name:i.name.split("/").pop().trim(),imgChosen:!!i.picture_id&&this.product.pictures.find((t=>t._id===i.picture_id)).normal.url})})),t}},methods:{getColorOptionBg(t){const i=t.split(",").map((t=>Object(n.a)(this.product.variations,t.trim(),"colors")));return i.length>1?`background:linear-gradient(to right bottom, ${i[0]} 50%, ${i[1]} 50%)`:`background:${i[0]}`},getSpecValue(t,i){const{variations:s}=this.product;let e;if("colors"===i){const a=t.split(",");a.length>1&&(e=[],a.forEach((t=>{e.push(Object(n.a)(s,t.trim(),i))})))}return e||Object(n.a)(s,t,i)},getGridTitle(t){return Object(o.a)(t,this.gridsData)},selectOption(t,i,s){const{product:e,selectedOptions:a,orderedGrids:n}=this;this.$set(a,i,t),this.$emit("select-option",{gridId:i,gridIndex:s,optionText:t});const o={};for(let t=0;t<=s;t++){const i=n[t];a[i]&&(o[i]=a[i])}const l=Object(r.a)(e,o,!0);for(let t=s+1;t<n.length;t++){const i=n[t],s=l[i];this.filteredGrids[i]=s,a[i]&&!s.includes(a[i])&&this.$set(a,i,void 0)}const p=e.variations.slice(0);for(let t=0;t<p.length;t++){const i=p[t];if(Object(c.a)(i)){const{specifications:s}=i;for(const e in s)if(a[e]!==Object(d.a)(i,e)){p.splice(t,1),t--;break}}else p.splice(t,1),t--}this.$emit("update:selected-id",p.length?p[0]._id:null)}},watch:{"product.variations":{handler(){this.filteredGrids=Object(r.a)(this.product,null,!0)},deep:!0,immediate:!0}}};i.a=l},254:function(t,i,s){"use strict";s.d(i,"a",(function(){return e})),s.d(i,"b",(function(){return a}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.product.variations?s("div",{staticClass:"variations"},t._l(t.variationsGrids,(function(i,e,a){return t.filteredGrids[e]?s("div",{class:"variations__grid variations__grid--"+e},[s("div",{staticClass:"mb-2"},[s("span",{staticClass:"variations__grid-title h5"},[t._v(" "+t._s(t.getGridTitle(e))+" ")]),t.selectedOptions[e]?s("span",{key:"success",staticClass:"variations__value variations__value"},[s("i",{staticClass:"fas fa-check mr-1"}),t._v(" "+t._s(t.selectedOptions[e])+" ")]):s("span",{staticClass:"variations__value variations__value--empty"},[s("i",{staticClass:"fas fa-arrow-down mr-1"}),t._v(" "+t._s(t.i19selectVariation)+" ")])]),i.length?t._l(i,(function(i,r){return s("button",{staticClass:"variations__option btn btn-light",class:[t.selectedOptions[e]===i?"variations__option--selected":null,"variations__option--"+i],style:"colors"===e?t.getColorOptionBg(i):null,attrs:{disabled:!t.filteredGrids[e].includes(i)},on:{click:function(s){return t.selectOption(i,e,a)}}},["escolha_a_capa"===e?s("span",{staticClass:"arte-capa"},[s("img",{attrs:{src:t.variationsImgs[r].imgChosen,alt:i}}),s("span",{staticClass:"text-with-img"},[t._v(" "+t._s(i)+" ")])]):s("span",[t._v(" "+t._s(i)+" ")])])})):t._e()],2):t._e()})),0):t._e()},a=[]}},0,[32,33]]);