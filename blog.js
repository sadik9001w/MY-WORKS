const icon = document.getElementById("men-icon");
const menu= document.getElementById("mik");
icon.addEventListener("click" , () => {
    if(menu.className=== 'hidden'){
        menu.classList.remove('hidden');

    }else{
        menu.classList.add('hidden');
    }
});