let thisPage = 1;
let limit = 10;
let list = document.querySelectorAll('.list .item');



function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
    if(thisPage < count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
    
}
function changePage(i){
    thisPage = i;
    loadItem();
}


let toastBox = document.getElementById('toastBox')

function showToast(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'success';
    toastBox.appendChild(toast);

}


function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.classList.add("show");
    // Store the snackbar state in local storage
    localStorage.setItem('snackbarVisible', 'true');
  }
  
  // Check if the snackbar should be visible on page load
  document.addEventListener('DOMContentLoaded', function() {
    var x = document.getElementById("snackbar");
    var isVisible = localStorage.getItem('snackbarVisible');
    if (isVisible === 'true') {
      x.classList.add("show");
    }
  });
  
  // Hide the snackbar after 3 seconds
  setTimeout(function() {
    var x = document.getElementById("snackbar");
    x.classList.remove("show");
    // Clear the snackbar state in local storage
    localStorage.removeItem('snackbarVisible');
  }, 3000);