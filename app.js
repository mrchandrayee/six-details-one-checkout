(() => {
const lessons=[
{eyebrow:'DETAIL 01 — EXPRESS PAY',headline:'Fastest path <em>first.</em>',title:'Fastest path first.',copy:'People who can skip the form, do. The wallet already knows the email, card and expiry.',rule:'Put the fastest path at the top.'},
{eyebrow:'DETAIL 02 — GUEST BY DEFAULT',headline:'No account <em>wall.</em>',title:'No account wall.',copy:'Forced sign-up is one of the top reasons people abandon a cart. A password is a chore, not a purchase.',rule:'Offer the account after they pay.'},
{eyebrow:'DETAIL 03 — LIVE FORMATTING',headline:'Format as <em>they type.</em>',title:'Format as they type.',copy:'Groups of four match the card in your hand, so mistakes jump out. The brand confirms it is being read right.',rule:'Format input in people’s heads.'},
{eyebrow:'DETAIL 04 — TRUST IN PLACE',headline:'Calm the worry <em>where it starts.</em>',title:'Trust where doubt starts.',copy:'Doubt peaks the moment a card number goes in. A lock in the footer is never read at that moment.',rule:'Put trust signals at the moment of doubt.'},
{eyebrow:'DETAIL 05 — A REAL DATE',headline:'A date, <em>not a range.</em>',title:'A date, not a range.',copy:'A range makes people guess. A date is something people can plan around.',rule:'Show the delivery date, not the math.'},
{eyebrow:'DETAIL 06 — PRICE ON THE BUTTON',headline:'No surprise at <em>the last tap.</em>',title:'No surprise at the last tap.',copy:'The total on the label is a promise: this tap costs exactly this. Sticky at the bottom, it sits under the thumb.',rule:'Put the full total on the final button.'}
];
let index=0;
const $=id=>document.getElementById(id);
function setDetail(n){index=Math.max(0,Math.min(5,n));const d=lessons[index];$('eyebrow').textContent=d.eyebrow;$('headline').innerHTML=d.headline;$('detailCount').textContent=`0${index+1} / 06`;$('detailTitle').textContent=d.title;$('detailCopy').textContent=d.copy;$('rule').innerHTML=`<b>RULE</b> ${d.rule}`;$('prev').disabled=index===0;$('next').disabled=index===5;$('next').textContent=index===5?'Last detail':'Next detail →';document.querySelectorAll('.progress i').forEach((el,i)=>el.classList.toggle('on',i<=index));document.querySelectorAll('.summary-list>div').forEach((el,i)=>el.classList.toggle('highlight',i===index));}
$('prev').addEventListener('click',()=>setDetail(index-1));$('next').addEventListener('click',()=>setDetail(index+1));
$('guest').addEventListener('click',()=>{$('guest').classList.add('selected');$('signin').classList.remove('selected');$('passwordNote').classList.remove('visible')});
$('signin').addEventListener('click',()=>{$('signin').classList.add('selected');$('guest').classList.remove('selected');$('passwordNote').classList.add('visible')});
$('card').addEventListener('input',e=>{let digits=e.target.value.replace(/\D/g,'').slice(0,19);e.target.value=digits.replace(/(\d{4})(?=\d)/g,'$1 ').trim();$('brand').textContent=digits.startsWith('4')?'VISA':digits.startsWith('5')?'MC':digits?'CARD':'CARD'});
$('expiry').addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'').slice(0,4);if(v.length>=3)v=v.slice(0,2)+' / '+v.slice(2);e.target.value=v});
$('cvc').addEventListener('input',e=>e.target.value=e.target.value.replace(/\D/g,'').slice(0,4));
$('express').addEventListener('click',()=>{$('formMessage').textContent='Express pay is a visual demo. Connect a payment provider to process a real payment.'});
$('paymentForm').addEventListener('submit',e=>{e.preventDefault();$('formMessage').textContent='Demo only — no payment was processed and no card details were sent or stored.'});
$('pay').addEventListener('click',()=>{$('buttonHint').textContent=''});
// Show a real calendar date in the delivery estimate instead of a vague range.
const delivery=new Date();delivery.setDate(delivery.getDate()+7);$('deliveryDate').textContent='Arrives '+new Intl.DateTimeFormat('en-US',{weekday:'short',month:'short',day:'numeric'}).format(delivery);
setDetail(0);
})();