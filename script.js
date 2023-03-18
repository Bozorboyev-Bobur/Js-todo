const input = document.querySelector('.input')
const tasksContainer = document.querySelector('.tasks-container')


document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        if (input.value !== '') {
            tasksContainer.innerHTML +=
                `
                <div class="task">
                    <div class="task-text">${input.value}</div>
                    <button class="task-button"><img src="/public/check.svg" alt=""></button>
                    <button id="remove-btn" class="task-button"><img src="/public/remove.svg" alt=""></button>
                </div>
            `
            input.value = ''
        }
        else {
            null
        }
    }
})