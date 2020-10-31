function createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Замовити модель</span>
                    ${options.closable ? `<img src="./plugin/cancel.svg" class="modal-close" data-close="true"/>` : ''}
                </div>
                <div class="modal-body">
                    <form class="form">
                        <label for="name">Ваше ім'я</label>
                        <input type="text" id="name" class="input"></br>
                        <label for="phone-number">Ваш телефон</label>
                        <input type="tel" placeholder="+380957657698" maxlength="13" id="phone-number" class="input" ></br>
                        <label for="checkbox-for-sms">Відправити СМС</label>
                        <input type="checkbox" id="checkbox-for-sms">
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="buy-it" class="buy-it">Замовити</button>
                    <p class="alert">Натискаючи цю кнопку, ви даєте дозвіл на обробку персональних даних </p>
                </div>
            </div>
        </div> 
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = options => {
    const animationSpeed = 200
    const $modal = createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open(){
            if(destroyed){
                return console.log('Destroyed')
            }
            if(!closing){
                $modal.classList.add('_open')
            }
        },
        close(){
            closing = true
            $modal.classList.remove('_open')
            $modal.classList.add('_hide')
            setTimeout(() => {
                $modal.classList.remove('_hide')
                closing = false
            }, animationSpeed)
        }
    }

    // const closeButton = document.querySelector('.modal-close')
    // closeButton.addEventListener('mouseenter', e => {
    //     closeButton.classList.add('_rotate')
    //     console.log(e.target);
    // })
    // closeButton.addEventListener('mouseleave', () => {
    //     closeButton.classList.remove('_rotate')
    // })

    // const btn = document.querySelector('.buy-it')
    // btn.addEventListener('mouseenter', () => {
    //     btn.classList.add('_change-color')
    // })

    $modal.addEventListener('click', e => {
        if(e.target.dataset.close){
            modal.close()
        }
    })

    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        }
    })

}