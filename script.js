/* HISTORY CLICK */
const imgs = document.querySelectorAll('.history-images img');
const items = document.querySelectorAll('.history-item');

imgs.forEach(img=>{
  img.addEventListener('click', ()=>{

    const target = img.dataset.target;

    imgs.forEach(i=>i.classList.remove('active'));
    items.forEach(t=>t.classList.remove('active'));

    img.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});


/* REELS */
const reels=document.querySelectorAll('.reel');
reels.forEach(r=>{
  r.onclick=()=>{
    reels.forEach(x=>{x.classList.remove('active');x.querySelector('video').pause()});
    r.classList.add('active');
    r.querySelector('video').play();
  }
});

/* PRICE CLICK → PAYMENT */
document.querySelectorAll('.price').forEach(btn=>{
  btn.onclick=()=>{
    const card=btn.closest('.pet-card');
    petName.innerText=card.dataset.name;
    totalPrice.innerText=card.dataset.price;
    totalPrice2.innerText=card.dataset.price;
    orderImg.src=card.querySelector('img').src;
    payment.scrollIntoView({behavior:'smooth'});
  }
});

/* PAYMENT METHOD */
document.querySelectorAll('.method').forEach(m=>{
  m.onclick=()=>{
    document.querySelectorAll('.method').forEach(x=>x.classList.remove('active'));
    m.classList.add('active');
  }
});
/*conntact form*/
document.getElementById('sendMsg').addEventListener('click', ()=>{
  const name = cName.value.trim();
  const email = cEmail.value.trim();
  const msg = cMsg.value.trim();

  if(!name || !email || !msg){
    alert('Please fill in all fields');
    return;
  }

  alert('✅ Message sent successfully!');
  cName.value = cEmail.value = cMsg.value = '';
});
