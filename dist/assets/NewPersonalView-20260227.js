import{p as f,n as b,l as h,o as r,a as s,b as a,g as o,w as g,d as e,F as x,q as y,s as q,j as i,f as _}from"./index-b831aced.js";import{u as E}from"./usePersonal-4ae890e6.js";import"./index-3395c5ac.js";const F=a("div",{class:"header-container container mx-auto"},[a("h1",{class:"text-lg md:text-3xl font-bold uppercase text-center my-4"}," Formulario de Registro de Personal "),a("p",{class:"text-center mb-2"},"Ingresa la información en el formulario")],-1),P={class:"form w-[90%] container mx-auto"},w={key:0},C=a("p",null,"Fotografía",-1),N=["src"],V={__name:"NewPersonalView",setup(j){const{isThereImage:t,uploadImage:n}=E(),d=f(),c=b(),m=h(["Seleccionar Puesto","Niñera","Cocinera","Limpieza","Maestra"]),p=async l=>{const{photo:u,...v}=l;(await y(q(c,"personal"),{...v,photo:t.value})).id&&d.push({name:"manage"})};return(l,u)=>(r(),s(x,null,[F,a("div",P,[o(e(i),{type:"form",actions:!1,"incomplete-message":"Parece que el formulario no tiene los datos esperados, revisa todos los campos",onSubmit:p},{default:g(()=>[o(e(i),{name:"nombres",type:"text",label:"Nombres: ","prefix-icon":"people",validation:"required","validation-messages":{required:"El nombre es requerido"},"validation-visibility":"live"}),o(e(i),{name:"apellidos",type:"text",label:"Apellidos: ","prefix-icon":"people",validation:"required","validation-messages":{required:"El apellido es requerido"},"validation-visibility":"live"}),o(e(i),{name:"phone",type:"tel",label:"Teléfono: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live"}),o(e(i),{type:"email",name:"email",label:"Correo Electrónico: ","prefix-icon":"email",validation:"required|email","validation-messages":{required:"El correo electrónico es requerido",email:"El correo electrónico no es válido"},placeholder:"correo@dominio.com","validation-visibility":"live"}),o(e(i),{type:"tel",name:"phoneemergency",label:"Teléfono de Emergencias: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live"}),o(e(i),{type:"file",name:"photo",label:"Foto: ","prefix-icon":"people",accept:".jpg, .jpeg, .png",multiple:"false",validation:"required","validation-messages":{required:"La foto es requerida"},onChange:e(n)},null,8,["onChange"]),e(t)?(r(),s("div",w,[C,a("img",{class:"w-48 h-48 rounded-full object-cover border-spacing-6 border-2 my-4 ring-4 ring-green-300",src:e(t),alt:"Fotografía"},null,8,N)])):_("",!0),o(e(i),{name:"birthdate",type:"date",label:"Fecha de Nacimiento: ","prefix-icon":"tools",validation:"required","validation-messages":{required:"La fecha de nacimiento es requerida"},"validation-visibility":"live"}),o(e(i),{name:"address",type:"text",label:"Dirección: ","prefix-icon":"tools",validation:"required","validation-messages":{required:"La dirección es requerida"},"validation-visibility":"live"}),o(e(i),{name:"puesto",type:"select",label:"Puesto: ","prefix-icon":"tools",placeholder:"Seleccionar Puesto",options:m.value,validation:"required","validation-messages":{required:"El puesto es requerido"},"validation-visibility":"live"},null,8,["options"]),o(e(i),{type:"textarea",label:"Observaciones: ","prefix-icon":"tools",name:"observations"}),o(e(i),{type:"submit",label:"Guardar Datos del Personal","prefix-icon":"tools"})]),_:1})])],64))}};export{V as default};
