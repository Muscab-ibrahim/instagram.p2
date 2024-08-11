const typing = document.querySelector('#typing');
const username = document.querySelectorAll('.box');

const btn = document.querySelector('#btn');

const add_friend = document.querySelector('.add-friend');

// console.log(add_friend)






btn.addEventListener('click', () => {
    // show add friend section
   add_friend.style.display = 'block';

   const back = document.querySelector('#back');

   const add_friend_btn = document.querySelectorAll('.add-friend-btn');

   add_friend_btn.forEach( btn => {



    // reques sent
    btn.addEventListener('click', () => {
       btn.innerText = 'Request sent';
    })

    // cancel
   back.addEventListener('click', () => {
    add_friend.style.display = 'none'
    btn.innerText = 'add friend'
    
   })
   })
 

  
})









