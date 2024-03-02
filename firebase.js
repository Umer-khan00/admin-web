    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBGxPO4pN2qegI9XRs-BF-fYtDhM8H5FVQ",
      authDomain: "phototiles-db.firebaseapp.com",
      databaseURL: "https://phototiles-db-default-rtdb.firebaseio.com",
      projectId: "phototiles-db",
      storageBucket: "phototiles-db.appspot.com",
      messagingSenderId: "956027944112",
      appId: "1:956027944112:web:57b49dbb47973f658a0f75",
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    // document.addEventListener('DOMContentLoaded', function() {
    // const signup = document.getElementById('signup');
    // const login = document.getElementById('login');
  
    signup.addEventListener("click", (e) => {
        e.preventDefault()
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var username = document.getElementById('username').value;
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
  
          set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email
          })
          .then(() => {
          alert("User Signed Up!");
          // Redirect to dashboard.html
          window.location.href = "dashboard.html";
        })
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    });
  
    login.addEventListener("click", (e) => {
      e.preventDefault();
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const dt = new Date();
          update(ref(database, 'users/' + user.uid), {
            last_login: dt,
          })
        .then(() => {
          alert("User Logged In!");
          // Redirect to dashboard.html
          window.location.href = "dashboard.html";
        })
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    });
    
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
    // Sign-out successful.
        alert("Log Out Successfully!");
        // Redirect to dashboard.html
        window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
           const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
  });
    });

// });