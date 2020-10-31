const modal = $.modal({
    closable: true
})

const buttons = document.querySelectorAll('.button')
for(button of buttons){
    button.addEventListener('click', () => modal.open())
}

let name = document.getElementById('name')
let phone = document.getElementById('phone-number')
let checkSms = document.getElementById('checkbox-for-sms')
const btn = document.getElementById('buy-it')

btn.addEventListener('click', () => {
    if(name.value !== '' && phone.value !== ''){
        console.log(`Name is: ${name.value}. Phone is: ${phone.value}.`)
        alert('Ваше замовлення відпралено, очікуйте на дзвінок(3-5 хвилин)')
        if(checkSms.checked){
            console.log(`Sms sending`)
        }
    }
    else{
        alert('Ви не заповнили поля')
    }
})