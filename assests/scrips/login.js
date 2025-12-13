function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;

  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");
    window.location.href = "Landing.html";
    
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}