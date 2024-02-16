import { changeCurrentPlayer, changeField, changeIsDraw, changeIsGameEnded } from './reducer';
import FieldLayout from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectField, selectIsDraw, selectIsGameEnded } from './selectors';

export default function Field() {

    const field = useSelector(selectField)
    const isDraw = useSelector(selectIsDraw)
    const isGameEnded = useSelector(selectIsGameEnded)

    const dispatch = useDispatch()

    if (!(isDraw || isGameEnded)) {

        const WIN_PATTERNS = [
           field[0][0] === field[0][1] && field[0][0] === field[0][2] && field[0][0] !== '',
           field[1][0] === field[1][1] && field[1][0] === field[1][2] && field[1][0] !== '',
           field[2][0] === field[2][1] && field[2][0] === field[2][2] && field[2][0] !== '', 
           field[0][0] === field[1][0] && field[0][0] === field[2][0] && field[0][0] !== '', 
           field[0][1] === field[1][1] && field[0][1] === field[2][1] && field[0][1] !== '', 
           field[0][2] === field[1][2] && field[0][2] === field[2][2] && field[0][2] !== '', 
           field[0][0] === field[1][1] && field[0][0] === field[2][2] && field[0][0] !== '', 
           field[2][0] === field[1][1] && field[2][0] === field[0][2] && field[2][0] !== '', 
        ]

        if (WIN_PATTERNS.includes(true)){
            dispatch({type: changeIsGameEnded})
        } else if (!field[0].includes('') && !field[1].includes('') && !field[2].includes('')) {
            dispatch({type: changeIsDraw})
            dispatch({type: changeIsGameEnded})
        }
    }

    function click(event, lineIndex, buttonIndex) {
   
        let currentButton = event.target

        if (!(isDraw || isGameEnded) && currentButton.textContent === '') {

            currentButton.textContent = field[lineIndex][buttonIndex]

            dispatch({type: changeField, payload: [lineIndex, buttonIndex]})

            dispatch({type: changeCurrentPlayer})
        }
    }

    return (
        <FieldLayout  click = {click} field = {field} />    
    )
}
