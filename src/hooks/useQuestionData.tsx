import { useQuestionsStore } from "../store/questions"


export const useQuestionData = () => {

    const questions = useQuestionsStore( state => state.questions )
    const reset = useQuestionsStore( state => state.reset )

    let correct = 0
    let incorrect = 0
    let unanswered = 0

    questions.forEach( questions => {
        const { correctAnswer, userSelectedAnswer } = questions

        if (userSelectedAnswer == null) unanswered++
        if (userSelectedAnswer === correctAnswer) correct++
        if (userSelectedAnswer != correctAnswer) incorrect++
    })

    return {
        correct,
        incorrect,
        unanswered,

        reset
    }
}
