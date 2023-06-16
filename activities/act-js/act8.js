const buttons = document.getElementById(`button`);
buttons.addEventListener(`click`, function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement(`span`);
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    console.log(x, y);

    setTimeout(() => {
        ripples.remove()
    }, 750);
})


document.getElementById(`button`).style.display = `None`;
document.getElementById(`counter`).style.display = `None`;
var modal = document.getElementById("myModal");
var btn = document.getElementById("Begin");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
i = 0;
document.getElementById(`begin`).addEventListener(`click`, function myFunction(){
    document.getElementById(`begin`).style.display = `none`;
    document.getElementById(`button`).style.display = `block`;
    document.getElementById(`counter`).style.display = `block`;
})

document.getElementById(`button`).addEventListener(`click`, function timeout(){
    i++;
    if(i > 50){
      localStorage.setItem(`act8`, `true`);
        alert(`you won`);
        document.getElementById(`button`).setAttribute(`href`, `../index.html`)
    }
    document.getElementById(`counter`).innerHTML = `${i}/50`;
    console.log(time);
})

function fail(){
  if(i < 50){
    alert(`time out`)
    location.reload();
  }
}