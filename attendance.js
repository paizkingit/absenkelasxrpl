import {firebaseConfig} from './firebase-config.js';
import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js';
import {getFirestore,doc,getDoc,addDoc,collection,query,where,getDocs,serverTimestamp} from 'https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js';
const app=initializeApp(firebaseConfig),db=getFirestore(app), token=new URLSearchParams(location.search).get('token'),msg=document.querySelector('#msg');
let session;
async function load(){if(!token){msg.textContent='QR Code tidak ditemukan.';return}
 const s=await getDoc(doc(db,'attendance_sessions',token)); if(!s.exists()||!s.data().active||Date.now()>s.data().expiredTime){msg.textContent='QR Code tidak valid atau sudah kedaluwarsa.';document.querySelector('form').remove();return}
 session={id:s.id,...s.data()};document.querySelector('#sessionInfo').textContent=`Sesi aktif • Kelas ${session.kelas}`;
}
load();
document.querySelector('#attendanceForm').addEventListener('submit',async e=>{e.preventDefault();if(!session)return;
 const nama=document.querySelector('#nama').value.trim(),kelas=document.querySelector('#kelas').value.trim(),nis=document.querySelector('#nis').value.trim(),status=document.querySelector('[name=status]:checked').value;
 if(kelas!==session.kelas){msg.textContent='Kelas tidak sesuai dengan sesi QR.';return}
 const q=query(collection(db,'attendance'),where('sessionId','==',session.id),where('nis','==',nis)); const old=await getDocs(q);
 if(!old.empty){msg.textContent='Anda sudah melakukan absensi.';return}
 await addDoc(collection(db,'attendance'),{sessionId:session.id,nama,kelas,nis,status,timestamp:serverTimestamp()});
 msg.textContent='✓ ABSENSI BERHASIL';document.querySelector('form').reset();
});