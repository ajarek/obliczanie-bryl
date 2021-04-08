const submit = document.querySelector('#submit')
const objetosc = document.querySelector('.objetosc')
const pole = document.querySelector('.pole')
const Pi = Math.PI
const toggle =document.querySelector('.toggle')
const sidebar=document.querySelector('.sidebar')
const alerty=document.querySelector('.alert')

toggle.onclick=()=>{
  
   toggle.classList.toggle('active')
   sidebar.classList.toggle('active')
}