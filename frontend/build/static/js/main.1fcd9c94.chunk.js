(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/recycle.61888d37.png"},130:function(e,t,a){e.exports=a.p+"static/media/recycle.61888d37.png"},133:function(e,t,a){e.exports=a(357)},339:function(e,t,a){},347:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),s=a.n(o),c=a(27),i=a(21),l=a(128),u=a(8),m="SET_SANITY",d="SET_GAMEOVER",A="SET_EMAIL",p="SET_PASSWORD",g="SET_GAMESCORE",h="UPDATE_HIGHSCORE",f="UPDATE_LEADERBOARD",E="SEND_GAMESCORE",b="LOGIN",v="LOGIN_FAIL",C="CREATE_ACCOUNT",w="CREATE_ACCOUNT_FAIL",y={email:"",password:"",isLoggedIn:!1,highscore:0,leaderboard:[],gamescore:0,sanity:!0,gameover:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)({},e,{sanity:t.sanity});case d:return Object(u.a)({},e,{gameover:t.gameover});case A:return Object(u.a)({},e,{email:t.email});case p:return Object(u.a)({},e,{password:t.password});case g:return Object(u.a)({},e,{gamescore:t.gamescore});case h:return Object(u.a)({},e,{highscore:t.highscore});case f:return Object(u.a)({},e,{leaderboard:t.leaderboard});case E:return Object(u.a)({},e);case b:return Object(u.a)({},e,{isLoggedIn:!0,highscore:t.highscore,email:t.email});case v:return Object(u.a)({},e,{email:"",password:"",isLoggedIn:!1});case C:return Object(u.a)({},e,{isLoggedIn:!0,highscore:t.highscore});case w:return Object(u.a)({},e,{email:"",password:""});default:return Object(u.a)({},e)}},B=a(13),N=a.n(B),O=a(32),T=a(33),D=a.n(T),Q=function(e){return{type:m,sanity:e}},k=function(e){return{type:d,gameover:e}},S=function(e){return{type:A,email:e}},j=function(e){return{type:p,password:e}},q=function(e){return{type:g,gamescore:e}},L=function(e){return{type:h,highscore:e}},M=function(e){return{type:f,leaderboard:e}},Y=function(e){return{type:E,gamescore:e}},P=function(e,t){return{type:b,email:e,highscore:t}},G=function(e){return{type:C,highscore:e}},x=function(){return{type:b}},H=function(){return{type:w}},J=a(30),R=a.n(J),z=function(e){return function(t){return console.log(e),t(Q(e))}},X=function(e){return function(t){return t(k(e))}},U=function(e){return void 0===e&&(e=localStorage.getItem("email")),localStorage.setItem("email",e),function(t){return t(S(e))}},W=function(e){return function(t){return t(j(e))}},_=function(e){return function(t){return t(q(e))}},F=function(e){return function(){var t=Object(O.a)(N.a.mark(function t(a){var n;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 3:return n=t.sent,console.log("updating highscore: "+n),t.abrupt("return",a(L(n.data.Items[0].score)));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",a(L(0)));case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},K=function(){return function(){var e=Object(O.a)(N.a.mark(function e(t){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getLeaderboard");case 3:return a=e.sent,n=[],a.data.forEach(function(e){n.push(e[0])}),e.abrupt("return",t(M(n)));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t(M([])));case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},V=function(e,t){return function(){var a=Object(O.a)(N.a.mark(function a(n){return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/updateScore?email=".concat(e,"&score=").concat(t));case 3:return a.abrupt("return",n(Y(t)));case 6:return a.prev=6,a.t0=a.catch(0),a.abrupt("return",n(Y(t)));case 9:case"end":return a.stop()}},a,null,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()},Z=function(e,t){return function(){var a=Object(O.a)(N.a.mark(function a(n){var r;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J.Auth.signIn(e,t);case 3:return a.next=5,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 5:return r=a.sent,console.log(r.data.Items[0].score),a.abrupt("return",n(P(e,r.data.Items[0].score)));case 10:return a.prev=10,a.t0=a.catch(0),alert(a.t0.message),a.abrupt("return",n(x()));case 14:case"end":return a.stop()}},a,null,[[0,10]])}));return function(e){return a.apply(this,arguments)}}()},$=function(e,t){return function(){var a=Object(O.a)(N.a.mark(function a(n){var r;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J.Auth.signUp({username:e,password:t});case 3:return a.next=5,J.Auth.signIn(e,t);case 5:return a.next=7,D.a.get("https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=".concat(e));case 7:return r=a.sent,a.abrupt("return",n(G(r.data.Items[0].score)));case 11:return a.prev=11,a.t0=a.catch(0),alert(a.t0.message),a.abrupt("return",n(H()));case 15:case"end":return a.stop()}},a,null,[[0,11]])}));return function(e){return a.apply(this,arguments)}}()},ee=I,te=Object(i.c)({home:ee}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne,re=a(24),oe=a(25),se=a(28),ce=a(26),ie=a(29),le=a(359),ue=a(131),me=a.n(ue),de=a(129),Ae=a.n(de),pe=(a(339),a(40)),ge=function(e){function t(e){var a;return Object(re.a)(this,t),(a=Object(se.a)(this,Object(ce.a)(t).call(this,e))).onQuestionOneChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),a.setState(function(){return{questionOne:t}})},a.onQuestionTwoChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),a.setState(function(){return{questionTwo:t}})},a.onQuestionThreeChange=function(e){var t=e.target.value;"0"===t&&(t=0),"1"===t&&(t=1),a.setState(function(){return{questionThree:t}})},a.onSubmitQuestions=function(){return a.state.questionOne+a.state.questionTwo+a.state.questionThree<2?(a.props.setSanity(!1),a.props.history.push("/game")):(a.props.setSanity(!0),a.props.history.push("/game"))},a.onEmailChange=function(e){var t=e.target.value;a.setState(function(){return{name:t}})},a.onPasswordChange=function(e){var t=e.target.value;a.setState(function(){return{pass:t}})},a.onLogin=function(){a.onClickWindow(),a.props.login(a.state.name,a.state.pass),a.setState(function(){return{name:"",pass:""}})},a.onCreateAccount=function(){a.onClickWindow(),a.props.createAccount(a.props.email,a.props.password)},a.onPlayAgain=function(){a.setState(function(){return{endofroundDisplay:"none",questionDisplay:"block"}})},a.onClickImg=function(){a.props.history.push("/")},a.onClickPlay=function(){a.setState(function(){return{questionDisplay:"block"}})},a.onClickLogin=function(){a.setState(function(){return{loginDisplay:"block"}})},a.onClickLeaderboard=function(){a.setState(function(){return{leaderboardDisplay:"block"}})},a.onClickWindow=function(){a.setState(function(){return{loginDisplay:"none",questionDisplay:"none",leaderboardDisplay:"none",endofroundDisplay:"none"}}),!0===a.props.isLoggedIn&&a.props.updateHighscore(a.props.email),a.props.updateLeaderboard()},a.onEndRound=function(){a.setState(function(){return{endofroundDisplay:"block"}}),a.props.isLoggedIn},a.state={questionDisplay:"none",loginDisplay:"none",leaderboardDisplay:"none",endofroundDisplay:"none",score:0,questionOne:0,questionTwo:0,questionThree:0,name:"",password:""},a}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(){return{name:e.props.email,pass:e.props.password}}),!0!==this.props.isLoggedIn&&null==this.props.email||(this.props.sendGamescore(this.props.gamescore),this.props.updateHighscore(this.props.email)),this.props.updateLeaderboard(),console.log("gameover: "+this.props.gameover),this.props.gameover&&(this.setState(function(){return{endofroundDisplay:"block"}}),this.props.setGameover(!1))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home-container"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:Ae.a,onClick:this.onClickImg,alt:"Recycle Game",height:"42",width:"42"}),r.a.createElement("button",{className:"header-button",onClick:this.onClickLeaderboard},"Leaderboard"),r.a.createElement("button",{className:"header-button",onClick:this.onClickLogin},"Login")),r.a.createElement("div",null,r.a.createElement("h1",{className:"h1"},"Recycle Game"),this.props.isLoggedIn&&r.a.createElement("h2",null,this.props.email),this.props.isLoggedIn&&null!=this.props.email&&void 0!=this.props.email&&r.a.createElement("h3",null,"Highscore: ",this.props.highscore),r.a.createElement("center",null,r.a.createElement("button",{className:"screen-button",onClick:this.onClickPlay},"Play Game"))),r.a.createElement("div",{id:"questions",className:"modal",style:{display:this.state.questionDisplay}},r.a.createElement("form",{className:"modal-content animate",onSubmit:this.onSubmitQuestions},r.a.createElement("div",{className:"container"},r.a.createElement("label",{className:"question",for:"uname"},r.a.createElement("b",null,"You can save trees by recycling paper products")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionOneChange,type:"text",value:this.state.q1,required:!0},r.a.createElement("option",{value:""},"True / False"),r.a.createElement("option",{value:1},"True"),r.a.createElement("option",{value:0},"False")),r.a.createElement("label",{className:"question",for:"psw"},r.a.createElement("b",null,"Littering isn't actually bad for the environment")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionTwoChange,type:"password",value:this.state.q2,required:!0},r.a.createElement("option",{value:""},"True / False"),r.a.createElement("option",{value:0},"True"),r.a.createElement("option",{value:1},"False")),r.a.createElement("label",{className:"question",for:"psw"},r.a.createElement("b",null,"Everything can be recycled!")),r.a.createElement("select",{className:"styled-select",onChange:this.onQuestionThreeChange,type:"password",value:this.state.q3,required:!0},r.a.createElement("option",{value:""},"True / False"),r.a.createElement("option",{value:0},"True"),r.a.createElement("option",{value:1},"False")),r.a.createElement("button",{className:"menu-button",type:"submit"},"Play Game"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Cancel")))),r.a.createElement("div",{id:"login",className:"modal",style:{display:this.state.loginDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate",onSubmit:this.onLogin},r.a.createElement("div",{className:"container"},r.a.createElement("label",{for:"uname"},r.a.createElement("b",null,"Email")),r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.onEmailChange(t)},type:"text",placeholder:"Enter Username",name:"uname",required:!0}),r.a.createElement("label",{for:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{value:this.state.pass,onChange:function(t){return e.onPasswordChange(t)},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onLogin},"Login"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onCreateAccount},"(Don't Have An Account?) Create One!"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Cancel")))),r.a.createElement("div",{id:"leaderboard",className:"modal",style:{display:this.state.leaderboardDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate"},r.a.createElement("div",{className:"container"},r.a.createElement(pe.Table,{className:"table",noDataText:"No matching records found",itemsPerPage:10,data:this.props.leaderboard},r.a.createElement(pe.Thead,null,r.a.createElement(pe.Th,{column:"email"},"Name"),r.a.createElement(pe.Th,{column:"score"},"Score"))),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Close")))),r.a.createElement("div",{id:"end-of-round",className:"modal",style:{display:this.state.endofroundDisplay}},r.a.createElement("form",{className:"leaderboard-modal-content animate",onSubmit:this.onLogin},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"h1-window"},"End Of Round"),r.a.createElement("h2",null,"Score: ",this.props.gamescore),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onPlayAgain},"Play Again"),r.a.createElement("button",{className:"menu-button",type:"button",onClick:this.onClickWindow},"Close")))))}}]),t}(r.a.Component),he=Object(c.b)(function(e){return{email:e.home.email,password:e.home.password,isLoggedIn:e.home.isLoggedIn,highscore:e.home.highscore,leaderboard:e.home.leaderboard,gamescore:e.home.gamescore,sanity:e.home.sanity,gameover:e.home.gameover}},function(e){return{setSanity:function(t){e(z(t))},setGameover:function(t){e(X(t))},setEmail:function(t){e(U(t))},setPassword:function(t){e(W(t))},setGamescore:function(t){e(_(t))},updateHighscore:function(t){e(F(t))},updateLeaderboard:function(){e(K())},sendGamescore:function(t,a){e(V(t,a))},login:function(t,a){e(Z(t,a))},createAccount:function(t,a){e($(t,a))}}})(ge),fe=(a(347),a(130)),Ee=a.n(fe),be=0,ve=["papercup","T-shirt","glass","iPhone","battery","cardboard box","plastic box","banana peel","books","water bottle","diapers","paper towels","pizza box","tires","yogurt cups"],Ce=[1,1,1,0,0,1,0,1,1,1,0,0,0,0,0],we=0,ye=0,Ie=!1,Be=function(e){function t(e){var a;return Object(re.a)(this,t),(a=Object(se.a)(this,Object(ce.a)(t).call(this,e))).onSubmit=function(){return clearInterval(a.finish),a.props.setGamescore(a.state.score),a.props.isLoggedIn&&a.props.sendGamescore(a.props.email,a.state.score),a.props.setGameover(!0),a.props.history.push("/")},a.countDown=function(){we>=15&&(a.props.setGameover(!0),Ie=!0),Ie&&a.onSubmit(),a.setState(function(){return{score:ye}})},a.renderList=function(e){if(void 0!=e)return r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{draggable:"true",href:"",id:"one"},e))}))},a.state={score:0,height:0,heightSyle:{height:"500px"}},a.finish=null,a}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){this.finish=setInterval(this.countDown,1e3),ne=this.props.sanity,0,be=0,we=0,ye=0,Ie=!1;var e=document.addEventListener?function(t,a,n){if(t&&t.nodeName||t===window)t.addEventListener(a,n,!1);else if(t&&t.length)for(var r=0;r<t.length;r++)e(t[r],a,n)}:function(t,a,n){if(t&&t.nodeName||t===window)t.attachEvent("on"+a,function(){return n.call(t,window.event)});else if(t&&t.length)for(var r=0;r<t.length;r++)e(t[r],a,n)};!function(){var t=document.createElement("pre");t.id="view-source",e(window,"click",function(e){if("#view-source"==e.target.hash){document.getElementById("view-source")||(t.innerHTML=("<!DOCTYPE html>\n<html>\n"+document.documentElement.innerHTML+"\n</html>").replace(/[<>]/g,function(e){return{"<":"&lt;",">":"&gt;"}[e]}),document.body.appendChild(t)),document.body.className="view-source";var a=setInterval(function(){"#view-source"!=window.location.hash&&(clearInterval(a),document.body.className="")},200)}})}();var t=["","","",""],a=document.createElement("p");a.style.opacity=1;for(var n=document.querySelectorAll("li > a"),r=null,o=0;o<n.length;o++)(r=n[o]).setAttribute("draggable","true"),e(r,"dragstart",function(e){e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("Text",this.id)});var s=document.querySelector("#bin"),c=document.querySelector("#bin2");e(s,"dragover",function(e){return e.preventDefault&&e.preventDefault(),this.className="over",e.dataTransfer.dropEffect="copy",!1}),e(c,"dragover",function(e){return e.preventDefault&&e.preventDefault(),this.className="over",e.dataTransfer.dropEffect="copy",!1}),e(s,"dragenter",function(e){return this.className="over",!1}),e(c,"dragenter",function(e){return this.className="over",!1}),e(s,"dragleave",function(){this.className=""}),e(c,"dragleave",function(){this.className=""}),e(s,"drop",function(e){e.stopPropagation&&e.stopPropagation();var n=document.getElementById(e.dataTransfer.getData("Text"));n.parentNode.removeChild(n),1==Ce[we]?(1,ne&&ye++):ne||ye++,we++,c.className="",a.innerHTML=t[parseInt(Math.random()*t.length)];var r=a.cloneNode(!0);return s.appendChild(r),setTimeout(function(){var e=setInterval(function(){r.style.opacity<=0?clearInterval(e):r.style.opacity-=.1},50)},250),!1}),e(c,"drop",function(e){e.stopPropagation&&e.stopPropagation();var n=document.getElementById(e.dataTransfer.getData("Text"));n.parentNode.removeChild(n),0==Ce[we]?(1,ne&&ye++):ne||ye++,we++,console.log("Items in the right"+be),c.className="",a.innerHTML=t[parseInt(Math.random()*t.length)];var r=a.cloneNode(!0);return s.appendChild(r),setTimeout(function(){var e=setInterval(function(){r.style.opacity<=0?clearInterval(e):r.style.opacity-=.1},50)},250),!1})}},{key:"render",value:function(){return r.a.createElement("div",{class:"body-game"},this.props.sanity&&r.a.createElement("h1",{className:"h1-game"},"Save the Earth!"),!this.props.sanity&&r.a.createElement("h1",{className:"h1-game"},"Destroy the World!"),this.props.sanity&&r.a.createElement("h2",{className:"h2-game"},"Score: ",this.state.score),!this.props.sanity&&r.a.createElement("h2",{className:"h2-game"},"Score: ",this.state.score),r.a.createElement("div",{className:"game-div"},r.a.createElement("div",{id:"bin"},r.a.createElement("img",{alt:"",className:"recycle-img",src:Ee.a})),r.a.createElement("ul",{style:this.props.heightStyle},r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"one"},ve[0])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"two"},ve[1])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"three"},ve[2])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"four"},ve[3])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"five"},ve[4])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"six"},ve[5])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"seven"},ve[6])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"eight"},ve[7])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"nine"},ve[8])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"ten"},ve[9])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"eleven"},ve[10])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"twelve"},ve[11])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"thirteen"},ve[12])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"fourteen"},ve[13])),r.a.createElement("li",null,r.a.createElement("a",{draggable:"true",href:"",id:"fifteen"},ve[14]))),r.a.createElement("div",{id:"bin2"},r.a.createElement("img",{alt:"",src:"data:image/png;base64,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"}))))}}]),t}(r.a.Component),Ne=Object(c.b)(function(e){return{email:e.home.email,password:e.home.password,isLoggedIn:e.home.isLoggedIn,highscore:e.home.highscore,leaderboard:e.home.leaderboard,gamescore:e.home.gamescore,sanity:e.home.sanity,gameover:e.home.gameover}},function(e){return{setSanity:function(t){e(z(t))},setGameover:function(t){e(X(t))},setEmail:function(t){e(U(t))},setPassword:function(t){e(W(t))},setGamescore:function(t){e(_(t))},updateHighscore:function(t){e(F(t))},updateLeaderboard:function(){e(K())},sendGamescore:function(t,a){e(V(t,a))},login:function(t,a){e(Z(t,a))},createAccount:function(t,a){e($(t,a))}}})(Be),Oe=me()(),Te=function(e){function t(){return Object(re.a)(this,t),Object(se.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){return r.a.createElement(le.b,{history:Oe},r.a.createElement("div",null,r.a.createElement(le.a,{exact:!0,path:"//",component:he}),r.a.createElement(le.a,{exact:!0,path:"/game",component:Ne})))}}]),t}(n.Component),De={REGION:"us-east-2",BUCKET:"recycle-app-client"},Qe={REGION:"us-east-2",USER_POOL_ID:"us-east-2_bt6Q6kYT7",APP_CLIENT_ID:"1vjrj6brs1299429rlabdaje31",IDENTITY_POOL_ID:"us-east-2:f7e4c12b-9fd7-414a-b546-c7dd96dede25"},ke=Object(i.e)(te,ae(Object(i.a)(l.a))),Se=r.a.createElement(c.a,{store:ke},r.a.createElement(Te,null));R.a.configure({Auth:{mandatorySignIn:!0,region:Qe.REGION,userPoolId:Qe.USER_POOL_ID,identityPoolId:Qe.IDENTITY_POOL_ID,userPoolWebClientId:Qe.APP_CLIENT_ID},Storage:{region:De.REGION,bucket:De.BUCKET,identityPoolId:Qe.IDENTITY_POOL_ID}}),s.a.render(Se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t){}},[[133,1,2]]]);
//# sourceMappingURL=main.1fcd9c94.chunk.js.map