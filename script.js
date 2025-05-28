const gameData = [{
        question: "Предельные углеводороды с общей формулой CnH2n+2",
        answer: "АЛКАНЫ"
    },
    {
        question: "Непредельные углеводороды с одной двойной связью",
        answer: "АЛКЕНЫ"
    },
    {
        question: "Непредельные углеводороды с одной тройной связью",
        answer: "АЛКИНЫ"
    },
    {
        question: "Органические соединения с карбонильной группой на конце цепи",
        answer: "АЛЬДЕГИДЫ"
    },
    {
        question: "Органические соединения, содержащие карбоксильную и аминогруппу",
        answer: "АМИНОКИСЛОТЫ"
    },
    {
        question: "Простейший представитель алканов",
        answer: "МЕТАН"
    },
    {
        question: "Процесс присоединения водорода к непредельным соединениям",
        answer: "ГИДРИРОВАНИЕ"
    },
    {
        question: "Реакция присоединения воды к непредельным углеводородам",
        answer: "ГИДРАТАЦИЯ"
    },
    {
        question: "Углеводороды с общей формулой CnH2n-6, содержащие бензольное кольцо",
        answer: "АРЕНЫ"
    },
    {
        question: "Органические соединения с гидроксильной группой -OH",
        answer: "СПИРТЫ"
    },
    {
        question: "Органические соединения с карбоксильной группой -COOH",
        answer: "КАРБОНОВЫЕКИСЛОТЫ"
    },
    {
        question: "Реакция замещения атомов водорода на галогены",
        answer: "ГАЛОГЕНИРОВАНИЕ"
    },
    {
        question: "Простейший представитель алкенов",
        answer: "ЭТИЛЕН"
    },
    {
        question: "Простейший представитель алкинов",
        answer: "АЦЕТИЛЕН"
    },
    {
        question: "Соединения с одинаковым составом, но разным строением",
        answer: "ИЗОМЕРЫ"
    },
    {
        question: "Реакция соединения молекул мономера в полимер",
        answer: "ПОЛИМЕРИЗАЦИЯ"
    },
    {
        question: "Органические соединения с карбонильной группой внутри цепи",
        answer: "КЕТОНЫ"
    },
    {
        question: "Продукты взаимодействия карбоновых кислот со спиртами",
        answer: "СЛОЖНЫЕЭФИРЫ"
    },
    {
        question: "Простейший ароматический углеводород",
        answer: "БЕНЗОЛ"
    },
    {
        question: "Реакция разложения углеводородов при нагревании",
        answer: "КРЕКИНГ"
    },
    {
        question: "Трехатомный спирт, используемый в производстве взрывчатых веществ",
        answer: "ГЛИЦЕРИН"
    },
    {
        question: "Простейший альдегид, водный раствор которого называют формалином",
        answer: "ФОРМАЛЬДЕГИД"
    },
    {
        question: "Двухатомный спирт с формулой C2H4(OH)2",
        answer: "ЭТИЛЕНГЛИКОЛЬ"
    },
    {
        question: "Реакция спиртов с карбоновыми кислотами",
        answer: "ЭТЕРИФИКАЦИЯ"
    },
    {
        question: "Углеводороды с циклическим строением и общей формулой CnH2n",
        answer: "ЦИКЛОАЛКАНЫ"
    },
    {
        question: "Простейшая карбоновая кислота",
        answer: "МУРАВЬИНАЯКИСЛОТА"
    },
    {
        question: "Кислота, содержащаяся в уксусе",
        answer: "УКСУСНАЯКИСЛОТА"
    },
    {
        question: "Реакция присоединения галогенов к непредельным соединениям",
        answer: "ГАЛОГЕНИРОВАНИЕ"
    },
    {
        question: "Органические соединения, содержащие нитрогруппу -NO2",
        answer: "НИТРОСОЕДИНЕНИЯ"
    },
    {
        question: "Высокомолекулярные соединения, состоящие из повторяющихся звеньев",
        answer: "ПОЛИМЕРЫ"
    },
    {
        question: "Простейшая аминокислота",
        answer: "ГЛИЦИН"
    },
    {
        question: "Связь между аминокислотами в белках",
        answer: "ПЕПТИДНАЯСВЯЗЬ"
    },
    {
        question: "Природные высокомолекулярные соединения из аминокислот",
        answer: "БЕЛКИ"
    },
    {
        question: "Углеводы с общей формулой Cn(H2O)m",
        answer: "САХАРИДЫ"
    },
    {
        question: "Простейший моносахарид, виноградный сахар",
        answer: "ГЛЮКОЗА"
    },
    {
        question: "Полисахарид, запасное вещество растений",
        answer: "КРАХМАЛ"
    },
    {
        question: "Полисахарид, основной компонент клеточных стенок растений",
        answer: "ЦЕЛЛЮЛОЗА"
    },
    {
        question: "Сложные эфиры глицерина и высших карбоновых кислот",
        answer: "ЖИРЫ"
    },
    {
        question: "Реакция щелочного гидролиза жиров",
        answer: "ОМЫЛЕНИЕ"
    },
    {
        question: "Органические соединения с простой эфирной связью R-O-R",
        answer: "ПРОСТЫЕЭФИРЫ"
    },
    {
        question: "Ароматический спирт C6H5OH",
        answer: "ФЕНОЛ"
    },
    {
        question: "Реакция отщепления воды от спиртов",
        answer: "ДЕГИДРАТАЦИЯ"
    },
    {
        question: "Качественная реакция на непредельные соединения с бромной водой",
        answer: "ОБЕСЦВЕЧИВАНИЕ"
    },
    {
        question: "Реакция окисления спиртов до альдегидов или кетонов",
        answer: "ОКИСЛЕНИЕ"
    },
    {
        question: "Углеводороды нефти с разветвленной цепью",
        answer: "ИЗОАЛКАНЫ"
    },
    {
        question: "Процесс переработки нефти путем перегонки",
        answer: "РЕКТИФИКАЦИЯ"
    },
    {
        question: "Смесь углеводородов, основное топливо для автомобилей",
        answer: "БЕНЗИН"
    },
    {
        question: "Показатель качества бензина, устойчивость к детонации",
        answer: "ОКТАНОВОЕЧИСЛО"
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
