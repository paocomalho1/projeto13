
function tela1(){
    const tela = document.querySelectorAll(".tela")
    const ceta = document.querySelector("#c1")
    if(!tela[0].classList.contains("visibilityHidden")){
        tela[0].classList.add("visibilityHidden")
        tela[0].classList.remove("appearOpacity1")
        tela[0].classList.add("disappearOpacity0")
        ceta.classList.add("rotacao-out")
        ceta.classList.remove("rotacao-in")
    }
    else{
        tela[0].classList.remove("visibilityHidden")
        tela[0].classList.add("appearOpacity1")
        tela[0].classList.remove("disappearOpacity0")
        ceta.classList.remove("rotacao-out")
        ceta.classList.add("rotacao-in")
        
    }
    
}
function tela2(){
    const tela = document.querySelectorAll(".tela")
    const ceta = document.querySelector("#c2")
    if(!tela[1].classList.contains("visibilityHidden")){
        tela[1].classList.add("visibilityHidden")
        tela[1].classList.remove("appearOpacity1")
        tela[1].classList.add("disappearOpacity0")
        ceta.classList.add("rotacao-out")
        ceta.classList.remove("rotacao-in")
        
    }
    else{
        tela[1].classList.remove("visibilityHidden")
        tela[1].classList.add("appearOpacity1")
        tela[1].classList.remove("disappearOpacity0")
        ceta.classList.remove("rotacao-out")
        ceta.classList.add("rotacao-in")
        
    }
    

}
function tela3(){
    const tela = document.querySelectorAll(".tela")
    const ceta = document.querySelector("#c3")
    if(!tela[2].classList.contains("visibilityHidden")){
        tela[2].classList.add("visibilityHidden")
        tela[2].classList.remove("appearOpacity1")
        tela[2].classList.add("disappearOpacity0")
        ceta.classList.add("rotacao-out")
        ceta.classList.remove("rotacao-in")
    }
    else{
        tela[2].classList.remove("visibilityHidden")
        tela[2].classList.add("appearOpacity1")
        tela[2].classList.remove("disappearOpacity0")
        ceta.classList.remove("rotacao-out")
        ceta.classList.add("rotacao-in")
    }
    

}

function tela(){
    const tela = $(".h-menu")
    const x = $(".cabecalho__hamburger")
    if(!tela.hasClass("visibilityHidden")){
        tela.addClass("visibilityHidden")
        tela.removeClass("appearOpacity1")
        tela.addClass("disappearOpacity0")
        x.removeClass("x")

    }
    else{
        tela.removeClass("visibilityHidden")
        tela.addClass("appearOpacity1")
        tela.removeClass("disappearOpacity0")
        x.addClass("x")
    }
    
}
function appear1(){
    const options = $("#a1")
    const animacao = $("#b1")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
        animacao.removeClass("rotacao-in")
        animacao.addClass("rotacao-out")
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
        animacao.removeClass("rotacao-out")
        animacao.addClass("rotacao-in")
    }
    
}
function appear2(){
    const options = $("#a2")
    const animacao = $("#b2")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
        animacao.removeClass("rotacao-in")
        animacao.addClass("rotacao-out")
        
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
        animacao.removeClass("rotacao-out")
        animacao.addClass("rotacao-in")
    }
    
}
function appear3(){
    const options = $("#a3")
    const animacao = $("#b3")
    if(!options.hasClass("displayNone")){
        options.addClass("displayNone")
        options.removeClass("appearOpacity1")
        options.addClass("disappearOpacity0")
        animacao.removeClass("rotacao-in")
        animacao.addClass("rotacao-out")
    }
    else{
        options.removeClass("displayNone")
        options.addClass("appearOpacity1")
        options.removeClass("disappearOpacity0")
        animacao.removeClass("rotacao-out")
        animacao.addClass("rotacao-in")
    }
    
}