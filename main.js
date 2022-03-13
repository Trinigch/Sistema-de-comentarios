const comments = [];

const inputContainer = document.createElement('div');//se crea una capa
const input = document.createElement('input');//se crea un input para poder copiarlo
const commentsContainer=document.querySelector('#comments-container');//contenerdor principal del sistema de comentarios

input.classList.add('input');

input.addEventListener('Keydown', e => {
    handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer); //relaciona el input con el input container
inputContainer.appendChild(input);

function handleEnter(e, current){
    if(e.key == 'Enter' && e.target.value !=''){
        const newComment = {
            text: e.target.value,
            likes: 0,
            responses: []
        }
        if(current == null){
            comments.unshift(newComment);
        }else{
            current.responses.unshift(newComment);
        }

        e.target.value = '';
        commentsContainer.innerHTML='';
        commentsContainer.appendChild(inputContanier);

        renderComments(comments,commentsContainer);
        console.log(comments);
    }
}

function renderComments(arr,parent){

}