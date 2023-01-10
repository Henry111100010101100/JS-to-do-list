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
    
            const trash = document.createElement('a');
            trash.classList.add('tasks_list_item_delete');
            trash.innerHTML = `<img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon">`;
            
            const edit = document.createElement('a');
            edit.classList.add('tasks_list_item_edit');
            edit.innerHTML = `<img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon">`;
            
            newTask.append(descr);
            taskModificator.append(trash);
            taskModificator.append(edit);
            newTask.append(taskModificator);
            
            
            
          /*   newTask.innerHTML += `
                    <div class="tasks_list_item_modification">
                        <a href="#" class="tasks_list_item_delete"><img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon"></a>
                        <a href="#" class="tasks_list_item_edit"><img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon"></a>
                    </div>
                `; */
    
            newTask.classList.add('tasks_list_item');
            newTask.style.display = 'flex';
    
            list.append(newTask);
    
            input.value = '';
    
            trash.addEventListener('click', function() {
                descr.parentElement.remove();
            }); 
    
            edit.addEventListener('click', function() {
                descr.classList.toggle('tasks_list_item_descr_done');
            });
        } else {
            alert("Пожалуйста, введите название задачи");
        }
    });
}); 












/*         const trash = document.querySelectorAll('.tasks_list_item_delete');
        trash.forEach(item => {
                item.addEventListener('click', function() {
                descr.parentElement.remove();
            }); 
        });

        const edit = document.querySelectorAll('.tasks_list_item_edit');
        edit.forEach((item, event) => {
            item.addEventListener('click', function() {
            event.target.parentElement.classList.toggle('tasks_list_item_descr');
            });
        });
 */










    /* function renderTaskList() {
        const newTask = document.createElement('div');
        newTask.innerHTML += `
                <div class="tasks_list_item_descr">${input.value}</div>
                <div class="tasks_list_item_modification">
                    <a href="#" class="tasks_list_item_delete"><img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon"></a>
                    <a href="#" class="tasks_list_item_edit"><img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon"></a>
                </div>
            `;
        newTask.classList.add('tasks_list_item');
        newTask.style.display = 'flex';
        newTask.textContent = input.value;

        list.append(newTask);
    }

    function addTasks() {
        let task;
        tasksList.push(task);
    }

    btn.addEventListener('click', () => {

        if (input.value !== '' && input.value !== null && input.value !== undefined) {
            let task = input.value;
        }
        


        /* tasksList.forEach(elem => {
            elem.innerHTML += `
            <div class="tasks_list_item">
                <div class="tasks_list_item_descr">${descr}</div>
                <div class="tasks_list_item_modification">
                    <a href="#" class="tasks_list_item_delete"><img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon"></a>
                    <a href="#" class="tasks_list_item_edit"><img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon"></a>
                </div>
            </div>
            `;

        }); */

     /*    if (input.value !== '' && input.value !== null && input.value !== undefined) {
            descr = newTask;
            item.style.display = 'flex';
            tasksList.push(item);
        }
 */

  /*   }); */

    /* function createTasksList(tasks, parent) {
        parent.innerHTML = '';

        tasks.forEach((task, i) => {
            parent.innerHTML += `
            <div class="tasks_list_item">
                    <div class="tasks_list_item_descr">${task}</div>
                    <div class="tasks_list_item_modification">
                        <a href="#" class="tasks_list_item_delete"><img src="icons/main/tasks_list_item_trash.svg" alt="list-item-trash-icon"></a>
                        <a href="#" class="tasks_list_item_edit"><img src="icons/main/tasks_list_item_edit.svg" alt="list-item-edit-icon"></a>
                    </div>
                </div>
            `; 
            createTasksList(tasks, parent);
        }); 
    } */
