
function tela1(){
    const tela = document.querySelectorAll(".tela")
    if(!tela[0].classList.contains("visibilityHidden")){
        tela[0].classList.add("visibilityHidden")
        tela[0].classList.remove("appearOpacity1")
        tela[0].classList.add("disappearOpacity0")
    }
    else{
        tela[0].classList.remove("visibilityHidden")
        tela[0].classList.add("appearOpacity1")
        tela[0].classList.remove("disappearOpacity0")
        
    }
    
}
function tela2(){
    const tela = document.querySelectorAll(".tela")
    if(!tela[1].classList.contains("visibilityHidden")){
        tela[1].classList.add("visibilityHidden")
        tela[1].classList.remove("appearOpacity1")
        tela[1].classList.add("disappearOpacity0")
        
    }
    else{
        tela[1].classList.remove("visibilityHidden")
        tela[1].classList.add("appearOpacity1")
        tela[1].classList.remove("disappearOpacity0")
        
    }
    

}
function tela3(){
    const tela = document.querySelectorAll(".tela")
    if(!tela[2].classList.contains("visibilityHidden")){
        tela[2].classList.add("visibilityHidden")
        tela[2].classList.remove("appearOpacity1")
        tela[2].classList.add("disappearOpacity0")
    }
    else{
        tela[2].classList.remove("visibilityHidden")
        tela[2].classList.add("appearOpacity1")
        tela[2].classList.remove("disappearOpacity0")
    }
    

}

function tela(){
    const tela = $(".h-menu")
    if(!tela.hasClass("visibilityHidden")){
        tela.addClass("visibilityHidden")
        tela.removeClass("appearOpacity1")
        tela.addClass("disappearOpacity0")
    }
    else{
        tela.removeClass("visibilityHidden")
        tela.addClass("appearOpacity1")
        tela.removeClass("disappearOpacity0")
    }
    
}
function appear1(){
    const options = $("#a1")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
    }
    
}
function appear2(){
    const options = $("#a2")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
    }
    
}
function appear3(){
    const options = $("#a3")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
    }
    
}