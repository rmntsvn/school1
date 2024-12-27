const formSteps = [
  {
    question: "Какой из методов является наиболее безопасным для создания пароля?",
    answers: [
      "Использование простого слова или фразы",
      "Использование одного и того же пароля для всех аккаунтов",
      "Использование заглавных и строчных букв, цифр и спец. символов",
      "Использование повторяющихся символов",
    ],
  },
  {
    question:
      "Что такое фишинг?",
    answers: [
      "Атака компьютера с целью получения доступа к конфидициальной информации",
      "Метод обхода защиты, используемый хакерами",
      "Посылка обманных сообщений с целью получить личные данные ",
      "Внедрение вредоносного ПО в компьютер",
    ],
  },
  {
    question: "Что такое DDos-атака?",
    answers: [
      "Атака, когда злоумышленник получает доступ к аккаунту",
      "Атака, когда злоумышленник блокирует доступ к веб-сайту",
      "Метод шифрования данных",
      "Программа, блокирует доступ к файлам и требует выкуп",
    ],
  },
  {
    question: "Что такое шифрование данных?",
    answers: [
      "Метод защиты компьютера от вредоносного ПО",
      "Атака, когда злоумышленник получает доступ к аккаунту",
      "Техника, используемая хакерами для получения доступа к компьютеру",
      "Процесс преобразования данных в зашифрованный формат",
    ],
  },
  {
    question: "Какое действие помогает защитить компьютер от вредоносных программ?",
    answers: [
      "Регулярное обновление антивируса",
      "Использование слабых паролей",
      "Отключение антивируса",
      "Игнорирование спам-фильтров",
    ],
  },
  {
    question: "Какой инструмент поможет защититься от вредоносного ПО?",
    answers: [
      "Доступ через незащищенные сети",
      "Межсетевой экран (firewall)",
      "Отключение антивируса",
      "Регистрация на любых сайтах",
    ],
  },
  {
    question: "Какой из паролей является надёжным?",
    answers: [
      "123456789 ",
      "Olga2003",
      "20002002",
      "!Pkl95Qbvg6^",
    ],
  },
  {
    question: "Что такое 'вирус' в контексте компьютерной безопасности ?",
    answers: [
      "Программа для проверки системы на наличие уязвимостей",
      "Программа, внедряющаяся в систему, вызывая различные проблемы",
      "Система, обеспечивающая шифрование данных и их безопасность",
      "Программа, блокирует доступ к файлам и требует выкуп",
    ],
  },
  {
    question: "Что следует делать людям, подвергнувшимся кибербуллингу или троллингу?",
    answers: [
      "Заблокировать обидчика",
      "Пытаться выяснить личность обидчика",
      "Ответить обидчику тем же",
      "Делать вид, что ничего не происходит",
    ],
  },
  {
    question: "Что такое защита от вредоносного ПО?",
    answers: [
      "Программа, предназначенная для удаления вредоносного ПО ",
      "Метод защиты компьютера от вирусов и другого вредоносного ПО",
      "Процессы, предназначенных для обнаружения и ответа на атаки",
      "Атака, когда злоумышленник получает доступ к аккаунту",
    ],
  },
];

let currentStep = 0;

let selectedAnswers = [];

function renderStep() {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");
  const progressFill = document.getElementById("progress-fill");

  questionText.textContent = formSteps[currentStep].question;
  answersContainer.innerHTML = "";

  formSteps[currentStep].answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.classList.add("quiz__answer-item");
    label.setAttribute("for", `answer-${index}`);

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", `question-${currentStep}`);
    input.setAttribute("id", `answer-${index}`);
    input.value = answer;

    const circle = document.createElement("div");
    circle.classList.add("quiz__answer-item-circle");

    const text = document.createElement("div");
    text.classList.add("quiz__answer-item-text");
    text.textContent = answer;

    label.appendChild(input);
    label.appendChild(circle);
    label.appendChild(text);
    answersContainer.appendChild(label);
  });

  const progress = ((currentStep + 1) / formSteps.length) * 100;
  progressFill.style.width = progress + "%";
}

function nextStep() {
  const selectedAnswer = document.querySelector(
    `input[name="question-${currentStep}"]:checked`
  );

  if (selectedAnswer) {
    selectedAnswers.push({
      question: formSteps[currentStep].question,
      answer: selectedAnswer.value,
    });
  } else {
    alert("Пожалуйста, выберите ответ.");
    return;
  }

  if (currentStep < formSteps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    const messageText = selectedAnswers
      .map(
        (step, index) =>
          `Вопрос ${index + 1}: ${step.question}\nОтвет: ${step.answer}`
      )
      .join("\n\n");
    sendResults(messageText);
    alert("Квиз завершён");
  }
}

function sendResults(data) {
  console.log("Отправляем данные...");
  console.log(data);
}

document.addEventListener("DOMContentLoaded", renderStep);
