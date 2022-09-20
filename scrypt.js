let  buyBtn = document.getElementById('buyBtn')
let wrapper = document.getElementById('wrapper__buy')
let soonPopup = document.getElementById('soonPopup')

buyBtn.onclick = () => {
    wrapper.classList.add('popup__other')
    soonPopup.classList.add('popup__active')
  }

wrapper.onclick = () => {
    wrapper.classList.remove('popup__other')
    soonPopup.classList.remove('popup__active')
}