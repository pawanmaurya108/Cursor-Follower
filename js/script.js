let follower = document.getElementById('follower');

document.addEventListener('mousemove', (event) => {
  let {clientX, clientY} = event;
  
  follower.style.left = `${clientX+5}px`;
  follower.style.top = `${clientY+5}px`;
  
});