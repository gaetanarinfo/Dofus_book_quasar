(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{cb54:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-dialog",{attrs:{persistent:""},model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[a("q-card",{staticStyle:{background:"#535658bf !important",color:"white",width:"700px","max-width":"80vw"}},[a("q-toolbar",[a("q-avatar",[a("img",{attrs:{src:"https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"}})]),a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[e._v("Crée un article")])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(t){return e.$emit("closeModalCreateNews")}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"center middle"}},[e._v("\n             Fermer\n              ")])],1)],1),a("q-card-section",[a("q-form",{staticStyle:{"margin-top":"0px !important","background-color":"#acb5aec7"},on:{submit:e.send,reset:e.onReset}},[a("q-input",{staticStyle:{padding:"16px 0 16px 0"},attrs:{filled:"",req:"",label:"Titre de l'article *",hint:"Titre de l'article","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci d'enter un titre"}]},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),a("q-file",{staticStyle:{margin:"16px 0 16px 0"},attrs:{type:"file",label:"Image de l'article",hint:"Image de l'article",filled:"",counter:"","counter-label":e.counterLabelImage,"max-files":"1",multiple:"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci de choisir une image"}]},on:{change:e.uploadFile},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"image"}})]},proxy:!0}]),model:{value:e.form.files,callback:function(t){e.$set(e.form,"files",t)},expression:"form.files"}}),a("q-input",{staticStyle:{margin:"16px 0 0 0"},attrs:{filled:"",label:"Description de l'article *",hint:"Description de l'article",type:"textarea","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci d'enter une description"}]},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),a("q-input",{staticStyle:{margin:"16px 0 16px 0"},attrs:{filled:"",label:"Url de l'article *",hint:"Url de l'article","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci d'enter un url"}]},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}}),a("q-select",{attrs:{filled:"",options:e.form.optionsCat,label:"Catégorie",hint:"Catégorie",color:"orange",clearable:"","options-selected-class":"grey-9","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci de choisir une catégorie"}]},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({staticStyle:{background:"#ffffffcc !important"}},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:e._s(t.opt.label)}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.opt.icon}})],1)],1)]}}]),model:{value:e.form.cat,callback:function(t){e.$set(e.form,"cat",t)},expression:"form.cat"}}),a("q-select",{staticStyle:{margin:"16px 0 0 0"},attrs:{filled:"",options:e.form.optionsCategorie,label:"Image Catégorie",hint:"Image Catégorie",color:"orange",clearable:"","options-selected-class":"grey-9","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Merci de choisir une image de catégorie"}]},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({staticStyle:{background:"#ffffffcc !important"}},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:e._s(t.opt.label)}}),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.description))])],1),a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.opt.icon}})],1)],1)]}}]),model:{value:e.form.categorie,callback:function(t){e.$set(e.form,"categorie",t)},expression:"form.categorie"}}),a("div",{staticStyle:{padding:"16px 0 0 0"}},[a("q-btn",{attrs:{color:"green-8",type:"submit",glossy:"",label:"Valider"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Effacer",type:"reset",color:"yellow-10",glossy:""}})],1)],1)],1)],1)],1)],1)},i=[],s=a("ded3"),n=a.n(s),l=a("2f62"),r=(a("bc3a"),a("3022"),{data(){return{form:{title:"",content:"",url:"",cat:"",files:null,optionsCat:[{label:"Event",value:"Event",icon:"api"},{label:"Shop",value:"Shop",icon:"api"},{label:"Info",value:"Info",icon:"api"},{label:"Communauté",value:"Communauté",icon:"api"}],category:null,optionsCategorie:[{label:"Event",value:"https://gaetan.store/images/dofus/news/cat/419540.png",description:"Event",icon:"api"},{label:"Shop",value:"https://gaetan.store/images/dofus/news/cat/419540.png",description:"Shop",icon:"api"},{label:"Info",value:"https://gaetan.store/images/dofus/news/cat/419540.png",description:"Info",icon:"api"},{label:"Communauté",value:"https://gaetan.store/images/dofus/news/cat/420041.png",description:"Communauté",icon:"api"}]}}},components:{},methods:n()({counterLabelImage({totalSize:e,filesNumber:t,maxFiles:a}){return`${t} fichier sur ${a} | ${e}`},uploadFile(e){this.files=e.target.files},send(){this.postNews(this.form)},onReset(){this.files=null,this.title="",this.content="",this.url="",this.cat="",this.category=""}},Object(l["b"])("news",["postNews"])),props:{modal2:{default:!1}}}),c=r,m=a("2877"),u=a("24e8"),d=a("f09f"),p=a("65c6"),b=a("cb32"),f=a("6ac5"),g=a("9c40"),h=a("05c0"),q=a("a370"),v=a("0378"),w=a("27f9"),_=a("7d53"),C=a("0016"),y=a("ddd8"),k=a("66e5"),x=a("4074"),D=a("0170"),Q=a("7f67"),j=a("eebe"),O=a.n(j),S=Object(m["a"])(c,o,i,!1,null,null,null);t["a"]=S.exports;O()(S,"components",{QDialog:u["a"],QCard:d["a"],QToolbar:p["a"],QAvatar:b["a"],QToolbarTitle:f["a"],QBtn:g["a"],QTooltip:h["a"],QCardSection:q["a"],QForm:v["a"],QInput:w["a"],QFile:_["a"],QIcon:C["a"],QSelect:y["a"],QItem:k["a"],QItemSection:x["a"],QItemLabel:D["a"]}),O()(S,"directives",{ClosePopup:Q["a"]})},d80a:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"glossy",staticStyle:{"background-color":"#C64F10"}},[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"home","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",{staticStyle:{"font-family":"'bebas'","font-size":"23px",color:"#d8ffe9","font-weight":"600","letter-spacing":"4px",padding:"7px 0px 0px 7px"}},[e._v("\n        Dofus Book\n      ")]),a("q-btn",{staticClass:"q-ml-md",attrs:{dense:"",color:"green-9",round:"",icon:"email",to:"/profil_mailbox"}},[a("q-badge",{attrs:{color:"deep-purple-9",floating:""}},[e._v(e._s(e.listNotif))]),a("q-tooltip",{attrs:{anchor:"bottom middle",self:"center middle"}},[e._v("\n              Boîte de réception\n              ")])],1),a("q-btn",{staticClass:"q-ml-md",attrs:{dense:"",color:"blue-9",round:"",icon:"circle_notifications"}},[a("q-badge",{attrs:{color:"brown-10",floating:""}},[e._v("0")]),a("q-tooltip",{attrs:{anchor:"bottom middle",self:"center middle"}},[e._v("\n             Notification(s)\n              ")])],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",width:250,breakpoint:400,"content-class":"text-white","content-style":"background: rgb(62 59 58 / 39%) !important;",elevated:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home",color:"blue"}})],1),a("q-item-section",{attrs:{avatar:""}},[e._v("\n              Accueil\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/profil_mailbox"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"inbox",color:"brown"}})],1),a("q-item-section",[e._v("\n              Boite de réception\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/send_mail"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"send",color:"green"}})],1),a("q-item-section",[e._v("\n              Envoyer un message\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/profil"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"edit",color:"blue"}})],1),a("q-item-section",[e._v("\n              Modifier mon profil\n            ")])],1),!0===e.adminIn?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.showModalCreateNews()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"add",color:"green-8"}})],1),a("q-item-section",[e._v("\n              Crée un article\n            ")])],1):e._e(),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.showModalDelete(""+e.userData.userId)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"close",color:"red"}})],1),a("q-item-section",[e._v("\n              Supprimer mon compte\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.logout()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"logout",color:"red"}})],1),a("q-item-section",[e._v("\n              Déconnexion\n            ")])],1)],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://image.noelshack.com/fichiers/2018/32/2/1533634229-wiki-background.jpg"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:e.userData.avatar}})]),a("div",{staticClass:"text-weight-bold"},[e._v(e._s(e.userData.lastname)+" "+e._s(e.userData.firstname))]),a("div",[e._v(" "+e._s(e.userData.email)+" ")])],1)])],1),a("q-page-container",[a("router-view")],1),!0===e.adminIn||e.modalCreateNews?a("modalCreateNews",{attrs:{modal2:e.modalCreateNews},on:{"update:modal2":function(t){e.modalCreateNews=t},closeModalCreateNews:function(t){return e.closeModal2()}}}):e._e(),e.modalDeleteAccount?a("modalDeleteAccount",{attrs:{modal:e.modalDeleteAccount,data:e.user},on:{"update:modal":function(t){e.modalDeleteAccount=t},closeModalDeleteAccount:function(t){return e.closeModal()}}}):e._e()],1)},i=[],s=a("e4fd"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-dialog",{attrs:{persistent:""},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("q-card",{staticStyle:{background:"rgb(31 31 31 / 78%) !important",color:"white"}},[a("q-toolbar",[a("q-avatar",[a("img",{attrs:{src:"https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"}})]),a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[e._v(" Suppresion du compte")])]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(t){return e.$emit("closeModalDeleteAccount")}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"center middle"}},[e._v("\n             Fermer\n              ")])],1)],1),a("q-card-section",[e._v("\n        Confirme que tu veux bien supprimer ton compte de Dofus Book !\n      ")]),a("div",{staticClass:"q-card__actions q-card__actions--horiz row justify-end"},[a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle text-red-5 q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--active",attrs:{clickable:""},on:{click:function(t){return e.submitDeleteAccount(e.data)}}},[a("span",{staticClass:"q-focus-helper"}),a("span",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("span",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("span",{staticClass:"block"},[e._v("Confirme la suppression ?")])])])])])],1)],1)],1)},l=[],r=a("ded3"),c=a.n(r),m=a("2f62"),u={components:{},methods:c()({submitDeleteAccount(e){this.removeAccount(e),this.$emit("closeModalDeleteAccount")}},Object(m["b"])("auth",["removeAccount"])),props:{modal:{default:!1},data:{type:String},delete:{type:Boolean}}},d=u,p=a("2877"),b=a("24e8"),f=a("f09f"),g=a("65c6"),h=a("cb32"),q=a("6ac5"),v=a("9c40"),w=a("05c0"),_=a("a370"),C=a("7f67"),y=a("eebe"),k=a.n(y),x=Object(p["a"])(d,n,l,!1,null,null,null),D=x.exports;k()(x,"components",{QDialog:b["a"],QCard:f["a"],QToolbar:g["a"],QAvatar:h["a"],QToolbarTitle:q["a"],QBtn:v["a"],QTooltip:w["a"],QCardSection:_["a"]}),k()(x,"directives",{ClosePopup:C["a"]});var Q=a("cb54"),j=Object(s["defineComponent"])({name:"ProfilLayout",data(){return{modalDeleteAccount:!1,modalCreateNews:!1,user:null,userData:{userId:"",pseudo:"",lastname:"",firstname:"",email:"",avatar:""}}},methods:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({mountedData(){this.userData.pseudo=this.listUser.pseudo,this.userData.lastname=this.listUser.lastname,this.userData.firstname=this.listUser.firstname,this.userData.email=this.listUser.email,this.userData.avatar=this.listUser.avatar,this.userData.userId=this.listUser._id},checkNotif(){this.getMailNotif(),setTimeout(this.checkNotif,2500)},showModalDelete(e){this.user=e,this.modalDeleteAccount=!0},closeModal(){this.modalDeleteAccount=!1},showModalCreateNews(){this.modalCreateNews=!0},closeModal2(){this.modalCreateNews=!1},logout(){this.logoutUser(this.listUser.pseudo)}},Object(m["b"])("auth",["getProfil"])),Object(m["b"])("auth",["loggedDataUser"])),Object(m["b"])("auth",["logoutUser"])),Object(m["b"])("auth",["getMailNotif"])),{checkAuth(){this.handleAuthStateChange(),setTimeout(this.checkAuth,2500)}}),Object(m["b"])("auth",["handleAuthStateChange"])),Object(m["c"])("auth",["setLoggedIn"])),Object(m["c"])("auth",["setAdminIn"])),computed:Object.assign(Object.assign(Object.assign(Object.assign({},Object(m["d"])("auth",["loggedIn"])),Object(m["d"])("auth",["listNotif"])),Object(m["d"])("auth",["adminIn"])),Object(m["d"])("auth",["listUser"])),setup(){const e=Object(s["ref"])(!0);return{leftDrawerOpen:e}},mounted(){this.checkNotif(),this.checkAuth(),this.mountedData()},components:{modalDeleteAccount:D,modalCreateNews:Q["a"]}}),O=j,S=a("4d5a"),N=a("e359"),I=a("58a81"),A=a("9404"),M=a("4983"),T=a("1c1c"),$=a("66e5"),U=a("4074"),E=a("0016"),z=a("eb85"),L=a("068f"),B=a("09e3"),F=a("714f"),P=Object(p["a"])(O,o,i,!1,null,null,null);t["default"]=P.exports;k()(P,"components",{QLayout:S["a"],QHeader:N["a"],QToolbar:g["a"],QBtn:v["a"],QToolbarTitle:q["a"],QBadge:I["a"],QTooltip:w["a"],QDrawer:A["a"],QScrollArea:M["a"],QList:T["a"],QItem:$["a"],QItemSection:U["a"],QIcon:E["a"],QSeparator:z["a"],QImg:L["a"],QAvatar:h["a"],QPageContainer:B["a"]}),k()(P,"directives",{Ripple:F["a"]})}}]);