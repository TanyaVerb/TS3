"use strict";
const formEl = document.getElementById("myForm");
console.log(formEl);
const emailInputEl = document.getElementById("email");
console.log(emailInputEl);
const titleInputEl = document.getElementById("title");
console.log(titleInputEl);
const textAreaEl = document.getElementById("text");
console.log(textAreaEl);
const checkboxInputEl = document.getElementById("checkbox");
console.log(checkboxInputEl);
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (data.email && data.title && data.text && data.checkbox) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    let { email } = data;
    const emails = [
        "example@gmail.com",
        "example@ex.com",
        "admin@gmail.com",
    ];
    // Если email совпадает хотя бы с одним  из emails массива
    //   if (emails.includes(email)) {
    //      //     console.log("This email is already exist");
    //   } else {
    //     console.log("Posting data...");
    //   }
    if (emails.indexOf(email) !== -1) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
        email: emailInputEl.value,
        title: titleInputEl.value,
        text: textAreaEl.value,
        checkbox: checkboxInputEl.checked,
    };
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const formEl = document.getElementById("myForm") as HTMLFormElement;
// console.log(formEl);
// const emailInputEl = document.getElementById("email") as HTMLInputElement;
// console.log(emailInputEl);
// const titleInputEl = document.getElementById("title") as HTMLInputElement;
// console.log(titleInputEl);
// const textAreaEl = document.getElementById("text") as HTMLTextAreaElement;
// console.log(textAreaEl);
// const checkboxInputEl = document.getElementById("checkbox") as HTMLInputElement;
// console.log(checkboxInputEl);
// interface IFormData {
//   email: string;
//   title: string;
//   text: string;
//   checkbox: boolean;
// }
// function validateFormData(data: IFormData): boolean {
//   function removeError(input) {
//     const parent = input.parentNode;
//     if (parent.classList.contains("error")) {
//       parent.querySelector(".error-label").remove();
//       parent.classList.remove("error");
//     }
//   }
//   function createError(input, text: string): void {
//     const parent = input.parentNode;
//     const errorLabel = document.createElement("label");
//     errorLabel.classList.add("error-label");
//     errorLabel.textContent = text;
//     parent.classList.add("error");
//     parent.append(errorLabel);
//   }
//   let result = true;
//   const allInputs = document.querySelectorAll(
//     ".input-field"
//   ) as NodeListOf<HTMLInputElement>;
//   for (const input of allInputs) {
//     removeError(input);
//     if (input.value == "") {
//       console.log("Ошибка поля");
//       createError(input, "Поле не заполнено");
//       result = false;
//     }
//   }
//   // Если каждое из свойств объекта data правдиво...
//   if (data.email && data.title && data.text && data.checkbox) {
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }
// function checkFormData(data: IFormData): void {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
//   // Если email совпадает хотя бы с одним  из emails массива
//   if (emails.includes(email)) {
//     console.log("This email is already exist");
//   } else {
//     console.log("Posting data...");
//   }
// }
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData: IFormData = {
//     email: emailInputEl.value,
//     title: titleInputEl.value,
//     text: textAreaEl.value,
//     checkbox: checkboxInputEl.checked,
//   };
//   if (validateFormData(formData)) {
//     checkFormData(formData);
//   }
// });
//***************************************************************************/
let a = [1, 2, 3, 4];
let a2 = [1, 2, 3, 4, "sss"];
//тип дженерик
let b = [1, 2, 3, 4];
let c = [1, 2, 3, 4, "hhh", 6];
//кортежи/tuple
let e = [1, "uuu"];
let f = [1, ""];
f = [3];
//перечисления
var G;
(function (G) {
    G[G["A"] = 0] = "A";
    G[G["B"] = 1] = "B";
})(G || (G = {}));
console.log(G.A, G.B); //0,1
console.log(G[0], G[1]); // A, B
console.log(G[G.A], G[G.B]); // A, B
//-----------------------------Функции--------------------------------
function f1(a, b = 100) {
    return a + b;
}
console.log(f1("str"));
let f2 = (a, b) => {
    return a + b;
};
let result;
result = f2;
console.log(result("sss", 5));
//создание readonly массива
const arr_2 = [1, 2, 3, 4, 5, 6];
//декомпозиция массива
const arr_4 = [222, 333, 444, 555];
const [, a4, b4] = arr_4;
console.log(a4, b4); //333,444
//Двумерный массив
// const arr_5:number[][]= [[1,2,3],[4,5,6]]
const arr_5 = [];
arr_5[0] = [11, 12];
arr_5[1] = [15, 16];
arr_5[2] = [17, 18];
arr_5.push([19, 20]);
console.log(arr_5);
console.log(arr_5[3][1]); //20
//Смешанные массивы
const arr_6 = ["sss", true, false];
const arr_7 = ["sss", 4, 5];
//Кортежи
const cort_01 = ["www", 444];
cort_01.push("444");
//Необязательный элемент в кортеже
const cort_02 = ["www", 444];
//Если количество элементов в кортеже не определено
const cort_03 = [222, "aaa", "bbb"];
//==============================Объекты==================================
//Необязательные свойства
const user = {
    name: "Pupkin",
    email: "Pupkin@mail.ru",
    //   age: 44,
};
//Проверяем наличие свойства(которое не прописано в описании типа) в объекте, чтобы не было ошибки
if ("test" in user) {
    console.log("yes");
}
else {
    console.log("no"); //no
}
if ("email" in user) {
    console.log("yes"); //yes
}
else {
    console.log("no");
}
//Обращение к необязательному свойству ошибку не вызывает и в консоль выведет undefine
console.log(user.age); //undefined
//Объект, как аргумент функции
function userProcess(some_var) {
    console.log(some_var.email);
}
const obj = {
    test: false,
    name: "Ivan",
    email: "Ivan@mail.ru",
};
userProcess(user); //Pupkin@mail.ru
userProcess(obj); //Ivan@mail.ru
// userProcess( test: false,
//   name: "Ivan",
//   email: "Ivan@mail.ru",); //ошибка
//Декомпозиция
function foo({ name, email }) {
    console.log(name, email);
}
foo(obj); //Ivan Ivan@mail.ru
//Создайте объект obj_02, который содержит свойство name равное 'Gedeon', поле name2 равное 'Richter', поле year равно 1944. Самостоятельно задайте типы данных для данных свойств. Выведите объект в консоль.
const obj_02 = {
    name: "Gedeon",
    name2: "Richter",
    year: 1944,
};
console.log(obj_02);
//Создайте объект obj_03 с полями: role, email, vip. Поле role содержит строку 'admin', поле email содержит 'ppprrr@mail.ua', а поле vip укажите как необязательное, числовое. Выведите объект в консоль.
const obj_03 = {
    role: "admin",
    email: "ppprrr@mail.ua",
};
console.log(obj_03);
//Создан объект obj_04. Напишите функцию, которая возвращает строку, где значения объекта перечислены через пробел. Тип функции укажите самостоятельно.
function f4(obj) {
    let str = "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            str += `${key}:${obj[key]} `;
        }
    }
    return str.trim();
}
let obj_04 = { name: "John", age: 30, city: "New York" };
let str = f4(obj_04);
console.log(str); //name:John age:30 city:New York
//-------------второй вариант
function objectToString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");
}
let obj_05 = { name: "John", age: 30, city: "New York" };
let str2 = objectToString(obj_05);
console.log(str2); //  "name: John age: 30 city: New York"
//+++++++++++++++++++++++++++++++Классы++++++++++++++++++++++++++++++++++++
//Объявляем класс
class Button {
    text;
    className;
}
const b_01 = new Button();
console.log(b_01);
// Заносим данные сразу в класс
class Header {
    text = "Header 1";
    fontSize = "24px";
}
const h_01 = new Header();
console.log(h_01);
//Методы
class Btn {
    text;
    className;
    create() {
        const button = document.createElement("button");
        button.textContent = this.text;
        this.className.forEach((item) => button.classList.add(item));
        return button;
    }
}
const b_02 = new Btn();
const b_03 = new Btn();
b_02.text = "Button";
b_02.className = ["btn", "btn-success"];
document.body.append(b_02.create());
b_03.text = "Button";
b_03.className = ["btn", "btn-success"];
document.body.append(b_03.create());
//конструктор
class ButtonElement {
    text;
    className;
    role;
    type = "button"; //свойства кот.нельзя менять
    constructor(text, className) {
        this.text = text;
        this.className = className;
        this.role = "button"; //можно задавать свойства через constructor
    }
    create() {
        const button = document.createElement("button");
        button.textContent = this.text;
        button.setAttribute("role", this.role);
        button.setAttribute("type", this.type);
        this.className.forEach((item) => button.classList.add(item));
        return button;
    }
}
const b_04 = new ButtonElement("Push me", ["btn", "btn-success"]);
console.log(b_04);
document.body.append(b_04.create());
const b_05 = new ButtonElement("New button", ["btn", "warning"]);
b_05.text = "Push, push";
console.log(b_05);
document.body.append(b_05.create());
//========================================================================
//Создайте класс Paragraph_01 содержащий следующие свойства: text - текст внутри параграфа. Тип укажите самостоятельно. Реализуйте метод render который создает объект p (тег параграф), добавляет в него текст из свойства text и возвращает параграф.
class Paragraph_01 {
    text = "Paragraph_01";
    //   constructor(text: string) {
    //     this.text = text;
    //   }
    render() {
        const p = document.createElement("p");
        p.textContent = this.text;
        return p;
    }
}
const p1 = new Paragraph_01();
document.body.append(p1.render());
//Создайте класс Paragraph_02. Скопируйте в него реализацию свойств и методов из Paragraph_01. Допишите конструктор, который принимает текст и присваивает его свойству text класса. Кстати, надеюсь вы догадались указать, что метод render возвращает тип HTMLParagraphElement.
class Paragraph_02 {
    text;
    constructor(text) {
        this.text = text;
    }
    render() {
        const p = document.createElement("p");
        p.textContent = this.text;
        return p;
    }
}
const p2 = new Paragraph_02("Paragraph_02");
document.body.append(p2.render());
//Создайте класс Paragraph_03. Скопируйте в него реализацию свойств и методов из Paragraph_02. Добавьте свойство bold типа boolean, которое по умолчанию равно false. В метод render() добавьте строку, которая проверяет свойство bold и если оно равно true, оборачивает весь текст внутри параграфа тегом b. В конструктор добавьте вторым аргументом свойство bold.
class Paragraph_03 {
    text;
    bold;
    constructor(text, bold = false) {
        this.text = text;
        this.bold = bold;
    }
    render() {
        const p = document.createElement("p");
        if (this.bold) {
            const b = document.createElement("b");
            b.textContent = this.text;
            p.append(b);
        }
        else {
            p.textContent = this.text;
        }
        return p;
    }
}
const p3 = new Paragraph_03("Paragraph_03", true);
document.body.append(p3.render());
//Наследование
class T_01 {
    name = "";
}
class T_02 extends T_01 {
    email = "";
}
const obj_22 = new T_02();
class T_03 extends T_02 {
    showData() {
        console.log(this.name, this.email);
    }
}
const obj_33 = new T_03();
obj_33.name = "test";
obj_33.email = "test@mail.ru";
obj_33.showData();
console.log(obj_33);
class T_04 extends T_01 {
    email = "";
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    showData() {
        console.log(this.name, this.email);
    }
    showInfo() {
        return this.name + this.email;
    }
}
const obj_44 = new T_04("hello", "test@mail.ru");
obj_44.showData();
class T_05 extends T_04 {
    age = 0;
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
    showData() {
        super.showData(); //вызываем метод родителя
        console.log(this.age);
    }
    showInfo() {
        const s = super.showInfo();
        return s + this.age;
    }
}
const obj_55 = new T_05("Hi", "Hi@mail.ru", 44);
obj_55.showData();
obj_55.showInfo();
console.log(obj_55.showInfo());
//-------------------------------------------------------
class ElementHTML {
    text;
    tag = "DIV";
    constructor(a) {
        this.text = a;
    }
    render() {
        const div = document.createElement(this.tag);
        div.textContent = this.text;
        return div;
    }
}
const div_1 = new ElementHTML("hello");
document.body.append(div_1.render());
class ElementHTMLCSS extends ElementHTML {
    cssClass;
    constructor(a, b) {
        super(a);
        this.cssClass = b;
    }
    render() {
        const div = super.render();
        this.cssClass.forEach((item) => div.classList.add(item));
        return div;
    }
}
const div_2 = new ElementHTMLCSS("div width css", ["red", "bold"]);
document.body.append(div_2.render());
//================================================
class ElementImage extends ElementHTMLCSS {
    src = "";
    constructor(src, b, a) {
        super(a, b);
        this.src = src;
        this.tag = "img";
    }
    render() {
        const img = document.createElement(this.tag);
        img.setAttribute("src", this.src);
        img.setAttribute("alt", this.text);
        this.cssClass.forEach((item) => img.classList.add(item));
        return img;
    }
}
const img = new ElementImage("./image", ["red", "bold"], "кошка");
document.body.append(img.render());
//# sourceMappingURL=main.js.map