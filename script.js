// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// let array1 = [1, 2, 3, 4, 5];
// let array2 = ['1', '2', '3', '3', '4', '5'];
// let array3 = ['1', '2', true, '3', 4, '5'];
// console.log(array1, array2, array3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = i;
// }
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div><strong>This is block</strong></div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div><strong>This is ${i+1} block</strong></div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>It is a heading block</h1>`)
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>It is a ${i} heading block</h1>`)
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['my', 'name', 'is', 'Ruslan', 'and', 'I', 'like', 'to', 'learn', 'programming'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [[1, 3, 5], 'name', true, 'Ruslan', 'and', 123, 'like', 'to', false, 'programming'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [[1, 3, 5], 'name', true, 'Ruslan', 'and', 123, 'like', 'to', false, 'programming'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == 'boolean') {
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [[1, 3, 5], 567, true, 'Ruslan', 'and', 123, 'like', 'to', false, 678];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == 'number') {
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [[1, 3, 5], 'name', true, 'Ruslan', 'and', 123, 'like', 'to', false, 'programming'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == 'string') {
//         console.log(array[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 1; array[1] = true; array[2] = "hello"; array[3] = 345; array[4] = false; array[5] = 456;
// array[6] = 1; array[7] = true; array[8] = "hello"; array[9] = 345;
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let minutes = 1; minutes < 3; minutes++) {
//     for (let seconds = 0; seconds < 60; seconds++) {
//         console.log(minutes, seconds);
//     }
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hours = 1; hours < 3; hours++) {
//     for (let minutes = 1; minutes < 20; minutes++) {
//         for (let seconds = 0; seconds < 60; seconds++) {
//             console.log(hours, minutes, seconds);
//         }
//     }
// }


// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < array.length; i++) {
//     word += array[i];
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < array.length) {
//     word += array[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let letter of array) {
//     word += letter;
// }
// console.log(word);
//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 1; i < 4; i++) {
//     array.push(i);
// }
// console.log(array);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3];
// for (let i = 3, j = 0; i > 0; i--) {
//     array[j++] = i;
// }
// console.log(array);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3];
// for (let i = 0, j = 4; i < 3; i++) {
//     array.push(j++);
// }
// console.log(array);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array = [1, 2, 3];
// for (let i = 0, j = 6; i < 3; i++) {
//     array.unshift(j--);
// }
// console.log(array);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array = ['js', 'css', 'jq'];
// console.log(array.shift());


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array = ['js', 'css', 'jq'];
// console.log(array.pop());


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let array = [1, 2, 3, 4, 5];
// array = array.slice(3, 5);
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let array = [1, 2, 3, 4, 5];
// array = array.slice(0, 2);
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c');
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c');
// array.splice(array.length, 0, 'e');
// console.log(array);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [1, 2, 3, 4, 5, 8, 10, 16, 13, 2];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array1 = [1, 2, 3, 4, 5, 8, 10, 16, 13, 2];
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     array2.push(array1[i]);
// }
// console.log(array2);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array1 = [1, 2, 3, 4, 5, 8, 10, 16, 13, 2];
// let array2 = [];
// let i = 0;
// while (i < array1.length) {
//     array2.push(array1[i++]);
// }
// console.log(array2);


//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < array.length) {
//     console.log(array[i++]);
// }
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
// }
// i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
// }
// console.log(array);


// 8. вивести масив в зворотньому порядку.
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1 - 3 завдання
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i--]);
// }
// for (let j = array.length - 1; j >= 0; j--) {
//     console.log(array[j]);
// }
// i = array.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 4 task
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }


// 5 task
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//     i--;
// }


// 6 task
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 7 task
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
// }
// console.log(array);



// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let array1 = [];
// for (let i = 0, j = 0; i < 50; i++) {
//     array1[i] = j;
//     j += 2;
// }
// console.log(array1);



// - заповнити його 50 непарними числами за допомоги циклу.
// let array1 = [];
// for (let i = 0, j = 1; i < 50; i++) {
//     array1[i] = j;
//     j += 2;
// }
// console.log(array1);



// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу. // (вже зроблено зверху)
// 2. заповнити його 50 непарними числами за допомоги циклу. // (вже зроблено зверху)
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.random();
// }
// console.log(array);


//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round((Math.random() * (732 - 8) + 8));
// }
// console.log(array);


// 2. вывести на консоль  каждый третий елемент
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round((Math.random() * (732 - 8) + 8));
// }
// for (let i = 0; i < array.length; i += 3) {
//     console.log(array[i]);
// }


// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round((Math.random() * (732 - 8) + 8));
// }
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let array = [];
// let array1 = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round((Math.random() * (732 - 8) + 8));
// }
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         array1.push(array[i]);
//     }
// }
// console.log(array1);


// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round((Math.random() * (732 - 8) + 8));
// }
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i+1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// let average =  sum / array.length;
// console.log(Math.ceil(average));


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array1 = [];
// let array2 = [];
// for (let i = 0; i < 20; i++) {
//     array1[i] = Math.ceil(Math.random() * 20);
//     array2.push(array1[i] * 5);
// }
// console.log(array1, array2);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let array1 = [true, 'acgsgf', 123, 'dfdsfasdf', false, {name: 'object'}, 1, 3, 4, 10];
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     if (typeof array1[i] === "number") {
//         array2.push(array1[i]);
//     }
// }
// console.log(array1, array2);