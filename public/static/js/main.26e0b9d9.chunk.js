(this.webpackJsonpmyshop=this.webpackJsonpmyshop||[]).push([[0],{181:function(e,t,c){},301:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(12),s=c.n(i),r=(c(181),c(8)),o=c(53),l=c(37),j=c(56),d=c(84),b=c(82),h=c(351),u=c(360),O=c(361),x=c(36),p=c.n(x),m=c(164),g=c(154),f=c.n(g);p.a.defaults.baseURL="http://localhost:4000/api/",p.a.defaults.headers.common["x-auth-token"]=localStorage.getItem("token");var v=function e(){Object(j.a)(this,e),this.get=function(e){return new Promise((function(t,c){p.a.get(e).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))},this.put=function(e,t){return new Promise((function(c,n){p.a.put(e,t).then((function(e){c(e.data)})).catch((function(e){n(e)}))}))},this.post=function(e,t){return new Promise((function(c,n){p.a.post(e,t).then((function(e){c(e.data)})).catch((function(e){n(e)}))}))},this.delete=function(e){return new Promise((function(t,c){p.a.delete(e).then((function(e){t(e.data)})).catch((function(e){c(e)}))}))}},y=new(function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).addProduct=function(t){return e.post("products",t)},e.deleteProduct=function(t){return e.delete("products/"+t)},e.updateProduct=function(t,c){return e.put("products/"+t,c)},e.getProducts=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e.get("products?page="+t)},e}return c}(v)),N=c(358),w=c(374),C=c(378),k=c(357),_=c(355),S=c(356),I=c(354),F=c(153),P=c.n(F),L=c(1),T=Object(h.a)((function(e){return{icon:{position:"relative",bottom:e.spacing(1),marginLeft:"3px",cursor:"pointer"},inline:{display:"inline"}}}));function z(e){var t=e.product,c=e.onDelete,n=a.a.useState(!1),i=Object(r.a)(n,2),s=i[0],o=i[1],l=T(),j=a.a.useState(t.name),d=Object(r.a)(j,2),b=d[0],h=d[1],u=a.a.useState(),O=Object(r.a)(u,2),x=O[0],p=O[1],m=a.a.useState(t.price),g=Object(r.a)(m,2),f=g[0],v=g[1],F=function(){o(!1)};return Object(L.jsxs)("div",{className:l.inline,children:[Object(L.jsx)(P.a,{className:l.icon,fontSize:"large",htmlColor:"#FFC300",onClick:function(){o(!0)}}),Object(L.jsxs)(C.a,{open:s,onClose:F,"aria-labelledby":"form-dialog-title",children:[Object(L.jsx)(I.a,{id:"form-dialog-title",children:"Update Product"}),Object(L.jsxs)(_.a,{children:[Object(L.jsx)(S.a,{color:"primary",children:x}),Object(L.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,value:b,onChange:function(e){h(e.target.value)}}),Object(L.jsx)(w.a,{margin:"dense",id:"price",label:"price",value:f,type:"text",fullWidth:!0,onChange:function(e){v(e.target.value)}})]}),Object(L.jsxs)(k.a,{children:[Object(L.jsx)(N.a,{onClick:F,color:"primary",children:"Cancel"}),Object(L.jsx)(N.a,{onClick:function(){y.updateProduct(t._id,{name:b,price:f}).then((function(e){console.log(e),p("Product Updated"),c(),o(!1)})).catch((function(e){p("Product not Updated"),console.log(e)}))},color:"primary",children:"Update"})]})]})]})}var E=c.p+"static/media/pizza.80b3d1db.png",A=c(359),D=Object(h.a)((function(e){return{icon:{position:"relative",bottom:e.spacing(1),marginLeft:"3px",cursor:"pointer"},left:{direction:"rtl"},inline:{display:"inline"}}})),W=function(e){var t=e.product,c=e.onDelete,n=Object(A.a)(["cart"]),i=Object(r.a)(n,2),s=i[0],o=i[1],l=D();a.a.useEffect((function(){s.cart||o("cart",JSON.stringify([]))}));return Object(L.jsxs)(u.a,{item:!0,xs:3,children:[Object(L.jsx)("div",{className:"cards",children:Object(L.jsx)("div",{className:"container page-wrapper",children:Object(L.jsx)("div",{className:"page-inner",children:Object(L.jsx)("div",{className:"row",children:Object(L.jsxs)("div",{className:"el-wrapper deco",children:[Object(L.jsxs)("div",{className:"box-up",children:[Object(L.jsx)("img",{className:"img",src:E,alt:"abc"}),Object(L.jsxs)("div",{className:"img-info",children:[Object(L.jsxs)("div",{className:"info-inner",children:[Object(L.jsx)("span",{className:"p-name",children:t.name}),Object(L.jsx)("span",{className:"p-company",children:"Yeezy"})]}),Object(L.jsxs)("div",{className:"a-size",children:["Available sizes : ",Object(L.jsx)("span",{class:"size",children:"S , M , L , XL"})]})]})]}),Object(L.jsxs)("div",{className:"box-down",children:[Object(L.jsx)("div",{className:"h-bg",children:Object(L.jsx)("div",{class:"h-bg-inner"})}),Object(L.jsxs)("a",{className:"cart",style:{cursor:"pointer"},onClick:function(e){!function(e){console.log(e);var t=Object(m.a)(s.cart);t.push(e),o("cart",JSON.stringify(t))}(t)},children:[Object(L.jsxs)("span",{className:"price",children:["$",t.price]}),Object(L.jsx)("span",{className:"add-to-cart",children:Object(L.jsx)("span",{className:"txt",children:"Add to cart"})})]})]})]})})})})}),J.isAdmin()&&Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:l.left,children:[Object(L.jsx)(f.a,{className:l.icon,fontSize:"large",htmlColor:"#DD0300",onClick:function(e){y.deleteProduct(t._id).then((function(e){console.log(e),c()})).catch((function(e){console.log(e)}))}}),Object(L.jsx)(z,{product:t,onDelete:c})]})}),Object(L.jsx)("hr",{})]})},R=c(155),U=c.n(R),B=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)},addBtn:{position:"relative",marginTop:"5px",float:"right"}}})),M=function(e){var t=a.a.useState([]),c=Object(r.a)(t,2),n=c[0],i=c[1],s=B(),o=function(){y.getProducts().then((function(e){i(e.products)})).catch((function(e){console.log(e)}))};a.a.useEffect(o,[]);return Object(L.jsxs)("div",{children:[0==n.length?Object(L.jsx)("p",{children:" there are no products"}):Object(L.jsx)(u.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(L.jsx)(W,{product:e,onDelete:o},t)}))}),J.isLoggedIn()&&Object(L.jsxs)(O.a,{color:"primary","aria-label":"add",variant:"extended",className:s.addBtn,onClick:function(){console.log(e),e.history.push("/products/new")},children:[Object(L.jsx)(U.a,{className:s.extendedIcon})," Add Product"]})]})},H=c(156),J=new(function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).login=function(t,c){return new Promise((function(n,a){e.post("users/login",{email:t,password:c}).then((function(e){localStorage.setItem("token",e),n(e)})).catch((function(e){a(e)}))}))},e.register=function(t,c,n){return new Promise((function(a,i){e.post("users/register",{name:t,email:c,password:n}).then((function(e){a(e)})).catch((function(e){i(e)}))}))},e.logout=function(){localStorage.removeItem("token")},e.isLoggedIn=function(){return!!localStorage.getItem("token")},e.getLoggedInUser=function(){try{var e=localStorage.getItem("token");return Object(H.a)(e)}catch(t){return null}},e.isAdmin=function(){return!!e.isLoggedIn()&&"admin"==e.getLoggedInUser().role},e}return c}(v)),G=c(158),Y=c.n(G),X=c(364),$=c(365),q=c(362),K=c(167),Q=c(363),V=c(379),Z=c(163),ee=c(157),te=c.n(ee),ce=c(108),ne=c.n(ce),ae=c(106),ie=c.n(ae),se=c(107),re=c.n(se),oe=c(159),le=c.n(oe),je=Object(h.a)((function(e){return Object(o.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),Link:{color:"rgb(87, 85, 85)",textDecoration:"none",marginRight:e.spacing(2),"&:hover":{TransitionEvent:"all 0.3s ease-in-out",borderBottom:"0.5px solid #FE5F1E",color:"#b23301"}},menuitem:{display:"block"},back:{backgroundColor:"none"}},"title",{flexGrow:1})}));function de(){var e=je(),t=a.a.useState(null),c=Object(r.a)(t,2),n=c[0],i=c[1],s=a.a.useState(0),o=Object(r.a)(s,2),j=o[0],d=o[1],b=Object(A.a)(["cart"]),h=Object(r.a)(b,2),u=h[0];h[1];a.a.useEffect((function(){u.cart&&d(u.cart.length)}),[u]);var O=a.a.useState(null),x=Object(r.a)(O,2),p=x[0],m=x[1],g=Boolean(n),f=Boolean(p),v=function(e){i(e.currentTarget)},y=function(){m(null)},N=function(){i(null),y()},w="primary-search-account-menu",C=Object(L.jsx)(Z.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:w,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:N,children:J.isLoggedIn()?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(V.a,{onClick:N,children:J.getLoggedInUser().name}),Object(L.jsx)(V.a,{onClick:N,children:J.getLoggedInUser().role}),Object(L.jsx)(V.a,{variant:"contained",color:"primary",onClick:function(e){J.logout(),window.location.href="/"},children:"LogOut"})]}):w=""}),k="primary-search-account-menu-mobile",_=Object(L.jsxs)(Z.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:y,children:[Object(L.jsxs)(V.a,{children:[Object(L.jsx)(q.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(L.jsx)(Q.a,{badgeContent:4,color:"secondary",children:Object(L.jsx)(ie.a,{})})}),Object(L.jsx)("p",{children:"Messages"})]}),Object(L.jsxs)(V.a,{children:[Object(L.jsx)(q.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(L.jsx)(Q.a,{badgeContent:11,color:"secondary",children:Object(L.jsx)(re.a,{})})}),Object(L.jsx)("p",{children:"Notifications"})]}),Object(L.jsxs)(V.a,{onClick:v,children:[Object(L.jsx)(q.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(L.jsx)(ne.a,{})}),Object(L.jsx)("p",{children:"Profile"})]})]});return Object(L.jsxs)("div",{className:e.grow,children:[Object(L.jsx)(X.a,{position:"static",color:"transparent",elevation:0,style:{borderRadius:"5px"},children:Object(L.jsxs)($.a,{children:[Object(L.jsx)(q.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(L.jsx)(te.a,{})}),Object(L.jsx)(K.a,{className:(e.title,"font"),noWrap:!0,children:Object(L.jsx)("span",{style:{fontWeight:"bolder"},children:" Pizzeria"})}),Object(L.jsx)("div",{className:e.grow}),Object(L.jsx)("div",{className:e.sectionDesktop,children:Object(L.jsxs)(K.a,{className:"font",children:[Object(L.jsx)(l.b,{to:"/",className:e.Link,children:"Home"}),Object(L.jsx)(l.b,{to:"/products",className:e.Link,children:"Products"}),Object(L.jsx)(l.b,{to:"/ContactUs",className:e.Link,children:"ContactsUs"}),J.isLoggedIn()?"":Object(L.jsxs)("span",{children:[Object(L.jsx)(l.b,{to:"/login",className:e.Link,children:"Login"}),Object(L.jsx)(l.b,{to:"/register",className:e.Link,children:"Register"})]}),Object(L.jsxs)(l.b,{className:"btn-nav",to:"/cart",children:[" ",Object(L.jsx)(q.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(L.jsx)(Q.a,{badgeContent:j,color:"secondary",children:Object(L.jsx)(Y.a,{})})})]}),Object(L.jsx)(q.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(L.jsx)(Q.a,{badgeContent:4,color:"secondary",children:Object(L.jsx)(ie.a,{})})}),Object(L.jsx)(q.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(L.jsx)(Q.a,{badgeContent:17,color:"secondary",children:Object(L.jsx)(re.a,{})})}),J.isLoggedIn()?Object(L.jsx)(q.a,{edge:"end","aria-label":"account of current user","aria-controls":w,"aria-haspopup":"true",onClick:v,color:"inherit",children:Object(L.jsx)(ne.a,{})}):""]})}),Object(L.jsx)("div",{className:e.sectionMobile,children:Object(L.jsx)(q.a,{"aria-label":"show more","aria-controls":k,"aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",children:Object(L.jsx)(le.a,{})})})]})}),_,C]})}var be=c(14),he=function(){return console.log("abc"),Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"ContactUs"})})},ue=c(305),Oe=c(29),xe=c(160),pe=c.n(xe),me=(c(220),c(221),c.p+"static/media/banner1.a7730f54.jpg"),ge=c.p+"static/media/banner2.bc96a514.jpg",fe=c.p+"static/media/banner3.b6135c53.jpg",ve=c.p+"static/media/banner4.5931e3b3.jpg";c(222),c(230);function ye(){return Object(L.jsx)("div",{style:{margin:"2%"},children:Object(L.jsxs)(pe.a,Object(Oe.a)(Object(Oe.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0}),{},{children:[Object(L.jsx)("div",{className:"ban-center",children:Object(L.jsx)("img",{className:"banner",src:me,alt:""})}),Object(L.jsx)("div",{className:"ban-center",children:Object(L.jsx)("img",{className:"banner",src:ge,alt:""})}),Object(L.jsx)("div",{className:"ban-center",children:Object(L.jsx)("img",{className:"banner",src:fe,alt:""})}),Object(L.jsx)("div",{className:"ban-center",children:Object(L.jsx)("img",{className:"banner",src:ve,alt:""})})]}))})}var Ne=c.p+"static/media/payment.2a934cb5.png",we=c.p+"static/media/service2.e18d5be9.png",Ce=c.p+"static/media/service3.4ed958cd.png",ke=Object(h.a)((function(e){return{root:{backgroundColor:"white"}}}));function _e(){var e=ke();return Object(L.jsxs)("div",{className:e.root,children:[Object(L.jsx)("h1",{style:{color:"white"},children:"Services"}),Object(L.jsxs)("ul",{class:"cards",children:[Object(L.jsx)("li",{children:Object(L.jsxs)("a",{href:"",class:"card",children:[Object(L.jsx)("img",{src:Ne,class:"card__image",alt:""}),Object(L.jsxs)("div",{class:"card__overlay",children:[Object(L.jsxs)("div",{class:"card__header",children:[Object(L.jsx)("svg",{class:"card__arc",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{})}),Object(L.jsxs)("div",{class:"card__header-text",children:[Object(L.jsx)("h3",{class:"card__title",children:"Online Payment"}),Object(L.jsx)("span",{class:"card__status"})]})]}),Object(L.jsx)("p",{class:"card__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"})]})]})}),Object(L.jsx)("li",{children:Object(L.jsxs)("a",{href:"",class:"card",children:[Object(L.jsx)("img",{src:we,class:"card__image",alt:""}),Object(L.jsxs)("div",{class:"card__overlay",children:[Object(L.jsxs)("div",{class:"card__header",children:[Object(L.jsx)("svg",{class:"card__arc",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{})}),Object(L.jsxs)("div",{class:"card__header-text",children:[Object(L.jsx)("h3",{class:"card__title",children:"Delievery On Time"}),Object(L.jsx)("span",{class:"card__status"})]})]}),Object(L.jsx)("p",{class:"card__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"})]})]})}),Object(L.jsx)("li",{children:Object(L.jsxs)("a",{href:"",class:"card",children:[Object(L.jsx)("img",{src:Ce,class:"card__image",alt:""}),Object(L.jsxs)("div",{class:"card__overlay",children:[Object(L.jsxs)("div",{class:"card__header",children:[Object(L.jsx)("svg",{class:"card__arc",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{})}),Object(L.jsxs)("div",{class:"card__header-text",children:[Object(L.jsx)("h3",{class:"card__title",children:"Free Home Delivery"}),Object(L.jsx)("span",{class:"card__status"})]})]}),Object(L.jsx)("p",{class:"card__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"})]})]})})]})]})}var Se=c(165),Ie=c(161),Fe=c.n(Ie),Pe=c(27),Le=c(376),Te=c(366),ze=c(375),Ee=["children","value","index"];function Ae(e){var t=e.children,c=e.value,n=e.index,a=Object(Se.a)(e,Ee);return Object(L.jsx)("div",Object(Oe.a)(Object(Oe.a)({role:"tabpanel",hidden:c!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},a),{},{children:c===n&&Object(L.jsx)(ze.a,{p:3,children:Object(L.jsx)(K.a,{children:t})})}))}function De(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var We=Object(h.a)((function(e){return{root:{backgroundColor:"none"}}}));function Re(){var e=We(),t=Object(Pe.a)(),c=a.a.useState(0),n=Object(r.a)(c,2),i=n[0],s=n[1];return Object(L.jsxs)("div",{className:e.root,children:[Object(L.jsx)(X.a,{position:"static",color:"transparent",elevation:0,children:Object(L.jsxs)(Le.a,{value:i,onChange:function(e,t){s(t)},style:{textColor:"#FE5F1E",color:"grey"},"aria-label":"full width tabs example",centered:!0,children:[Object(L.jsx)(Te.a,Object(Oe.a)({label:"Drinks"},De(0))),Object(L.jsx)(Te.a,Object(Oe.a)({label:"Dessert"},De(1))),Object(L.jsx)(Te.a,Object(Oe.a)({label:"Pizza"},De(2))),Object(L.jsx)(Te.a,Object(Oe.a)({label:"Others"},De(3)))]})}),Object(L.jsxs)(Fe.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){s(e)},children:[Object(L.jsx)(Ae,{value:i,index:0,dir:t.direction,children:Object(L.jsx)(M,{})}),Object(L.jsx)(Ae,{value:i,index:1,dir:t.direction,children:Object(L.jsx)(M,{})}),Object(L.jsx)(M,{}),Object(L.jsx)(Ae,{value:i,index:2,dir:t.direction,children:Object(L.jsx)(M,{})}),Object(L.jsx)(Ae,{value:i,index:3,dir:t.direction,children:Object(L.jsx)(M,{})})]})]})}var Ue=c(162),Be=c.n(Ue),Me=c.p+"static/media/back.aef8634d.png",He=Object(h.a)((function(e){return{main:{backgroundColor:"white",height:"90vh",width:"100%",display:"flex",flexDirection:"row",marginTop:"5px",justifyContent:"center"},left:{width:"50%",display:"inline-bliock",alignItems:"center",margin:" 10% auto",justifyContent:"center",paddingLeft:"4%",paddingRight:"4%"},right:{width:"50%",display:"inline-block",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"40px",borderBottomLeftRadius:"40px"},imgsize:{width:"100%",height:"auto",padding:"10px"},btn:{border:" 1px solid grey",color:"grey","&:hover":{backgroundColor:"white",border:" 1px solid #FE5F1E",color:"#FE5F1E"}}}})),Je=function(){var e=He();return Object(L.jsxs)("div",{className:e.main,children:[Object(L.jsxs)("div",{className:e.left,children:[Object(L.jsxs)("div",{style:{height:"40%"},children:[Object(L.jsx)("span",{style:{color:"white"},children:"l"}),Object(L.jsx)(Be.a,{options:{loop:!0,cursor:""},onInit:function(e){e.typeString("<h3>The True Face Of <span style={{color:'#FE5F1E'}}>Junk Food</span></h3>").start().pauseFor(500).deleteAll().typeString("<h3>Be The Fastest In Delivering Your Food</h3>").start().pauseFor(500).deleteAll().typeString("<h3>Order Healthy And Fresh Food Any Time</h3>").start().pauseFor(500).deleteAll()}})]}),Object(L.jsx)("br",{}),Object(L.jsx)("a",{href:"#menu",children:Object(L.jsx)("div",{children:Object(L.jsx)(N.a,{className:e.btn,children:"Order Now"})})})]}),Object(L.jsx)("div",{className:e.right,children:Object(L.jsx)("img",{className:e.imgsize,src:Me,alt:""})})]})},Ge=Object(ue.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"url(".concat("/images/background.png",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},hero:{width:"100%"},container:{display:"flex",justifyContent:"between",alignItems:"center"},h:{height:"2000px"},max:{maxWidth:"70%",maxHeight:"300px",margin:"auto"},center:{width:"100%",margin:"opx auto",textAlign:"center",color:"grey",marginBottom:"10px"}}}));function Ye(){var e=Ge();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:e.hero,children:Object(L.jsx)("div",{className:e.container,children:Object(L.jsx)(Je,{})})}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{className:e.center,children:"Services"}),Object(L.jsx)("div",{children:Object(L.jsx)(_e,{})}),Object(L.jsx)("h1",{className:e.center,children:"New Offers"}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:e.max,children:Object(L.jsx)(ye,{})}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:e.center,children:Object(L.jsx)("h1",{id:"menu",children:"Menu"})}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:e.h,children:Object(L.jsx)(Re,{})})]})]})}var Xe=function(){return Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"PageNotFound"})})},$e=function(e){var t=a.a.useState(""),c=Object(r.a)(t,2),n=c[0],i=c[1],s=a.a.useState(),o=Object(r.a)(s,2),l=o[0],j=o[1];return console.log(e),Object(L.jsxs)(u.a,{container:!0,spacing:3,children:[Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsx)("h1",{children:"Add New Product"})}),Object(L.jsx)(u.a,{item:!0,xs:3}),Object(L.jsxs)(u.a,{item:!0,xs:6,children:[Object(L.jsx)(w.a,{label:"Name",fullWidth:!0,value:n,onChange:function(e){i(e.target.value)}}),Object(L.jsx)(w.a,{label:"Price",fullWidth:!0,value:l,onChange:function(e){j(e.target.value)}})]}),Object(L.jsx)(u.a,{item:!0,xs:3}),Object(L.jsx)(u.a,{item:!0,xs:3}),Object(L.jsx)(u.a,{item:!0,xs:9,children:Object(L.jsx)(N.a,{variant:"outlined",color:"primary",onClick:function(t){y.addProduct({name:n,price:l}).then((function(t){e.history.push("/products")})).catch((function(e){console.log(e)}))},children:"Add Product"})})]})},qe=(c(300),c(47)),Ke=Object(h.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"center",height:"300px"},child:{width:"400px"},margin:{marginTop:"15px"}}})),Qe=function(){var e=a.a.useState("user1@gmail.com"),t=Object(r.a)(e,2),c=t[0],n=t[1],i=a.a.useState("12345"),s=Object(r.a)(i,2),o=s[0],l=s[1],j=Ke();return Object(L.jsx)("div",{className:j.container,children:Object(L.jsxs)("div",{className:j.child,children:[Object(L.jsx)(w.a,{label:"email",fullWidth:!0,value:c,onChange:function(e){n(e.target.value)}})," ",Object(L.jsx)("br",{}),Object(L.jsx)(w.a,{label:"password",type:"password",fullWidth:!0,value:o,onChange:function(e){l(e.target.value)}})," ",Object(L.jsx)("br",{}),Object(L.jsx)(N.a,{variant:"contained",className:j.margin,color:"primary",onClick:function(e){J.login(c,o).then((function(e){console.log(e),window.location.href="/"})).catch((function(e){console.log(e),qe.b.error(e.response.data,{position:qe.b.POSITION.TOP_RIGHT})}))},children:"Login"})]})})},Ve=Object(h.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"center",height:"300px"},child:{width:"400px"},margin:{marginTop:"15px"}}})),Ze=function(e){var t=a.a.useState(""),c=Object(r.a)(t,2),n=c[0],i=c[1],s=a.a.useState(""),o=Object(r.a)(s,2),l=o[0],j=o[1],d=a.a.useState(""),b=Object(r.a)(d,2),h=b[0],u=b[1],O=Ve();return Object(L.jsx)("div",{className:O.container,children:Object(L.jsxs)("div",{className:O.child,children:[Object(L.jsx)(w.a,{label:"Name",fullWidth:!0,value:n,onChange:function(e){i(e.target.value)}})," ",Object(L.jsx)("br",{}),Object(L.jsx)(w.a,{label:"Email",fullWidth:!0,value:l,onChange:function(e){j(e.target.value)}})," ",Object(L.jsx)("br",{}),Object(L.jsx)(w.a,{label:"Password",type:"password",value:h,fullWidth:!0,onChange:function(e){u(e.target.value)}})," ",Object(L.jsx)("br",{}),Object(L.jsx)(N.a,{variant:"contained",color:"primary",className:O.margin,onClick:function(t){J.register(n,l,h).then((function(t){console.log(t),e.history.push("/login")})).catch((function(e){console.log(e),qe.b.error(e.response.data,{position:qe.b.POSITION.TOP_RIGHT})}))},children:"Register"})]})})},et=c(368),tt=c(372),ct=c(371),nt=c(367),at=c(369),it=c(370),st=c(304),rt=Object(h.a)({main:{minWidth:650,margin:"10px",display:"grid"},table:{maxWidth:300}});function ot(e){var t=e.cartItem,c=rt(),n=Object(A.a)(["cart"]),i=Object(r.a)(n,2),s=(i[0],i[1],a.a.useState(0)),o=Object(r.a)(s,2);o[0],o[1];return console.log(t),Object(L.jsx)("div",{className:c.table,children:Object(L.jsx)(nt.a,{component:st.a,children:Object(L.jsxs)(et.a,{className:c.table,"aria-label":"simple table",children:[Object(L.jsx)(at.a,{children:Object(L.jsxs)(it.a,{children:[Object(L.jsx)(ct.a,{children:"Name"}),Object(L.jsx)(ct.a,{align:"right",children:"Price"})]})}),Object(L.jsxs)(tt.a,{children:[t.map((function(e,t){return Object(L.jsxs)(it.a,{children:[Object(L.jsx)(ct.a,{component:"th",scope:"row",children:e.name}),Object(L.jsx)(ct.a,{align:"right",children:e.price})]},t)})),Object(L.jsxs)(it.a,{style:{borderTop:"2px solid grey"},children:[Object(L.jsx)(ct.a,{style:{fontWeight:"bolder"},component:"th",scope:"row",children:"Total"}),Object(L.jsx)(ct.a,{style:{fontWeight:"bolder"},align:"right",children:"30200"})]})]})]})})})}var lt=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center"},im:{height:"50vh"},head:{display:"flex",justifyContent:"center"},color:{color:"grey",fontSize:"2rem"}}})),jt=function(){var e=a.a.useState(0),t=Object(r.a)(e,2),c=(t[0],t[1],Object(A.a)(["cart"])),i=Object(r.a)(c,2),s=i[0],o=(i[1],Object(n.useState)([])),l=Object(r.a)(o,2),j=l[0],d=l[1];a.a.useEffect((function(){s.cart&&d(s.cart)}),[s]);var b=lt();console.log(s);var h="".concat("/images/empty.png");return Object(L.jsx)(L.Fragment,{children:s.cart.length?Object(L.jsxs)("div",{style:{margin:"auto"},children:[Object(L.jsx)("h2",{className:b.color,children:"Cart Items"}),Object(L.jsx)(ot,{cartItem:j})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h2",{className:(b.head,b.color),children:"Cart is empty "}),Object(L.jsx)("div",{className:b.root,children:Object(L.jsx)("img",{className:b.im,src:h,alt:"img"})})]})})},dt=c(373);var bt=function(){return Object(L.jsx)(l.a,{children:Object(L.jsx)(dt.a,{children:Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(de,{}),Object(L.jsx)(qe.a,{}),Object(L.jsxs)(be.d,{children:[Object(L.jsx)(be.b,{path:"/products",exact:!0,component:M}),Object(L.jsx)(be.b,{path:"/products/new",exact:!0,component:$e}),Object(L.jsx)(be.b,{path:"/ContactUs",exact:!0,component:he}),Object(L.jsx)(be.b,{path:"/login",exact:!0,component:Qe}),Object(L.jsx)(be.b,{path:"/register",exact:!0,component:Ze}),Object(L.jsx)(be.b,{path:"/cart",exact:!0,component:jt}),Object(L.jsx)(be.b,{path:"/NotFound",component:Xe}),Object(L.jsx)(be.b,{path:"/",component:Ye}),Object(L.jsx)(be.a,{to:"/NotFound"})]})]})})})},ht=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,382)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(bt,{})}),document.getElementById("root")),ht()}},[[301,1,2]]]);
//# sourceMappingURL=main.26e0b9d9.chunk.js.map