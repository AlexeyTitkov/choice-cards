const getAnswer = (index) => {
    const answers = ['1', '2', '3']
    return answers[index]
}

const cards = [
    {
        input: document.querySelector('#input1'),
        btn: document.querySelector('.btn1')
    },
    {
        input: document.querySelector('#input2'),
        btn: document.querySelector('.btn2')
    },
    {
        input: document.querySelector('#input3'),
        btn: document.querySelector('.btn3')
    },
]

let counter = 0

function handlerCheckAnswer(index) {
    if (this.input.value === getAnswer(index)) {
        this.input.disabled = true
        this.btn.disabled = true
        counter++
        if (counter === 3) {
            alert('Вы ответили всё правильно')
            window.location.href = 'https://google.com'
        }
    } else {
        this.input.value = ''
        alert('Ответ неверный, попробуй ещё!')
    }
}

cards
    .sort(() => Math.random() - 0.5)
    .forEach((card, index) => {
        card.btn.addEventListener('click', handlerCheckAnswer.bind(card,index))
    })


