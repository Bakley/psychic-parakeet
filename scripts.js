const inputElement = document.getElementById('inpEle')
const emptyDivElement = document.getElementById('emptyDiv')

console.log(inputElement)

inputElement.addEventListener('click', ()=>{
    
    const notifyUser = document.createElement('div');
    notifyUser.textContent = 'User Clicked'
    emptyDivElement.appendChild(notifyUser)
})
