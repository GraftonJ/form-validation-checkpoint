document.addEventListener("DOMContentLoaded", function(event) {

  var secretPassword = 'DOMCONTENTLOADED'
  const form = document.getElementById('myForm')
  const adminBox = document.getElementById('admin')
  const secretLabel = document.getElementById('secretLabel')
  const adminPassword = document.getElementById('secretPassword')

  // function admin(event) {
  //   event.preventDefault()
  //   if (adminBox.checked === true) {
  //     console.log('The box is checked')
  //   }
  // }

  adminBox.addEventListener('change', function admin(evt) {
    evt.preventDefault()
    if (adminBox.checked === true) {
      adminPassword.setAttribute('type', 'password')
    }
  })
  form.addEventListener('submit', function passwordCheck(evt) {
    evt.preventDefault()
    if (adminPassword.value.length === 0 || adminPassword.value !== 'DOMCONTENTLOADED') {
        alert('The Admin Password is not Correct')
    }
    else {
      alert('Success')
    }
  })
})
