// window.onload = addElementInput;
//
// myStorage = window.localStorage;
//
// function addElementInput() {
//     const newDiv = document.createElement('div');
//
//     const newInput = document.createElement('input');
//     newInput.type = 'text'
//     newInput.className = 'my-input'
//
//     const newDivButton = document.createElement('input')
//     newDivButton.type = 'submit'
//     newDivButton.className = 'input_button'
//     newDivButton.value = 'Сохранить'
//     newDivButton.id = 'click'
//     newDivButton.onclick = function () {
//        eventVal()
//     }
//
//     newDiv.append(newInput)
//     newDiv.append(newDivButton)
//
//     my_div = document.querySelector("#org_div1");
//     my_div.append(newDiv)
//
//     const inputCheckBox = document.createElement('input')
//     inputCheckBox.type= 'checkbox'
//     newDiv.append(inputCheckBox)
//
//     newDiv.style.display = 'flex'
//     newDiv.style.flexDirection = 'column'
//     newDiv.style.alignItems = 'center'
//
//     function eventVal() {
//         const first_input = document.querySelector('.my-input').value
//         const newInput = document.createElement('input');
//         newInput.type = 'text'
//         newInput.className = 'my-input'
//         newInput.value = first_input
//         my_div = document.querySelector("#org_div1");
//         newDiv.append(newInput)
//         newDiv.append(newDivButton)
//
//         const inputCheckBox = document.createElement('input')
//         inputCheckBox.type= 'checkbox'
//         inputCheckBox.style.display = 'flex'
//         newDiv.appendChild(inputCheckBox)
//     }
// }
// display: flex;
// flex-direction: column;
// function eventVal() {
//     let first_input = document.querySelector('.my-input').value
//     const newInput = document.createElement('input');
//     newInput.type = 'text'
//     newInput.className = 'my-input'
//     newInput.value = first_input
//     my_div = document.querySelector("#org_div1");
//     my_div.append(newInput)
//
// }

window.onload = onPageLoad;

myStorage = window.localStorage;

const addTask = () => {
    addInputVal = document.querySelector('.task_input').value
    if (addInputVal.trim() === '') {
        return
    }
    addToDoCont = document.querySelector('.to_do_container')
    const task = document.createElement('div')
    task.className = 'task_container'
    task.style.display = 'flex'
    task.style.alignItems = 'center'
    task.style.justifyContent = 'space-between'
    task.style.minWidth = '200px'

    const taskText = document.createElement('p')
    taskText.className = 'task_text'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const removeButton = document.createElement('input')
    removeButton.type = 'submit'
    removeButton.value = 'X'
    removeButton.addEventListener('mouseover', (event) => {
        event.target.style.background = 'red'
    })
    removeButton.addEventListener('mouseout', (event) => {
        event.target.style.background = 'white'
    })
    removeButton.onclick = () => removing()
    function removing() {
        const parent = document.querySelector('.task_container')
        parent.remove(parent.querySelector('p'))
    }

    taskText.innerText = addInputVal
    addToDoCont.append(task)
    task.append(checkbox)
    task.append(taskText)
    task.append(removeButton)
    document.querySelector('.task_input').value = ''
}


    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    function onPageLoad() {
        contDiv = document.querySelector("#main_con");

        const taskCont = document.createElement('div')
        taskCont.className = 'to_do_container'

        const intCont = document.createElement('div')
        intCont.className = 'interface_container'

        const taskInput = document.createElement('input')
        taskInput.id = 'input'
        taskInput.type = 'text'
        taskInput.className = 'task_input'
        taskInput.autofocus = true
        taskInput.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                event.preventDefault()
                document.querySelector('#click').click()
            }
        })
        taskInput.addEventListener('focus', (event) => {
            event.target.style.background = '#' + randomColor
        })

        const taskButton = document.createElement('input')
        taskButton.type = 'submit'
        taskButton.id = 'click'
        taskButton.value = 'add'
        taskButton.onclick = addTask
        contDiv.append(taskCont)

        contDiv.append(intCont)
        intCont.append(taskInput)
        intCont.append(taskButton)
    }








