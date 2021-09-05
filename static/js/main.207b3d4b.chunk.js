(this["webpackJsonptodo-firebase"]=this["webpackJsonptodo-firebase"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(5),o=n.n(c),a=n(15),s=n.n(a),i=(n(21),n(13)),r=n.n(i),u=n(16),l=n(8),d=(n(23),n(10));n(24),n(29);d.a.initializeApp({apiKey:"AIzaSyCTfMu-PVTq6qZ8E3U8b8LsNczTIwaTwXM",authDomain:"todo-e8c5f.firebaseapp.com",projectId:"todo-e8c5f",storageBucket:"todo-e8c5f.appspot.com",messagingSenderId:"823710539640",appId:"1:823710539640:web:2c7ca3f2a8cd4a85d7b28d"});d.a.firestore();var j=d.a,b=n(1),h=function(e){var t=e.inputvalue,n=e.setInputValue,c=e.onChangeHandler,o=e.onClickHandler;return Object(b.jsx)("div",{className:"todoContainer",children:Object(b.jsxs)("div",{className:"todoItem",children:[Object(b.jsx)("input",{autoFocus:!0,required:!0,value:t,onChange:c,placeholder:"New"}),Object(b.jsx)("button",{type:"submit",className:"addButton",onClick:function(e){e.preventDefault(),o(),n("")},children:" Add "})]})})},f=function(e){var t=e.items,n=e.deleteTodo;return Object(b.jsx)("div",{className:"todoContainer",children:t.map((function(e){return Object(b.jsxs)("div",{className:"todoItem",children:[Object(b.jsxs)("p",{children:[" ",e.todo," "]}),Object(b.jsx)("button",{className:"deleteButton",onClick:function(){return n(e)},children:" Done "})]},e.id)}))})},O=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],a=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),f=h[0],O=h[1],g=Object(c.useState)(""),p=Object(l.a)(g,2),m=p[0],x=p[1],v=Object(c.useState)(!1),C=Object(l.a)(v,2),w=C[0],S=C[1],k=e.user,N=e.setUser;Object(c.useEffect)((function(){j.auth().onAuthStateChanged((function(e){e?(N(e),console.log("authListener")):N("")})),console.log(k)}),[k]);var I=function(){O(""),x("")};return Object(b.jsx)("section",{className:"login",children:Object(b.jsxs)("div",{className:"loginContainer",children:[Object(b.jsx)("label",{children:" Username "}),Object(b.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:o,onChange:function(e){return a(e.target.value)}}),Object(b.jsxs)("p",{className:"errorMsg",children:[" ",f," "]}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",required:!0,value:r,onChange:function(e){return u(e.target.value)}}),Object(b.jsxs)("p",{className:"errorMsg",children:[" ",m," "]}),Object(b.jsx)("div",{className:"btnContainer",children:w?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"loginButton",onClick:function(){I(),console.log("try sign up"),j.auth().createUserWithEmailAndPassword(o,r).then((function(e){N(e.user),console.log(console.log("Login :".concat(e.user.email)))})).catch((function(e){switch(e.code){case"auth/email-alread-in-use":case"auth/invalid-email":O(e.message);break;case"auth/weak-password":x(e.message)}}))},children:"Sign up"}),Object(b.jsxs)("p",{children:["Have an account ? ",Object(b.jsx)("span",{onClick:function(){return S(!w)},children:"Sign in"})]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"loginButton",onClick:function(){I(),console.log("try login"),j.auth().signInWithEmailAndPassword(o,r).then((function(e){N(e.user),console.log("Login :".concat(e.user.email))})).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":O(e.message);break;case"auth/wrong-password":x(e.message)}}))},children:"Sign in"}),Object(b.jsxs)("p",{children:["Don't have an account ? ",Object(b.jsx)("span",{onClick:function(){return S(!w)},children:"Sign up"})]})]})})]})})},g=null,p=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],d=s[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),x=m[0],v=m[1];n&&(g=j.firestore().collection(n.email));var C=function(){var e=Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return console.log("user: ".concat(n.email," ref: ").concat(g)),e.abrupt("return");case 3:g.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,todo:e.data().todo})})),d(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C()}),[n]);return Object(b.jsx)("div",{className:"container",children:n?Object(b.jsx)("div",{children:Object(b.jsxs)("section",{className:"hero",children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)("h2",{children:" Welcome "}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h4",{children:[" ",n.email," "]}),Object(b.jsx)("button",{onClick:function(){j.auth().signOut(),o(""),d([]),g=null,console.log("User signout")},children:"Logout"})]})]}),Object(b.jsx)(h,{inputvalue:x,setInputValue:v,onChangeHandler:function(e){return v(e.target.value)},onClickHandler:function(){return e=x,console.log("addTodo: ".concat(g)),void g.add({todo:e}).then((function(t){item.push({id:t.id,todo:e})})).catch((function(e){console.log(e)}));var e}}),Object(b.jsx)(f,{items:i,deleteTodo:function(e){console.log("deleteTodo: ".concat(e.id)),g.doc(e.id).delete().catch((function(e){console.log(e)}))}})]})}):Object(b.jsx)(O,{user:n,setUser:o})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),m()}},[[28,1,2]]]);
//# sourceMappingURL=main.207b3d4b.chunk.js.map