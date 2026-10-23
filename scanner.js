const msg=document.querySelector('#scanMsg');
function start(){if(!window.Html5Qrcode){setTimeout(start,300);return}
 const qr=new Html5Qrcode('reader');
 qr.start({facingMode:'environment'},{fps:10,qrbox:{width:250,height:250}},
 async text=>{await qr.stop(); location.href='attendance.html?token='+encodeURIComponent(text)},()=>{}).catch(()=>msg.textContent='Kamera tidak dapat digunakan. Izinkan akses kamera dan gunakan HTTPS.')}
start();