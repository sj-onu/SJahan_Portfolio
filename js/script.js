

const filterContainer=document.querySelector(".project-filter"),
       filterBtns=filterContainer.children,
       totalFilterBtn=filterBtns.length,
       projectItems=document.querySelectorAll(".project-item"),
       totalProjectItem=projectItems.length;
      

       for(let i=0;i<totalFilterBtn;i++)
       {
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");


            const filterValue=this.getAttribute("data-filter");
           for(let k=0; k<totalProjectItem; k++){
               if(filterValue === projectItems[k].getAttribute("data-catagory"))
               {   
                projectItems[k].classList.remove("hide");
                   projectItems[k].classList.add("show");
               }
               else{
                projectItems[k].classList.remove("show");
                    projectItems[k].classList.add("hide");
               }
               if(filterValue==="all")
               {
                projectItems[k].classList.remove("hide");
                projectItems[k].classList.add("show");
               }
               }
        })
    }

// Project Lightbox//
const lightbox=document.querySelector(".lightbox"),
    lightboxImg=lightbox.querySelector(".lightbox-img"),
    lightboxClose=lightbox.querySelector(".lightbox-close"),
    lighyboxText=lightbox.querySelector(".caption-text"),
    lighyboxCounter=lightbox.querySelector(".caption-counter");
let itemIndex=0;
 for(let i=0;i<totalProjectItem;i++){
    projectItems[i].addEventListener("click",function() {
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
 }
 function nextItem(){
     if(itemIndex===totalProjectItem-1){
         itemIndex=0;

     }
    else{
        itemIndex++;
    }
    changeItem();
    }
    function prevItem(){
        if(itemIndex===0){
            itemIndex=totalProjectItem-1;
        }
       else{
           itemIndex--;
       }
       changeItem();
       }
   
 function toggleLightbox(){
     lightbox.classList.toggle("open");
 }
function changeItem(){
    imgSrc=projectItems[itemIndex].querySelector(".project-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lighyboxText.innerHTML=projectItems[itemIndex].querySelector("h4").innerHTML;
    lighyboxCounter.innerHTML=itemIndex + "of" +totalProjectItem;
}
//close lightbox//
lightbox.addEventListener("click",function(event)
{
if(event.target === lightboxClose ||event.target===lightbox){
    toggleLightbox();
}
})
