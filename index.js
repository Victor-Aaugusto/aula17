const btn = document.getElementById('aplicarEstilo')

btn.addEventListener('click', () =>{
    const elementoPai = document.getElementById('elementoPai')
    elementoPai.style.backgroundColor = 'red'
    elementoPai.style.color = 'blue'
    elementoPai.style.fontSize = '22px'
    elementoPai.style.textAlign = 'center'
    elementoPai.textContent = 'Produto Comprado'
})