javascript:(function(){setTimeout(function(){function toggleEditMode(){if(document.body.contentEditable==="true"){document.body.contentEditable=false;document.designMode="off";btn.innerText="Turn edit mode on";btn.style.background="#4CAF50"}else{document.body.contentEditable="true";document.designMode="on";btn.innerText="Turn edit mode off";btn.style.background="#F44336"}}let btn=document.createElement("button");btn.innerText="Turn edit mode off";btn.style.position="fixed";btn.style.top="10px";btn.style.right="10px";btn.style.background="#F44336";btn.style.color="white";btn.style.border="none";btn.style.padding="10px 20px";btn.style.fontSize="16px";btn.style.cursor="pointer";btn.style.zIndex="99999";btn.style.borderRadius="8px";btn.style.transition="background-color 0.3s ease";btn.onmouseover=function(){btn.style.backgroundColor="#D32F2F"};btn.onmouseout=function(){btn.style.backgroundColor=document.body.contentEditable==="true"?"#4CAF50":"#F44336"};btn.addEventListener("click",toggleEditMode);document.body.appendChild(btn);btn.setAttribute("aria-label","Toggle edit mode for the page content")},100)})();
