const toDoInput = document.querySelector('.header__wrapper__input')
const toDolist = document.querySelector('.list')
const header = document.querySelector('.header')
const buttonAddToList = document.querySelector('.header__wrapper__button')
const buttonComplete = document.querySelectorAll('.list__item__check__button')
const buttonRestoreItem = document.querySelectorAll(
    '.list__item__close__button'
)
const buttonDeleteItem = document.querySelectorAll(
    '.list__item__delete__button'
)
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__cancel__button')
const confirmModal = document.querySelector('.modal__confirm__button')
const itemButtons = document.querySelectorAll('.list__item__buttons')

const saveToDo = (text) => {
    const toDoItem = document.createElement('li')
    toDoItem.classList.add('list__item')

    const toDoItemWrapper = document.createElement('div')
    toDoItemWrapper.classList.add('list__item__wrapper')
    toDoItem.appendChild(toDoItemWrapper)

    const toDoTitle = document.createElement('h3')
    toDoTitle.classList.add('list__item__title')
    toDoTitle.innerHTML = text
    toDoItemWrapper.appendChild(toDoTitle)

    const toDoButtons = document.createElement('div')
    toDoButtons.classList.add('list__item__buttons')
    toDoItemWrapper.appendChild(toDoButtons)

    const checkButton = document.createElement('button')
    checkButton.classList.add('list__item__check__button', 'btn')
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    toDoButtons.appendChild(checkButton)

    const revertCheckButton = document.createElement('button')
    revertCheckButton.classList.add('list__item__close__button', 'btn')
    revertCheckButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    toDoButtons.appendChild(revertCheckButton)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('list__item__delete__button', 'btn')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    toDoButtons.appendChild(deleteButton)

    toDolist.appendChild(toDoItem)
    toDoInput.value = ''
    toDoInput.focus()
    console.log(toDoItem)
}

buttonAddToList.addEventListener('click', (e) => {
    let inputValue = toDoInput.value

    if (inputValue) {
        saveToDo(inputValue)
    } else {
        alert('Ei adicione o nome da tarefa! 😠')
    }
})

toDolist.addEventListener('click', (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest('li')

    // Check item
    if (
        targetEl.classList.contains('list__item__check__button') ||
        targetEl.classList.contains('fa-check')
    ) {
        parentEl.classList.toggle('list__item-checked')
    }

    // Uncheck item
    if (
        targetEl.classList.contains('list__item__close__button') ||
        targetEl.classList.contains('fa-xmark')
    ) {
        parentEl.classList.toggle('list__item-checked')
    }

    // Delete item
    if (
        targetEl.classList.contains('list__item__delete__button') ||
        targetEl.classList.contains('fa-trash')
    ) {
        modal.classList.remove('hide')
        toDolist.classList.add('blur')
        header.classList.add('blur')
        confirmModal.addEventListener('click', () => {
            parentEl.remove()
            modal.classList.add('hide')
            toDolist.classList.remove('blur')
            header.classList.remove('blur')
        })
        closeModal.addEventListener('click', () => {
            modal.classList.add('hide')
            toDolist.classList.remove('blur')
            header.classList.remove('blur')
        })
    }
})
