import{x as F,z as E,A as U,B as j,G as w,p as C,n as I,C as P,H as N,I as k,l as A,J as D,o as b,a as g,b as n,g as t,w as R,d as l,F as S,K as h,j as s}from"./index-b831aced.js";import{u as T}from"./index-3395c5ac.js";function _(){const v=F(),p=E(v,`/imagenes/${T()}.jpg`),{url:i,upload:c,metadata:V}=U(p);function f(m){const e=m.target.files;e&&c(e)}const r=j(()=>i.value?i.value:null);return{url:i,uploadImage:f,isThereImage:r}}const B=n("div",{class:"header-container container mx-auto"},[n("h1",{class:"text-lg md:text-3xl font-bold uppercase text-center my-4"}," Formulario de Registro de Personal "),n("p",{class:"text-center mb-2"},"Ingresa la información en el formulario")],-1),$={class:"form w-[90%] container mx-auto"},z={key:0},G=n("p",null,"Fotografía Actual:",-1),M=["src"],O={key:1},q=n("p",null,"Fotografía Actual",-1),H=["src"],L={__name:"EditPersonalView",setup(v){const{uploadImage:p,isThereImage:i}=_(),c=w(),V=C(),f=I(),r=P(f,"teachers",c.params.id),m=N(r),e=k({}),x=A(["Seleccionar Puesto","Niñera","Cocinera","Limpieza","Maestra"]);D(m,u=>{Object.assign(e,u)});const y=async u=>{const{photo:a,...d}=u;if(i.value){const o={...d,photo:i.value};await h(r,o)}else{const o={...d};await h(r,o)}V.push({name:"manage"})};return(u,a)=>(b(),g(S,null,[B,n("div",$,[t(l(s),{type:"form",actions:!1,"incomplete-message":"Parece que el formulario no tiene los datos esperados, revisa todos los campos",onSubmit:y},{default:R(()=>{var d;return[t(l(s),{name:"nombres",type:"text",label:"Nombres: ","prefix-icon":"people",modelValue:e.nombres,"onUpdate:modelValue":a[0]||(a[0]=o=>e.nombres=o)},null,8,["modelValue"]),t(l(s),{name:"apellidos",type:"text",label:"Apellidos: ","prefix-icon":"people",modelValue:e.apellidos,"onUpdate:modelValue":a[1]||(a[1]=o=>e.apellidos=o)},null,8,["modelValue"]),t(l(s),{name:"phone",type:"tel",label:"Teléfono: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live",modelValue:e.phone,"onUpdate:modelValue":a[2]||(a[2]=o=>e.phone=o)},null,8,["modelValue"]),t(l(s),{type:"email",name:"email",label:"Correo Electrónico de la Madre: ","prefix-icon":"email",validation:"email","validation-messages":{email:"El correo electrónico no es válido"},placeholder:"correo@dominio.com","validation-visibility":"live",modelValue:e.email,"onUpdate:modelValue":a[3]||(a[3]=o=>e.email=o)},null,8,["modelValue"]),t(l(s),{type:"tel",name:"phone",label:"Teléfono de Emergencias: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live",modelValue:e.phone,"onUpdate:modelValue":a[4]||(a[4]=o=>e.phone=o)},null,8,["modelValue"]),t(l(s),{type:"file",name:"photo",label:"Foto: ","prefix-icon":"people",accept:".jpg, .jpeg, .png",multiple:"false",onChange:l(p),modelValue:e.photo,"onUpdate:modelValue":a[5]||(a[5]=o=>e.photo=o)},null,8,["onChange","modelValue"]),n("div",null,[l(i)?(b(),g("div",z,[G,n("img",{src:l(i),alt:"Fotografía Actual",class:"w-48 h-48 rounded-full object-cover border-2 border-green-300 my-4"},null,8,M)])):(b(),g("div",O,[q,n("img",{src:(d=l(m))==null?void 0:d.photo,alt:"Nueva Fotografía",class:"w-48 h-48 rounded-full object-cover border-2 border-green-300 my-4"},null,8,H)]))]),t(l(s),{name:"birthdate",type:"date",label:"Fecha de Nacimiento: ","prefix-icon":"tools",modelValue:e.birthdate,"onUpdate:modelValue":a[6]||(a[6]=o=>e.birthdate=o)},null,8,["modelValue"]),t(l(s),{name:"address",type:"text",label:"Dirección: ","prefix-icon":"tools",modelValue:e.address,"onUpdate:modelValue":a[7]||(a[7]=o=>e.address=o)},null,8,["modelValue"]),t(l(s),{name:"puesto",type:"select",label:"Puesto: ","prefix-icon":"tools",options:x.value,modelValue:e.puesto,"onUpdate:modelValue":a[8]||(a[8]=o=>e.puesto=o)},null,8,["options","modelValue"]),t(l(s),{type:"textarea",label:"Observaciones: ","prefix-icon":"tools",name:"observations",modelValue:e.observations,"onUpdate:modelValue":a[9]||(a[9]=o=>e.observations=o)},null,8,["modelValue"]),t(l(s),{type:"submit",label:"Guardar Datos del Personal","prefix-icon":"tools"})]}),_:1})])],64))}};export{L as default};
