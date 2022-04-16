const quizeElements = {
    main : document.querySelector('#app'),
    title : document.querySelector('.quiz__question-title > .is-block'),
    questionArea: document.querySelector('.quiz__question-wrapp')
}

const progresIls = {
    bonusBarInt: document.querySelector('.discount__value > b'),
    progresBarInt: document.querySelector('.progress-bar-linear__label > span'),
    progresBar: document.querySelector('div.progress-bar-linear__field > div')
}

let lastSelectChng = new Date ();

let quizeItems = [
    {
        title: 'Який стиль кухні вам більше подобається?',
        vertical: false,
        items: [
            {text: 'Дерево (від 15 тис. м.п.)', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/loh4texgyhb9uufh6x6a.jpg'},
            {text: 'Акрил (від 10 тис. м.п)', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/uctoetavobmyvwrxja7z.jpg'},
            {text: 'Фарба (від 6 тис. м.п.)', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/myclvj1zh8teu9eyx6ql.jpg'},
            {text: 'Плівка (від 6 тис м.п.)', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/enduoirijrtdqksmek8o.jpg'},
            {text: 'ДСП (від 4 тис. м.п.)', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/wywf8rrw6lan8broc5b2.jpg'},
            {text: 'Свій варіант', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/y7vzm31f0pll3egcxzqo.jpg'}
        ],
        bonus: 2,
        progress: 20
    },
    {
        title: 'Тип вашої майбутньої кухні?',
        vertical: false,
        items: [
            {text: 'П-образна', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/xdz3mq5uiyf7itxuyluk.png'},
            {text: 'Островна', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/iktikgvbyrxglvnwa6gm.png'},
            {text: 'Г-образна', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/wvgwoooi1ia0zyhp2uuw.png'},
            {text: 'Пряма', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/zfmowfndd6q7g8dqaf0x.png'},
            ],
        bonus: 2,
        progress: 20
    },
    {
        title: "Вкажіть довжину вашої кухні (в метрах)",
        vertical: true,
        items: [
            {text: '2-3', img: false, select: false},
            {text: '3-4', img: false, select: false},
            {text: '4-6', img: false, select: false },
            {text: '6-8', img: false, select: false},
            {text: 'більше 8', img: false, select: false},
        ],
        bonus: 2,
        progress: 20
    },
    {
        title: "На яку суму ви розраховуєте?",
        vertical: true,
        items: [
            {text: 'До 20 000 грн', img: false, select: false},
            {text: 'До 50 000 грн', img: false, select: false},
            {text: 'До 100 000 грн', img: false, select: false },
            {text: 'Від 100 000 грн', img: false, select: false}
        ],
        bonus: 1,
        progress: 13
    },
    {
        title: "Коли плануєте замовити кухню?",
        vertical: true,
        items: [
            {text: 'Терміново', img: false, select: false},
            {text: 'Через тиждень', img: false, select: false},
            {text: 'Протягом місяця', img: false, select: false },
            {text: 'Через кілька місяців', img: false, select: false}
        ],
        bonus: 1,
        progress: 14
    },
    {
        title: 'Оберіть подарунок до кухні:',
        vertical: false,
        items: [
            {text: 'Витяжка', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/lqi8ckb1cngsxarlsc9p.jpg'},
            {text: 'Мийка', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/whgcxpzzrlvxlkhwsis4.jpg'},
            {text: 'Змішувач', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/oen0lgxfygurstl76d3d.jpg'},
            {text: 'Нічого не треба', select: false, img: 'https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/ovvi9krcjlevpymnzgfs.png'}
            ],
        bonus: 2,
        progress: 13
    }
]

let quizProgress = {
    index: 0,
    progress : 0,
    bonus : 0, 
    result : [
        {title:'Hi!', select: 'K'}
    ]
}

const buttons = {
    next : document.querySelector('.quiz-navbar__button_next'),
    prev : document.querySelector('.quiz-navbar__button_prev')
}

buttons.next.addEventListener('click', (e)=> {
    e.preventDefault()
    switchLvl(true);
})

buttons.prev.addEventListener('click', (e)=> {
    e.preventDefault()
    switchLvl(false);
})

const buttonVisib = (button, bool) => {
    console.log(bool)
    button.disabled = bool
}

const quizeItemsView = (items, element) => {
    let codeReady = '';
    items.map((e, index) => {
        let cdR = ''
        e.items.map((el, i)=>{
            cdR += quizeItemGeneator(el, e.vertical, i);
        })
        codeReady += `
        <div class="quiz__question-item ${(index == quizProgress.index) ? '_active' : ''}" data-index=${index}>
                                <div class="quiz__questions-header">
                                    <!---->
                                    <!---->
                                    <div class="title quiz__question-title quiz__question-title_without-title"><span
                                            class="is-block">${e.title}</span>
                                    </div>

                                </div>
                                <div class="question quiz__question question_${e.vertical ? 'variants':'images'}" id="xyR1mvk688">
                                    <!---->
                                    <div class="answer-${e.vertical ? 'variants':'images'}">
                                        <div class="answer-variants__group">
                                          ${cdR}  
                                        </div>
                                        <!---->
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!---->
                                </div>
                                <div class="quiz__whitelabel quiz__whitelabel_mobile"
                                    style="display: block !important; visibility: visible !important; opacity: 1 !important;">
                                    <!---->
                                </div>
                            </div>
        ` ;
    })
    quizeElements.questionArea.innerHTML = codeReady;
}


const quizeItemGeneator = (params, vert = true, index = 0) => {
    return vert ? `
    <div data-element-index=${index} class="answer-variants__variant-text" >
        <label class="b-radio radio"><input type="radio" value="${params.text}"><span
                class="check"></span><span class="control-label">
                <div class="answer">
                    <div class="answer__title">${params.text}
                        <!---->
                    </div>
                    <!---->
                </div>
            </span></label>
        <!---->
    </div>
    ` : `
    <div data-element-index=${index}
        class="answer-images__answer-container answer-images__answer-container__type_square"
        style="">
        <!----><label class="b-radio radio"><input type="radio"
                value="${params.text}"><span
                class="check"></span><span class="control-label">
                <div class="answer-image answer-image_type_square">
                    <div
                        class="answer-image__img-container answer-image__img-container_with-img">
                        <img src="${params.img}"
                            class="answer-image__img">
                        <!---->
                    </div>
                    <div class="answer-image__title">${params.text}</div>
                </div>
            </span></label>
    </div>
    `
}

quizeItemsView(quizeItems, quizeElements)

const switchLvl = (action, element = null) => {
    let index = element ? element : quizProgress.index;
    buttonVisib(buttons.next, action)
    const actCh = document.querySelector(`.quiz__question-item[data-index='${index}']`);
    actCh.classList.remove('_active');
    if (action && quizProgress.index + 1 < quizeItems.length) {
        quizProgress.index = index + 1;
        quizProgress.progress +=  quizeItems[index].progress;
        quizProgress.bonus +=  quizeItems[index].bonus;
    } else if (!action && quizProgress.index-- > 0) {
        quizProgress.progress -=  quizeItems[index-1].progress;
        quizProgress.bonus -=  quizeItems[index-1].bonus;
    }else if (action && quizProgress.index + 1 == quizeItems.length) {
        resultGenerator();
    }
    let newCh = document.querySelector(`.quiz__question-item[data-index='${quizProgress.index}']`);
    newCh.classList.add('_active');
    newCh.style.top = '-' + (quizProgress.index * 100 ) + '%'
    rerederPage();
}

const rerederPage = () => {
    progresIls.bonusBarInt.innerHTML = quizProgress.bonus + "%";
    progresIls.progresBarInt.innerHTML = quizProgress.progress + "%";
    progresIls.progresBar.style.width = quizProgress.progress + "%";
    quizProgress.index == 0 ? buttons.prev.disabled = true : buttons.prev.disabled = false;
    //quizProgress.index < quizeItems.length ? buttons.next.disabled = false : buttons.next.disabled = true;
     
}

const switchRadio = (element) => {
    let par = element.parentElement.parentElement.parentElement.parentElement.parentElement,
        parInd = par.dataset.index
        elInd = element.parentElement.dataset.elementIndex
    quizeItems[parInd].items.forEach(element => {
        element.select = false
    })
    quizeItems[parInd].items[elInd].select = true;
    buttonVisib(buttons.next, false)
    viewRadio(parInd, par)
    switchLvl(true);
}

const viewRadio = (elId, p) => {
    let allRadio = p.querySelectorAll('input[type="radio"]')
    allRadio.forEach((e, index)=>{
        e.checked = quizeItems[elId].items[index].select
    })
}

let subitems = document.querySelectorAll('.b-radio.radio')

subitems.forEach( element => {
    element.addEventListener('click', () => {
        let nowDate = new Date();
        if (nowDate - lastSelectChng > 1000) {
            switchRadio(element);
            lastSelectChng = nowDate
        }
        

    })
})

const resultGenerator = (data) => {
    let resultText = '';
    quizeItems.forEach(element => {
        let resultAsk = '___ '
        element.items.filter(e=> {
            if (e.select) resultAsk = e.text
        }) 
        resultText += element.title + " => " + resultAsk 
    })
    console.log(resultText)
    quizeElements.main.innerHTML = resultText;
}

setTimeout(()=>{
    rerederPage()
}, 0)


