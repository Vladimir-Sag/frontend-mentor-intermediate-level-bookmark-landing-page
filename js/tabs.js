document.addEventListener("DOMContentLoaded",()=>{
    const links = document.querySelectorAll('.tab-link');
    const panels = document.querySelectorAll('.tab-panel')
    links.forEach(link=>{

       
        link.addEventListener('click',(e)=>{
            e.preventDefault()
            links.forEach(l=>l.classList.remove('active'))
            link.classList.add('active')
            const linkNumber = link.dataset.tab;
            panels.forEach(panel=>{
                if(panel.dataset.tab===linkNumber) panel.classList.add('active');
                else panel.classList.remove('active')
            })
        })
    })
})