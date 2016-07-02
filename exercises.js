/**
 * Created by darmen on 6/19/16.
 */

//общий объект, в котором хранятся объекты для  упражнений:
var arraysOfWords = {
  //объект с массивами из слов для упражения по аффиксам мн.числа
  wordsForPlural: {
    dar: ["қоян", "арыстан", "жол", "маман", "мейрам", "жылан", "арман", "маймыл", "қоңыз", "тұрғын", "қадам", "дарын", "шабандоз", "тұсқағаз", "стеллаж", "экипаж", "бұйым", "орын", "қарбыз", "өнерпаз", "гараж", "ұйым", "ғалым", "сусын", "ауыл", "алаң", "ақын", "жұлдыз", "қол", "ұл", "аң", "қыз", "аспаз", "қаз", "мысал", "қоғам", "коллаж", "ұстаз", "емтихан", "шам", "сағыз", "аудан", "зал", "адам", "арал", "болжам", "шал", "бұлбұл", "басылым", "айыппұл"],
    der: ["келін", "шешім", "әзіл", "өзен", "кілем", "піл", "теңіз", "дәрумен", "тізім", "сөйлем", "киім", "дәлел", "төлем", "әйел", "мүсін", "өлең", "жиен", "білім", "сөз", "дүкен", "тәсіл", "сезім", "келісім", "мезгіл", "жүзім", "тәуекел", "көгершін", "тиін", "тіл", "жүз", "егіз", "тәж", "көз", "мәтін", "өлшем", "үстел", "ән", "ел", "күн", "түн", "кез", "көрермен", "мұғалім", "дәйексөз", "бөлім", "тізім", "апельсин", "есім", "өнім", "бөтен"],
    tar: ["ашық хат", "борыш", "қасық", "ұрпақ", "гепард", "құс", "қорап", "ұсыныс", "шарф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "сызғыш", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "шарап", "саяхат", "жаңалық", "талап", "дауыс", "қап", "сұрақ", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұлт", "клуб", "ақпарат", "автобус", "бұлт", "жиналыс", "жауап", "тақырып", "жұмбақ", "зат", "жас", "ғимарат", "қабат", "доп", "ұшқыш", "замандас"],
    ter: ["есік", "жіп", "ит", "күшік", "есеп", "кәмпит", "жеміс", "көкөніс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "көзілдірік", "инелік", "өшіргіш", "детектив", "ниет", "тілек", "сүрткіш", "себет", "ересек", "шөп", "көйлек", "жігіт", "сүйек", "өсімдік", "себеп", "өтініш", "күнделік", "мектеп", "сурет", "әріптес", "тіс", "мүмкіншілік", "жерлес", "ілгіш", "әдіс", "кереует", "велосипед", "білезік", "дөңгелек", "кезек", "әріп", "мектеп", "әртіс", "пікірлес", "кәмпит", "әріптес", "кіре беріс"],
    lar: ["аю", "қой", "қасқыр", "ай", "ұя", "бояу", "торғай", "аңшы", "ұлу", "батыр", "құмырсқа", "қолшатыр", "сапар", "ботқа", "кітапхана", "бұзау", "жаттығу", "театр", "сақина", "саяжай", "жағажай", "құрылысшы", "жануар", "оқиға", "жоба", "қол қою", "ұры", "шаңғы", "сарай", "жақпа май", "құрбы", "жанұя", "жау", "жоспар", "ту", "ою", "тамыр", "қабырға", "гимназия", "сиыр", "даяшы", "қоңырау", "қайшы", "қолжазба", "аудармашы", "сұңқар", "тауар", "жұбай", "аққу", "жылқы"],
    ler: ["кеме", "түлкі", "көпір", "биші", "ереже", "күйеу", "кірпі", "шегіртке", "түйе", "дәу", "нөмер", "мекеме", "әшекей", "белбеу", "кісі", "сүлгі", "жүргізуші", "әнші", "дәстүр", "жер", "үлгі", "өрмекші", "үйірме", "тексеру", "кездесу", "ғарышкер", "сәби", "зерттеу", "түр", "әңгіме", "немере", "емдеу", "пәтер", "деңгей", "көлеңке", "би", "саудагер", "төлеуші", "пікір", "нәрсе", "бейне", "сөре", "қызметкер", "егеу", "теңізші", "дәрі", "үй", "тәрелке", "зейнеткер", "меңгеруші"]
  },

  //объект с массивами из слов для упражения по аффиксам Шығыс септік:
  wordsForShigisSeptik: {
    dan: ["аялдама", "жол", "стеллаж", "экипаж", "зал", "ауыл", "бидай", "Бурабай", "Атырау", "наурыз", "кітапхана", "жағажай", "мамыр", "ұйқы", "ұры", "Италия", "тамыр", "сахна", "бала\'лар", "туыс\'тар", "аң\'дар", "емтихан\'дар", "тау\'лар\'ымыз", "қала\'мыз", "дос\'тар\'ыңыз", "кітап\'тар\'ыңыз", "ұя", "Қапшағай", "Қостанай", "саяжай", "сатушы", "Ақтау", "аю", "арман\'ымыз", "маман\'дар\'ыңыз", "сапар", "бояу", "қол қою", "жоспар\'ымыз", "аудармашы", "бұлақ\'тар", "ат\'тар", "ана\'мыз", "су", "қымыз", "жылқы", "Құлсары", "Алматы", "арал", "Түркия"],
    den: ["әзіл", "бөлме\'лер", "дүкен\'дер", "теңіз", "дәлел", "әйел", "тіл", "көпір", "сүлгі", "ереже", "түйе", "әшекей", "кісі", "үлгі", "жүргізуші", "сәби", "көлеңке", "ғарышкер", "әңгіме", "өрмекші", "үстел", "ереже\'лер", "әже\'лер", "көше\'лер", "сөз\'дер", "көрші\'лер\'іміз", "пәтер\'іміз", "өзен\'дер\'іңіз", "үй\'лер\'іңіз", "жексенбі", "дүйсенбі", "көл", "кірпі", "Көктөбе", "көрме", "жеті", "нөл", "Париж", "елу", "тәж", "шие", "емделу", "сегіз", "тілші", "әке\'міз", "бөлім\'дер", "мектеп\'тер", "Ресей", "Мәскеу", "Семей"],
    tan: ["ашық хат", "пышақ", "қасық", "ұрпақ", "гепард", "құс", "қорап", "мақсат", "шкаф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "сұрақ", "жауап", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұсыныс", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "Ұзынағаш", "бұрқақ", "демалыс", "түскі ас", "минут", "рахат", "тас", "тосап", "мұздатқыш", "бұлақ"],
    ten: ["есік", "жіп", "ит", "күшік", "есеп", "кәмпит", "жеміс", "көкөніс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "көзілдірік", "инелік", "өшіргіш", "детектив", "ниет", "тілек", "сүрткіш", "себет", "тәртіп", "көжек", "көйлек", "жігіт", "сүйек", "өсімдік", "себеп", "сөздік", "күнделік", "мектеп", "еңбек", "әріптес", "мұхит", "етік", "жерлес", "оңтүстік", "шелек", "кереует", "велосипед", "ескерткіш", "ет", "сүт", "кірпіш", "Ташкент", "Шымкент", "Бішкек", "кезек", "әртіс", "кіре беріс"],
    nan: ["қоян", "арыстан", "дарын", "емтихан", "әнұран", "ғалым", "мейрам", "бағдаршам", "алаң", "таңдау\'ым", "мақсат\'ың", "қол\'дар\'ың", "аяғ\'ың", "қонағ\'ым", "ақпан", "маусым", "тоқсан", "бас\'ым", "ата\'м", "сұрақ\'тар\'ы", "мақала\'м", "сағат\'тар\'ы", "ата\'сы", "бастығ\'ы", "сыйлығ\'ы", "алақан", "ұл\'дар\'ы", "қолшатыр\'ым", "сарай\'ы", "жаттығу\'лар\'ы", "аула\'сы", "жол\'ы", "қабырға\'сы", "айна\'сы", "арба\'сы", "ағаш\'тар\'ым", "шалбар\'ым", "қолғаб\'ы", "ой\'лар\'ы", "халық\'тар\'ы", "аспан", "болжам", "ұн", "қысым", "Жезқазған", "Талдықорған", "Зайсаң", "Тәжікстан", "Қазақстан", "тыйым"],
    nen: ["сөйлем", "киім", "кілем", "тізім", "өзен", "мәулен", "өлең", "сезім", "бассейн", "келісім", "мәтін", "тілег\'ім", "ел\'ім", "ие\'сі", "немере\'сі", "көл\'і", "жер\'лер\'і", "көше\'лер\'і", "көктем", "шешім", "есіг\'ің", "пәтер\'ің", "жүрег\'ің", "сөз\'дер\'ің", "күйеу\'ім", "әуес\'і", "иіс\'і", "әрекет\'і", "тіс\'і", "тізбе\'сі", "бөлім", "сөре\'сі", "мүсін", "мезгіл\'і", "жейде\'ң", "көйлег\'ің", "терезе\'сі", "қате\'м", "сурет\'ім", "гүл\'дер\'і", "бітім", "Жаңаөзен", "туған күн\'і", "мұғалім", "еден", "жәрдем", "апельсин", "өнім", "пікірлес\'ім", "кешен"]
  },

  //объект с массивами из слов для упражения по аффиксам Жатыс септік:
  wordsForJatysSeptik: {
    da: ["асхана", "жол", "коллаж", "гараж", "мейрам", "ауыл", "ай", "Қытай", "даяшы", "тамыз", "емхана", "жағажай", "қантар", "оқушы", "қол\'ым", "Германия", "алаң", "қалта\'ң", "бала\'лар", "туыс\'тар", "бағдаршам", "ұн", "тау\'лар\'ымыз", "қала\'мыз", "дос\'тар\'ыңыз", "кітап\'тар\'ыңыз", "ұя", "Қапшағай", "Қазақстан", "әуежай", "ақын", "Ақтау", "жұма", "қарындас\'ым", "хат\'тар\'ың", "сапар", "бояу", "қозы", "жоспар\'ымыз", "желтоқсан", "бұлақ\'тар", "маусым", "заман", "су", "жаз", "қолшатыр\'ым", "бас\'ым", "Алматы", "арал", "ақпан"],
    de: ["түн", "бөлме\'лер", "дүкен\'дер", "теңіз", "колледж", "сөйлем", "тізім", "көпір", "бет\'ің", "шілде", "ес\'ім", "әшекей", "өлең", "мүсін", "жүргізуші", "кез", "көлеңке", "жер", "әңгіме", "әріптес\'тер\'ім", "үстел", "ереже\'лер", "күйеу\'ім", "көше\'лер", "сөз\'дер", "көрші\'лер\'іміз", "пәтер\'іміз", "өзен\'дер\'іңіз", "үй\'лер\'іңіз", "сенбі", "сейсенбі", "көл", "бейсенбі", "Көктөбе", "көрме", "сурет\'ің", "мезгіл", "күн", "елу", "тәж", "көктем", "әже\'м", "күз", "есепші", "ем", "кешен", "мектеп\'тер", "Ресей", "Мәскеу", "Семей"],
    ta: ["ашық хат", "қыс", "балмұздақ", "автотұрақ", "кітап", "ұшақ", "қорап", "уақыт", "шкаф", "қасық", "құжат", "топ", "баспалдақ", "жастық", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "саябақ", "аспап", "сыйлық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "болашақ", "жауап", "құлып", "алжапқыш", "қанат", "тас", "оқулық", "достық", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "ағаш", "бұрқақ", "демалыс", "таңғы ас", "тұрмыс", "ғимарат", "жұмбақ", "тосап", "мұздатқыш", "бұлақ"],
    te: ["есік", "білезік", "цирк", "газет", "есеп", "үзіліс", "ес", "жеңіс", "жолсерік", "кептеліс", "мешіт", "өтініш", "мәлімет", "мектеп", "қыркүйек", "игілік", "детектив", "дөңгелек", "тәулік", "сүрткіш", "себет", "сүт", "төсек", "көйлек", "жігіт", "сүйек", "түс", "студент", "сөздік", "күнделік", "мектеп", "еңбек", "әріптес", "мұхит", "етік", "жерлес", "оңтүстік", "шелек", "кереует", "велосипед", "ескерткіш", "етік", "солтүстік", "фотосурет", "Ташкент", "Шымкент", "Бішкек", "кезек", "әртіс", "кіре беріс"],
    nda: ["ата\'сы", "қала\'сы", "той\'ы", "сұрақ\'тар\'ы", "бастығ\'ы", "сыйлығ\'ы", "ұл\'дар\'ы", "сарай\'ы", "жаттығу\'лар\'ы", "аула\'сы", "жол\'ы", "қабырға\'сы", "айна\'сы", "арба\'сы", "құрбы\'сы", "заң\'дар\'ы", "халық\'тар\'ы", "маман\'дар\'ы", "мағына\'сы", "қорғаушы\'сы", "мақсат\'ы", "тоб\'ы", "жиналыс\'ы", "таныс\'тар\'ы", "ауыл\'ы", "туыс\'тар\'ы", "бұлағ\'ы", "жағажай\'ы", "сыныб\'ы", "жоспар\'ы", "тамағ\'ы", "хатшы\'сы", "ғалым\'дар\'ы", "оң жағ\'ы", "орталығ\'ы", "мұзайдын\'ы", "алақан\'ы", "ата-ана\'сы", "зал\'ы", "кітапхана\'сы", "мейрамхана\'сы", "ықшамаудан\'ы", "арқа\'сы", "жағ\'ы", "аймағ\'ы", "дос\'тар\'ы", "жаттығу\'лар\'ы", "таңдау\'ы", "қол\'дар\'ы", "шалбар\'ы"],
    nde: ["әже\'сі", "мектеб\'і", "әпке\'сі", "ие\'сі", "немере\'сі", "көл\'і", "жер\'лер\'і", "көше\'лер\'і", "әуес\'і", "көз\'і", "пәтер\'і", "тіс\'і", "тізбе\'сі", "сөре\'сі", "мезгіл\'і", "жейде\'сі", "көйлег\'і", "терезе\'сі", "қате\'сі", "сурет\'і", "гүл\'дер\'і", "күнделіг\'і", "кереует\'і", "әріптес\'і", "мұғалім\'дер\'і", "көлеңке\'сі", "әңгіме\'сі", "үн\'і", "үлгі\'сі", "езбе\'сі", "сіңлі\'сі", "жер\'і", "іс\'тер\'і", "күн\'дер\'і", "жүрег\'і", "шет\'і", "бекет\'і", "өзен\'і", "дәптер\'і", "тіл\'дер\'і", "тері\'сі", "кеңсе\'сі", "мемлекет\'і", "көрші\'сі", "іні\'сі"]
  },

  //объект с массивами из слов для упражения по аффиксам Барыс септік:
  wordsForBarysSeptik: {
    ga: ["аялдама", "жол", "стеллаж", "экипаж", "мейрам", "ауыл", "бидай", "Бурабай", "Атырау", "наурыз", "кітапхана", "жағажай", "мамыр", "ұйқы", "емтихан", "Франция", "алаң", "сахна", "бала\'лар", "туыс\'тар", "болжам", "ұн", "тау\'лар\'ымыз", "қала\'мыз", "дос\'тар\'ыңыз", "кітап\'тар\'ыңыз", "ұя", "Қапшағай", "Жезқазған", "саяжай", "ғылым", "Ақтау", "аю", "Талдықорған", "Зайсаң", "сапар", "бояу", "қол қою", "жоспар\'ымыз", "желтоқсан", "бұлақ\'тар", "маусым", "заман", "су", "бала-бақша", "жылқы", "Құлсары", "ойын", "арал", "ақпан"],
    ge: ["әзіл", "бөлме\'лер", "дүкен\'дер", "теңіз", "дәлел", "сөйлем", "тізім", "көпір", "сүлгі", "ереже", "түйе", "әшекей", "өлең", "мүсін", "жүргізуші", "сәби", "көлеңке", "ғарышкер", "әңгіме", "өрмекші", "үстел", "ереже\'лер", "әже\'лер", "көше\'лер", "сөз\'дер", "көрші\'лер\'іміз", "пәтер\'іміз", "өзен\'дер\'іңіз", "үй\'лер\'іңіз", "жексенбі", "дүйсенбі", "көл", "кірпі", "Көктөбе", "көрме", "кездесу", "ертең", "Жаңаөзен", "елу", "бассейн", "төлем", "емделу", "сегіз", "тілші", "жәрдем", "кешен", "мектеп\'тер", "Ресей", "Мәскеу", "көктем"],
    ka: ["ашық хат", "байлық", "бостандық", "ұрпақ", "гепард", "құс", "қорап", "мақсат", "шкаф", "рекорд", "құжат", "топ", "баспалдақ", "тапсырыс", "бұрыш", "парақ", "сынып", "шаңсорғыш", "қарсылас", "таяқ", "аспап", "құқық", "аймақ", "саяхат", "жаңалық", "талап", "қабат", "сұрақ", "жауап", "құлып", "алжапқыш", "қанат", "туыс", "оқулық", "ұсыныс", "клуб", "сағат", "автобус", "бұлт", "жиналыс", "Ұзынағаш", "бұрқақ", "демалыс", "түскі ас", "тұрмыс", "рахат", "намыс", "тосап", "мұздатқыш", "бұлақ"],
    ke: ["есік", "бірлестік", "ғанибет", "күшік", "есеп", "үзіліс", "ес", "жеңіс", "жолсерік", "кепілдік", "мешіт", "өтініш", "мәлімет", "мектеп", "құрмет", "ниет", "детектив", "дөңгелек", "тілек", "сүрткіш", "себет", "тәртіп", "көжек", "көйлек", "жігіт", "сүйек", "түс", "себеп", "сөздік", "күнделік", "мектеп", "еңбек", "әріптес", "мұхит", "етік", "жерлес", "оңтүстік", "шелек", "кереует", "велосипед", "ескерткіш", "тәбет", "солтүстік", "фотосурет", "Ташкент", "Шымкент", "Бішкек", "кезек", "әртіс", "кіре беріс"],
    na: ["ата\'сы", "қала\'сы", "той\'ы", "сұрақ\'тар\'ы", "бастығ\'ы", "сыйлығ\'ы", "ұл\'дар\'ы", "сарай\'ы", "жаттығу\'лар\'ы", "аула\'сы", "жол\'ы", "қабырға\'сы", "айна\'сы", "арба\'сы", "қолғаб\'ы", "заң\'дар\'ы", "халық\'тар\'ы", "маман\'дар\'ы", "мағына\'сы", "қорғаушы\'сы", "бағыт\'ы", "тоб\'ы", "жиналыс\'ы", "ұрпағ\'ы", "ауыл\'ы", "туыс\'ы", "бұлағ\'ы", "жағажай\'ы", "сыныб\'ы", "жоспар\'ы", "тамағ\'ы", "хатшы\'сы", "ғалым\'дар\'ы", "оң жағ\'ы", "орталығ\'ы", "емхана\'сы"],
    ne: ["әже\'сі", "мектеб\'і", "әпке\'сі", "ие\'сі", "немере\'сі", "көл\'і", "жер\'лер\'і", "көше\'лер\'і", "әуес\'і", "иіс\'і", "әрекет\'і", "тіс\'і", "тізбе\'сі", "сөре\'сі", "мезгіл\'і", "жейде\'сі", "көйлег\'і", "терезе\'сі", "қате\'сі", "сурет\'і", "гүл\'дер\'і", "күнделіг\'і", "кереует\'і", "әріптес\'і", "мұғалім\'дер\'і", "көлеңке\'сі", "әңгіме\'сі", "үн\'і", "үлгі\'сі", "биші\'лер\'і", "сіңлі\'сі", "жер\'і", "іс\'тер\'і", "күн\'дер\'і", "жүрег\'і"],
    a: ["таңдау\'ым", "мақсат\'ың", "қол\'дар\'ың", "аяғ\'ың", "қонағ\'ым", "бас\'ым", "ата-ана\'м", "оқулық\'тар\'ым", "қолшатыр\'ым", "шалбар\'ым", "қалта\'м", "дос\'тар\'ым", "сапар\'ың", "туыс\'тар\'ым", "сыныптас\'ым", "таныс\'тар\'ың", "құрбы\'ң", "ұл\'ың", "дос\'ың", "қарындас\'ым", "жаттығу\'лар\'ым", "ауыл\'ым", "хат\'тар\'ың", "жауаб\'ың", "шаш\'ым", "сақал\'ым", "қонақ\'тар\'ың", "айна\'м", "қораб\'ың", "емтихан\'ың", "жұмыс\'ым", "орн\'ың", "құжат\'тар\'ың", "сабақ\'тар\'ың", "оқу\'ым"],
    e: ["тілег\'ім", "ел\'ім", "жейде\'ң", "көйлег\'ің", "қате\'м", "сурет\'ім", "есіг\'ің", "әпке\'лер\'ім", "жүрег\'ің", "сөз\'дер\'ің", "күйеу\'ім", "пікірлес\'ім", "немере\'м", "ес\'ің", "әже\'ң", "сіңлі\'м", "жейде\'м", "көйлег\'ің", "бет\'ің", "көз\'ің", "пәтер\'ім", "әріптес\'тер\'ім", "көрші\'лер\'ің", "үй\'ім", "бөлме\'ң", "іні\'ң", "сурет\'ім", "пікірлес\'ім", "дәптер\'ім", "сөмке\'ң", "шеше\'м", "етіг\'ің", "әке\'м", "еңбег\'ің", "күнделіг\'ің"]
  },

  //объект с массивами из слов для упражения по аффиксам Ілік септік:
  wordsForIlikSeptik: {
    dyn: ["жар", "қамал", "Мысыр"],
    din: ["Әсел", "Сергей", "көл"],
    tyn: ["парасат", "ғимарат", "ғибрат"],
    tin: ["мемлекет", "шелек", "тесік"],
    nyn: ["ата\'ң", "аты\'ң", "Алматы"],
    nin: ["әже\'ң", "кеме", "жеті"]
  },

  //объект с массивами из слов для упражения по аффиксам Табыс септік:
  wordsForTabysSeptik: {
    dy: ["жар", "қамал", "Мысыр"],
    di: ["Әсел", "Сергей", "көл"],
    ty: ["парасат", "ғимарат", "ғибрат"],
    ti: ["мемлекет", "шелек", "тесік"],
    ny: ["ата", "қала", "Алматы"],
    ni: ["әпке", "кеме", "терезе"],
    n: ["әже\'сі", "кеңес\'тер\'і", "пікір\'лер\'і"]
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

        //добавляем тот же класс с задержкой на неск миллискеунд, чтобы
        //успела проиграться анимация opacity
        setTimeout(
          function(){
            invalidAnswerSign.classList.add("invalid-visible");

            //увеличиваем соотв. счётчик
            counterIncorrectSpan.innerHTML = ++counterAnswersIncorrect;
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