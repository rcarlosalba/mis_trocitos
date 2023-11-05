import{l as r,n as h,p as g,o as n,a as s,b as o,g as i,w as y,d as e,F as q,q as x,s as E,j as a,f as _}from"./index-b831aced.js";import{u as C}from"./useStudents-b51574c6.js";import"./index-3395c5ac.js";const N=o("div",{class:"header-container container mx-auto"},[o("h1",{class:"text-lg md:text-3xl font-bold uppercase text-center my-4"}," Formulario de Registro de Estudiantes "),o("p",{class:"text-center mb-2"},"Ingresa la información en el formulario")],-1),j={class:"form w-[90%] container mx-auto"},F={key:0},S=o("p",null,"Fotografía Actual:",-1),w=["src"],T={__name:"NewStudentView",setup(M){const d=r(["Nursery","Kinder","Prepa"]),c=r(["Zona 7","Zona 10"]),m=h(),u=g(),{isThereImage:t,uploadImage:p}=C(),v=async l=>{const{photostudent:b,...f}=l;(await x(E(m,"students"),{...f,photostudent:t.value})).id&&u.push({name:"manage"})};return(l,b)=>(n(),s(q,null,[N,o("div",j,[i(e(a),{type:"form",actions:!1,"incomplete-message":"Parece que el formulario no tiene los datos esperados, revisa todos los campos",onSubmit:v},{default:y(()=>[i(e(a),{name:"mothername",type:"text",label:"Nombre Completo de la Madre: ","prefix-icon":"avatarWoman",validation:"required","validation-messages":{required:"El nombre es requerido"},"validation-visibility":"live"}),i(e(a),{name:"phonemother",type:"tel",label:"Teléfono de la Madre: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live"}),i(e(a),{type:"email",label:"Correo Electrónico de la Madre: ",name:"emailmother","prefix-icon":"email",validation:"required|email","validation-messages":{required:"El correo electrónico es requerido",email:"El correo electrónico no es válido"},placeholder:"correo@dominio.com","validation-visibility":"live"}),i(e(a),{name:"fathername",type:"text",label:"Nombre Completo del Padre: ","prefix-icon":"avatarMan",validation:"required","validation-messages":{required:"El nombre es requerido"},"validation-visibility":"live"}),i(e(a),{name:"phonefather",type:"tel",label:"Teléfono del Padre: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live"}),i(e(a),{type:"email",label:"Correo Electrónico del Padre: ",name:"emailfather","prefix-icon":"email",validation:"required|email","validation-messages":{required:"El correo electrónico es requerido",email:"El correo electrónico no es válido"},placeholder:"correo@dominio.com","validation-visibility":"live"}),i(e(a),{name:"handlename",type:"text",label:"Nombre Completo de la persona encagada: ","prefix-icon":"star",validation:"required","validation-messages":{required:"El nombre es requerido"},"validation-visibility":"live"}),i(e(a),{type:"tel",name:"phonehandle",label:"Teléfono de Emergencias: ","prefix-icon":"telephone",placeholder:"Ej: 5555-5555",validation:"matches:/^[0-9]{4}-[0-9]{4}$/","validation-messages":{matches:"El teléfono debe tener el formato 5555-5555"},"validation-visibility":"live"}),i(e(a),{type:"file",label:"Foto del Estudiante: ","prefix-icon":"people",accept:".jpg, .jpeg, .png",multiple:"false",validation:"required",name:"photostudent","file-size":"2MB","validation-messages":{required:"La foto del estudiante es obligatoria"},"validation-visibility":"submit",onChange:e(p)},null,8,["onChange"]),e(t)?(n(),s("div",F,[S,o("img",{class:"w-48 h-48 rounded-full object-cover border-spacing-6 border-2 my-4 ring-4 ring-green-300",src:e(t),alt:"Fotografía Actual"},null,8,w)])):_("",!0),i(e(a),{name:"namestudent",type:"text",label:"Nombres: ","prefix-icon":"tools",validation:"required","validation-messages":{required:"El nombre es requerido"},"validation-visibility":"live"}),i(e(a),{name:"lastnamestudent",type:"text",label:"Apellidos: ","prefix-icon":"tools",validation:"required","validation-messages":{required:"El apellido es requerido"},"validation-visibility":"live"}),i(e(a),{name:"birthdatestudent",type:"date",label:"Fecha de Nacimiento: ","prefix-icon":"tools","validation-visibility":"live"}),i(e(a),{name:"address",type:"text",label:"Dirección: ","prefix-icon":"tools",validation:"required","validation-messages":{required:"La dirección es requerida"},"validation-visibility":"live"}),i(e(a),{type:"select",label:"Grado: ","prefix-icon":"tools",placeholder:"Selecciona un Grado",name:"grade",options:d.value,validation:"required","validation-messages":{required:"El grado es requerido"},"validation-visibility":"live"},null,8,["options"]),i(e(a),{type:"select",name:"location",label:"Sede:","prefix-icon":"tools",placeholder:"Selecciona una Sede",options:c.value,validation:"required","validation-messages":{required:"La sede es requerida"},"validation-visibility":"live"},null,8,["options"]),i(e(a),{type:"textarea",label:"Observaciones: ","prefix-icon":"tools",placeholder:"Ej: Observaciones sobre el estudiante",name:"observations"}),i(e(a),{type:"submit",label:"Guardar Datos del Estudiante","prefix-icon":"tools"})]),_:1})])],64))}};export{T as default};