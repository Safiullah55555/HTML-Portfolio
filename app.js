document.addEventListener('DOMContentLoaded', function() {
        const currentLocation = window.location.href;
        // const navLinks = document.querySelectorAll('.sticky-nav .sticky-nav-options a');
        const navLinks = document.querySelector(".sticky-nav .sticky-nav-options a")
    
        navLinks.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });
    });

    // dropdown handle 
    document.getElementById("dropdownMenu").style.display = "none";//initialize it unchecked
    
    function toggleDropdown(){

        const dropdownMenu=document.getElementById("dropdownMenu")
        dropdownMenu.style.display=dropdownMenu.style.display=="block"?"none":"block";
    }

    window.onclick=function(event){
        if(!event.target.matches(".icon")){
            const dropdowns=document.getElementsByClassName("dropdown-content")
            for (let i=0; i<dropdowns.length;i++){
                const openDropdown=dropdowns[i]
                if(openDropdown.style.display=="block"){
                    openDropdown.style.display="none"
                }
                
            }
        }
    }


    