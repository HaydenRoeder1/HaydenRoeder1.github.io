(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},33:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},55:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(38),a(39),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=a(11),p=a(12),b=(a(26),a(29)),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"gitlink"},l.a.createElement(b.SocialIcon,{url:this.props.url,className:"gitimage"}))}}]),t}(l.a.Component),E=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("u",null,"HAYDEN ROEDER")),l.a.createElement("h3",null,e.content1),l.a.createElement("h3",null,"Expected Graduation: May 2021"),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1",text:"Github"}),l.a.createElement("h1",null))},y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={display:"Resume"},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"openTab",value:function(e,t){var a,n,l;if("All"!==(t=t.toString())){for(n=document.getElementsByClassName("tabcontent"),a=0;a<n.length;a++)n[a].style.display="none";for(l=document.getElementsByClassName("tablinks"),a=0;a<l.length;a++)l[a].className=l[a].className.replace(" active","");var r=document.getElementsByClassName(t);for(a=0;a<r.length;a++)r[a].style.display="block";document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}else{for(n=document.getElementsByClassName("tabcontent"),a=0;a<n.length;a++)n[a].style.display="block";for(l=document.getElementsByClassName("tablinks"),a=0;a<l.length;a++)l[a].className=l[a].className.replace(" active","");e.currentTarget.className+=" active"}}},{key:"changeState",value:function(e){if(this.setState({display:e}),"Resume"!=e){var t,a,n;for(t=document.getElementsByClassName("tabcontent"),l=0;l<t.length;l++)t[l].style.display="none";for(a=document.getElementsByClassName("tablinks"),l=0;l<a.length;l++)a[l].className=a[l].className.replace(" active","");n="Projects"===e?document.getElementsByClassName("WA"):document.getElementsByClassName("110"),console.log(n);for(var l=0;l<n.length;l++)n[l].style.display="block"}}},{key:"render",value:function(){var e=this;return"Resume"==this.state.display?l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 showcaseinner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,{text:"Hayden Roeder",content1:"hroeder1@binghamton.edu",content2:"Github"}))),l.a.createElement("div",{className:"row showcaseNav"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Resume")},className:"btn btn-basic btn-block showcaseButton active"}," Resume ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Coursework")},className:"btn btn-basic btn-block showcaseButton"}," Coursework ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Projects")},className:"btn btn-basic btn-block showcaseButton"}," Projects "))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 showcaseLower"},l.a.createElement("iframe",{className:"resumeView",src:"http://haydenroeder.tk/Resume.pdf"})))):"Projects"==this.state.display?l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 showcaseinner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,{text:"Hayden Roeder",content1:"hroeder1@binghamton.edu",content2:"Github"}))),l.a.createElement("div",{className:"row showcaseNav"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Resume")},className:"btn btn-basic btn-block showcaseButton"}," Resume ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Coursework")},className:"btn btn-basic btn-block showcaseButton"}," Coursework ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Projects")},className:"btn btn-basic btn-block showcaseButton active"}," Projects "))))),l.a.createElement("div",{className:"row showcaseLower"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"QBWS")}},"Question Bank Webscraper"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"LLR")}},"Lunar Lander Redesign"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"FK")}},"HackBU 2019 Submission"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"PP")}},"Poker Project"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"AC")}},"Assembly Compiler"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,"WA")}},"Weather App"))),l.a.createElement("div",{className:"col-md-9 textLeft"},l.a.createElement("div",{id:"QBWS",className:"QBWS tabcontent",style:{display:"none"}},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Question Bank Webscraper"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"C# Visual Studio Application to collect online quiz data and develop a question bank to study from")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned methods of collecting data from the web and gained experience working in the .NET framework")),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/GeographyQuizWebScraper",text:"Github"})))),l.a.createElement("div",{id:"LLR",className:"LLR tabcontent",style:{display:"none"}},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Lunar Lander Redesign"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Python game using the PyGame library")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked on a team of three as the backend programmer. Developed a physics and positioning system so the frontend programmer only had to worry about UI and drawing sprites at their position")),l.a.createElement("li",null,l.a.createElement("p",null,"Also worked on various aspects of the game such as a highscore saver and input logic")),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/LunarLanderClone-CS110-",text:"Github"})))),l.a.createElement("div",{id:"FK",className:"FK tabcontent",style:{display:"none"}},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Fork-Knife"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"C++ linux terminal game")),l.a.createElement("li",null,l.a.createElement("p",null,'Text-based parody of Fortnite for submission into the "Funniest Hack" category of HackBU 2019')),l.a.createElement("li",null,l.a.createElement("p",null,"Worked on a team of three as the main programmer. Developed a class structure for the weapons and items in the game, as well as a prompt system for the combat in the game")),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/Fork-Knife",text:"Github"})))),l.a.createElement("div",{id:"AC",className:"AC tabcontent",style:{display:"none"}},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Assembly Compiler"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Eclipse Java Project")),l.a.createElement("li",null,l.a.createElement("p",null,"Compiles and runs basic assembly code and views the memory as it runs")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked on a team of two as the backend programmer.  Developed the systems that ran the given code such as the memory, job handling, and files")),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/CS140-Data-Structures-and-Algorithms-Java-/tree/master/project",text:"Github"})))),l.a.createElement("div",{id:"WA",className:"WA tabcontent"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Weather App")),l.a.createElement("div",{className:"row"},l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Web Application made with React")),l.a.createElement("li",null,l.a.createElement("p",null,"Project to help me learn concepts of web development as well as aworking with API's")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned how to work with JSON files as well as basic concepts of React")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/WeatherApp",text:"Github"}),l.a.createElement(d.b,{to:"/weather_app/"},l.a.createElement("button",{className:"linkButton",style:{margin:"10px",boxShadow:"none"}},"Live Demo")))))),l.a.createElement("div",{id:"PP",className:"PP tabcontent",style:{display:"none"}},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,"Poker Project"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Linux terminal program written in C")),l.a.createElement("li",null,l.a.createElement("p",null,"Reads in a file of several poker games determines the winner of each game based on each player's available hand")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked on a team of two and focused on input and output of the program")),l.a.createElement("li",null,l.a.createElement("p",null,"Created a parser that reads in hands into arrays for easier analysis later on to determine the best available hand")),l.a.createElement(h,{url:"https://github.com/HaydenRoeder1/CS220-Introduction-to-Computer-Systems--C-and-Assembly-",text:"Github"})))))),l.a.createElement("div",{className:"row showcaseLower",style:{alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{id:"WA",className:"WA tabcontent",style:{borderStyle:"solid",borderWidth:"5px",borderColor:"rgba(256,256,256,0.5)"}},l.a.createElement("img",{src:"WeatherCapture.PNG",style:{width:"100%"}})),l.a.createElement("div",{id:"AC",className:"AC tabcontent",style:{borderStyle:"solid",borderWidth:"5px",borderColor:"rgba(256,256,256,0.5)",display:"none"}},l.a.createElement("img",{src:"ACCapture.PNG",style:{width:"100%"}})),l.a.createElement("div",{id:"FK",className:"FK tabcontent",style:{borderStyle:"solid",borderWidth:"5px",borderColor:"rgba(256,256,256,0.5)",display:"none"}},l.a.createElement("img",{src:"FKCapture.PNG",style:{width:"100%"}})),l.a.createElement("div",{id:"LLR",className:"LLR tabcontent",style:{borderStyle:"solid",borderWidth:"5px",borderColor:"rgba(256,256,256,0.5)",display:"none"}},l.a.createElement("img",{src:"LLRCapture.png",style:{width:"100%"}})),l.a.createElement("div",{className:"QBWS tabcontent",style:{borderStyle:"solid",borderWidth:"5px",borderColor:"rgba(256,256,256,0.5)",display:"none"}},l.a.createElement("img",{src:"GWSCapture.PNG",style:{width:"100%"}})),l.a.createElement("div",{className:"PP tabcontent",style:{textAlign:"center",display:"none"}},l.a.createElement("h1",null,"No image available for this project")))):"Coursework"==this.state.display?l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 showcaseinner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,{text:"Hayden Roeder",content1:"hroeder1@binghamton.edu",content2:"Github"}))),l.a.createElement("div",{className:"row showcaseNav"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Resume")},className:"btn btn-basic btn-block showcaseButton"}," Resume ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Coursework")},className:"btn btn-basic btn-block showcaseButton  active"}," Coursework ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{onClick:function(){return e.changeState("Projects")},className:"btn btn-basic btn-block showcaseButton"}," Projects "))))),l.a.createElement("div",{className:"row showcaseLower"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,110)}},"CS: 110"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,120)}},"CS: 120"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,140)}},"CS: 140"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,220)}},"CS: 220"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,240)}},"CS: 240"),l.a.createElement("button",{className:"tablinks btn btn-basic btn-block showcaseButton",onClick:function(t){return e.openTab(t,380)}},"PLSC: 380j"))),l.a.createElement("div",{className:"col-md-10 textLeft"},l.a.createElement("div",{id:"380",className:"380 tabcontent",style:{display:"none"}},l.a.createElement("h4",null,"PLSC 380j: Analyzing Politics Using R"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Political science class with a data analytics focus")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned general concepts of R Studio")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned methods of analyzing datasheets to draw relavent conclusions")))),l.a.createElement("div",{id:"240",className:"240 tabcontent",style:{display:"none"}},l.a.createElement("h4",null,"CS 240: Data Structures and Algorithms"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"C++ based class to introduce the concepts of how to choose the proper algorithm or data structure for a given task")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked on multiple projects of solar system simulation designed to expose students to various data structure applications")),l.a.createElement("li",null,l.a.createElement("p",null,"Gained more advanced experience in the language of C++")))),l.a.createElement("div",{id:"220",className:"220 tabcontent",style:{display:"none"}},l.a.createElement("h4",null,"CS 220: Architecture from a Programming Perspective"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"More advanced machine architecture topics expanding from CS 120")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked more in depth in C as well as x86 assembly")),l.a.createElement("li",null,l.a.createElement("p",null,"Created a C program to determine the winner of a game of poker")),l.a.createElement("li",null,l.a.createElement("p",null,'Used GDB to analyze a compiled C program to diffuse a "bomb"')))),l.a.createElement("div",{id:"140",className:"140 tabcontent",style:{display:"none"}},l.a.createElement("h4",null,"CS 140: Programming with Objects"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Continuation of object oriented concepts from CS110")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned more advanced concepts of object oriented programming in Java")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked as the backend programmer for a simple Assembly Compiler")))),l.a.createElement("div",{id:"120",className:"120 tabcontent",style:{display:"none"}},l.a.createElement("h4",null,"CS 120: Computer Systems I: Machine Organization"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Introduction to machine architecture")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned basic circuit design for processors")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned basic MIPS Assembly as well as some C programming")))),l.a.createElement("div",{id:"110",className:"110 tabcontent"},l.a.createElement("h4",null,"CS 110: Programming Concepts and Applications"),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Introduction to programming through python.")),l.a.createElement("li",null,l.a.createElement("p",null,"Learned to program in a linux environment")),l.a.createElement("li",null,l.a.createElement("p",null,"Worked as the backend lead for a lunar lander style game on a team of 3"))))))):void 0}}]),t}(n.Component),v=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={display:"General"},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"changeState",value:function(e){this.setState({display:e})}},{key:"setRoute",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"spacer10px"}),l.a.createElement("div",{className:"main_content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col-md-3"}))))}}]),t}(n.Component)),g=a(15),f=a.n(g),N=a(20),w=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Titles"},l.a.createElement("h1",null,"Weather Finder"),l.a.createElement("p",null,"Enter a location or click on the map to find weather data"),l.a.createElement(d.b,{to:"/"},"Home"))}}]),t}(n.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.getWeather},l.a.createElement("input",{type:"text",id:"city",name:"city",placeholder:"City"}),l.a.createElement("input",{type:"text",id:"country",name:"country",placeholder:"Country"}),l.a.createElement("button",null,"Get Weather"))}}]),t}(l.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"weather-panel"},this.props.city&&this.props.country&&l.a.createElement("p",null,"Location: ",this.props.city,", ",this.props.country),this.props.temperature&&l.a.createElement("p",null,"Temperature: ",this.props.temperature,"\xb0F"),this.props.humidity&&l.a.createElement("p",null,"Humidity: ",this.props.humidity,"%"),this.props.description&&l.a.createElement("p",null,"Description: ",this.props.description),this.props.error&&l.a.createElement("p",null,"Error: ",this.props.error))}}]),t}(l.a.Component),j=a(18),S="7b2cbff8fb0099b9696399b7a954bd03",O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={markers:{position:{lat:0,lng:0},defaultAnimation:2,key:Date.now()},mapCenter:{lat:0,lng:0}},a.mapClicked=function(){var e=Object(N.a)(f.a.mark(function e(t,n,l){var r,c,o,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({markers:{position:l.latLng,defaultAnimation:2,key:Date.now()},mapCenter:n.center}),r=a.state.markers.position.lat(),c=a.state.markers.position.lng(),e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(r,"&lon=").concat(c,"&appid=").concat(S,"&units=imperial")).catch(a.setState({temperature:void 0,latitude:void 0,longitude:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Could not find data for this location"}));case 5:return o=e.sent,e.next=8,o.json();case 8:s=e.sent,a.props.getWeather(s);case 10:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(j.Map,{google:this.props.google,zoom:5,center:this.state.mapCenter,onClick:this.mapClicked},l.a.createElement(j.Marker,{onClick:this.onMarkerClick,name:"Current_location",position:this.state.markers.position}),l.a.createElement(j.InfoWindow,{onClose:this.onInfoWindowClose},l.a.createElement("div",null)))}}]),t}(l.a.Component),W=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyDWZwv9gRbdAZDUNZTP7aLkzGznybyppws"})(O),x="7b2cbff8fb0099b9696399b7a954bd03",B=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={temperature:void 0,latitude:void 0,longitude:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},e.getWeather1=function(){var t=Object(N.a)(f.a.mark(function t(a){var n,l,r,c,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,l=a.target.elements.country.value,n&&l){t.next=7;break}e.setState({temperature:void 0,latitude:void 0,longitude:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter city and country values"}),t.next=15;break;case 7:return t.next=9,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(l,"&appid=").concat(x,"&units=imperial")).catch(e.setState({temperature:void 0,latitude:void 0,longitude:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Could not find data for this location"}));case 9:return r=t.sent,t.next=12,r.json();case 12:c=t.sent,console.log(c),"404"!=c.cod&&n&&l&&(o=e.backgrounds[c.weather[0].description.replace(" ","_")],e.randStyle={background:"url(".concat(o,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e.setState({temperature:c.main.temp,latitude:c.coord.lat,longitude:c.coord.lon,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""}));case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.getWeather2=function(t){console.log(t);var a=e.backgrounds[t.weather[0].description.replace(" ","_")];e.randStyle={background:"url(".concat(a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},"404"!=t.cod&&(e.setState({temperature:t.main.temp,latitude:t.coord.lat,longitude:t.coord.lon,city:t.name,country:t.sys.country,humidity:t.main.humidity,description:t.weather[0].description,error:""}),document.getElementById("city").value=t.name,document.getElementById("country").value=t.sys.country)},e.setLocation=function(e,t){document.getElementById("city").value=e,document.getElementById("country").value=t},e.backgrounds={clear_sky:"sunny.jpg",few_clouds:"cloudy.jpg",scattered_clouds:"cloudy.jpg",broken_clouds:"cloudy.jpg",overcast_clouds:"cloudy.jpg",shower_rain:"rainy.png",rain:"rainy.png",light_rain:"rainy.png",moderate_rain:"rainy.png",heavy_rain:"rainy.jpg",thunderstorm:"storm.png",snow:"snowy.jpg",light_snow:"snowy.jpg",moderate_snow:"snowy.jpg",heavy_snow:"snowy.jpg",mist:"foggy.jpg",haze:"foggy.jpg",smoke:"foggy.jpg"},e.backgroundName=e.backgrounds.clear_sky,e.randStyle={background:"url(".concat(e.backgroundName,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:this.randStyle},l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"innerContainer"},l.a.createElement("div",{className:"row padding"}),l.a.createElement("div",{className:"row title-container"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(w,null))),l.a.createElement("div",{className:"row padding inputForm"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(k,{getWeather:this.getWeather1}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement(W,{setLocation:this.setLocation,markerLat:this.state.latitude,markerLng:this.state.longitude,getWeather:this.getWeather2}))),l.a.createElement("div",{className:"col-md-1"}),l.a.createElement("div",{className:"col-md-5"},l.a.createElement(C,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))),l.a.createElement("div",{className:"row padding"}))))))}}]),t}(n.Component),L=a(32),P=a(13),R=(a(68),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",passwordConfirmation:""},a.onChange=a.onChange.bind(Object(P.a)(Object(P.a)(a))),a.onSubmit=a.onSubmit.bind(Object(P.a)(Object(P.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(L.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log(this.state.username,this.state.password)}},{key:"render",value:function(){return l.a.createElement("div",{className:"row signup-background"},l.a.createElement("div",{className:"signup-form"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("h1",null,"Create an account"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"control-label"},"Email:"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("input",{name:"email",className:"form-control",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"col-md-4"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"control-label"},"Password:"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("input",{name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})),l.a.createElement("div",{className:"col-md-4"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"control-label"},"Confirm Password:"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("input",{name:"passwordConfirmation",className:"form-control",value:this.state.passwordConfirmation,onChange:this.onChange})),l.a.createElement("div",{className:"col-md-4"})),l.a.createElement("div",{style:{minHeight:"10px"}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",null," Signup ")),l.a.createElement("div",{className:"col-md-4"}))))))}}]),t}(n.Component)),A=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"LoginForm"})}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,{path:"/",exact:!0,component:v}),l.a.createElement(p.a,{path:"/weather_app/",component:B}),l.a.createElement(p.a,{path:"/login/",component:A}),l.a.createElement(p.a,{path:"/signup/",component:R}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.f5457359.chunk.js.map