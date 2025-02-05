document.querySelector(".menu-toggle").addEventListener("click", function() {
   const menu = document.querySelector(".menu");

   if (menu.classList.contains("max-h-0")) {
       menu.classList.remove("max-h-0");
       menu.classList.add("max-h-64"); // Adjust height based on content
   } else {
       menu.classList.remove("max-h-64");
       menu.classList.add("max-h-0");
   }
});