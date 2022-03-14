// todo lo que necesitamos para trabajar por ahora
// el contenedor donde vamos a pegar el primer comentario y los 3 templates con la informacion estatica y un alert por si el user pone el comentario vacio
const containerComments = document.getElementById('comments-container');
const templateInput = document.getElementById('templateInput').content;
const templateFirstComments = document.getElementById('templateFirstComments').content;
const templateReplyComments = document.getElementById('templateReplyComments').content;
const firstInput = document.getElementById('firstInput');
const alertSpan = document.querySelector('.alert-danger');

// en comments vamos a pushear los comentarios de la primera linea
const comments = [];
// aca vamos a pushear los comentarios de la segunda linea
const newComment = [];

// en el input vamos a detectar las teclas y aplicamos 2 funciones, capturarDatos(e) le tenemos que pasar el evento y primerComentario
firstInput.addEventListener('keydown', (e) => {
	capturarDatos(e);
	pintarComentario();
});
// cuando le pasamos el evento capturamos los datos en un objeto, creamos un id unico y los likes son 0 ahora
const capturarDatos = (e) => {
	alertSpan.classList.add('d-none');

	const datos = {
		value: e.target.value,
		id: `${Date.now()}`,
		like: 0,
	};

	// si la tecla que presiona es enter y si el campo esta vacio retornamos que no se pushee el objeto en el comments porque estara vacio
	// pero si el primer if es true y el segundo false, pusheamos los datos al array
	if (e.key === 'Enter') {
		if (!e.target.value.trim()) {
			firstInput.classList.add('border');
			firstInput.classList.add('border-danger');
			alertSpan.classList.remove('d-none');
			return;
		}
		comments.push(datos);
	}
};

// la funcion de pintar el comentario
const pintarComentario = () => {
	// creamos el fragment para evitar el reflow
	const fragment = document.createDocumentFragment();
	// cuando renderizamos la pagina tiene que estar vacio, esto causante por el forEach
	containerComments.textContent = '';
	// recorremos el array con los datos y el template le cambiamos dinamicamente el contenido del span por lo que el usaurio tecleo antes de darle enter
	comments.forEach((item) => {
		const clone = templateFirstComments.cloneNode(true);
		clone.querySelector('.text-white').textContent = item.value;
		fragment.appendChild(clone);
	});
	// lo agregamos a HTML y por ese motivo se pinta
	containerComments.appendChild(fragment);
};
