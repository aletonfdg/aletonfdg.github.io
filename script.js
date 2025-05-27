const gameData = [{
        question: "Совокупность особей одного вида, длительно проживающих на одной территории",
        answer: "ПОПУЛЯЦИЯ"
    },
    {
        question: "Оболочка Земли, заселенная живыми организмами",
        answer: "БИОСФЕРА"
    },
    {
        question: "Совокупность всех организмов и среды их обитания, связанных потоками энергии и круговоротом веществ",
        answer: "ЭКОСИСТЕМА"
    },
    {
        question: "Процесс слияния половых клеток при половом размножении",
        answer: "ОПЛОДОТВОРЕНИЕ"
    },
    {
        question: "Индивидуальное развитие организма от зиготы до смерти",
        answer: "ОНТОГЕНЕЗ"
    },
    {
        question: "Организмы, производящие органические вещества из неорганических",
        answer: "ПРОДУЦЕНТЫ"
    },
    {
        question: "Последовательная смена биоценозов на определенной территории",
        answer: "СУКЦЕССИЯ"
    },
    {
        question: "Учение В.И. Вернадского о роли живого вещества в преобразовании Земли",
        answer: "НООСФЕРА"
    },
    {
        question: "Организмы, разлагающие органические остатки до минеральных веществ",
        answer: "РЕДУЦЕНТЫ"
    },
    {
        question: "Совокупность факторов среды, необходимых для существования вида",
        answer: "ЭКОЛОГИЧЕСКАЯНИША"
    },
    {
        question: "Организмы, питающиеся готовыми органическими веществами",
        answer: "КОНСУМЕНТЫ"
    },
    {
        question: "Воспроизведение себе подобных организмов",
        answer: "РАЗМНОЖЕНИЕ"
    },
    {
        question: "Оплодотворенная яйцеклетка",
        answer: "ЗИГОТА"
    },
    {
        question: "Последовательность организмов, в которой каждый предыдущий служит пищей последующему",
        answer: "ПИЩЕВАЯЦЕПЬ"
    },
    {
        question: "Факторы неживой природы, влияющие на организмы",
        answer: "АБИОТИЧЕСКИЕ"
    },
    {
        question: "Факторы живой природы, влияющие на организмы",
        answer: "БИОТИЧЕСКИЕ"
    },
    {
        question: "Развитие зародыша от оплодотворения до рождения или выхода из яйца",
        answer: "ЭМБРИОГЕНЕЗ"
    },
    {
        question: "Совокупность всех пищевых связей в экосистеме",
        answer: "ПИЩЕВАЯСЕТЬ"
    },
    {
        question: "Круговорот химических элементов из неживой природы через живые организмы обратно в неживую природу",
        answer: "БИОГЕОХИМИЧЕСКИЙЦИКЛ"
    },
    {
        question: "Способность экосистемы сохранять структуру и функции при внешних воздействиях",
        answer: "УСТОЙЧИВОСТЬ"
    },
    {
        question: "Взаимовыгодное сожительство организмов разных видов",
        answer: "СИМБИОЗ"
    },
    {
        question: "Форма взаимоотношений, при которой один организм живет за счет другого, нанося ему вред",
        answer: "ПАРАЗИТИЗМ"
    },
    {
        question: "Историческое развитие органического мира",
        answer: "ЭВОЛЮЦИЯ"
    },
    {
        question: "Приспособленность организмов к условиям среды обитания",
        answer: "АДАПТАЦИЯ"
    },
    {
        question: "Борьба за существование между особями одного вида",
        answer: "ВНУТРИВИДОВАЯБОРЬБА"
    },
    {
        question: "Численность популяции на единицу площади или объема",
        answer: "ПЛОТНОСТЬПОПУЛЯЦИИ"
    },
    {
        question: "Место вида в природе, включающее его роль в сообществе и положение в пространстве",
        answer: "ЭКОЛОГИЧЕСКАЯНИША"
    },
    {
        question: "Загрязнение окружающей среды, вызванное деятельностью человека",
        answer: "АНТРОПОГЕННОЕЗАГРЯЗНЕНИЕ"
    },
    {
        question: "Увеличение концентрации вредных веществ по мере продвижения по пищевой цепи",
        answer: "БИОАККУМУЛЯЦИЯ"
    },
    {
        question: "Совокупность организмов, обитающих на определенной территории",
        answer: "БИОЦЕНОЗ"
    },
    {
        question: "Процесс образования половых клеток",
        answer: "ГАМЕТОГЕНЕЗ"
    },
    {
        question: "Деление клетки, при котором число хромосом уменьшается вдвое",
        answer: "МЕЙОЗ"
    },
    {
        question: "Совокупность всех экосистем Земли",
        answer: "БИОСФЕРА"
    },
    {
        question: "Организмы, способные жить в широком диапазоне условий среды",
        answer: "ЭВРИБИОНТЫ"
    },
    {
        question: "Организмы, способные жить только в узком диапазоне условий среды",
        answer: "СТЕНОБИОНТЫ"
    },
    {
        question: "Максимальное количество особей, которое может существовать в данной экосистеме",
        answer: "ЕМКОСТЬСРЕДЫ"
    },
    {
        question: "Явление, при котором организмы одного вида поедают друг друга",
        answer: "КАННИБАЛИЗМ"
    },
    {
        question: "Взаимоотношения, при которых один вид угнетает другой, не получая пользы",
        answer: "АМЕНСАЛИЗМ"
    },
    {
        question: "Совокупность абиотических факторов в пределах территории, занимаемой биоценозом",
        answer: "БИОТОП"
    },
    {
        question: "Процесс накопления энергии и вещества в телах живых организмов",
        answer: "БИОЛОГИЧЕСКАЯПРОДУКЦИЯ"
    },
    {
        question: "Графическое изображение соотношения различных трофических уровней",
        answer: "ЭКОЛОГИЧЕСКАЯПИРАМИДА"
    },
    {
        question: "Размножение без оплодотворения",
        answer: "ПАРТЕНОГЕНЕЗ"
    },
    {
        question: "Способность организма восстанавливать утраченные части тела",
        answer: "РЕГЕНЕРАЦИЯ"
    },
    {
        question: "Совокупность процессов поступления веществ в организм, их превращения и выведения",
        answer: "ОБМЕНВЕЩЕСТВ"
    },
    {
        question: "Сезонные перемещения животных",
        answer: "МИГРАЦИЯ"
    },
    {
        question: "Состояние организма, при котором жизненные процессы замедлены",
        answer: "АНАБИОЗ"
    },
    {
        question: "Взаимовыгодные отношения между организмами разных видов",
        answer: "МУТУАЛИЗМ"
    },
    {
        question: "Использование одним организмом другого в качестве жилища без вреда для хозяина",
        answer: "КВАРТИРАНСТВО"
    },
    {
        question: "Явление поедания особей одного вида другим",
        answer: "ХИЩНИЧЕСТВО"
    },
    {
        question: "Разнообразие видов в экосистеме и их количественное соотношение",
        answer: "БИОРАЗНООБРАЗИЕ"
    }
];

