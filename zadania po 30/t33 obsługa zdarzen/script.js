let container = document.querySelector('#container')
let data = document.querySelector('#data')
container.addEventListener('mouseenter',function(){
    data.innerHTML = `Data`
})
container.addEventListener('mouseleave',function(){
    data.innerHTML = `NIC`
})