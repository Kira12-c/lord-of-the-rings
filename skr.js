//document.getElementById('toggle-theme').addEventListener('click', () => {
    //document.body.classList.toggle('dark');
//});
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark");
   let currentTheme = "";
   if(document.body.classList.contains("dark")){
    currentTheme = "dark";
   }
   localStorage.setItem("theme", currentTheme)
});
window.addEventListener("load", function(){
    const theme = localStorage.getItem ("theme");
    if(theme === "dark"){
        document.body.classList.add("dark")
    }
});