/**
 * Created by darmen on 5/28/16.
 */

//объект с массивами из слов для упражения по аффиксам мн.числа
var wordsForPlural = {
    dar: ["қоян", "арыстан", "жол", "маман", "мейрам", "жылан", "арман", "маймыл", "қоңыз", "тұрғын", "орман", "банан", "шабандоз", "қолтырауын", "стеллаж", "экипаж", "бұйым", "орын", "қарбыз", "өнерпаз", "алаң", "ұйым", "ғалым", "сусын", "ауыл", "раушан", "ақын", "жұлдыз", "қол", "ұл", "аң", "қыз", "аспаз", "толқын", "мысал", "әнұран", "коллаж", "дарын", "емтихан", "шам", "сағыз", "аудан", "оқу зал", "адам", "бағбан", "болжам", "шал", "бұлбұл", "басылым", "айыппұл"],
    der: ["келін", "шешім", "әзіл", "өзен", "кілем", "піл", "теңіз", "мәулен", "тізім", "сөйлем", "киім", "дәлел", "төлем", "әйел", "мүсін", "өлең", "жиен", "білім", "сөз", "дүкен", "бассейн", "сезім", "келісім", "мезгіл", "жүзім", "әкім", "көгершін", "тиін", "тіл", "жүз", "егіз", "тәж", "көз", "мәтін", "өлшем", "үстел", "ән", "ел", "күн", "түн", "кез", "көрермен", "мұғалім", "дәйексөз", "бөлім", "тізім", "апельсин", "есім", "өнім", "бөтен"],
    tar: ["ашық хат", "пышақ", "қасық", "ұрпақ", "гепард", "құс", "қорап", "мақсат", "шарф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "сұрақ", "жауап", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұлт", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "жауап", "тақырып", "жұмбақ", "зат", "жас", "ғимарат", "қабат", "ат", "ұшқыш", "замандас"],
    ter: ["есік", "жіп", "ит", "күшік", "есеп", "кәмпит", "жеміс", "көкөніс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "көзілдірік", "инелік", "өшіргіш", "детектив", "ниет", "тілек", "сүрткіш", "себет", "ересек", "көжек", "көйлек", "жігіт", "сүйек", "өсімдік", "себеп", "сөздік", "күнделік", "мектеп", "сурет", "әріптес", "тіс", "мүмкіншілік", "жерлес", "ілгіш", "шелек", "кереует", "велосипед", "білезік", "дөңгелек", "кезек", "әріп", "мектеп", "әртіс", "пікірлес", "кәмпит", "әріптес", "кіре беріс"],
    lar: ["аю", "қой", "қасқыр", "ай", "ұя", "бояу", "торғай", "аңшы", "ұлу", "батыр", "құмырсқа", "қолшатыр", "сапар", "ботқа", "кітапхана", "бұзау", "жаттығу", "театр", "сақина", "саяжай", "жағажай", "құрылысшы", "жануар", "оқиға", "жоба", "қол қою", "ұры", "шаңғы", "сарай", "сахна", "құрбы", "жанұя", "жау", "жоспар", "ту", "балықшы", "тамыр", "қабырға", "гимназия", "сиыр", "даяшы", "қоңырау", "қайшы", "қолжазба", "аудармашы", "сұңқар", "тауар", "жұбай", "аққу", "жылқы"],
    ler: ["кеме", "түлкі", "көпір", "биші", "ереже", "күйеу", "кірпі", "шегіртке", "түйе", "өнер", "нөмер", "мекеме", "әшекей", "белбеу", "кісі", "сүлгі", "жүргізуші", "әнші", "дәстүр", "жер", "үлгі", "өрмекші", "үйірме", "жүйе", "кездесу", "ғарышкер", "сәби", "жеңіскер", "түр", "әңгіме", "немере", "жеңге", "пәтер", "көше", "көлеңке", "би", "саудагер", "төлеуші", "пікір", "нәрсе", "бейне", "сөре", "қызметкер", "ине", "теңізші", "дәрі", "үй", "тәрелке", "зейнеткер", "меңгеруші"]
};

//объект с кириллистическим написанием аффиксов мн.числа:
var pluralAffixes = {
    dar: "дар",
    der: "дер",
    tar: "тар",
    ter: "тер",
    lar: "лар",
    ler: "лер"
};

//общий контейнер для упражений по мн.числу:
var practiceWindow = document.getElementById("practiceWindow"),
//элемент для отображения корня слова:
wordRoot = practiceWindow.getElementsByClassName
("root")[0],
//элемент для отображения аффикса:
wordAffix = practiceWindow.getElementsByClassName
("affix")[0],
//элемент для отображения галочки при верном ответе:
validAnswerSign = practiceWindow.getElementsByClassName
("valid-sign")[0],
//элемент для отображения текста неверного ответа:
invalidAnswerSign = practiceWindow.getElementsByClassName
("invalid")[0],
//общий контейнер для кнопок ответа:
answerButtonsContainer = practiceWindow.getElementsByClassName
("answer-buttons-container")[0],
//кнопки ответа:
answerButtons = answerButtonsContainer.getElementsByTagName("button"),
//кнопка показа следующего слова:
skipWordButton = practiceWindow.getElementsByClassName("skip-word")[0];

//здесь будет храниться  случайное слово из массива и название массива,
// к которому оно относится:
var randomElementAndItsParentName,
//здесь будет храниться слово из массива:
randomElement,
//здесь будет храниться название массива, к котому относится слово:
parentOfTheElementName;



document.addEventListener("DOMContentLoaded", function(){
    displayNewWord();

    for (var i = 0; i < answerButtons.length; i++) {
        //при клике на одну из кнопок ответа:
        answerButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            var answer = this.getAttribute("data-answer");

            //если ответ верный:
            if (answer === parentOfTheElementName) {
                //сначала удаляем класс видимости оповещ. о неправильном ответе,
                //если он есть
                invalidAnswerSign.classList.remove("invalid-visible");

                //показываем верный аффикс после слова
                wordAffix.innerHTML = pluralAffixes[parentOfTheElementName];

                //показываем зелёную галочку после аффикса
                validAnswerSign.classList.add("valid-sign-visible");

                //через пару секунд выводим новое слово вместо старого
                setTimeout(
                    function(){
                        displayNewWord();
                    }, 2000
                );
            }
            //если ответ НЕверный:
            else {
                //удаляем старое содержимое для аффикса:
                wordAffix.innerHTML = "";

                //удаляем старый класс видимости оповещ. о неправильном ответе,
                //если он есть
                invalidAnswerSign.classList.remove("invalid-visible");


                //добавляем тот же класс с задержкой на неск миллискеунд, чтобы
                //успела проиграться анимация opacity
                setTimeout(
                    function(){
                        invalidAnswerSign.classList.add("invalid-visible");
                    }, 300
                );
            }
        })
    }

    //при нажатии на "Пропустить слово", берётся новое случайное слово
    //и выводится на экран:
    skipWordButton.addEventListener("click", function (event) {
        event.preventDefault();
        displayNewWord();
    })

}, false);

