document.addEventListener("DOMContentLoaded",()=>{
    const modal = document.querySelector('#main-menu')
    const openBtn = document.querySelector('.menu-btn')
    const closeBtn = document.querySelector('.close-btn')
    if (!modal) {
        console.error('Modal windows #main-menu not found');
    }

    if (!openBtn) {
        console.error('Button .menu-btn not found');
    }

    if (!closeBtn) {
        console.error('Button .close-btn not found');
    }
    if(openBtn&&modal){
        openBtn.addEventListener('click',()=>{
            modal.showModal()
        })
    }
    if(closeBtn&&modal){
        closeBtn.addEventListener('click',()=>{
            modal.close()
        })
    }
})