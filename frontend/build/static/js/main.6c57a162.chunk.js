(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n.p+"static/media/recycle.61888d37.png"},130:function(e,t,n){e.exports=n.p+"static/media/recycle.61888d37.png"},133:function(e,t,n){e.exports=n(357)},339:function(e,t,n){},347:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),s=n.n(o),c=n(27),i=n(21),l=n(128),u=n(8),m="SET_SANITY",d="SET_GAMEOVER",A="SET_EMAIL",p="SET_PASSWORD",g="SET_GAMESCORE",h="UPDATE_HIGHSCORE",f="UPDATE_LEADERBOARD",E="SEND_GAMESCORE",b="LOGIN",v="LOGIN_FAIL",C="CREATE_ACCOUNT",w="CREATE_ACCOUNT_FAIL",y={email:"",password:"",isLoggedIn:!1,highscore:0,leaderboard:[],gamescore:0,sanity:!0,gameover:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)({},e,{sanity:t.sanity});case d:return Object(u.a)({},e,{gameover:t.gameover});case A:return Object(u.a)({},e,{email:t.email});case p:return Object(u.a)({},e,{password:t.password});case g:return Object(u.a)({},e,{gamescore:t.gamescore});case h:return Object(u.a)({},e,{highscore:t.highscore});case f:return Object(u.a)({},e,{leaderboard:t.leaderboard});case E:return Object(u.a)({},e);case b:return Object(u.a)({},e,{isLoggedIn:!0,highscore:t.highscore});case v:return Object(u.a)({},e,{email:"",password:""});case C:return Object(u.a)({},e,{isLoggedIn:!0,highscore:t.highscore});case w:return Object(u.a)({},e,{email:"",password:""});default:return Object(u.a)({},e)}},B=n(13),N=n.n(B),O=n(32),Q=n(33),D=n.n(Q),T=function(e){return{type:m,sanity:e}},k=function(e){return{type:d,gameover:e}},j=function(e){return{type:A,email:e}},Y=function(e){return{type:p,password:e}},q=function(e){return{type:g,gamescore:e}},S=function(e){return{type:h,highscore:e}},M=function(e){return{type:f,leaderboard:e}},L=function(e){return{type:E,gamescore:e}},P=function(e){return{type:b,highscore:e}},G=function(e){return{type:C,highscore:e}},x=function(){return{type:b}},H=function(){return{type:w}},J=n(30),R=n.n(J),z=function(e){return function(t){return console.log(e),t(T(e))}},X=function(e){return function(t){return t(k(e))}},U=function(e){return function(t){return t(j(e))}},W=function(e){return function(t){return t(Y(e))}},_=function(e){return function(t){return t(q(e))}},K=function(e){return function(){var t=Object(O.a)(N.a.mark(function t(n){var a;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 3:return a=t.sent,console.log("updating highscore: "+a),t.abrupt("return",n(S(a.data.Items[0].score)));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",n(S(0)));case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},V=function(){return function(){var e=Object(O.a)(N.a.mark(function e(t){var n,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getLeaderboard");case 3:return n=e.sent,a=[],n.data.forEach(function(e){a.push(e[0])}),e.abrupt("return",t(M(a)));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t(M([])));case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},F=function(e,t){return function(){var n=Object(O.a)(N.a.mark(function n(a){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/updateScore?email=".concat(e,"&score=").concat(t));case 3:return n.abrupt("return",a(L(t)));case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",a(L(t)));case 9:case"end":return n.stop()}},n,null,[[0,6]])}));return function(e){return n.apply(this,arguments)}}()},Z=function(e,t){return function(){var n=Object(O.a)(N.a.mark(function n(a){var r;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J.Auth.signIn(e,t);case 3:return n.next=5,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 5:return r=n.sent,console.log(r.data.Items[0].score),n.abrupt("return",a(P(r.data.Items[0].score)));case 10:return n.prev=10,n.t0=n.catch(0),alert(n.t0.message),n.abrupt("return",a(x()));case 14:case"end":return n.stop()}},n,null,[[0,10]])}));return function(e){return n.apply(this,arguments)}}()},$=function(e,t){return function(){var n=Object(O.a)(N.a.mark(function n(a){var r;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J.Auth.signUp({username:e,password:t});case 3:return n.next=5,J.Auth.signIn(e,t);case 5:return n.next=7,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 7:return r=n.sent,n.abrupt("return",a(G(r.data.Items[0].score)));case 11:return n.prev=11,n.t0=n.catch(0),alert(n.t0.message),n.abrupt("return",a(H()));case 15:case"end":return n.stop()}},n,null,[[0,11]])}));return function(e){return n.apply(this,arguments)}}()},ee=I,te=Object(i.c)({home:ee}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae,re=n(24),oe=n(25),se=n(28),ce=n(26),ie=n(29),le=n(359),ue=n(131),me=n.n(ue),de=n(129),Ae=n.n(de),pe=(n(339),n(40)),ge=function(e){function t(e){var n;return Object(re.a)(this,t),(n=Object(se.a)(this,Object(ce.a)(t).call(this,e))).onQuestionOneChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),n.setState(function(){return{questionOne:t}})},n.onQuestionTwoChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),n.setState(function(){return{questionTwo:t}})},n.onQuestionThreeChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),n.setState(function(){return{questionThree:t}})},n.onSubmitQuestions=function(){return n.state.questionOne+n.state.questionTwo+n.state.questionThree<2?(n.props.setSanity(!1),n.props.history.push("/game")):(n.props.setSanity(!0),n.props.history.push("/game"))},n.onEmailChange=function(e){var t=e.target.value;n.props.setEmail(t)},n.onPasswordChange=function(e){var t=e.target.value;n.props.setPassword(t)},n.onLogin=function(){n.onClickWindow(),n.props.login(n.props.email,n.props.password)},n.onCreateAccount=function(){n.onClickWindow(),n.props.createAccount(n.props.email,n.props.password)},n.onPlayAgain=function(){n.setState(function(){return{endofroundDisplay:"none",questionDisplay:"block"}})},n.onClickImg=function(){n.props.history.push("/")},n.onClickPlay=function(){n.setState(function(){return{questionDisplay:"block"}})},n.onClickLogin=function(){n.setState(function(){return{loginDisplay:"block"}})},n.onClickLeaderboard=function(){console.log(n.props.gameover),n.setState(function(){return{leaderboardDisplay:"block"}})},n.onClickWindow=function(){n.setState(function(){return{loginDisplay:"none",questionDisplay:"none",leaderboardDisplay:"none",endofroundDisplay:"none"}}),!0===n.props.isLoggedIn&&n.props.updateHighscore(n.props.email),n.props.updateLeaderboard()},n.onEndRound=function(){n.props.setGamescore(24),n.setState(function(){return{endofroundDisplay:"block"}}),n.props.isLoggedIn&&n.props.sendGamescore(n.props.email,24)},n.state={questionDisplay:"none",loginDisplay:"none",leaderboardDisplay:"none",endofroundDisplay:"none",score:0,questionOne:0,questionTwo:0,questionThree:0},n}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){!0===this.props.isLoggedIn&&this.props.updateHighscore(this.props.email),this.props.updateLeaderboard(),console.log("gameover: "+this.props.gameover),this.props.gameover&&(this.setState(function(){return{endofroundDisplay:"block"}}),this.props.setGameover(!1))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home-container"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:Ae.a,onClick:this.onClickImg,alt:"Recycle Game",height:"42",width:"42"}),r.a.createElement("button",{className:"header-button",onClick:this.onClickLeaderboard},"Leaderboard"),r.a.createElement("button",{className:"header-button",onClick:this.onClickLogin},"Login")),r.a.createElement("div",null,r.a.createElement("h1",{className:"h1"},"Recycle Game"),!0===this.props.isLoggedIn&&r.a.createElement("h2",null,this.props.email),!0===this.props.isLoggedIn&&r.a.createElement("h3",null,"Highscore: ",this.props.highscore),r.a.createElement("center",null,r.a.createElement("button",{className:"screen-button",onClick:this.onClickPlay},"Play Game"))),r.a.createElement("div",{id:"questions",className:"modal",style:{display:this.state.questionDisplay}},r.a.createElement("form",{className:"modal-content animate",onSubmit:this.onSubmitQuestions},r.a.createElement("div",{className:"container"},r.a.createElement("label",{className:"question",for:"uname"},r.a.createElement("b",null,"Question 1")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionOneChange,type:"text",value:this.state.q1,required:!0},r.a.createElement("option",{value:""},"Yes / No"),r.a.createElement("option",{value:1},"Yes"),r.a.createElement("option",{value:0},"No")),r.a.createElement("label",{className:"question",for:"psw"},r.a.createElement("b",null,"Question 2")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionTwoChange,type:"password",value:this.state.q2,required:!0},r.a.createElement("option",{value:""},"Yes / No"),r.a.createElement("option",{value:1},"Yes"),r.a.createElement("option",{value:0},"No")),r.a.createElement("label",{className:"question",for:"psw"},r.a.createElement("b",null,"Question 3")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionThreeChange,type:"password",value:this.state.q3,required:!0},r.a.createElement("option",{value:""},"Yes / No"),r.a.createElement("option",{value:1},"Yes"),r.a.createElement("option",{value:0},"No")),r.a.createElement("button",{className:"menu-button",type:"submit"},"Play Game"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Cancel")))),r.a.createElement("div",{id:"login",className:"modal",style:{display:this.state.loginDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate",onSubmit:this.onLogin},r.a.createElement("div",{className:"container"},r.a.createElement("label",{for:"uname"},r.a.createElement("b",null,"Email")),r.a.createElement("input",{value:this.props.email,onChange:function(t){return e.onEmailChange(t)},type:"text",placeholder:"Enter Username",name:"uname",required:!0}),r.a.createElement("label",{for:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{value:this.props.password,onChange:function(t){return e.onPasswordChange(t)},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onLogin},"Login"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onCreateAccount},"(Don't Have An Account?) Create One!"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Cancel")))),r.a.createElement("div",{id:"leaderboard",className:"modal",style:{display:this.state.leaderboardDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate"},r.a.createElement("div",{className:"container"},r.a.createElement(pe.Table,{className:"table",noDataText:"No matching records found",itemsPerPage:10,data:this.props.leaderboard},r.a.createElement(pe.Thead,null,r.a.createElement(pe.Th,{column:"email"},"Name"),r.a.createElement(pe.Th,{column:"score"},"Score"))),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Close")))),r.a.createElement("div",{id:"end-of-round",className:"modal",style:{display:this.state.endofroundDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate",onSubmit:this.onLogin},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"h1-window"},"End Of Round"),r.a.createElement("h2",null,"Score: ",this.props.gamescore),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onPlayAgain},"Play Again"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Close")))))}}]),t}(r.a.Component),he=Object(c.b)(function(e){return{email:e.home.email,password:e.home.password,isLoggedIn:e.home.isLoggedIn,highscore:e.home.highscore,leaderboard:e.home.leaderboard,gamescore:e.home.gamescore,sanity:e.home.sanity,gameover:e.home.gameover}},function(e){return{setSanity:function(t){e(z(t))},setGameover:function(t){e(X(t))},setEmail:function(t){e(U(t))},setPassword:function(t){e(W(t))},setGamescore:function(t){e(_(t))},updateHighscore:function(t){e(K(t))},updateLeaderboard:function(){e(V())},sendGamescore:function(t,n){e(F(t,n))},login:function(t,n){e(Z(t,n))},createAccount:function(t,n){e($(t,n))}}})(ge),fe=(n(347),n(130)),Ee=n.n(fe),be=0,ve=["papercup","T-shirt","glass","iPhone","battery","cardboard box","plastic box","banana peel","books","water bottle","diapers","paper towels","pizza box","tires","yogurt cups"],Ce=[1,1,1,0,0,1,0,1,1,1,0,0,0,0,0],we=0,ye=0,Ie=!1,Be=function(e){function t(e){var n;return Object(re.a)(this,t),(n=Object(se.a)(this,Object(ce.a)(t).call(this,e))).onSubmit=function(){return clearInterval(n.finish),n.props.setGamescore(n.state.score),n.props.isLoggedIn&&n.props.sendGamescore(n.props.email,n.state.score),n.props.setGameover(!0),n.props.history.push("/")},n.countDown=function(){we>=15&&(n.props.setGameover(!0),Ie=!0),Ie&&n.onSubmit(),n.setState(function(){return{score:ye}})},n.renderList=function(e){if(void 0!=e)return r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{draggable:"true",href:"",id:"one"},e))}))},n.state={score:0,height:0,heightSyle:{height:"500px"}},n.finish=null,n}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){this.finish=setInterval(this.countDown,1e3),ae=this.props.sanity,0,be=0,we=0,ye=0,Ie=!1;var e=document.addEventListener?function(t,n,a){if(t&&t.nodeName||t===window)t.addEventListener(n,a,!1);else if(t&&t.length)for(var r=0;r<t.length;r++)e(t[r],n,a)}:function(t,n,a){if(t&&t.nodeName||t===window)t.attachEvent("on"+n,function(){return a.call(t,window.event)});else if(t&&t.length)for(var r=0;r<t.length;r++)e(t[r],n,a)};!function(){var t=document.createElement("pre");t.id="view-source",e(window,"click",function(e){if("#view-source"==e.target.hash){document.getElementById("view-source")||(t.innerHTML=("<!DOCTYPE html>\n<html>\n"+document.documentElement.innerHTML+"\n</html>").replace(/[<>]/g,function(e){return{"<":"&lt;",">":"&gt;"}[e]}),document.body.appendChild(t)),document.body.className="view-source";var n=setInterval(function(){"#view-source"!=window.location.hash&&(clearInterval(n),document.body.className="")},200)}})}();var t=["","","",""],n=document.createElement("p");n.style.opacity=1;for(var a=document.querySelectorAll("li > a"),r=null,o=0;o<a.length;o++)(r=a[o]).setAttribute("draggable","true"),e(r,"dragstart",function(e){e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("Text",this.id)});var s=document.querySelector("#bin"),c=document.querySelector("#bin2");e(s,"dragover",function(e){return e.preventDefault&&e.preventDefault(),this.className="over",e.dataTransfer.dropEffect="copy",!1}),e(c,"dragover",function(e){return e.preventDefault&&e.preventDefault(),this.className="over",e.dataTransfer.dropEffect="copy",!1}),e(s,"dragenter",function(e){return this.className="over",!1}),e(c,"dragenter",function(e){return this.className="over",!1}),e(s,"dragleave",function(){this.className=""}),e(c,"dragleave",function(){this.className=""}),e(s,"drop",function(e){e.stopPropagation&&e.stopPropagation();var a=document.getElementById(e.dataTransfer.getData("Text"));a.parentNode.removeChild(a),1==Ce[we]?(1,ae&&ye++):ae||ye++,we++,c.className="",n.innerHTML=t[parseInt(Math.random()*t.length)];var r=n.cloneNode(!0);return s.appendChild(r),setTimeout(function(){var e=setInterval(function(){r.style.opacity<=0?clearInterval(e):r.style.opacity-=.1},50)},250),!1}),e(c,"drop",function(e){e.stopPropagation&&e.stopPropagation();var a=document.getElementById(e.dataTransfer.getData("Text"));a.parentNode.removeChild(a),0==Ce[we]?(1,ae&&ye++):ae||ye++,we++,console.log("Items in the right"+be),c.className="",n.innerHTML=t[parseInt(Math.random()*t.length)];var r=n.cloneNode(!0);return s.appendChild(r),setTimeout(function(){var e=setInterval(function(){r.style.opacity<=0?clearInterval(e):r.style.opacity-=.1},50)},250),!1})}},{key:"render",value:function(){return r.a.createElement("div",{class:"body-game"},this.props.sanity&&r.a.createElement("h1",{className:"h1-game"},"Save the Earth!"),!this.props.sanity&&r.a.createElement("h1",{className:"h1-game"},"Destroy the World!"),this.props.sanity&&r.a.createElement("h2",{className:"h2-game"},"Score: ",this.state.score),!this.props.sanity&&r.a.createElement("h2",{className:"h2-game"},"Score: ",this.state.score),r.a.createElement("div",{className:"game-div"},r.a.createElement("div",{id:"bin"},r.a.createElement("img",{alt:"",className:"recycle-img",src:Ee.a})),r.a.createElement("ul",{style:this.props.heightStyle},r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"one"},ve[0])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"two"},ve[1])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"three"},ve[2])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"four"},ve[3])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"five"},ve[4])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"six"},ve[5])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"seven"},ve[6])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"eight"},ve[7])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"nine"},ve[8])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"ten"},ve[9])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"eleven"},ve[10])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"twelve"},ve[11])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"thirteen"},ve[12])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"fourteen"},ve[13])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"fifteen"},ve[14]))),r.a.createElement("div",{id:"bin2"},r.a.createElement("img",{alt:"",src:"data:image/png;base64,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"}))))}}]),t}(r.a.Component),Ne=Object(c.b)(function(e){return{email:e.home.email,password:e.home.password,isLoggedIn:e.home.isLoggedIn,highscore:e.home.highscore,leaderboard:e.home.leaderboard,gamescore:e.home.gamescore,sanity:e.home.sanity,gameover:e.home.gameover}},function(e){return{setSanity:function(t){e(z(t))},setGameover:function(t){e(X(t))},setEmail:function(t){e(U(t))},setPassword:function(t){e(W(t))},setGamescore:function(t){e(_(t))},updateHighscore:function(t){e(K(t))},updateLeaderboard:function(){e(V())},sendGamescore:function(t,n){e(F(t,n))},login:function(t,n){e(Z(t,n))},createAccount:function(t,n){e($(t,n))}}})(Be),Oe=me()(),Qe=function(e){function t(){return Object(re.a)(this,t),Object(se.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){return r.a.createElement(le.b,{history:Oe},r.a.createElement("div",null,r.a.createElement(le.a,{exact:!0,path:"//",component:he}),r.a.createElement(le.a,{exact:!0,path:"/game",component:Ne})))}}]),t}(a.Component),De={REGION:"us-east-2",BUCKET:"recycle-app-client"},Te={REGION:"us-east-2",USER_POOL_ID:"us-east-2_bt6Q6kYT7",APP_CLIENT_ID:"1vjrj6brs1299429rlabdaje31",IDENTITY_POOL_ID:"us-east-2:f7e4c12b-9fd7-414a-b546-c7dd96dede25"},ke=Object(i.e)(te,ne(Object(i.a)(l.a))),je=r.a.createElement(c.a,{store:ke},r.a.createElement(Qe,null));R.a.configure({Auth:{mandatorySignIn:!0,region:Te.REGION,userPoolId:Te.USER_POOL_ID,identityPoolId:Te.IDENTITY_POOL_ID,userPoolWebClientId:Te.APP_CLIENT_ID},Storage:{region:De.REGION,bucket:De.BUCKET,identityPoolId:Te.IDENTITY_POOL_ID}}),s.a.render(je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t){}},[[133,1,2]]]);
//# sourceMappingURL=main.6c57a162.chunk.js.map