let currentGame = null;
let score = 0;
let attempts = 6;
let guessedLetters = [];

const wordDisplay = document.getElementById('wordDisplay');
const questionElement = document.getElementById('question');
const alphabetContainer = document.getElementById('alphabet');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');
const messageElement = document.getElementById('message');
const newGameButton = document.getElementById('newGame');

function initGame() {
    currentGame = gameData[Math.floor(Math.random() * gameData.length)];
    attempts = 6;
    guessedLetters = [];
    messageElement.textContent = '';
    messageElement.className = 'message';

    questionElement.textContent = currentGame.question;
    attemptsElement.textContent = attempts;

    updateWordDisplay();
    createAlphabet();
}

function updateWordDisplay() {
    let display = '';
    for (let letter of currentGame.answer) {
        if (letter === ' ') {
            display += ' ';
        } else if (guessedLetters.includes(letter)) {
            display += letter;
        } else {
            display += '_';
        }
    }
    wordDisplay.textContent = display;
}

function createAlphabet() {
    alphabetContainer.innerHTML = '';
    const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    for (let letter of letters) {
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'letter-btn';
        button.addEventListener('click', () => guessLetter(letter, button));
        alphabetContainer.appendChild(button);
    }
}
const TOTAL_AUDIO_FILES = 26;

function playRandomSound() {
    const randomNumber = Math.floor(Math.random() * TOTAL_AUDIO_FILES) + 1;

    // Формируем путь к файлу
    const audioPath = `Поле чудес/${randomNumber}.mp3`;

    // Создаем и воспроизводим аудио
    const audio = new Audio(audioPath);
    audio.play().catch(error => {
        console.error('Ошибка воспроизведения звука:', error);
    });
}

function guessLetter(letter, button) {
    playRandomSound();
    button.disabled = true;
    guessedLetters.push(letter);

    if (currentGame.answer.includes(letter)) {
        button.classList.add('correct');
        updateWordDisplay();

        if (!wordDisplay.textContent.includes('_')) {
            win();
        }
    } else {
        button.classList.add('wrong');
        attempts--;
        attemptsElement.textContent = attempts;

        if (attempts === 0) {
            lose();
        }
    }
}

function win() {
    score += 10;
    scoreElement.textContent = score;
    messageElement.textContent = 'Поздравляем! Вы угадали слово!';
    messageElement.className = 'message win';
    disableAllButtons();
}

function lose() {
    messageElement.textContent = `Игра окончена! Правильный ответ: ${currentGame.answer}`;
    messageElement.className = 'message lose';
    disableAllButtons();
}

function disableAllButtons() {
    const buttons = alphabetContainer.querySelectorAll('.letter-btn');
    buttons.forEach(button => button.disabled = true);
}


newGameButton.addEventListener('click', initGame);

// Запуск игры
initGame();