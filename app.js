let addtodoList = document.querySelector('.add');
addtodoList.addEventListener('click',addtodo);

function addtodo(e){
    e.preventDefault();
    var item = document.querySelector('.txt');
    var list = document.querySelector('.list');
    var todo = document.createElement('li');
    var todoitem = document.createElement('p');
    
    list.appendChild(todo);
    todo.appendChild(todoitem);
    todoitem.textContent = item.value;
   document.querySelector('.txt').value = "";


   let rmvbtn = document.createElement('span');
   let rmvicon = document.createElement('i');

   rmvbtn.classList.add('remove');
   rmvicon.classList.add('fa-solid');
   rmvicon.classList.add('fa-trash');

   todo.append(rmvbtn);
   rmvbtn.append(rmvicon);
   rmvbtn.addEventListener('click', removetodo);
}

function removetodo(e){
    this.parentElement.remove();
}
