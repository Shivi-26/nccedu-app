import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer'

const QuizQuestion = () => {
    var QuestionBank = [
        {
            Questions: "Total No of directorates in NCC",
            AnswerText: [
                { Answer: "19", isCorrect: false },
                { Answer: "18", isCorrect: false },
                { Answer: "21", isCorrect: false },
                { Answer: "17", isCorrect: true }
            ]
        },
        {
            Questions: "Write down the full form of NCC",
            AnswerText: [
                { Answer: "National Cadet Campus", isCorrect: false },
                { Answer: "National Core Campus", isCorrect: false },
                { Answer: "National Cadet Corps", isCorrect: true },
                { Answer: "National Corps Cadet", isCorrect: false }
            ]
        },
        {
            Questions: "Pacing is difficult in",
            AnswerText: [
                { Answer: "Rough ground", isCorrect: true },
                { Answer: "Plateaus", isCorrect: false },
                { Answer: "Smooth surfaces", isCorrect: false },
                { Answer: "Plain areas", isCorrect: false }
            ]
        },
        {
            Questions: "Drill is taught to NCC cadets to imbibe:",
            AnswerText: [
                { Answer: "Leadership skills", isCorrect: false },
                { Answer: "Endurance", isCorrect: false },
                { Answer: "Discipline", isCorrect: true },
                { Answer: "Strength", isCorrect: false }
            ]
        },
        {
            Questions: "Where is Indian National Defence University located",
            AnswerText: [
                { Answer: "Dehradun", isCorrect: false },
                { Answer: "None of these", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false },
                { Answer: "New Delhi", isCorrect: true }
            ]
        },
        {
            Questions: "The distance between the heels in stand-at-ease position is",
            AnswerText: [
                { Answer: "12 inches", isCorrect: true },
                { Answer: "13 inches", isCorrect: false },
                { Answer: " 14 inches", isCorrect: false },
                { Answer: "15 inches", isCorrect: false }
            ]
        },
        {
            Questions: "The weight of .22 Deluxe Rifle is",
            AnswerText: [
                { Answer: "6 lbs 3 oz", isCorrect: false },
                { Answer: "6 lbs 3 oz", isCorrect: false },
                { Answer: "8 lbs 10 oz", isCorrect: true },
                { Answer: "8 lbs 2 oz", isCorrect: false }
            ]
        },
        {
            Questions: "Give one word for the act of firing a shot.",
            AnswerText: [
                { Answer: "Shooting", isCorrect: true },
                { Answer: "Cocking", isCorrect: false },
                { Answer: "Suiting", isCorrect: false },
                { Answer: "Grouping", isCorrect: false }
            ]
        },
        {
            Questions: "Which of the following is the fastest aircraft under Indian Air Force?",
            AnswerText: [
                { Answer: "MiG-21 BISON", isCorrect: false },
                { Answer: "None of these", isCorrect: true },
                { Answer: "HAL Tejas", isCorrect: false },
                { Answer: "Mikoyan MiG-29", isCorrect: false }
            ]
        },
        {
            Questions: "Who was the first Indian to be the chief of air staff?",
            AnswerText: [
                { Answer: "Subrata Mukherjee", isCorrect: false },
                { Answer: "Arjan Singh", isCorrect: false },
                { Answer: "Subroto Mukerjee", isCorrect: true },
                { Answer: "None of these", isCorrect: false }
            ]
        },
        {
            Questions: "First aid is also known as",
            AnswerText: [
                { Answer: "Designed course", isCorrect: false },
                { Answer: "First assistance", isCorrect: true },
                { Answer: "first loss", isCorrect: false },
                { Answer: "medical treatment", isCorrect: false }
            ]
        }
    ]

    const [Question, setQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    //console.log(QuestionBank);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(Score + 1);
        }
        const nextQuestion = Question + 1;
        if (nextQuestion < QuestionBank.length) {
            setQuestion(nextQuestion)
        }
        else {
            setShowScore(true);
        }
    }
    const resetQuiz = () => {
        setQuestion(0);
        setScore(0);
        setShowScore(false);
    }
    return (
        <div>
            <Header />
            <div className='container d-flex align-items-center' style={{ minHeight: "80vh", minWidth:"100%", backgroundColor: "skyblue" }}>
                <div class='card container' style={{ minHeight:"30vh", width:"100vh", backgroundColor: '#000033' }}>
                    <div class="card-body">
                        {showScore ? (
                            <div className='text-white'>
                                <h2>You have scored {Score} out of {QuestionBank.length}✌</h2>
                                <br />
                                <>
                                    <button type="submit" className='btn btn-primary' onClick={resetQuiz}>Once More!</button>
                                </>
                            </div>
                        )
                            : (
                                <>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-6 text-white'>
                                                <h3 class='d-flex'><span>❓Question {Question + 1}</span>/{QuestionBank.length}</h3>

                                                <div className='mt-4'>
                                                    <h3>{QuestionBank[Question].Questions}</h3>
                                                </div>
                                            </div>
                                            <div className='col-3 mt-4 text-white'>
                                                {QuestionBank[Question].AnswerText?.map((answer) =>
                                                (
                                                    <div className='mt-3' style={{ width: "35vh" }}>
                                                        <button onClick={() => handleAnswerResponse(answer.isCorrect)} className='btn btn-primary'>{answer.Answer}</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default QuizQuestion;