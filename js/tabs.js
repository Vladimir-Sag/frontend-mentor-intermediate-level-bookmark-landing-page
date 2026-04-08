document.addEventListener("DOMContentLoaded",()=>{
    const links = document.querySelectorAll('.tab-link');
    const panels = document.querySelectorAll('.tab-panel');
    if(!links.length||!panels.length) return;

    function switchTab(selectedTab){
        links.forEach(link=>{
            const isSelected = link===selectedTab
            link.classList.toggle('active',isSelected)
            link.setAttribute('aria-selected',isSelected)
            link.setAttribute('tabindex',isSelected?'0':'-1')
        })
        panels.forEach(panel=>{
            panel.classList.remove('active')
        })

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
    const activeLink = document.querySelector('.tab-link.active');
    if(activeLink) switchTab(activeLink)
})