(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(32),s=c.n(r),i=c(6),o=c(18),l=c(7),j=c(11),u=c.n(j),b=c(19),d=c(24);c(41),c(55),c(54);d.a.initializeApp({apiKey:"AIzaSyD_oNcUTX_fuepul1z1FckNgghGaXaAM8E",authDomain:"nwitter-b02bb.firebaseapp.com",projectId:"nwitter-b02bb",storageBucket:"nwitter-b02bb.appspot.com",messagingSenderId:"445311776166",appId:"1:445311776166:web:7f2fc345f669ce9c190b67"});var h=d.a,O=d.a.auth(),x=d.a.firestore(),m=d.a.storage(),p=c(1),f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(n.useState)(!0),d=Object(i.a)(j,2),h=d[0],x=d[1],m=Object(n.useState)(""),f=Object(i.a)(m,2),v=f[0],g=f[1],w=function(e){var t=e.target,c=t.name,n=t.value;console.log(n),"email"===c?a(n):"password"===c&&l(n)},N=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(c,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(c,o);case 10:n=e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:console.log(n);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:N,className:"container",children:[Object(p.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:c,onChange:w,className:"authInput",required:!0}),Object(p.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:o,onChange:w,className:"authInput",required:!0}),Object(p.jsx)("input",{type:"submit",value:h?"Create Account":"Log In",className:"authInput authSubmit"}),v&&Object(p.jsx)("span",{className:"authError",children:v})]}),Object(p.jsx)("span",{onClick:function(){return x((function(e){return!e}))},className:"authSwitch",children:h?"Sign In":"Create Account"})]})},v=c(10),g=c(22),w=function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===c&&(n=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(n);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"authContainer",children:[Object(p.jsx)(v.a,{icon:g.d,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"authBtns",children:[Object(p.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(p.jsx)(v.a,{icon:g.b})]}),Object(p.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(p.jsx)(v.a,{icon:g.a})]})]})]})},N=c(35),y=c(17),F=function(e){var t=e.nweetObj,c=e.isOwner,a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(t.text),j=Object(i.a)(l,2),d=j[0],h=j[1],O=function(){var e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=window.confirm("\uc9c4\uc9dc \uc0ad\uc81c\ud560\uac70\ub0d0??"),console.log(c),!c){e.next=7;break}return e.next=5,x.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,m.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=new Date(t.createdAt),g=f.getFullYear(),w=f.getMonth(),N=f.getDate(),F=f.getHours(),k=f.getMinutes(),C=function(){return o((function(e){return!e}))},S=function(){var e=Object(b.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),console.log(t,d),e.next=4,x.doc("nweets/".concat(t.id)).update({text:d});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"nweet",children:s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:S,className:"container nweetEdit",children:[Object(p.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;h(t)},placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,className:"formInput"}),Object(p.jsx)("input",{type:"submit",value:"Upadte Nweet",className:"formBtn"})]}),Object(p.jsx)("span",{onClick:C,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h4",{children:t.text}),Object(p.jsxs)("h4",{children:[g,"-",w,"-",N," ",F,":",k]}),t.attachmentUrl&&Object(p.jsx)("img",{src:t.attachmentUrl,alt:"upload_img"}),c&&Object(p.jsxs)("div",{className:"nweet__actions",children:[Object(p.jsx)("span",{onClick:C,children:Object(p.jsx)(v.a,{icon:y.d})}),Object(p.jsx)("span",{onClick:O,children:Object(p.jsx)(v.a,{icon:y.h})})]})]})})},k=c(57),C=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],h=function(){var e=Object(b.a)(u.a.mark((function e(c){var n,a,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(c.preventDefault(),n="",""===j){e.next=12;break}return a=m.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,a.putString(j,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,x.collection("nweets").add(o);case 15:s(""),d(""),console.log(o);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(p.jsxs)("div",{className:"factoryInput__container",children:[Object(p.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\uc624\ub298\uc758 \uc77c",maxLength:120}),Object(p.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(p.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(p.jsx)("span",{children:"Add photos"}),Object(p.jsx)(v.a,{icon:y.e})]}),Object(p.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.currentTarget.result;d(t)},c.readAsDataURL(t)},style:{opacity:0}}),j&&Object(p.jsxs)("div",{className:"factoryForm__attachment",children:[Object(p.jsx)("img",{src:j,style:{backgroundImage:j},alt:"pre_img"}),Object(p.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(p.jsx)("span",{children:"Remove"}),Object(p.jsx)(v.a,{icon:y.g})]})]})]})},S=function(e){var t=e.userObj,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){x.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{userObj:t}),Object(p.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(p.jsx)(F,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},_=function(e){var t=e.refreshUser,c=e.userObj,a=Object(l.f)(),r=Object(n.useState)(c.displayName),s=Object(i.a)(r,2),o=s[0],j=s[1],d=function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c.displayName===o){e.next=5;break}return e.next=4,c.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(p.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",className:"formInput",placeholder:"Display name",value:o,autoFocus:!0}),Object(p.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(p.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),a.push("/")},children:"Log Out"})]})},I=function(e){var t=e.userObj,c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("button",{href:"#",className:"nav_toogleBtn",onClick:function(){s((function(e){return!e}))},children:Object(p.jsx)(v.a,{icon:y.a,color:"#04aaFF"})}),Object(p.jsx)("div",{children:Object(p.jsx)(o.c,{to:"#",children:"Home coding"})}),Object(p.jsxs)("ul",{className:"nav_icon",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:g.c,color:"#04aaFF"}),Object(p.jsx)("a",{href:"https://www.instagram.com/k_gwan/",children:"Instagram"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:y.b,color:"#04aaFF"}),Object(p.jsx)("a",{href:"https://fpem3309.tistory.com/",children:"Blog"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:g.e,color:"#04aaFF"}),Object(p.jsx)("a",{href:"https://www.youtube.com/channel/UCNhofiqfw5nl-NeDJkXtPvw",children:"Pani"})]})]}),Object(p.jsxs)("ul",{className:r?"hide_nav_menu":"nav_menu",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:y.f,color:"#04AAFF"}),Object(p.jsxs)(o.c,{to:"/",children:[t.displayName,"\uc758 Diary"]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:y.i,color:"#04AAFF"}),Object(p.jsxs)(o.c,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(v.a,{icon:y.c,color:"#04aaFF"}),Object(p.jsx)(o.c,{to:"/lotto",children:"Lotto \uc790\ub3d9\ubf51\uae30!!"})]}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/board",children:"\uac8c\uc2dc\ud310 test"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/postlist",children:"\uac8c\uc2dc\ud310"})})]})]})})},A=function(){for(var e=[],t=0;t<6;t++){var c=Math.floor(44*Math.random())+1;for(var n in e)c===e[n]&&(c=Math.floor(44*Math.random())+1);e.push(c)}return e.sort((function(e,t){return e-t})),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"\ub2e4\uc74c \ud68c\ucc28 \ub85c\ub610 1\ub4f1 \ubc88\ud638\ub294"}),Object(p.jsx)("p",{className:"my_lotto",children:e+" "}),Object(p.jsx)("a",{className:"lotto_result",href:"https://dhlottery.co.kr/gameResult.do?method=byWin",children:"\ub2f9\ucca8\ubc88\ud638 \ud655\uc778\ud558\uae30"})]})},D=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("div",{className:"wave -one"}),Object(p.jsx)("div",{className:"wave -two"}),Object(p.jsx)("div",{className:"wave -three"}),Object(p.jsx)("div",{className:"title",children:"React JS"})]})})},B=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\uae00\ubc88\ud638"}),Object(p.jsx)("th",{children:"\uc81c\ubaa9"}),Object(p.jsx)("th",{children:"\ub4f1\ub85d\uc77c"}),Object(p.jsx)("th",{children:"\uc870\ud68c\uc218"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"1"}),Object(p.jsx)("td",{children:Object(p.jsx)("span",{onClick:function(){return console.log("click!!")},children:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4."})}),Object(p.jsx)("td",{children:"2020-10-25"}),Object(p.jsx)("td",{children:"6"})]})})]})})},U=(c(50),function(e){var t=e.headersName,c=e.children;return Object(p.jsxs)("table",{className:"common-table",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:t.map((function(e,t){return Object(p.jsx)("td",{className:"common-table-header-column",children:e},t)}))})}),Object(p.jsx)("tbody",{children:c})]})}),P=function(e){var t=e.children;return Object(p.jsx)("td",{className:"common-table-column",children:t})},E=function(e){var t=e.children;return Object(p.jsx)("tr",{className:"common-table-row",children:t})},L=[{no:1,title:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:6},{no:2,title:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:5},{no:3,title:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:1},{no:4,title:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub124\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:2},{no:5,title:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub2e4\uc12f\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2020-10-25",readCount:4}],M=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r(L)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(U,{headersName:["\uae00\ubc88\ud638","\uc81c\ubaa9","\ub4f1\ub85d\uc77c","\uc870\ud68c\uc218"],children:a?a.map((function(e,t){return Object(p.jsxs)(E,{children:[Object(p.jsx)(P,{children:e.no}),Object(p.jsx)(P,{children:Object(p.jsx)(o.c,{to:"/postView/".concat(e.no),children:e.title})}),Object(p.jsx)(P,{children:e.createDate}),Object(p.jsx)(P,{children:e.readCount})]},t)})):""})})},R=(c(51),function(e){var t=e.history,c=(e.location,e.match),a=Object(n.useState)({}),r=Object(i.a)(a,2),s=r[0],o=r[1],l=c.params.no;return Object(n.useEffect)((function(){o(function(e){var t=L.filter((function(t){return t.no==e}));return 1==t.length?t[0]:null}(l))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(p.jsxs)("div",{className:"post-view-wrapper",children:[s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"post-view-row",children:[Object(p.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(p.jsx)("label",{children:s.no})]}),Object(p.jsxs)("div",{className:"post-view-row",children:[Object(p.jsx)("label",{children:"\uc81c\ubaa9"}),Object(p.jsx)("label",{children:s.title})]}),Object(p.jsxs)("div",{className:"post-view-row",children:[Object(p.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(p.jsx)("label",{children:s.createDate})]}),Object(p.jsxs)("div",{className:"post-view-row",children:[Object(p.jsx)("label",{children:"\uc870\ud68c\uc218"}),Object(p.jsx)("label",{children:s.readCount})]}),Object(p.jsxs)("div",{className:"post-view-row",children:[Object(p.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(p.jsx)("div",{children:s.content})]})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(p.jsx)("button",{className:"post-view-go-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})]})}),G=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(M,{})})},T=function(e){var t=e.refreshUser,c=e.isLoggedIn,n=e.userObj;return Object(p.jsxs)(o.b,{children:[Object(p.jsx)(D,{userObj:n}),c&&Object(p.jsx)(I,{userObj:n}),Object(p.jsx)(l.c,{children:c?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(S,{userObj:n})}),Object(p.jsx)(l.a,{exact:!0,path:"/profile",children:Object(p.jsx)(_,{userObj:n,refreshUser:t})}),Object(p.jsx)(l.a,{exact:!0,path:"/lotto",children:Object(p.jsx)(A,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/board",children:Object(p.jsx)(B,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/postlist",children:Object(p.jsx)(M,{})}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/postView/:no",component:R}),Object(p.jsx)(l.a,{exact:!0,path:"/postMain",component:G})]})]})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(w,{})})})})]})};var W=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){O.onAuthStateChanged((function(e){e?(l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),null===e.displayName&&e.updateProfile({displayName:"\uc0c8\ub85c\uc6b4 \uc720\uc800"})):l(null),a(!0)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[c?Object(p.jsx)(T,{refreshUser:function(){var e=O.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"\uae30\ub2ec\uae30\ub2ec \uae30\ub2ec\uae30\ub2ec",Object(p.jsx)("div",{className:"App"})]})};c(52);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.e52dca65.chunk.js.map