let navbarToggler = document.querySelector('.navbar-toggler');
let navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB14k1XdEoqzLzRE_KY4xNB-L2ededePQc",
    authDomain: "galaxias---2do-bc---fisica.firebaseapp.com",
    projectId: "galaxias---2do-bc---fisica",
    storageBucket: "galaxias---2do-bc---fisica.appspot.com",
    messagingSenderId: "294199813129",
    appId: "1:294199813129:web:25501ac87d5428cd5d44d8",
    measurementId: "G-JWTBGMN90S",
};
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
        // Escuchar el evento submit del formulario
        const commentForm = document.getElementById('commentForm');
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('nameInput').value;
            const comment = document.getElementById('commentInput').value;
            // Guardar el comentario en la base de datos de Firebase
            database.ref('comments').push({
                name: name,
                comment: comment
            });
            // Limpiar los campos de nombre y comentario
            document.getElementById('nameInput').value = '';
            document.getElementById('commentInput').value = '';
        });

        // Mostrar los comentarios en cards
        const commentsContainer = document.getElementById('commentsContainer');
        database.ref('comments').on('child_added', (snapshot) => {
            const comment = snapshot.val();
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${comment.name}</h5>
                    <p class="card-text">${comment.comment}</p>
                </div>
            `;
            commentsContainer.appendChild(card);
            console.log('Comentario agregado:', comment);
        });