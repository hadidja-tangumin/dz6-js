// let input = document.querySelector('#input');
// let createButton = document.querySelector('#create_button');
// let todoList = document.querySelector('#todo_list');
//
// let createTodo = () => {
//     let div = document.createElement('div');
//     let divButton = document.createElement('div');
//     let text = document.createElement('h3');
//     let deleteButton = document.createElement('button');
//     let editButton = document.createElement('button');
//
//     div.setAttribute('class', 'block_text');
//     divButton.setAttribute('class', 'div_button');
//     deleteButton.setAttribute('class', 'delete_button');
//     editButton.setAttribute('class', 'edit_button');
//
//     deleteButton.innerText = 'DELETE';
//     editButton.innerText = 'EDIT';
//
//     divButton.append(deleteButton, editButton);
//     div.append(text, divButton);
//
//     let resultInput = input.value;
//     text.innerText = resultInput;
//
//     todoList.prepend(div);
//
//     input.value = '';
//     deleteButton.addEventListener('click', () => div.remove())
// };
//
// function resultInput() {
//     let resultInput = document.querySelector('input').value;
//     document.querySelector('#create_button').innerHTML = inputCreate;
// }
//
// let result = () => {
//     if (input.value === '') {
//         alert('Заполните поле');
//     } else {
//         createTodo();
//     }
// };
//
// createButton.onclick = result;





let books = ['английский язык', 'Русский', 'Новая история', 'война и мир']
let result = books.filter(filter => filter.includes('н') || filter.includes('Н'))
console.log(result)


