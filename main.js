(()=>{"use strict";class t{constructor(t){this.relatedElement=t,this.title=t.dataset.popoverTitle,this.content=t.dataset.popoverContent,this.html=this.createPopover()}createPopover(){const t=document.createElement("div");t.classList.add("popover");const e=document.createElement("div");e.textContent=this.title,e.classList.add("popover-title"),t.appendChild(e);const o=document.createElement("div");return o.textContent=this.content,o.classList.add("popover-content"),t.appendChild(o),t}showPopover(){this.relatedElement.parentElement.appendChild(this.html);const{offsetTop:t,offsetLeft:e,offsetWidth:o}=this.relatedElement;this.html.style.top=t-this.html.offsetHeight-5+"px",this.html.style.left=e+o/2-this.html.offsetWidth/2+"px"}hidePopover(){const t=document.querySelector(".popover");t&&t.remove()}}class e{constructor(e){this.element=e,this.popover=new t(e)}init(){this.element.addEventListener("click",this.onClick.bind(this)),this.element.addEventListener("blur",this.onBlur.bind(this))}onClick(t){t.preventDefault();const e=document.querySelector(".popover");e&&e.querySelector(".popover-title").textContent===this.element.dataset.popoverTitle?this.popover.hidePopover():this.popover.showPopover()}onBlur(){this.popover.hidePopover()}}document.querySelectorAll(".button").forEach((t=>{new e(t).init()}))})();
//# sourceMappingURL=main.js.map