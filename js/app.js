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
