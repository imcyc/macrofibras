(this.webpackJsonpmacrofibras=this.webpackJsonpmacrofibras||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/LOGOTexto.bd4cd77f.svg"},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo-imcyc.8d68c4d6.svg"},,,function(e,a,t){e.exports=t.p+"static/media/calculadora2020.51673e32.png"},,function(e,a,t){e.exports=t.p+"static/media/piso_industrial.c57d982a.jpg"},function(e,a,t){e.exports=t.p+"static/media/capas_compresion.9b2b7ed0.jpg"},function(e,a,t){e.exports=t.p+"static/media/losas_cimentacion.e31835d3.jpg"},function(e,a,t){e.exports=t.p+"static/media/muro_concreto.9be71f0d.jpg"},function(e,a,t){e.exports=t.p+"static/media/prefabricados.a8bc6a08.jpg"},function(e,a,t){e.exports=t.p+"static/media/malla.f08dcba9.jpg"},function(e,a,t){e.exports=t.p+"static/media/varilla.da04727b.jpg"},function(e,a,t){e.exports=t(52)},,,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),o=t(6),m=(t(40),t(41),t(8)),i=t(12);t(23);var u=t(26),s=t.n(u);var E=function(e){return l.a.createElement("div",null,l.a.createElement(o.c,{to:"/seleccionar-estructura"},l.a.createElement("img",{src:s.a,alt:"Logo",style:{width:"100%"}})))},p=t(13),d=t.n(p),v=t(14);var g=function(e){return l.a.createElement(o.c,{to:"".concat(e.enlace,"/").concat(e.nombre)},l.a.createElement("div",{className:"secciones"},l.a.createElement(v.a,{src:e.imagen,alt:"Logo",roundedCircle:!0,fluid:!0}),l.a.createElement("h2",null,e.nombre)))};t(47);var b=function(e){return l.a.createElement("div",{className:"wpestructuras"},l.a.createElement("hr",null),l.a.createElement("img",{src:d.a,alt:"Logo",style:{width:"90%"}}),l.a.createElement("div",{className:"estructuras"},e.secciones.map((function(e,a){return l.a.createElement(g,{key:a,nombre:e.nombre,imagen:e.imagen,enlace:"/tipo-de-acero"})}))))};var f=function(e){return l.a.createElement(o.c,{to:{pathname:"".concat(e.enlace,"/").concat(e.nombre,"/").concat(e.eltipo),laimagen:e.imagen}},l.a.createElement("div",{className:"secciones"},l.a.createElement(v.a,{src:e.imagen,alt:"Logo",roundedCircle:!0,fluid:!0}),l.a.createElement("h2",null,e.nombre)))};var A=function(e){return l.a.createElement("div",{className:"wpestructuras"},l.a.createElement("img",{src:d.a,alt:"Logo",className:"mb-3 mt-3",style:{width:"90%"}}),l.a.createElement("h2",{style:{color:"#ea8823"}},e.match.params.tipo),l.a.createElement("hr",null),l.a.createElement("div",{className:"estructuras"},e.tipoAcero.map((function(a,t){return l.a.createElement(f,{key:t,nombre:a.nombre,imagen:a.imagen,enlace:"/calcular",eltipo:e.match.params.tipo})}))))},h=t(15),C=t(5);t(48);var O=function(e){var a=e.match.params,t=a.eltipo,r=a.acero,c=Object(n.useState)(0),i=Object(m.a)(c,2),u=i[0],s=i[1],E=Object(n.useState)(0),p=Object(m.a)(E,2),v=p[0],g=p[1],b=Object(n.useState)(0),f=Object(m.a)(b,2),A=f[0],O=f[1],S=Object(n.useState)(0),I=Object(m.a)(S,2),N=I[0],R=I[1],L=Object(n.useState)(0),j=Object(m.a)(L,2),y=j[0],x=j[1],M=Object(n.useState)(0),D=Object(m.a)(M,2),T=D[0],F=D[1];return Object(n.useEffect)((function(){F(e.tipoSeparacion)})),l.a.createElement("div",{className:"wpestructuras"},l.a.createElement(o.c,{to:"/"},l.a.createElement("img",{src:d.a,alt:"Logo",className:"mb-3 mt-3",style:{width:"90%"}})),l.a.createElement("h2",{style:{color:"#dedede"}},t),l.a.createElement("h2",{style:{color:"#ea8823"}},r),l.a.createElement("hr",null),l.a.createElement("div",{className:"calcular"},l.a.createElement("div",{style:{width:"100%"}},"VARILLA"===r?l.a.createElement(C.a,null,e.valorVarilla?l.a.createElement("div",null,l.a.createElement("h2",{style:{fontWeight:"100"}},l.a.createElement("i",{className:"lni-check-mark-circle"})," VARILLA SELECCIONADA:",l.a.createElement("br",null),l.a.createElement("span",{style:{color:"#fff",fontSize:"1em",fontWeight:"800"}},"# ",e.valorVarilla)),l.a.createElement("hr",null)):l.a.createElement(C.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(C.a.Label,{className:"mb-3"},l.a.createElement("b",null,"SELECCIONE TIPO DE VARILLA:")),l.a.createElement(C.a.Control,{as:"select",onChange:e.tipoVarilla},l.a.createElement("option",null,"SELECCIONAR"),l.a.createElement("option",{value:"3"},"VAR #3 [3/8]"),l.a.createElement("option",{value:"4"},"VAR #4 [1/2]"),l.a.createElement("option",{value:"5"},"VAR #5 [5/8]"),l.a.createElement("option",{value:"6"},"VAR #6 [3/4]")))):l.a.createElement(C.a,null,l.a.createElement(C.a.Group,{controlId:"exampleForm.ControlSelect2"},l.a.createElement(C.a.Label,{className:"mb-3"},l.a.createElement("b",null,"SELECCIONE TIPO DE MALLA ELECTROSOLDADA:")),l.a.createElement(C.a.Control,{as:"select",onChange:e.tipoMalla},l.a.createElement("option",null,"SELECCIONAR"),l.a.createElement("option",{value:"61"},"Malla 6 x 6 - 10/10"),l.a.createElement("option",{value:"87"},"Malla 6 x 6 - 08/08"),l.a.createElement("option",{value:"123"},"Malla 6 x 6 - 06/06"),l.a.createElement("option",{value:"169"},"Malla 6 x 6 - 04/04"),l.a.createElement("option",{value:"198"},"Malla 6 x 6 - 03/03"),l.a.createElement("option",{value:"228"},"Malla 6 x 6 - 02/02")))),e.valorVarilla?l.a.createElement(C.a,null,e.tipoSeparacion?l.a.createElement("div",null,l.a.createElement("h2",{style:{fontWeight:"100"}},l.a.createElement("i",{className:"lni-check-mark-circle"})," SEPARACI\xd3N DEL EMPARRILLADO DE:",l.a.createElement("br",null),l.a.createElement("span",{style:{color:"#fff",fontSize:"1em",fontWeight:"800"}},e.valorEmparrillado," cm")),l.a.createElement("hr",null)):l.a.createElement(C.a.Group,{controlId:"exampleForm.ControlSelect3"},l.a.createElement(C.a.Label,{className:"mb-3"},l.a.createElement("b",null,"SELECCIONE SEPARACI\xd3N DEL EMPARRILLADO EN CM:")),l.a.createElement(C.a.Control,{as:"select",onChange:e.tipoSeparacionValor},l.a.createElement("option",null,"SELECCIONAR"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"30"},"30"),l.a.createElement("option",{value:"35"},"35")))):""),l.a.createElement("div",{style:{width:"100%"}},e.valorAcero?l.a.createElement("div",null,l.a.createElement("h2",null,"\xc1rea de acero en mm",l.a.createElement("sup",null,"2"),"/m:"),l.a.createElement("h5",{style:{fontWeight:"bold",fontSize:"2em"}},e.valorAcero),0===N?l.a.createElement(C.a,{onSubmit:function(a){a.preventDefault();var t=(Number(e.valorAcero)/Number(u)*100/1e5).toFixed(7),n=(491*Number(t)/(6*Math.sqrt(v/10))*100).toFixed(2);O(n),R((e.valorAcero/Number(u)*100/1e6).toFixed(7)),n>0&&n<=9?x("1.0"):n>9&&n<=15?x("1.6"):n>15&&n<=20?x("2.0"):n>20&&n<=25?x("2.5"):n>25&&n<=30?x("3.0"):n>30&&n<=35?x("3.5"):n>35&&n<=40?x("4.0"):n>40&&n<=45?x("4.5"):n>45&&n<=50?x("5.0"):n>50&&n<=55?x("5.5"):n>55&&n<=60?x("6.0"):n>60&&n<=65?x("6.5"):n>65&&n<=70?x("7.0"):n>70&&n<=75?x("7.5"):n>75&&n<=80?x("8.0"):n>80&&n<=85?x("8.5"):n>85&&n<=90?x("9.0"):n>90&&n<=95?x("9.5"):n>95&&n<=100?x("10.0"):n>100&&n<=105?x("10.5"):n>105&&n<=110?x("11.0"):n>110&&n<=115?x("11.5"):n>115&&n<=120&&x("12.0")}},l.a.createElement(C.a.Group,{controlId:"formBasicEspesor"},l.a.createElement(C.a.Control,{name:"espesor",type:"number",placeholder:"Espesor del elemento en cm",onChange:function(e){return s(e.target.value)}})),l.a.createElement(C.a.Group,{controlId:"formBasicResistencia"},l.a.createElement(C.a.Control,{name:"resistencia",type:"number",placeholder:"Ingresar f'c en Kg/cm2",onChange:function(e){return g(e.target.value)}})),l.a.createElement(h.a,{variant:"primary",type:"submit"},"CALCULAR")):l.a.createElement("div",null,l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("h3",null,"RESISTENCIA RESIDUAL NMX C-535"),l.a.createElement("h1",null,A," %")),l.a.createElement("div",null,l.a.createElement("h3",null,"DOSIFICACI\xd3N MACROFIBRAS"),l.a.createElement("h1",null,y," kg/m",l.a.createElement("sup",null,"3")))),l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("h2",null,"NOTAS IMPORTANTES"),l.a.createElement("p",null,"Estas dosificaciones corresponden a MACROFIBRAS validadas por su ingenier\xeda y desempe\xf1o ductil por los laboratorios del Instituto Mexicano del Cemento y del Concreto, A.C. en el periodo 2016-2018."))),l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("p",null,"Est\xe1s MACROFIBRAS deben cumplir con una eficiencia espacial de la fibra de 0.0395 a 0.0506 en 0.25% del vol. y de 0.3511 a 0.4119 en 0.50% del vol\xfamen del concreto."))))):"",T>0?l.a.createElement("div",null,l.a.createElement("h2",null,"\xc1rea de acero en mm",l.a.createElement("sup",null,"2"),"/m:"),l.a.createElement("h5",{style:{fontWeight:"bold",fontSize:"2em"}},T),0===N?l.a.createElement(C.a,{onSubmit:function(a){a.preventDefault();var t=(Number(e.tipoSeparacion)/Number(u)*100/1e5).toFixed(7);console.log("elresuni: "+t);var n=(412*Number(t)/(6*Math.sqrt(v))*100).toFixed(2);O(n),R((e.valorAcero/Number(u)*100/1e6).toFixed(7)),n>0&&n<=9?x("1.0"):n>9&&n<=15?x("1.6"):n>15&&n<=20?x("2.0"):n>20&&n<=25?x("2.5"):n>25&&n<=30?x("3.0"):n>30&&n<=35?x("3.5"):n>35&&n<=40?x("4.0"):n>40&&n<=45?x("4.5"):n>45&&n<=50?x("5.0"):n>50&&n<=55?x("5.5"):n>55&&n<=60?x("6.0"):n>60&&n<=65?x("6.5"):n>65&&n<=70?x("7.0"):n>70&&n<=75?x("7.5"):n>75&&n<=80?x("8.0"):n>80&&n<=85?x("8.5"):n>85&&n<=90?x("9.0"):n>90&&n<=95?x("9.5"):n>95&&n<=100?x("10.0"):n>100&&n<=105?x("10.5"):n>105&&n<=110?x("11.0"):n>110&&n<=115?x("11.5"):n>115&&n<=120&&x("12.0")}},l.a.createElement(C.a.Group,{controlId:"formBasicEspesor"},l.a.createElement(C.a.Control,{name:"espesor",type:"number",placeholder:"Espesor del elemento en cm",onChange:function(e){return s(e.target.value)}})),l.a.createElement(C.a.Group,{controlId:"formBasicResistencia"},l.a.createElement(C.a.Control,{name:"resistencia",type:"number",placeholder:"Ingresar f'c en Kg/cm2",onChange:function(e){return g(e.target.value)}})),l.a.createElement(h.a,{variant:"primary",type:"submit"},"CALCULAR")):l.a.createElement("div",null,l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("h3",null,"RESISTENCIA RESIDUAL NMX C-535"),l.a.createElement("h1",null,A," %")),l.a.createElement("div",null,l.a.createElement("h3",null,"DOSIFICACI\xd3N MACROFIBRAS"),l.a.createElement("h1",null,y," kg/m",l.a.createElement("sup",null,"3")))),l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("h2",null,"NOTAS IMPORTANTES"),l.a.createElement("p",null,"Estas dosificaciones corresponden a MACROFIBRAS validadas por su ingenier\xeda y desempe\xf1o ductil por los laboratorios del Instituto Mexicano del Cemento y del Concreto, A.C. en el periodo 2016-2018."))),l.a.createElement("div",{className:"resultados"},l.a.createElement("div",null,l.a.createElement("p",null,"Est\xe1s MACROFIBRAS deben cumplir con una eficiencia espacial de la fibra de 0.0395 a 0.0506 en 0.25% del vol. y de 0.3511 a 0.4119 en 0.50% del vol\xfamen del concreto."))))):"")))},S=t(28),I=t.n(S),N=t(29),R=t.n(N),L=t(30),j=t.n(L),y=t(31),x=t.n(y),M=t(32),D=t.n(M),T=t(33),F=t.n(T),w=t(34),V=t.n(w);t(51);var B=function(){var e=Object(n.useState)("\xbfQUE TIPO DE ESTRUCTURA VA A ELABORAR?"),a=Object(m.a)(e,1)[0],t=Object(n.useState)(),r=Object(m.a)(t,2),c=r[0],u=r[1],s=Object(n.useState)(),p=Object(m.a)(s,2),d=p[0],v=p[1],g=Object(n.useState)(),f=Object(m.a)(g,2),h=f[0],C=f[1],S=Object(n.useState)(),N=Object(m.a)(S,2),L=N[0],y=N[1],M=[{nombre:"PISO INDUSTRIAL",imagen:I.a},{nombre:"CAPAS DE COMPRESI\xd3N",imagen:R.a},{nombre:"LOSAS DE CIMENTACI\xd3N",imagen:j.a},{nombre:"MUROS DE CONCRETO",imagen:x.a},{nombre:"ELEMENTOS PREFABRICADOS",imagen:D.a}],T=[{nombre:"MALLA ELECTROSOLDADA",imagen:F.a},{nombre:"VARILLA",imagen:V.a}],w=function(e){e.preventDefault()},B=function(e){e.preventDefault(),u(e.target.value)},P=function(e){e.preventDefault(),v(e.target.value)},U=function(e){e.preventDefault(),C(e.target.value),3==d&&15==e.target.value?y(473):3==d&&20==e.target.value?y(355):3==d&&25==e.target.value?y(284):3==d&&30==e.target.value?y(237):3==d&&35==e.target.value?y(203):4==d&&15==e.target.value?y(847):4==d&&20==e.target.value?y(635):4==d&&25==e.target.value?y(508):4==d&&30==e.target.value?y(423):4==d&&35==e.target.value?y(363):5==d&&15==e.target.value?y(1320):5==d&&20==e.target.value?y(990):5==d&&25==e.target.value?y(792):5==d&&30==e.target.value?y(660):5==d&&35==e.target.value?y(566):6==d&&15==e.target.value?y(1900):6==d&&20==e.target.value?y(1425):6==d&&25==e.target.value?y(1140):6==d&&30==e.target.value?y(950):6==d&&35==e.target.value&&y(814)};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(o.b,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:function(e){return l.a.createElement(E,Object.assign({seleccionarEstructura:w},e))}}),l.a.createElement(i.a,{exact:!0,path:"/seleccionar-estructura",component:function(e){return l.a.createElement(b,Object.assign({tituloEstructura:a,secciones:M},e))}}),l.a.createElement(i.a,{exact:!0,path:"/tipo-de-acero/:tipo",component:function(e){return l.a.createElement(A,Object.assign({titulo:"\xbfQUE TIPO DE ACERO DE REFUERZO QUEREMOS SUSTITUIR?",tipoAcero:T},e))}}),l.a.createElement(i.a,{exact:!0,path:"/calcular/:acero/:eltipo",component:function(e){return l.a.createElement(O,Object.assign({tipoMalla:B,valorAcero:c,tipoVarilla:P,valorVarilla:d,tipoSeparacionValor:U,tipoSeparacion:L,valorEmparrillado:h},e))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[35,1,2]]]);
//# sourceMappingURL=main.bd1c5d99.chunk.js.map