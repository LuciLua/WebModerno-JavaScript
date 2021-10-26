function locationHashChanged() {

    const liMenu = document.querySelectorAll('nav.menu > ul li')

        // if (location.hash === '#contato') {
        //     liMenu[0].style.background = '#fff'
        // }
        
        switch (location.hash){
            case '#inicio':
                liMenu[0].classList.add('active')

                liMenu[1].classList.remove('active')
                liMenu[2].classList.remove('active')
                liMenu[3].classList.remove('active')
                break
            case '#cursos':
                liMenu[1].classList.add('active')

                liMenu[0].classList.remove('active')
                liMenu[2].classList.remove('active')
                liMenu[3].classList.remove('active')
                break
            case '#sobre':
                liMenu[2].classList.add('active')

                liMenu[0].classList.remove('active')
                liMenu[1].classList.remove('active')
                liMenu[3].classList.remove('active')
                break
            case '#contato':
                liMenu[3].classList.add('active')

                liMenu[0].classList.remove('active')
                liMenu[1].classList.remove('active')
                liMenu[2].classList.remove('active')
                break
        }

}
  
  window.onhashchange = locationHashChanged;