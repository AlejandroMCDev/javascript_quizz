import { Card, List, Typography, ListItem, ListItemButton, ListItemText } from '@mui/material'
import SyntaxHighLighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Question as QuestionType } from "../types"
import { useQuestionsStore } from '../store/questions'

const getBackgroundColor = (info:QuestionType, index:number) => {
    const { correctAnswer,userSelectedAnswer } = info

    if (userSelectedAnswer == null) return 'transparent'

    if (index != correctAnswer && index != userSelectedAnswer) return 'transparent'

    if (index === correctAnswer) return 'green'

    if (index === userSelectedAnswer) return 'red'

    return 'transparent'
}   

export const Question = ({ info }: { info: QuestionType }) => {

    const selectAnswer = useQuestionsStore( state => state.selectAnswer )

    const createHandleClick = ( answerIndex: number ) => () => {
        selectAnswer(info.id, answerIndex)
    }


  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2 ,textAlign: 'left', marginTop: 4 }}>
        <Typography variant='h5'>
            {info.question}
        </Typography>

        <SyntaxHighLighter language='javascript' style={monokai}>
            {info.code}
        </SyntaxHighLighter>
        
        <List sx={{ bgcolor:'#333'}} disablePadding>
            {
                info.answers.map(( answer,index ) => (
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton
                            disabled = {info.userSelectedAnswer != null}
                            onClick={createHandleClick(index)}
                            sx={{backgroundColor: getBackgroundColor(info,index)}}
                        >
                            <ListItemText primary={answer} sx={{textAlign:'center'}}/>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>

    </Card>
  )
}
