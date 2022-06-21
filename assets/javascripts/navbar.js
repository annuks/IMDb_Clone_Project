let sidebar = false;
function handleSideBar(){
    let navlinks = document.getElementById("nav-links");
    if(sidebar){
        navlinks.style.height = "0px"
        sidebar=false
    }else{
        navlinks.style.height = "115px"
        sidebar = true
    }
}