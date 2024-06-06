const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{4,16}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/,
  };
  
  const formulario = document.querySelector('#formulario');
  const inputs = document.querySelectorAll('.formulario input');
  
  const validarFormulario = (e) => {
	if (e.target.value !== '') {
	  switch (e.target.name) {
		case 'nombre':
		  validarCampo(expresiones.nombre, e.target, 'grupoNombre');
		  break;
		case 'apellido':
		  validarCampo(expresiones.apellido, e.target, 'grupoApellido');
		  break;
		case 'email':
		  validarCampo(expresiones.email, e.target, 'grupoEmail');
		  break;
		case 'password':
		  validarCampo(expresiones.password, e.target, 'grupoPassword');
		  break;
	  }
	} else {
	  e.target.style.borderColor = '#ccc'; // Restablecer el borde si no hay valor
	  document.querySelector(`#${e.target.parentElement.id} .anuncioError`).style.display = 'none';
	}
  };
  
  const validarCampo = (expresion, input, grupo) => {
	if (expresion.test(input.value)) {
	  document.querySelector(`#${grupo} .anuncioError`).style.display = 'none';
	  input.style.borderColor = 'green';
	} else {
	  document.querySelector(`#${grupo} .anuncioError`).style.display = 'block';
	  input.style.borderColor = 'red';
	}
  };
  
  inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
  });
  
  formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	let allValid = true;
	inputs.forEach((input) => {
	  const grupo = input.parentElement.id;
	  const expresion = expresiones[input.name];
	  if (!expresion) {
		console.error(`No expression found for input name: ${input.name}`);
		allValid = false;
		return;
	  }
	  if (input.value === '' || !expresion.test(input.value)) {
		allValid = false;
		input.style.borderColor = 'red';
		document.querySelector(`#${grupo} .anuncioError`).style.display = 'block';
	  } else {
		input.style.borderColor = 'green';
		document.querySelector(`#${grupo} .anuncioError`).style.display = 'none';
	  }
	});
  
	if (allValid) {
	  alert('Formulario enviado correctamente');
	  formulario.reset();
	  inputs.forEach(input => input.style.borderColor = '#ccc');
	  document.querySelectorAll('.anuncioError').forEach(error => error.style.display = 'none');
	} else {
	  alert('Por favor, completa el formulario correctamente.');
	}
  });