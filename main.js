(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{l:()=>M});var t,r=function(e){return"url"===e.type||/^[a-zA-Zа-яА-ЯёЁ\s\,\.-]+$/.test(e.value)},n=function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)},o=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},a=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid||!r(e)}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},c=function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){o(e,r,t)})),n.disabled=!0,n.classList.add(t.inactiveButtonClass)},i=function(e){e.classList.remove("popup_is-opened","popup_is-animated"),document.removeEventListener("keydown",s),e.removeEventListener("click",l)},u=function(e){e.classList.add("popup_is-opened","popup_is-animated"),document.addEventListener("keydown",s),e.addEventListener("click",l)},l=function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close"))&&i(e.currentTarget)},s=function(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))},p=document.querySelector(".popup_type_image"),d=p.querySelector(".popup__image"),_=p.querySelector(".popup__caption"),f=function(e,t){d.src=e,_.alt=t,_.textContent=t,u(p)},m={baseUrl:"https://nomoreparties.co/v1/wff-cohort-3",headers:{authorization:"527ccf5e-48ed-459d-9003-516016edecdb","Content-Type":"application/json"}},v=function(e){return e.ok?e.json():Promise.reject({status:e.status,message:"Ошибка: ".concat(e.status)})},y=document.querySelector("#card-template").content,h=function(e,t,r,n,o,a,c){var i=y.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__delete-button"),l=i.querySelector(".card__like-button"),s=i.querySelector(".card__image"),p=i.querySelector(".card__like-count");i.querySelector(".card__image").src=e,i.querySelector(".card__title").textContent=t,i.querySelector(".card__image").alt=t,u.style.display=a?"block":"none";var d="true"===localStorage.getItem("like-".concat(c));return l.classList.toggle("card__like-button_is-active",d),p.textContent=o,l.addEventListener("click",(function(){S(c,l,p)})),u.addEventListener("click",(function(e){confirm("Вы уверены, что хотите удaлить эту карточку?")&&r(e,c)})),s.addEventListener("click",(function(){return n(e,t)})),i},b=function(e,t){var r=e.target.closest(".places__item");(function(e){return fetch("".concat(m.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:m.headers}).then(v)})(t).then((function(){r.remove()})).catch((function(e){console.error(e)}))},S=function(e,t,r){var n=t.classList.contains("card__like-button_is-active");(function(e,t){var r=t?"DELETE":"PUT";return console.log("Toggle like request:",e,r,t),fetch("".concat(m.baseUrl,"/cards/likes/").concat(e),{method:r,headers:m.headers}).then(v)})(e,n).then((function(o){var a=JSON.parse(localStorage.getItem("likedCards"))||{};a[e]=o.likes.length,localStorage.setItem("likedCards",JSON.stringify(a)),r.textContent=a[e],t.classList.toggle("card__like-button_is-active",!n),localStorage.setItem("like-".concat(e),String(!n)),console.log("Пользователи, лайкнувшие карточку:",o.likes)})).catch((function(e){console.error(e)}))},g=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),E=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),q=(document.querySelectorAll(".popup__close"),document.querySelector(".profile__image-overlay")),L=document.querySelector(".profile__image"),x=document.querySelector(".popup_type_avatar"),A={formSelector:".popup__form_edit",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},w={formSelector:".popup__form_new-card",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},B={formSelector:".avatar-form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},O=document.forms["new-place"],T=O.elements["place-name"],U=O.elements.link,j=O.elements["new-card-button"],P=document.querySelector(".profile__title"),I=document.querySelector(".profile__description"),D=document.querySelector(".profile__image"),N=document.forms["edit-profile"],J=N.elements.name,$=N.elements.description,R=N.elements["profile-button"],z=document.forms["avatar-edit"],G=z.elements.avatar,H=z.elements["avatar-button"];function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}));var c=Array.from(e.querySelectorAll(t.inputSelector)),i=e.querySelector(t.submitButtonSelector);a(c,i,t),c.forEach((function(u){u.addEventListener("input",(function(){(function(e,t,a){var c,i="Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";t.validity.valid?"url"!==t.type||(c=t.value,/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(decodeURIComponent(c)))?"link"!==t.name||function(e){return/\.(jpg|jpeg|png|gif)$/i.test(e)}(t.value)?r(t)?o(e,t,a):n(e,t,i,a):n(e,t,"Введите корректный URL изображения",a):n(e,t,"Введите корректный URL",a):n(e,t,i,a)})(e,u,t),a(c,i)}))}))}));var M=document.querySelector(".places__list");Promise.all([fetch("".concat(m.baseUrl,"/users/me"),{method:"GET",headers:m.headers}).then(v),fetch("".concat(m.baseUrl,"/cards"),{method:"GET",headers:m.headers}).then(v)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];!function(e){P.textContent=e.name,I.textContent=e.about,D.src=e.avatar,D.alt=e.name}(o),a.forEach((function(e){var t,r=e.link,n=e.name,a=e.likes,c=e._id,i=e.owner._id==o._id,u=h(r,n,b,f,a.length,i,c);t=u,M.append(t)}))})).catch((function(e){console.error("Fetch error:",e)})),E.addEventListener("click",(function(){return c(N,A),J.value=P.textContent,$.value=I.textContent,void u(g)})),k.addEventListener("click",(function(){return c(C,w),void u(C)})),q.addEventListener("click",(function(){return c(z,B),void u(x)})),N.addEventListener("submit",(function(e){e.preventDefault();var t,r=J.value,n=$.value;R.textContent="Сохранение...",(t={name:r,about:n},fetch("".concat(m.baseUrl,"/users/me"),{method:"PATCH",headers:m.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(v)).then((function(e){P.textContent=e.name,I.textContent=e.about,i(g)})).catch((function(e){console.error("Patch edit error:",e)})).finally((function(){R.textContent="Сохранить"}))})),O.addEventListener("submit",(function(e){var t;j.textContent="Сохранение...",e.preventDefault(),(t={name:T.value,link:U.value},fetch("".concat(m.baseUrl,"/cards"),{method:"POST",headers:m.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(v)).then((function(e){var t=e.link,r=e.name,n=e._id,o=h(t,r,b,f,0,!0,n);M.prepend(o),O.reset(),i(C),c(O,w)})).catch((function(e){console.error("Error posting new card:",e)})).finally((function(){j.textContent="Сохранить"}))})),z.addEventListener("submit",(function(e){e.preventDefault();var t=G.value;H.textContent="Сохранение...",function(e){return fetch("".concat(m.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:m.headers,body:JSON.stringify({avatar:e})}).then(v)}(t).then((function(e){L.src=e.avatar,L.alt=e.name,z.reset(),i(x)})).catch((function(e){console.error("Error updating avatar:",e)})).finally((function(){H.textContent="Сохранить"}))}))})();