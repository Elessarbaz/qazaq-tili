/**
 * Created by darmen on 6/19/16.
 */

//общий объект, в котором хранятся объекты для  упражнений:
var arraysOfWords = {
  //объект с массивами из слов для упражения по аффиксам мн.числа
  wordsForPlural: {
  dar: ["қоян", "арыстан", "жол", "маман", "мейрам", "жылан", "арман", "маймыл", "қоңыз", "тұрғын", "орман", "банан", "шабандоз", "қолтырауын", "стеллаж", "экипаж", "бұйым", "орын", "қарбыз", "өнерпаз", "алаң", "ұйым", "ғалым", "сусын", "ауыл", "раушан", "ақын", "жұлдыз", "қол", "ұл", "аң", "қыз", "аспаз", "толқын", "мысал", "әнұран", "коллаж", "дарын", "емтихан", "шам", "сағыз", "аудан", "оқу зал", "адам", "бағбан", "болжам", "шал", "бұлбұл", "басылым", "айыппұл"],
  der: ["келін", "шешім", "әзіл", "өзен", "кілем", "піл", "теңіз", "мәулен", "тізім", "сөйлем", "киім", "дәлел", "төлем", "әйел", "мүсін", "өлең", "жиен", "білім", "сөз", "дүкен", "бассейн", "сезім", "келісім", "мезгіл", "жүзім", "әкім", "көгершін", "тиін", "тіл", "жүз", "егіз", "тәж", "көз", "мәтін", "өлшем", "үстел", "ән", "ел", "күн", "түн", "кез", "көрермен", "мұғалім", "дәйексөз", "бөлім", "тізім", "апельсин", "есім", "өнім", "бөтен"],
  tar: ["ашық хат", "пышақ", "қасық", "ұрпақ", "гепард", "құс", "қорап", "мақсат", "шарф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "сұрақ", "жауап", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұлт", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "жауап", "тақырып", "жұмбақ", "зат", "жас", "ғимарат", "қабат", "ат", "ұшқыш", "замандас"],
  ter: ["есік", "жіп", "ит", "күшік", "есеп", "кәмпит", "жеміс", "көкөніс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "көзілдірік", "инелік", "өшіргіш", "детектив", "ниет", "тілек", "сүрткіш", "себет", "ересек", "көжек", "көйлек", "жігіт", "сүйек", "өсімдік", "себеп", "сөздік", "күнделік", "мектеп", "сурет", "әріптес", "тіс", "мүмкіншілік", "жерлес", "ілгіш", "шелек", "кереует", "велосипед", "білезік", "дөңгелек", "кезек", "әріп", "мектеп", "әртіс", "пікірлес", "кәмпит", "әріптес", "кіре беріс"],
  lar: ["аю", "қой", "қасқыр", "ай", "ұя", "бояу", "торғай", "аңшы", "ұлу", "батыр", "құмырсқа", "қолшатыр", "сапар", "ботқа", "кітапхана", "бұзау", "жаттығу", "театр", "сақина", "саяжай", "жағажай", "құрылысшы", "жануар", "оқиға", "жоба", "қол қою", "ұры", "шаңғы", "сарай", "сахна", "құрбы", "жанұя", "жау", "жоспар", "ту", "балықшы", "тамыр", "қабырға", "гимназия", "сиыр", "даяшы", "қоңырау", "қайшы", "қолжазба", "аудармашы", "сұңқар", "тауар", "жұбай", "аққу", "жылқы"],
  ler: ["кеме", "түлкі", "көпір", "биші", "ереже", "күйеу", "кірпі", "шегіртке", "түйе", "өнер", "нөмер", "мекеме", "әшекей", "белбеу", "кісі", "сүлгі", "жүргізуші", "әнші", "дәстүр", "жер", "үлгі", "өрмекші", "үйірме", "жүйе", "кездесу", "ғарышкер", "сәби", "жеңіскер", "түр", "әңгіме", "немере", "жеңге", "пәтер", "көше", "көлеңке", "би", "саудагер", "төлеуші", "пікір", "нәрсе", "бейне", "сөре", "қызметкер", "ине", "теңізші", "дәрі", "үй", "тәрелке", "зейнеткер", "меңгеруші"]
},

  //объект с массивами из слов для упражения по аффиксам Шығыс септік:
  wordsForShigisSeptik: {
  dan: ["аялдама", "жол", "стеллаж", "экипаж", "зал", "ауыл", "бидай", "Бурабай", "Атырау", "наурыз", "кітапхана", "жағажай", "мамыр", "ұйқы", "ұры", "Италия", "тамыр", "сахна", "бала\'лар", "туыс\'тар", "аң\'дар", "емтихан\'дар", "тау\'лар\'ымыз", "қала\'мыз", "дос\'тар\'ыңыз", "кітап\'тар\'ыңыз", "ұя", "Қапшағай", "Қостанай", "саяжай", "сатушы", "Ақтау", "аю", "арман\'ымыз", "маман\'дар\'ыңыз", "сапар", "бояу", "қол қою", "жоспар\'ымыз", "аудармашы", "бұлақ\'тар", "ат\'тар", "ана\'мыз", "су", "қымыз", "жылқы", "Құлсары", "Алматы", "арал", "Түркия"],
  den: ["әзіл", "бөлме\'лер", "дүкен\'дер", "теңіз", "дәлел", "әйел", "тіл", "көпір", "сүлгі", "ереже", "түйе", "әшекей", "кісі", "үлгі", "жүргізуші", "сәби", "көлеңке", "ғарышкер", "әңгіме", "өрмекші", "үстел", "ереже\'лер", "әже\'лер", "көше\'лер", "сөз\'дер", "көрші\'лер\'іміз", "пәтер\'іміз", "өзен\'дер\'іңіз", "үй\'лер\'іңіз", "жексенбі", "дүйсенбі", "көл", "кірпі", "Көктөбе", "көрме", "жеті", "нөл", "Париж", "елу", "тәж", "шие", "емделу", "сегіз", "тілші", "әке\'міз", "бөлім\'дер", "мектеп\'тер", "Ресей", "Мәскеу", "Семей"],
  tan: ["ашық хат", "пышақ", "қасық", "ұрпақ", "гепард", "құс", "қорап", "мақсат", "шкаф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "сұрақ", "жауап", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұсыныс", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "Ұзынағаш", "бұрқақ", "демалыс", "түскі ас", "минут", "рахат", "тас", "тосап", "мұздатқыш", "бұлақ"],
  ten: ["есік", "жіп", "ит", "күшік", "есеп", "кәмпит", "жеміс", "көкөніс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "көзілдірік", "инелік", "өшіргіш", "детектив", "ниет", "тілек", "сүрткіш", "себет", "тәртіп", "көжек", "көйлек", "жігіт", "сүйек", "өсімдік", "себеп", "сөздік", "күнделік", "мектеп", "еңбек", "әріптес", "мұхит", "етік", "жерлес", "оңтүстік", "шелек", "кереует", "велосипед", "ескерткіш", "ет", "сүт", "кірпіш", "Ташкент", "Шымкент", "Бішкек", "кезек", "әртіс", "кіре беріс"],
  nan: ["қоян", "арыстан", "дарын", "емтихан", "әнұран", "ғалым", "мейрам", "бағдаршам", "алаң", "таңдау\'ым", "мақсат\'ың", "қол\'дар\'ың", "аяғ\'ың", "қонағ\'ым", "ақпан", "маусым", "тоқсан", "бас\'ым", "ата\'м", "сұрақ\'тар\'ы", "мақала\'м", "сағат\'тар\'ы", "ата\'сы", "бастығ\'ы", "сыйлығ\'ы", "алақан", "ұл\'дар\'ы", "қолшатыр\'ым", "сарай\'ы", "жаттығу\'лар\'ы", "аула\'сы", "жол\'ы", "қабырға\'сы", "айна\'сы", "арба\'сы", "ағаш\'тар\'ым", "шалбар\'ым", "қолғаб\'ы", "ой\'лар\'ы", "халық\'тар\'ы", "аспан", "болжам", "ұн", "қысым", "Жезқазған", "Талдықорған", "Зайсаң", "Тәжікстан", "Қазақстан", "тыйым"],
  nen: ["сөйлем", "киім", "кілем", "тізім", "өзен", "мәулен", "өлең", "сезім", "бассейн", "келісім", "мәтін", "тілег\'ім", "ел\'ім", "ие\'сі", "немере\'сі", "көл\'і", "жер\'лер\'і", "көше\'лер\'і", "көктем", "шешім", "есіг\'ің", "пәтер\'ің", "жүрег\'ің", "сөз\'дер\'ің", "күйеу\'ім", "әуес\'і", "иіс\'і", "әрекет\'і", "тіс\'і", "тізбе\'сі", "бөлім", "сөре\'сі", "мүсін", "мезгіл\'і", "жейде\'ң", "көйлег\'ің", "терезе\'сі", "қате\'м", "сурет\'ім", "гүл\'дер\'і", "бітім", "Жаңаөзен", "туған күн\'і", "мұғалім", "еден", "жәрдем", "апельсин", "өнім", "пікірлес\'ім", "кешен"]
}
};

//общий контейнер для упражений:
var practiceWindow = document.getElementById("practiceWindow"),
//тип массива (тип упражнения, например: мн.число, шығыс септік и т.д.):
  nameOfExercise = practiceWindow.getAttribute("data-name-of-exercise"),
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
//span'ы для счётчика правильных и неправильных ответов:
  counterCorrectSpan = document.getElementById("counterCorrectSpan"),
  counterIncorrectSpan = document.getElementById("counterIncorrectSpan");

//счётчики правильных и неправильных ответов:
var counterAnswersCorrect = 0,
  counterAnswersIncorrect = 0;

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
        //делаем неактивными все кнопки ответа (до тех пор, пока на экране
        //не появится новое слово:
        for (var j = 0; j < answerButtons.length; j++) {
          answerButtons[j].setAttribute("disabled", "disabled");
        }

        //сначала удаляем класс видимости оповещ. о неправильном ответе,
        //если он есть
        invalidAnswerSign.classList.remove("invalid-visible");

        //показываем верный аффикс после слова
        wordAffix.innerHTML = this.innerHTML;

        //показываем зелёную галочку после аффикса
        validAnswerSign.classList.add("valid-sign-visible");

        //увеличиваем соотв. счётчик
        counterCorrectSpan.innerHTML = ++counterAnswersCorrect;

        //через пару секунд выводим новое слово вместо старого
        //и снова делаем активными кнопки ответа
        setTimeout(
          function(){
            displayNewWord();
            for (j = 0; j < answerButtons.length; j++) {
              answerButtons[j].removeAttribute("disabled");
            }
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

        //увеличиваем соотв. счётчик
        counterIncorrectSpan.innerHTML = ++counterAnswersIncorrect;

        //добавляем тот же класс с задержкой на неск миллискеунд, чтобы
        //успела проиграться анимация opacity
        //и снова делаем активными кнопки ответа
        setTimeout(
          function(){
            invalidAnswerSign.classList.add("invalid-visible");
          }, 300
        );

      }
    })
  }

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
    getRandomElementAndItsParentName(arraysOfWords[nameOfExercise]);
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