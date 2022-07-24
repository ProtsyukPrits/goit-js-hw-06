const formLogin = document.querySelector('.login-form')


const handlerBtn = (event) => {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, запоніть всі поля!")
  } 
  console.log(`Email: ${email.value}, Password: ${password.value}`)
  event.currentTarget.reset()
}
formLogin.addEventListener('submit', handlerBtn)


