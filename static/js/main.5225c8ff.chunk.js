(this.webpackJsonpmacrofibras=this.webpackJsonpmacrofibras||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/piso_industrial.c57d982a.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/capas_compresion.4956a05f.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/losas_cimentacion.e31835d3.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/muro_concreto.9be71f0d.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/prefabricados.a8bc6a08.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/malla.f08dcba9.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/varilla.da04727b.jpg"},32:function(e,a,t){e.exports=t(48)},38:function(e,a,t){},44:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=t(6),i=(t(37),t(38),t(12)),m=t(11);var s=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"CALCULADORA DE"),r.a.createElement("h2",null,r.a.createElement(o.c,{to:"/"},"MACROFIBRAS DE CONCRETO")),r.a.createElement("p",null,"Instituto Mexicano del Cemento y del Concreto A.C."),r.a.createElement("hr",null),r.a.createElement("h3",null,e.tituloEstructura))},u=t(14);var E=function(e){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(o.c,{to:"/seleccionar-estructura"},r.a.createElement(u.a,{variant:"dark",className:"mt-3"},"SELECCIONAR ESTRUCTURA")))},p=t(13);var d=function(e){return r.a.createElement(o.c,{to:"".concat(e.enlace,"/").concat(e.nombre)},r.a.createElement("div",{className:"secciones"},r.a.createElement(p.a,{src:e.imagen,alt:"Logo",roundedCircle:!0,fluid:!0}),r.a.createElement("h2",null,e.nombre)))};t(44);var f=function(e){return r.a.createElement("div",{className:"wpestructuras"},r.a.createElement(s,{tituloEstructura:e.tituloEstructura}),r.a.createElement("hr",null),r.a.createElement("div",{className:"estructuras"},e.secciones.map((function(e,a){return r.a.createElement(d,{key:a,nombre:e.nombre,imagen:e.imagen,enlace:"/tipo-de-acero"})}))))};var v=function(e){return r.a.createElement(o.c,{to:{pathname:"".concat(e.enlace,"/").concat(e.nombre,"/").concat(e.eltipo),laimagen:e.imagen}},r.a.createElement("div",{className:"secciones"},r.a.createElement(p.a,{src:e.imagen,alt:"Logo",roundedCircle:!0,fluid:!0}),r.a.createElement("h2",null,e.nombre)))};var b=function(e){return r.a.createElement("div",{className:"wpestructuras"},r.a.createElement(s,{tituloEstructura:e.titulo}),r.a.createElement("h2",{style:{color:"#ea8823"}},e.match.params.tipo),r.a.createElement("hr",null),r.a.createElement("div",{className:"estructuras"},e.tipoAcero.map((function(a,t){return r.a.createElement(v,{key:t,nombre:a.nombre,imagen:a.imagen,enlace:"/calcular",eltipo:e.match.params.tipo})}))))},A=t(9);var g=function(e){var a=e.match.params,t=a.eltipo,n=a.acero;return r.a.createElement("div",{className:"wpestructuras"},r.a.createElement(s,{tituloEstructura:e.titulo}),r.a.createElement("h2",{style:{color:"#dedede"}},t),r.a.createElement("h2",{style:{color:"#ea8823"}},n),r.a.createElement("hr",null),r.a.createElement("div",{className:"calcular"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(A.a,null,r.a.createElement(A.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(A.a.Label,null,"SELECCIONE TIPO DE MAYA ELECTROSOLDADA:"),r.a.createElement(A.a.Control,{as:"select",onChange:e.tipoMalla},r.a.createElement("option",{value:"61"},"Malla 6 x 6 - 10/10"),r.a.createElement("option",{value:"87"},"Malla 6 x 6 - 08/08"),r.a.createElement("option",{value:"123"},"Malla 6 x 6 - 06/06"),r.a.createElement("option",{value:"169"},"Malla 6 x 6 - 04/04"),r.a.createElement("option",{value:"198"},"Malla 6 x 6 - 03/03"),r.a.createElement("option",{value:"228"},"Malla 6 x 6 - 02/02"))))),r.a.createElement("div",{style:{width:"100%"}},e.valorAcero?r.a.createElement("div",null,r.a.createElement("h2",null,"\xc1rea de acero en mm",r.a.createElement("sup",null,"2"),"/m"),r.a.createElement("h5",{style:{fontWeight:"bold",fontSize:"2em"}},e.valorAcero),r.a.createElement(A.a,{onSubmit:e.calcularDosificacion},r.a.createElement(A.a.Group,{controlId:"formBasicEspesor"},r.a.createElement(A.a.Control,{name:"espesor",type:"number",placeholder:"Ingresar espesor de la LOSA en cm"})),r.a.createElement(A.a.Group,{controlId:"formBasicResistencia"},r.a.createElement(A.a.Control,{name:"resistencia",type:"number",placeholder:"Ingresar resistencia a la compresi\xf3n del concreto en Kg/cm2"})),r.a.createElement(u.a,{variant:"primary",type:"submit"},"CALCULAR"))):"")))},h=t(25),O=t.n(h),C=t(26),R=t.n(C),S=t(27),I=t.n(S),L=t(28),D=t.n(L),x=t(29),N=t.n(x),j=t(30),M=t.n(j),T=t(31),y=t.n(T);t(47);var U=function(){var e=Object(n.useState)("\xbfQUE TIPO DE ESTRUCTURA VA A ELABORAR?"),a=Object(i.a)(e,1)[0],t=Object(n.useState)(),c=Object(i.a)(t,2),l=c[0],s=c[1],u=Object(n.useState)(0),p=Object(i.a)(u,2),d=p[0],v=p[1],A=Object(n.useState)(),h=Object(i.a)(A,2),C=(h[0],h[1],[{nombre:"PISO INDUSTRIAL",imagen:O.a},{nombre:"CAPAS DE COMPRESI\xd3N",imagen:R.a},{nombre:"LOSAS DE CIMENTACI\xd3N",imagen:I.a},{nombre:"MUROS DE CONCRETO",imagen:D.a},{nombre:"ELEMENTOS PREFABRICADOS",imagen:N.a}]),S=[{nombre:"MALLA ELECTROSOLDADA",imagen:M.a},{nombre:"VARILLA",imagen:y.a}],L=function(e){e.preventDefault()},x=function(e){e.preventDefault(),s(e.target.value)},j=function(e){e.preventDefault(),v(e.target.espesor.value),console.log("espesor "+d)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(o.b,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:function(e){return r.a.createElement(E,Object.assign({seleccionarEstructura:L},e))}}),r.a.createElement(m.a,{exact:!0,path:"/seleccionar-estructura",component:function(e){return r.a.createElement(f,Object.assign({tituloEstructura:a,secciones:C},e))}}),r.a.createElement(m.a,{exact:!0,path:"/tipo-de-acero/:tipo",component:function(e){return r.a.createElement(b,Object.assign({titulo:"\xbfQUE TIPO DE ACERO DE REFUERZO QUEREMOS SUSTITUIR?",tipoAcero:S},e))}}),r.a.createElement(m.a,{exact:!0,path:"/calcular/:acero/:eltipo",component:function(e){return r.a.createElement(g,Object.assign({tipoMalla:x,valorAcero:l,calcularDosificacion:j},e))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5225c8ff.chunk.js.map