//функция, выводящая новое слово на экран:
function displayNewWord() {
    //делаем невидимым галоку
    validAnswerSign.classList.remove("valid-sign-visible");
    //делаем невидимым "Неправильный ответ"
    invalidAnswerSign.classList.remove("invalid-visible");
    //удаляем старое слово
    wordAffix.innerHTML = "";

    //вытаскиваем случайное слово из массива и название массива, к которому оно относится:
    randomElementAndItsParentName =
        getRandomElementAndItsParentName(wordsForPlural);
    //слово из массива:
    randomElement = randomElementAndItsParentName.randomElement;
    //название массива, к которому относится слово:
    parentOfTheElementName = randomElementAndItsParentName.randomPropertyName;

    //вставляем случайное слово:
    wordRoot.innerHTML = randomElement;
}


//функция, достающая случайный имя случайного элемента объекта
// и случайное слово в этом элементе:
function getRandomElementAndItsParentName(obj) {
    var keys = Object.keys(obj);
    var randomPropertyName = keys[keys.length * Math.random() << 0];

    var randomPropertyValue = obj[randomPropertyName];
    var randomElement =
        randomPropertyValue[Math.floor(obj[randomPropertyName].length * Math.random())];
    return {randomElement: randomElement,
            randomPropertyName: randomPropertyName};
}