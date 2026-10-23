import {firebaseConfig} from './firebase-config.js';
import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js';
import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js';
const app=initializeApp(firebaseConfig),auth=getAuth(app);
document.querySelector('#loginForm').addEventListener('submit',async e=>{
 e.preventDefault(); const msg=document.querySelector('#msg'); msg.textContent='';
 const u=document.querySelector('#username').value.trim(),p=document.querySelector('#password').value;
 if(u!=='faiz'){msg.textContent='Username atau password salah.';return}
 try{await signInWithEmailAndPassword(auth,'faiz@absensi.local',p);location.href='admin.html'}
 catch{msg.textContent='Login gagal. Pastikan akun admin Firebase sudah dibuat.'}
});