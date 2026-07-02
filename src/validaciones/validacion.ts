export function validarRegistro(
  nickname: string,
  email: string,
  contraseña: string
) {

  const errores = {
    nickname: "",
    email: "",
    contraseña: "",
  };

  let valido = true;


  if (!nickname.trim()) {
    errores.nickname = "El nickname es obligatorio";
    valido = false;
  } 
  else if (nickname.length < 3) {
    errores.nickname = "El nickname debe tener al menos 3 caracteres";
    valido = false;
  }


  if (!email.trim()) {
    errores.email = "El email es obligatorio";
    valido = false;
  }


  if (!contraseña.trim()) {
    errores.contraseña = "La contraseña es obligatoria";
    valido = false;
  }
  else if (contraseña.length < 6) {
    errores.contraseña =
      "La contraseña debe tener mínimo 6 caracteres";
    valido = false;
  }


  return {
    valido,
    errores,
  };
}