 function showSidebar(){
    const sidebar = document.querySelector('.news-left-bar')
    sidebar.style.display = 'flex'

    const closeMenu = document.querySelector('.close-menu')
    closeMenu.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.news-left-bar')
    sidebar.style.display = 'none'

    const closeMenu = document.querySelector('.close-menu')
    closeMenu.style.display = 'none'
}

function handleWindowResize() {
    var reswidth = screen.width;
    const sidebar = document.querySelector('.news-left-bar')


    if (reswidth < 450) {
        sidebar.style.display = 'none'

        const closeMenu = document.querySelector('.close-menu')
        if( closeMenu.style.display == 'flex'){
            hideSidebar()
        }

    } else {
        sidebar.style.display = 'flex'
    }

    
}

// Initial check when the page loads
handleWindowResize();

// Add an event listener to check for window resize
window.addEventListener('resize', handleWindowResize);

