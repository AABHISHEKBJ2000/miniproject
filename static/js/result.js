var result=document.getElementById("result").innerHTML;

if(result!==""){
    if(result==="YES"){
        document.getElementById("yes").removeAttribute("hidden");
        document.getElementById("no").addAttribute("hidden",true);
    }
    else{
        document.getElementById("no").removeAttribute("hidden");
        document.getElementById("yes").setAttribute("hidden",true);
    }

}