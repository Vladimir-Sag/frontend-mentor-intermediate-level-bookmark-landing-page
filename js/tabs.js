document.addEventListener("DOMContentLoaded",()=>{
    const links = document.querySelectorAll('.tab-link');
    const panels = document.querySelectorAll('.tab-panel');

    function switchTab(selectedTab){
        links.forEach(link=>{
            link.classList.remove('active')
            link.setAttribute('aria-selected','false')
        })
        panels.forEach(panel=>{
            panel.classList.remove('active')
        })
        selectedTab.classList.add('active');
        selectedTab.setAttribute('aria-selected', 'true');

        const tabNumber = selectedTab.dataset.tab;
        const activePanel = document.querySelector(`.tab-panel[data-tab="${tabNumber}"]`)
        if(activePanel) activePanel.classList.add('active');

    }

    links.forEach(link=>{  
        link.addEventListener('click',(e)=>{
            e.preventDefault()
            switchTab(link)
        })
        link.addEventListener('keydown',(e)=>{
            let newTab = null;
            const currentIndex = Array.from(links).indexOf(link)
            if(e.key ==='ArrowLeft'||e.key==='ArrowUp'){
                e.preventDefault();
                newTab = links[currentIndex-1] || links[links.length - 1]
            }else if(e.key==='ArrowRight'||e.key==='ArrowDown'){
                e.preventDefault();
                newTab = links[currentIndex+1]||links[0]
            }
            if(newTab){
                switchTab(newTab)
                newTab.focus()
            }
        })
    })
    links.forEach(link=>{
        const isActive = link.classList.contains('active')
        link.setAttribute('aria-selected',isActive?'true':'false')
        if(isActive){
            link.setAttribute('tabindex','0')
        }else{
            link.setAttribute('tabindex','-1')
        }
    })

})