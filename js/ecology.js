document.querySelector(".Opros_1").querySelector(".opros").onsubmit = (
    event
  ) => {
    // отключает перезагрузку страница при отправке формы
    // работает только если вешать на ивент submit на форму
    event.preventDefault();
  
    // находим саму форму, первого ОПРОСА
    const forma = document.querySelector(".opros");
  
    const answerFirst = forma.querySelector(".firstVopros");
    // Находим все переключатели в первом вопросе
    const radioButtonsFirst = document.querySelectorAll(
      'input[name="q1"]'
    );
    // создаем переменную куда запишем только АКТИВНЫЙ переключатель
    let selectedq1;
    // ищем активный переключатель
    for (const radioButton of radioButtonsFirst) {
      if (radioButton.checked) {
        selectedq1 = radioButton.value;
        break;
      }
    }

    const answerSecond = forma.querySelector(".secondVopros");
    // Находим все переключатели в первом вопросе
    const radioButtonsSecond = document.querySelectorAll(
      'input[name="q2"]'
    );
    // создаем переменную куда запишем только АКТИВНЫЙ переключатель
    let selectedq2;
    // ищем активный переключатель
    for (const radioButton of radioButtonsSecond) {
      if (radioButton.checked) {
        selectedq2 = radioButton.value;
        break;
      }
    }
  
    const answerthird = forma.querySelector(".thirdVopros");
    // Находим все переключатели в первом вопросе
    const radioButtonsThird = document.querySelectorAll(
      'input[name="q3"]'
    );
    // создаем переменную куда запишем только АКТИВНЫЙ переключатель
    let selectedq3;
    // ищем активный переключатель
    for (const radioButton of radioButtonsThird) {
      if (radioButton.checked) {
        selectedq3 = radioButton.value;
        break;
      }
    }

    // Создаем объект с ответами, вместо null нужно подставлять ответы из других вопросов
    const objectToStorage = {
        Opros_1: {
        firstVopros: selectedq1,
        secondVopros: selectedq2,
        thirdVopros: selectedq3,
      },
    };
    // Достаем массив ответов из локального хранилища
    const fromLocalStorage =
      JSON.parse(localStorage.getItem("oprosiResult")) || [];
    // смотрим че там
    console.log(fromLocalStorage);
  
    // Добавляем в этот массив еще один пройденный опрос
    fromLocalStorage.push(objectToStorage);

    // сохраняем опять в локальном хранилище
    localStorage.setItem("oprosiResult", JSON.stringify(fromLocalStorage));
  
    console.log(objectToStorage);

    // Сохранить ответы в файл
    const fileOpros_1q1 = 'Опрос 1. Ответ на вопрос 1: ' + selectedq1;
    const fileOpros_2q2 = 'Опрос 1. Ответ на вопрос 2: ' + selectedq2;
    const fileOpros_3q3 = 'Опрос 1. Ответ на вопрос 3: ' + selectedq3;
    const blob = new Blob([fileOpros_1q1, fileOpros_2q2, fileOpros_3q3], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; // устанавливает ссылку на созданный URL-адрес файла
    link.download = 'ответы.txt';
    link.click();

  };