// =============================================
// FIREBASE CONFIGURATION
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVnv4n2mXHjHr7vQ9b4suOEJ2OsQY8tAc",
  authDomain: "bisma-portfolio-bf1d2.firebaseapp.com",
  projectId: "bisma-portfolio-bf1d2",
  storageBucket: "bisma-portfolio-bf1d2.firebasestorage.app",
  messagingSenderId: "52387813021",
  appId: "1:52387813021:web:a122f3fe4c74a6a6d9a674",
  measurementId: "G-ZG28ZF6LFL"
};

// =============================================
// EMAILJS CONFIGURATION
// =============================================
const EMAILJS_PUBLIC_KEY  = "M3AyfADmC_lu9HVRK";
const EMAILJS_SERVICE_ID  = "service_k0s27zk";
const EMAILJS_TEMPLATE_ID = "template_wq8l3ks";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

console.log("✅ Firebase & EmailJS initialized");

// =============================================
// CONTACT FORM — FIRESTORE + EMAIL
// =============================================
window.sendMessage = async function () {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status  = document.getElementById('formStatus');
  const btn     = document.getElementById('sendBtn');
  const btnText = document.getElementById('btnText');

  // Validation
  if (!name || !email || !message) {
    status.textContent = '⚠️ Please fill in all fields.';
    status.className = 'form-status error';
    return;
  }
  if (!email.includes('@')) {
    status.textContent = '⚠️ Please enter a valid email address.';
    status.className = 'form-status error';
    return;
  }

  // Loading state
  btn.disabled = true;
  btnText.textContent = 'Sending...';
  status.textContent = '';
  status.className = 'form-status';

  try {
    // 1. Firestore mein save karein
    await addDoc(collection(db, 'messages'), {
      name, email, message,
      timestamp: serverTimestamp(),
      read: false
    });

    // 2. EmailJS se email bhejein
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      message:    message,
    });

    // Success
    status.textContent = '✅ Message sent! I will get back to you soon.';
    status.className = 'form-status success';
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('message').value = '';

  } catch (error) {
    console.error('Error:', error);
    status.textContent = '❌ Failed to send. Please try again.';
    status.className = 'form-status error';
  }

  btn.disabled = false;
  btnText.textContent = 'Send Message';

  setTimeout(() => {
    status.textContent = '';
    status.className = 'form-status';
  }, 5000);
};
