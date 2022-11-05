// let arr = [123, 1, 6, 45, 43, 8, 456];

// function bubbleSort (arr) {
//   for (let i = 0; i < arr.length - 1;  i++) {
//       for (let j = 0; j = arr.length - 1 - i; j++) {
//           if (arr[j] > arr[j + 1]) {
//             const wasSwap = arr[j]
//               arr[j] = arr[j + 1]
//               arr[j + 1] = wasSwap
//            }
//        }
//    }
//   return arr;
// };
// bubbleSort();
const dino = document.getElementById('dino');
const cactus =  document.getElementById('cactus');

document.addEventListener('keydown', function(e){
  jump();
})

function jump(){
  if(dino.classList != "jump"){
    dino.classList.add("jump")
  }
  setTimeout(function(){
    dino.classList.remove("jump")
 }, 300)
}

let isAviable = setInterval(function(){
 let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
 let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

 if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
  alert("Game Over!")
 }
}, 10);
