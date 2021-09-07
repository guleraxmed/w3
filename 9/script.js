

function Ham(){
    let card=document.getElementById("card");
    if(card.style.display == "none"){
        card.style.display = "inline-block";
    }
    else{
        card.style.display = "none";
    }
}

// $(function(){
//     $("card").on("click", function(){
//         $("#card").css({
//             "display":"block",
//         })
//     })
// })