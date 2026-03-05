import{j as e,r as a}from"./index-5ce7ed95.js";import{L as c}from"./LessonBlock-2ffbc648.js";const d="_wrapper_1jwtr_1",p="_label_1jwtr_18",u="_select_1jwtr_26",o={wrapper:d,label:p,select:u},m=({value:t,onChange:r,options:n})=>e.jsxs("div",{className:o.wrapper,children:[e.jsx("label",{className:o.label,children:"Оберіть підрозділ:"}),e.jsxs("select",{className:o.select,value:t,onChange:r,children:[e.jsx("option",{value:"",children:"Виберіть підрозділ:"}),n.map(i=>e.jsx("option",{value:i,children:i},i))]})]}),D=[{id:1,link:"",title:"SA-24 Світловий потік з чашками 2 кам / 3 кам: ",requirements:[" "],starterCode:`1 мл, 2 мл -  50 000 / 70 000 Lux
5 мл – 70 000 / 95 000 Lux
10 мл -  100 000 / 130 000 Lux
без чашок > 200 000 Lux
1 кам – 4000 Lux
4 кам - 6000 Lux
`,solution:"",description:""},{id:2,link:"",title:"SA-24. Test set 5 разів - на початку зміни та через 20 годин. ",requirements:[" "],starterCode:`Без пригарів  5 добрі / 9 погані,
З пригарами 5 добрі / 11 погані,
перевірка на колірність плюс 1 ам №15,
Тест на рівень 10/20   - 1 раз`,solution:"",description:""},{id:3,link:"",title:" SA-24 Штативи (ROTA) ",requirements:[" "],starterCode:`1 мл , 2мл – 1200 шт
5 мл - 440 шт
10 мл - 360 шт `,solution:"",description:""},{id:1400,link:"",title:"",requirements:[" "],starterCode:"",solution:"",description:""}],E=[{id:1,link:"",title:"модель FS‑N11CP — Це оптоволоконний підсилювач / сенсор‑підсилювач для промислового обладнання, з одним виходом і PNP‑логікою",requirements:["виробник — KEYENCE (велика японська компанія, що робить датчики й сенсори для автоматизації)","працює від 12–24 V DC, має світлодіодну індикацію, швидку реакцію і застосовується в автоматичних лініях виробництва або системах контролю.","Навчання. Етап 1 — без ампули","Переконайся, що в зоні датчика немає ампули","Натисни кнопку SET і утримуй 2 секунди","LED покаже, що підсилювач запам’ятав фон / базовий сигнал","Етап 2 — з ампулою","Помісти ампулу в робочу позицію","Натисни кнопку SET і утримуй 2 секунди","LED покаже, що підсилювач запам’ятав сигнал від об’єкта","Після цього датчик буде спрацьовувати тільки на ампулу, не реагуючи на фон.","-----","Чим менше значення зеленого кольру тим краще бачить.","Оптоволокно кріпимо ближче або дальше, щоб був сигнал.","Низ бачить зірку , верх - ампулу: виставляємо по середині","1. Натисни SET і утримуй 2 сек без об’єкта → датчик запам’ятає фон","2. Під час утримання SET натискай MODE для вибору потрібного режиму:","0 (не натискаєш)- Light-ON (стандартний)) 1 натискання - Dark-ON (спрацьовування при відсутності об’єкта)","2 натискання - Window Mode (реагує тільки якщо сигнал у межах порогу, для прозорих або дрібних предметів)","Відпускаєш SET → підсилювач запам’ятає режим і поріг"],starterCode:"",solution:"Вхід у меню налаштувань",description:`1️⃣ Вхід у меню налаштувань

Натисни і утримуй MODE 2–3 секунди → дисплей переходить у режим налаштувань.

На дисплеї почне блимати перший підпункт параметра.

2️⃣ Знаходження параметра напряму цифр

На FS‑N11CP цей параметр називається “Display Direction”, “Segment Orientation” або “Digit Order” (залежно від версії).

Використовуй SET, щоб перейти між підпунктами меню:

HYS → MAX → Display Direction → TRIG → …

3️⃣ Зміна напряму

Коли підсвічено параметр Display Direction:

Натискай MODE або стрілки ▲/▼, щоб обрати:

L→R (ліва → права)

R→L (права → ліва)

На дисплеї цифри змінюють порядок відображення у реальному часі (LED блимає).

4️⃣ Збереження налаштувань

Натисни і утримуй SET 2–3 секунди → підсилювач запам’ятає новий напрям.

Після цього дисплей виходить із меню автоматично або через 5–10 секунд без натискання.
2️⃣ Як переключати режими

MODE + утримання → вхід у меню

SET → перемикання між підпунктами меню (HYS, MAX, Display Direction, COUNT MODE…)

MODE / стрілки → зміна значень підпункту

SET утримати 2–3 с → збереження налаштувань

3️⃣ Поради

Для розпізнавання ампул: Light-ON або Window Mode + COUNT MODE 9999

Для швидких рухів на конвеєрі: High-Speed / Tracking

Напрям дисплея підбирай відповідно до монтажу на щитку`},{id:100,link:"",title:"",requirements:[" "],starterCode:"",solution:"",description:""},{id:1400,link:"",title:"",requirements:[" "],starterCode:"",solution:"",description:""}],S=[{id:1,link:"",title:"SA-24 стирання історії (файлу)]",requirements:[" Клавіатура / Win / my Computer / Transed / Batch / ","вибираємо місяць / компонент / delete"],starterCode:"",solution:"",description:""}],x="_title_f5mrh_1",h={title:x},l={work_SA24:D,maint:E,screen:S},C=()=>{const[t,r]=a.useState(Object.keys(l)[0]),n=s=>{r(s.target.value)},i=t?l[t]:[];return e.jsxs("main",{style:{padding:"4px"},children:[e.jsx("h2",{className:h.title,children:"Робочі записи"}),e.jsx(m,{value:t,onChange:n,options:Object.keys(l)}),i.length===0&&t&&e.jsx("p",{children:"Немає записів для цього підрозділу."}),i.map(s=>e.jsx(c,{task:s},s.id))]})};export{C as default};
