let head_line = document.querySelectorAll(".line_1");


head_line.forEach((all_lines) => {

//    console.log(all_lines);


   let para = all_lines.querySelectorAll(".para")[0];
let img = all_lines.querySelector(".line_head img");




all_lines.addEventListener("click",() => {
    
    para.classList.toggle("hidden");
    
 


      


    if (para.classList.contains("hidden")) {
        img.src = "/assets/images/icon-minus.svg"; 
      
    } else {
        img.src = "/assets/images/icon-plus.svg";
    }
    console.log(img)


});

});
