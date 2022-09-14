(()=>{"use strict";var e={891:(e,t,r)=>{e.exports=r.p+"6163c2039d1f0eb8d7ca.jpg"},688:(e,t,r)=>{e.exports=r.p+"4e8e0a1d604782a0dff8.svg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.p="",(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const n=function(){function r(t,n){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputs=function(t){if(Array.isArray(t))return e(t)}(o=this._form.querySelectorAll(this._inputSelector))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._button=this._form.querySelector(this._submitButtonSelector)}var n,o;return n=r,(o=[{key:"_showErrorMessage",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideErrorMessage",value:function(e){var t=document.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e)}},{key:"_checkFormValidity",value:function(){return this._inputs.every((function(e){return e.validity.valid}))}},{key:"_disableButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0}},{key:"_enableButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1}},{key:"_toggleButtonState",value:function(){this._checkFormValidity()?this._enableButton():this._disableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._disableButton(),this._inputs.forEach((function(t){e._hideErrorMessage(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&t(n.prototype,o),r}();document.querySelector(".photo-grid__items");var o=document.querySelector(".modal-type-edit-profile"),i=document.querySelector(".profile__edit"),a=(o.querySelector(".modal__exit_type_edit-profile"),document.querySelector(".modal-type-add-card")),c=document.querySelector(".profile__add"),u=(a.querySelector(".modal__exit_type_add-card"),document.querySelector(".modal-type-edit-avatar")),s=document.querySelector(".profile__avatar"),l=(u.querySelector(".modal__exit_type_delete-card"),document.querySelector(".modal-type-image")),f=(l.querySelector(".modal__exit_type_image"),Array.from(document.querySelectorAll(".modal")),Array.from(document.querySelectorAll(".modal__form")),l.querySelector(".modal__image-figure"),l.querySelector(".modal__image-caption"),document.querySelector(".profile__name"),document.querySelector(".profile__profession"),document.querySelector(".profile__avatar-photo"),o.querySelector(".modal__name")),d=o.querySelector(".modal__profession"),h=a.querySelector(".modal__form_type_add-card"),p=o.querySelector(".modal__form_type_edit-profile"),_=u.querySelector(".modal__form_type-edit-avatar"),y=(document.querySelector(".photo-grid__items"),{formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit",inactiveButtonClass:"modal__submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"});function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(){function e(t,r){var n=t.data,o=t.handleCardClick,i=t.handleDeleteClick,a=t.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardData=n,this._link=n.link,this._name=n.name,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleCardLike=a,this._cardTemplate=document.querySelector(r).content.querySelector(".photo-grid__item"),this._id=n._id,this._likes=n.likes,this._ownerId=n.owner._id,this._userID=n.userID}var t,r;return t=e,(r=[{key:"getId",value:function(){return this._id}},{key:"_getCardTemplate",value:function(){return this._cardTemplate.cloneNode(!0)}},{key:"handleDelete",value:function(){this._card.remove(),this._card=null}},{key:"cardLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userID}))}},{key:"_renderLikes",value:function(){this._card.querySelector(".photo-grid__like-count").textContent=this._likes.length,this.cardLiked()?this._cardLikeButton.classList.add("photo-grid__liked"):this._cardLikeButton.classList.remove("photo-grid__liked")}},{key:"updateLikes",value:function(e){this._likes=e,this._renderLikes()}},{key:"_toggleDeleteButtonVisibility",value:function(){this._ownerId===this._userID?this._cardRemoveButton.classList.add("photo-grid__trash_visible"):this._cardRemoveButton.classList.remove("photo-grid__trash_visible")}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeButton.addEventListener("click",this._handleCardLike),this._cardRemoveButton.addEventListener("click",(function(t){t.stopPropagation(),e._handleDeleteClick(t)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._card=this._getCardTemplate(),this._cardImage=this._card.querySelector(".photo-grid__photo"),this._cardImage.style.backgroundImage="url(".concat(this._link,")"),this._cardName=this._card.querySelector(".photo-grid__heading"),this._cardName.textContent=this._name,this._cardLikeButton=this._card.querySelector(".photo-grid__like"),this._cardRemoveButton=this._card.querySelector(".photo-grid__trash"),this._toggleDeleteButtonVisibility(),this._renderLikes(),this._setEventListeners(),this._card}}])&&m(t.prototype,r),e}();function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const g=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){this._items.forEach(this._renderer)}}])&&b(t.prototype,r),e}();function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("modal_visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("modal_visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){!t.target.classList.contains("modal__exit")&&t.target.closest(".modal__card")||e.close()}))}}])&&k(t.prototype,r),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t,r){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r))._photo=t._popupElement.querySelector(".modal__image-figure"),t._photoCaption=t._popupElement.querySelector(".modal__image-caption"),t}return t=a,(r=[{key:"open",value:function(e,t){O(j(a.prototype),"open",this).call(this,e,t),this._photo.src=t,this._photoCaption.textContent=e,this._photo.alt=e}}])&&w(t.prototype,r),a}(S);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t,r,n=e.popupSelector,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=o,t._form=t._popupElement.querySelector(".modal__form"),t._submitButton=t._popupElement.querySelector(".modal__submit"),t._submitButtonText=t._submitButton.textContent,t._inputs=function(e){if(Array.isArray(e))return B(e)}(r=t._form.querySelectorAll(".modal__input"))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t}return t=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Saving...";this._submitButton.textContent=e?t:this._submitButtonText}},{key:"close",value:function(){this._form.reset(),A(T(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())})),A(T(a.prototype),"setEventListeners",this).call(this)}}])&&I(t.prototype,r),a}(S);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t,r){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(n);if(o){var r=$(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r))._submitButton=t._popupElement.querySelector(".modal__submit"),t._submitButtonText=t._submitButton.textContent,t}return t=a,(r=[{key:"open",value:function(e){N($(a.prototype),"open",this).call(this),this._popupClick=e}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Saving...";this._submitButton.textContent=e?t:this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._popupClick()})),N($(a.prototype),"setEventListeners",this).call(this)}}])&&V(t.prototype,r),a}(S);function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const z=function(){function e(t){var r=t.userNameSelector,n=t.userJobSelector,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(r),this._profileJobElement=document.querySelector(n),this._avatarElement=document.querySelector(o)}var t,r;return t=e,(r=[{key:"setUserInfo",value:function(e){var t=e.name,r=e.about;this._profileNameElement.textContent=t,this._profileJobElement.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}},{key:"getUserInfo",value:function(){return{userName:this._profileNameElement.textContent,userJob:this._profileJobElement.textContent}}},{key:"getAvatar",value:function(){return{avatar:this._avatarElement}}}])&&H(t.prototype,r),e}();var G=r(688);function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r(891);var Q=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var t,r;return t=e,(r=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}},{key:"getCardsList",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"getServerInfo",value:function(){return Promise.all([this.getCardsList(),this.getUserInfo()])}},{key:"addCard",value:function(e){var t=e.name,r=e.link;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:r})}).then(this._checkServerResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkServerResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._checkServerResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkServerResponse)}},{key:"getLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers}).then(this._checkServerResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:r})}).then(this._checkServerResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar/"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._checkServerResponse)}}])&&K(t.prototype,r),e}();function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}document.getElementById("header-logo").src=G;var ee=new Q({baseUrl:"https://around.nomoreparties.co/v1/group-9",headers:{authorization:"c414c53f-8fa5-4257-bec2-8a32bc52d96c","Content-Type":"application/json"}}),te=new n(y,h),re=new n(y,p),ne=new n(y,_);te.enableValidation(),re.enableValidation(),ne.enableValidation();var oe=new q({popupSelector:".modal-type-image"});oe.setEventListeners();var ie,ae,ce=new F({popupSelector:".modal-type-delete-card"});ce.setEventListeners();var ue=new z({userNameSelector:".profile__name",userJobSelector:".profile__profession",avatar:".profile__avatar-photo"});function se(e){var t=new v({data:Y(Y({},e),{},{userID:ie}),handleCardClick:function(e,t){oe.open(e,t)},handleDeleteClick:function(){ce.open((function(){ce.renderLoading(!0),ee.removeCard(e._id).then((function(){t.handleDelete(),ce.close()})).catch((function(e){return console.log("An error occurred when deleting card: ".concat(e))})).finally((function(){return ce.renderLoading(!1)}))}))},handleCardLike:function(){t.cardLiked()?ee.removeLike(e._id).then((function(e){t.updateLikes(e.likes)})).catch((function(e){return console.log("An error occurred when removing a like: ".concat(e))})):ee.addLike(e._id).then((function(e){t.updateLikes(e.likes)})).catch((function(e){return console.log("An error occurred when adding a like: ".concat(e))}))}},"#card-template");return t.generateCard()}ee.getServerInfo().then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ie=i._id,(ae=new g({items:o,renderer:function(e){var t=se(e);ae.addItem(t)}},".photo-grid__items")).renderItems(),ue.setUserInfo({name:i.name,about:i.about}),ue.setUserAvatar(i.avatar)})).catch((function(e){return console.log("An error occurred when loading initial user and card data: ".concat(e))}));var le=new U({popupSelector:".modal-type-add-card",handleSubmit:function(e){var t=e.modal__cardname,r=e.modal__cardurl;le.renderLoading(!0),ee.addCard({name:t,link:r}).then((function(e){var t=se(e);ae.addItem(t),le.close()})).catch((function(e){return console.log("An error occurred when loading new card data: ".concat(e))})).finally((function(){return le.renderLoading(!1)}))}});le.setEventListeners(),c.addEventListener("click",(function(e){le.open(),te.resetValidation()}));var fe=new U({popupSelector:".modal-type-edit-profile",handleSubmit:function(e){var t=e.modal__name,r=e.modal__profession;fe.renderLoading(!0),ee.setUserInfo({name:t,about:r}).then((function(e){ue.setUserInfo({name:e.name,about:e.about}),fe.close()})).catch((function(e){return console.log("An error occurred when loading user profile data: ".concat(e))})).finally((function(){return fe.renderLoading(!1)}))}});fe.setEventListeners(),i.addEventListener("click",(function(){var e,t,r;re.resetValidation(),t=(e=ue.getUserInfo()).userName,r=e.userJob,f.value=t,d.value=r,fe.open()}));var de=new U({popupSelector:".modal-type-edit-avatar",handleSubmit:function(e){var t=e.modal__avatarurl;de.renderLoading(!0),ee.setUserAvatar(t).then((function(e){ue.setUserAvatar(t),de.close()})).catch((function(e){return console.log("An error occured when loading avatar data: ".concat(e))})).finally((function(){return de.renderLoading(!1)}))}});de.setEventListeners(),s.addEventListener("click",(function(e){de.open(),ne.resetValidation()}))})()})();