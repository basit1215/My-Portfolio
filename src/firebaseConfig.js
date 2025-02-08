// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyAlUATKdu_5kLN89opAYShJvaymqw2q5mU",
//     authDomain: "portfolio-890a6.firebaseapp.com",
//     projectId: "portfolio-890a6",
//     storageBucket: "portfolio-890a6.firebasestorage.app",
//     messagingSenderId: "577430973529",
//     appId: "1:577430973529:web:d900371a99bb565423d548",
//     measurementId: "G-1581HQ9G02"
//   };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAlUATKdu_5kLN89opAYShJvaymqw2q5mU",
//   authDomain: "portfolio-890a6.firebaseapp.com",
//   projectId: "portfolio-890a6",
//   storageBucket: "portfolio-890a6.firebasestorage.app",
//   messagingSenderId: "577430973529",
//   appId: "1:577430973529:web:d900371a99bb565423d548",
//   measurementId: "G-1581HQ9G02"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);











import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlUATKdu_5kLN89opAYShJvaymqw2q5mU",
    authDomain: "portfolio-890a6.firebaseapp.com",
    projectId: "portfolio-890a6",
    storageBucket: "portfolio-890a6.firebasestorage.app",
    messagingSenderId: "577430973529",
    appId: "1:577430973529:web:d900371a99bb565423d548",
    measurementId: "G-1581HQ9G02"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);