document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.querySelector('input[name="password"]')
  const pc1 = document.getElementById('pc1')
  const pc2 = document.getElementById('pc2')
  const pc3 = document.getElementById('pc3')
  const pc4 = document.getElementById('pc4')
  const pc5 = document.getElementById('pc5')

  console.log('Validate password form')
  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value
    pc1.style.color = 'var(--primary-text-color)'
    pc2.style.color = 'var(--primary-text-color)'
    pc3.style.color = 'var(--primary-text-color)'
    pc4.style.color = 'var(--primary-text-color)'
    pc5.style.color = 'var(--primary-text-color)'

    if(password.length >= 8){
      pc1.style.color = 'var(--main-color-2)'
    }
    if (/[A-Z]/.test(password)) {
      pc2.style.color = 'var(--main-color-2)'
    }
    if (/[a-z]/.test(password)) {
      pc3.style.color = 'var(--main-color-2)'
    }
    if (/\d/.test(password)) {
      pc4.style.color = 'var(--main-color-2)'
    }
    if (/[@!#$%^&\/*()_+=[\]{}|\\,.?:-]/.test(password)) {
      pc5.style.color = 'var(--main-color-2)'
    }
  })
});