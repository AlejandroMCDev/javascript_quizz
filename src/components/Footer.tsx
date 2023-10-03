import { Button } from '@mui/material'
import { useQuestionData } from "../hooks/useQuestionData"

export const Footer = () => {

    const { correct,unanswered,incorrect,reset } = useQuestionData()

    return (
        <footer style={{marginTop:'16px'}}>
            <strong>{`✔ ${correct} correctas - X ${incorrect} incorrectas - ? ${unanswered} sin responder`}</strong>
            <div style={{ marginTop: '16px'}}>
                <Button onClick={reset}>
                    Resetear juego
                </Button>
            </div>
        </footer>
    )
}
