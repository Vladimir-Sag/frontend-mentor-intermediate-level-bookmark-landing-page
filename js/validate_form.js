document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form');
    const inputForm = document.querySelector('.form-section-input')
    const errorText = document.querySelector('.error-message')
    const inputContainer = document.querySelector('.input-container')
    form.addEventListener('submit',(e)=>{
        const emailValue  = inputForm.value.trim()
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        if(!emailPattern.test(emailValue)){
            e.preventDefault()
            inputForm.classList.add('error')
            inputContainer.classList.add('error')
            errorText.classList.add('error')
        }else{
            inputForm.classList.remove('error')
            inputContainer.classList.remove('error')
            errorText.classList.remove('error')
        }

    })
})
