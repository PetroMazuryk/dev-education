import{j as e}from"./index-ae11b8df.js";import{L as r}from"./LessonBlock-9a1fb002.js";const t=[{id:1,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve' [ 55:20 ]",requirements:["На вхід функції передається масив промісів, а на виході вона повертає новий проміс.","Новий проміс працює за такими правилами:","1) Якщо в масиві є хоча б один успішний проміс — повернути результат цього промісу.","2) Якщо всі проміси завершуються з reject — повернути reject з масивом усіх помилок."],inlineCode:"Вихід: Кейс 1 — Promise => 5 ; Кейс 2 — Promise => Error(errors) ;",starterCode:`function resolve(promises) {}
[Promise.resolve(1), Promise.resolve(2)];
[Promise.reject(3), Promise.resolve(4)];
[Promise.reject(5), Promise.reject(6)];`,solution:`function resolve(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          resolve(result); // перший успішний — готово
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(errors); // всі впали
          }
        });
    });
  });
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`,description:`Відразу викликає resolve при першому успішному промісі, навіть якщо інші
     проміси можуть виконатися пізніше. Це стандартна поведінка промісів, але треба пам’ятати.
    Масив errors зберігає помилки по індексу, що добре для порядку, але не обов’язково потрібно,
    можна просто робити errors.push(error).`},{id:2,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve': Варіант 2 ",requirements:["Сучасний і компактний варіант цієї функції через async/await.","Він робить те ж саме, але код читати легше:"],solution:`async function resolve(promises) {
  if (promises.length === 0) {
    return Promise.reject([]); // порожній масив
  }
  const results = await Promise.allSettled(promises);

  // шукаємо перший успішний проміс
  const fulfilled = results.find(r => r.status === 'fulfilled');
  if (fulfilled) {
    return fulfilled.value;
    }
    
  // якщо всі проміси відхилилися
  const errors = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);

  // return Promise.reject(errors);
  throw errors;
  // throw results.filter(r => r.status === 'rejected').map(r => r.reason);
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`},{id:3,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve': Варіант 3 ",requirements:["Функція приймає масив значень або Promise.,","Функція повинна повертати новий Promise.","📌 Логіка роботи:","✅ Якщо хоча б один проміс виконався успішно,","функція повинна: завершитися зі статусом resolve","повернути масив усіх успішних результатів.","❌ Якщо всі проміси завершилися з помилкою,","функція повинна: завершитися зі статусом reject","повернути масив усіх помилок (з урахуванням їхніх індексів)."],starterCode:` customPromiseResolver([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
// → resolves with [1, 2, 3]

 customPromiseResolver([Promise.reject(4), Promise.resolve(5), Promise.resolve(6)])
// → resolves with [5, 6]

r customPromiseResolver([Promise.reject(7), Promise.reject(8), Promise.reject(9)])
// → rejects with [7, 8, 9]`,solution:`
  function customPromiseResolver(promises) {
  const errors = [];
  let rejectedCount = 0;
  const fulfilledValues = [];
  let settledCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          fulfilledValues.push(result);
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(errors);
          }
        })
        .finally(() => {
          settledCount += 1;
          if (settledCount === promises.length) {
            resolve(fulfilledValues);
          }
        });
    });
  });
}
customPromiseResolver([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log);
// [1, 2, 3]
customPromiseResolver([
  Promise.reject(4),
  Promise.resolve(5),
  Promise.resolve(6),
]).then(console.log);
// [5, 6]
customPromiseResolver([
  Promise.reject(7),
  Promise.reject(8),
  Promise.reject(9),
]).catch(console.log);
// [7, 8, 9]`,description:""},{id:4,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Групування. Дано масив цілих натуральних чисел [ 1:07:00 ]",requirements:["Потрібно згрупувати між собою числа ,","які можна отримати шляхом перестановки їхніх цифр.","Тобто всі числа в числі одиникові просто переставлені по різному."],starterCode:`function digitPermutation(arr) {
  // your code here
}
console.clear();
console.log('start test');
console.log(
  digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
  // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]
);
console.log(digitPermutation([11], [22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]
console.log('end test');`,solution:`function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    // Перетворюємо число на рядок, сортуємо цифри та отримуємо ключ
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(num);
  });

  // Збираємо результат: лише групи з більше ніж одного числа
  const result = [];
  for (const group of map.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
}

// Приклади
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
console.log('end test');
`,description:`Для кожного числа створюється ключ із відсортованих цифр.
Map зберігає всі числа з однаковим ключем в масиві.
Всі масиви (групи) повертаються як результат.
✅ Таким чином, навіть одиничні числа (що не мають перестановок) потрапляють
у групу по одному.`},{id:5,link:"",title:"Групування. Дано масив цілих натуральних чисел ",requirements:["Версія функції, де повертаються тільки групи з більше ніж одного числа –","тобто справжні перестановки цифр."],starterCode:`console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []`,solution:`function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) { // Якщо такого ключа ще немає — створити його
      map.set(key, []); // створює новий запис у Map: ключ: key  - значення: порожній масив
    }
    map.get(key).push(num); // Кладемо число num у відповідну групу
  });

  // Повертаємо тільки групи, де більше одного числа
  const result = Array.from(map.values()).filter(group => group.length > 1);
  return result;
}

// Тести
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []
console.log('end test');

`,description:`Тепер одиничні числа та унікальні перестановки не включаються,
     а залишаються лише справжні групи. map — це Map, структура даних для зберігання пар
ключ → значення`},{id:6,link:"",title:"Групування. Дано масив цілих натуральних чисел ",requirements:["Варіант з об’єктом {}","Тобто всі числа в числі одиникові просто переставлені по різному."],starterCode:`function digitPermutation(arr) {
     // your code here  }
    console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
    // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]);
    console.log(digitPermutation([11], [22])); // [[11],[22]]
    console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
    console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]`,solution:`function digitPermutation(arr) {
  const obj = {};

  for (const num of arr) {
    const key = String(num).split('').sort().join('');

    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key].push(num);
  }

  return Object.values(obj);
}

console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
`,description:`Важлива відмінність Map vs Object
  Map: Будь-які ключі- has()	- Кращий для великих даних  ///              
	 Object:  Ключі → рядки - if (!obj[key]) - Простий і швидкий. Чому я бачу:
   (4) [Array(3), Array(2), Array(2), Array(1)] замість [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
   Це одне й те саме. DevTools просто згортає вкладені масиви, щоб не захаращувати консоль.
   Примусово вивести «як у прикладі».  Варіант 1 — через JSON.stringify:
   console.log(JSON.stringify(digitPermutation([
  1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9
])));`}],s="_title_f5mrh_1",i={title:s},c=()=>e.jsxs("main",{style:{padding:"4px"},children:[e.jsx("h2",{className:i.title,children:"Задачі JS"}),t.map(o=>e.jsx(r,{task:o},o.id))]});export{c as default};
