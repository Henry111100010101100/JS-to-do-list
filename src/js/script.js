"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu_burger'),
        list = document.querySelector('.tasks_list'),
        input = document.querySelector('.main_menu_input'),
        btn = document.querySelector('.main_menu_btn');

    const tasksList = [];

    burger.addEventListener('click', () => {
        burger.classList.toggle('menu_burger_active');
    });

    btn.addEventListener('click', function() {

        if (input.value.length >0) {
            const newTask = document.createElement('div');
            const taskModificator = document.createElement('div');
            const descr = document.createElement('p');
            descr.classList.add('tasks_list_item_descr');
            descr.textContent = input.value;
    
/*          const trash = document.createElement('a');
            trash.classList.add('tasks_list_item_delete');
            trash.innerHTML = `<img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon">`;
            
            const edit = document.createElement('a');
            edit.classList.add('tasks_list_item_edit');
            edit.innerHTML = `<img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon">`; */
            
            newTask.appendChild(descr);
            //taskModificator.append(trash);
            //taskModificator.append(edit);
            //newTask.append(taskModificator);
            
            
            
            newTask.innerHTML += `
                <div class="tasks_list_item_modification">
                    <img class="tasks_list_item_delete" src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon">
                    <img class="tasks_list_item_edit" src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon">
                </div>
            `;

            newTask.classList.add('tasks_list_item');
            newTask.style.display = 'flex';
    
            list.appendChild(newTask);
    
            input.value = '';
    
            list.addEventListener('click', function(event) {
                //console.log(event.target);
                if(event.target.classList.contains('tasks_list_item_delete')) {
                    event.target.parentElement.parentElement.remove();
                } else {
                    return false;
                }  
            }); 

            list.addEventListener('click', function(event) {
                //console.dir(event.target);
                if(event.target.classList.contains('tasks_list_item_edit')) {
                    event.target.parentElement.previousElementSibling.classList.toggle('tasks_list_item_descr_done');
                } else {
                    return false;
                }
            }); 
            
            /* edit.addEventListener('click', function() {
                descr.classList.toggle('tasks_list_item_descr_done');
            }); */

            
        } else {
            alert("Пожалуйста, введите название задачи");
        }
    });
}); 
