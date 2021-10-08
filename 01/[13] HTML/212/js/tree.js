var folders = document.querySelectorAll('[wm-folder]')

folders.forEach(folder => {
    folder.onclick = e => {
        // debugger
        
        // proximo elemento a partir de um elemento: elemento.nextElementSibling
        
        const ul = folder.nextElementSibling
        
        // ul.classList.toggle('hidden')   
        
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none' 
    }
})

