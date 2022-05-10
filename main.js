//selector tất cả element
const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAllBtn = document.querySelector('.footer button')
const pendingTaskNum = document.querySelector('.pendingTask')

inputBox.onkeyup = () =>{
    let userEnterValue = inputBox.value;
    if (userEnterValue.trim() !=0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');       
    }
};
showTask();
addBtn.onclick = () => {

// Khi user gõ vào bàn phím
    let userEnterValue = inputBox.value;
//lấy dữ liệu từ locaolStorage
    let getlocalStorage = localStorage.getItem('Newtodo')
    if(getlocalStorage ==null){  //nếu không có dữ liệu trong local
        console.log('here1')
        listArray =[]
    }else{
        console.log('here2')
        listArray = JSON.parse(getlocalStorage) // nếu có dữ liệu trong local
    }
    listArray.push(userEnterValue);
    console.log(listArray);
    localStorage.setItem("Newtodo",JSON.stringify(listArray));
    showTask()
    addBtn.classList.remove('active');
};

function showTask() {
    let getlocalStorage = localStorage.getItem('Newtodo')
    if(getlocalStorage ==null){  //nếu không có dữ liệu trong local
        listArray =[]
    }else{
        listArray = JSON.parse(getlocalStorage) // nếu có dữ liệu trong local
    }

    pendingTaskNum.textContent = listArray.length; // Tổng số task = giá trị của mảng
    let newLiTask = "";
    listArray.forEach((element, index) => {
        newLiTask += `<li>
        ${element}
        <span onclick="deleteTask(${index})" class="icon"><i class="fas fa-trash"></i></span>
      </li>`;
      });
      todoList.innerHTML = newLiTask;
      inputBox.value = ""
}

function deleteTask(index) {
    let getlocalStorage = localStorage.getItem('Newtodo');
    listArray = JSON.parse(getlocalStorage)
    listArray.splice(index, 1); //delete item
    localStorage.setItem('Newtodo', JSON.stringify(listArray));
    showTask()
}

deleteAllBtn.onclick = () =>{
    let getlocalStorage = localStorage.getItem('Newtodo');
    listArray = JSON.parse(getlocalStorage)
    listArray = []
    localStorage.setItem('Newtodo', JSON.stringify(listArray));
    showTask()
    
}
