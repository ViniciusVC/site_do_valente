const click = document.querySelector("#ampscript");

click.addEventListener('click',()=>{
    
    if( document.querySelector(".MenuMobileItem-sub").style.display==="none"){
        document.querySelector(".MenuMobileItem-sub").style.display = "block";
    }else{
        document.querySelector(".MenuMobileItem-sub").style.display = "none"
    }

})


