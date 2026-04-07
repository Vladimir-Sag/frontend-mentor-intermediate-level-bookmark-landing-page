document.addEventListener("DOMContentLoaded",()=>{
    const modal = document.querySelector('#main-menu')
    const openBtn = document.querySelector('.menu-btn')
    const closeBtn = document.querySelector('.close-btn')
    openBtn.addEventListener('click',()=>{
        modal.showModal()
    })
    closeBtn.addEventListener('click',()=>{
        modal.close()
    })
})