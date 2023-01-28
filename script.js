const inputEl = document.querySelector('.header__wrapper__input')
const listEl = document.querySelector('.list')
const listItemEl = document.querySelectorAll('.list__item')
const buttonAddToList = document.querySelector('.header__wrapper__button')
const buttonComplete = document.querySelectorAll('.list__item__check__button')
const buttonRestoreItem = document.querySelectorAll(
    '.list__item__close__button'
)
const buttonDeleteItem = document.querySelectorAll(
    '.list__item__delete__button'
)

buttonAddToList.addEventListener('click', () => {
    const itemText = inputEl.value

    if (inputEl.value == '') {
        alert('Ei adicione o nome da tarefa! 😠')
    } else {
        listEl.innerHTML += `
            <li class="list__item">
                <div class="list__item__wrapper">
                    <div class="list__item__text">${itemText}</div>
                    <div class="list__item__buttons">
                        <button class="btn list__item__close__button">
                            <img
                                src="./assets/icon-close.svg"
                                alt="Reverter conclusão da tarefa"
                            />
                        </button>
                        <button class="btn list__item__check__button">
                            <img
                                src="./assets/icon-check.svg"
                                alt="Concluir tarefa"
                            />
                        </button>
                        <button class="btn list__item__delete__button">
                            <img
                                src="./assets/icon-delete.svg"
                                alt="Deletar tarefa"
                            />
                        </button>
                    </div>
                </div>
            </li>
        `
        inputEl.value = ''
    }
})

buttonComplete.forEach((button, index) => {
    button.addEventListener('click', () => {
        listItemEl[index].classList.add('list__item-checked')
    })
})

buttonRestoreItem.forEach((button, index) => {
    button.addEventListener('click', () => {
        listItemEl[index].classList.remove('list__item-checked')
    })
})
