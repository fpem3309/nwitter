(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(7),o=n(19),l=n(6),j=n(11),u=n.n(j),b=n(18),d=n(24);n(41),n(53),n(52);d.a.initializeApp({apiKey:"AIzaSyD_oNcUTX_fuepul1z1FckNgghGaXaAM8E",authDomain:"nwitter-b02bb.firebaseapp.com",projectId:"nwitter-b02bb",storageBucket:"nwitter-b02bb.appspot.com",messagingSenderId:"445311776166",appId:"1:445311776166:web:7f2fc345f669ce9c190b67"});var h=d.a,O=d.a.auth(),x=d.a.firestore(),p=d.a.storage(),m=n(1),f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),h=d[0],x=d[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),v=f[0],g=f[1],w=function(e){var t=e.target,n=t.name,a=t.value;console.log(a),"email"===n?c(a):"password"===n&&l(a)},N=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:console.log(a);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:N,className:"container",children:[Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:n,onChange:w,className:"authInput",required:!0}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:o,onChange:w,className:"authInput",required:!0}),Object(m.jsx)("input",{type:"submit",value:h?"Create Account":"Log In",className:"authInput authSubmit"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return x((function(e){return!e}))},className:"authSwitch",children:h?"Sign In":"Create Account"})]})},v=n(10),g=n(22),w=function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.d,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},N=n(35),y=n(17),F=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(t.text),j=Object(i.a)(l,2),d=j[0],h=j[1],O=function(){var e=Object(b.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("\u3139\u3147 \uc0ad\uc81c??"),console.log(n),!n){e.next=7;break}return e.next=5,x.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,p.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=new Date(t.createdAt),g=f.getFullYear(),w=f.getMonth(),N=f.getDate(),F=f.getHours(),k=f.getMinutes(),_=function(){return o((function(e){return!e}))},S=function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,d),e.next=4,x.doc("nweets/".concat(t.id)).update({text:d});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:S,className:"container nweetEdit",children:[Object(m.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;h(t)},placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Upadte Nweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:_,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),Object(m.jsxs)("h4",{children:[g,"-",w,"-",N," ",F,":",k]}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl,alt:"upload_img"}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:_,children:Object(m.jsx)(v.a,{icon:y.d})}),Object(m.jsx)("span",{onClick:O,children:Object(m.jsx)(v.a,{icon:y.h})})]})]})})},k=n(55),_=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],h=function(){var e=Object(b.a)(u.a.mark((function e(n){var a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===j){e.next=12;break}return c=p.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(j,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,x.collection("nweets").add(o);case 15:s(""),d(""),console.log(o);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\uc624\ub298\uc740 \ubb50\ud588\uc5b4??",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:y.e})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:j,style:{backgroundImage:j},alt:"pre_img"}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:y.g})]})]})]})},S=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){x.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(_,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(F,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.refreshUser,n=e.userObj,c=Object(l.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],j=s[1],d=function(){var e=Object(b.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",className:"formInput",placeholder:"Display name",value:o,autoFocus:!0}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),c.push("/")},children:"Log Out"})]})},I=function(e){var t=e.userObj,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("button",{href:"#",className:"nav_toogleBtn",onClick:function(){s((function(e){return!e}))},children:Object(m.jsx)(v.a,{icon:y.a,color:"#04aaFF"})}),Object(m.jsx)("div",{children:Object(m.jsx)(o.b,{to:"#",children:"Home coding"})}),Object(m.jsxs)("ul",{className:"nav_icon",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04aaFF"}),Object(m.jsx)("a",{href:"https://www.instagram.com/k_gwan/",children:"Instagram"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:y.b,color:"#04aaFF"}),Object(m.jsx)("a",{href:"https://fpem3309.tistory.com/",children:"Blog"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:g.e,color:"#04aaFF"}),Object(m.jsx)("a",{href:"https://www.youtube.com/channel/UCNhofiqfw5nl-NeDJkXtPvw",children:"Pani"})]})]}),Object(m.jsxs)("ul",{className:r?"nav_menu":"hide_nav_menu",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:y.f,color:"#04AAFF"}),Object(m.jsxs)(o.b,{to:"/",children:[t.displayName,"\uc758 Diary"]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:y.i,color:"#04AAFF"}),Object(m.jsxs)(o.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(v.a,{icon:y.c,color:"#04aaFF"}),Object(m.jsx)(o.b,{to:"/lotto",children:"Lotto \uc790\ub3d9\ubf51\uae30!"})]}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"test item"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"test item"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"test item"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"test item"})})]})]})})},A=function(){for(var e=[],t=0;t<6;t++){var n=Math.floor(44*Math.random())+1;for(var a in e)n===e[a]&&(n=Math.floor(44*Math.random())+1);e.push(n)}return e.sort((function(e,t){return e-t})),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"\ub2e4\uc74c \ud68c\ucc28 \ub85c\ub610 1\ub4f1 \ubc88\ud638\ub294"}),Object(m.jsx)("p",{className:"my_lotto",children:e+" "}),Object(m.jsx)("a",{className:"lotto_result",href:"https://dhlottery.co.kr/gameResult.do?method=byWin",children:"\ub2f9\ucca8\ubc88\ud638 \ud655\uc778\ud558\uae30"})]})},U=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("div",{className:"wave -one"}),Object(m.jsx)("div",{className:"wave -two"}),Object(m.jsx)("div",{className:"wave -three"}),Object(m.jsx)("div",{className:"title",children:"React \uc5f0\uc2b5\uc911"})]})})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(U,{userObj:a}),n&&Object(m.jsx)(I,{userObj:a}),Object(m.jsx)(l.c,{children:n?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(S,{userObj:a})}),Object(m.jsx)(l.a,{exact:!0,path:"/profile",children:Object(m.jsx)(C,{userObj:a,refreshUser:t})}),Object(m.jsx)(l.a,{exact:!0,path:"/lotto",children:Object(m.jsx)(A,{})})]})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(w,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){e?(l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),null===e.displayName&&e.updateProfile({displayName:"\uc0c8\ub85c\uc6b4 \uc720\uc800"})):l(null),c(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(B,{refreshUser:function(){var e=O.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"\uae30\ub2ec\uae30\ub2ec \uae30\ub2ec\uae30\ub2ec"})};n(50);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.5c05e658.chunk.js.map