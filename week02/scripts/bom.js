const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');
const deleteButton = document.createElement('button')

li.textContent = input.value;
li.append(deleteButton);

list.append(li);

deleteButton.textContent = '❌';
