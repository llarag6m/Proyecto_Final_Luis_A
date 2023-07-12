function darkMode (){
    const btn = document.getElementById('btn--dark')

    btn.addEventListener('click', () =>{
        document.body.classList.toggle('dark--mode')
    })
    
}

export default darkMode