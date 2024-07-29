import { useState } from "react"



export default function Quizz() {
    const quizzQuestion = [
        {
            "title": "Самый большой океан на Земле?",
            "variants": ["Атлантический", "Индийский", "Тихий"],
            "correct": 2
        },
        {
            "title": "Столица Франции - это ... ?",
            "variants": ["Берлин", "Рим", "Париж"],
            "correct": 2
        },
        {
            "title": "Гималаи - это ... ?",
            "variants": ["горы", "река", "пустыня"],
            "correct": 0
        },
        {
            "title": "Родина кенгуру?",
            "variants": ["Азия", "Австралия", "Америка"],
            "correct": 1
        },
        {
            "title": "В каком океане находится Мальдивы?",
            "variants": ["Атлантический", "Индийский", "Тихий"],
            "correct": 1
        },
        {
            "title": "Какой самый высокий водопад в мире?",
            "variants": ["Анхель", "Ниагарский", "Игуасу"],
            "correct": 0
        }
    ]
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [isFinish, setIsFinish] = useState(false)
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0)

    function restart() {
        setNumberQuestion(0);
        setIsFinish(false);
        setCountCorrectAnswer(0);
    }

    function responce(index) {
        // проверка правильного ответа
        if (quizzQuestion[numberQuestion]["correct"] == index) {
            setCountCorrectAnswer(countCorrectAnswer + 1)
        }

        // проверка, что закончились вопросы
        if (numberQuestion + 1 == quizzQuestion.length) {
            setIsFinish(true)
        }

        setNumberQuestion(numberQuestion + 1)
    }

    return (
        <>
            <div className="quizz">
                {isFinish
                    ? <>
                        <div className="quizz__finish">
                            <img width="70px" src="images/watermelon.png" alt="" />
                                <h2 className="quizz__finish-heading">Верно {countCorrectAnswer} ответа из {quizzQuestion.length}</h2>
                                <button className="quizz__button" onClick={()=> {restart()}}>Попробовать снова</button>
                        </div>
                    </>
                    : <>
                        <div className="progress-bar quizz__progress-bar">
                            <div className="progress-bar__progress" style={{ width: `${numberQuestion / quizzQuestion.length * 100}%` }}></div>
                        </div>
                        <h2 className="quizz__heading">{quizzQuestion[numberQuestion]["title"]}</h2>
                        <div className="quizz__wrap-answer">
                            {quizzQuestion[numberQuestion]["variants"].map((variant, index) =>
                                <p className="quizz__answer" onClick={() => { responce(index) }} key={index}>{variant}</p>
                            )}
                        </div>
                    </>

                }
            </div>
        </>
    )
}