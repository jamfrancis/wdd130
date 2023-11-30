function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   let result = "";
   if (document.getElementById("button-label").innerHTML == "Dark"){
      result = "Light";
   }
   else {
      result = "Dark";
   };
   document.getElementById("button-label").innerHTML = result;
}


