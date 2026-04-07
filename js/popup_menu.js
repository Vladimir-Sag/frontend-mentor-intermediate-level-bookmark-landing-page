document.addEventListener('DOMContentLoaded',()=>{
    const links = document.querySelectorAll('a')

    links.forEach(link=>{
        link.addEventListener('click',(e)=>{
            e.preventDefault()
            const content = link.textContent
            if(content ==='Simple Bookmarking' || content ==='Speedy Searching' || content ==='Easy Sharing') {
                return ;
            }
            const oldNotification =document.querySelector('.popup-menu')
            if(oldNotification) oldNotification.remove()
            const modal = document.createElement('div')
            modal.textContent= `You followed the link "${link.textContent}"`
            modal.classList.add('popup-menu')
            Object.assign(modal.style,{
                position:'fixed',
                width:'max-content',
                padding:'5px 15px',
                aspectRatio:'4/1',
                backgroundColor:'hsl(0, 94%, 66%)',
                color:'white',
                bottom: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '9999',
                opacity:'0',
                transition:'all 0.5s ease',
                display:'grid',
                placeItems:'center',
                borderRadius:'10px',
                boxShadow:'0 0 10px 2px rgba(98, 98, 248, 0.5)'
                
            })
            document.body.appendChild(modal)
            setTimeout(()=>{
                modal.style.opacity = '1'
                modal.style.bottom = '20px'
            },300)
            setTimeout(()=>{
                modal.style.opacity = '0'
                modal.style.bottom='-100px'
                setTimeout(()=>{
                    modal.remove()
                },500)
                
            },3000)
        })
    })
})