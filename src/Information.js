import { useSelector } from "react-redux";
import InformationLayout from "./InformationLayout";
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from "./selectors";

export default function Information() {

    const currentPlayer = useSelector(selectCurrentPlayer)
    const isDraw = useSelector(selectIsDraw)
    const isGameEnded = useSelector(selectIsGameEnded)

    let topContent = ''
    
    if (isDraw) {
        topContent = 'Ничья'
    } else if (isGameEnded && !isDraw) {
        if (currentPlayer === 'X') {
            topContent = `Победил: 0`
        } else {
            topContent = `Победил: X`
        }
    } else {
        topContent = `Ходит: ${currentPlayer}`
    }

    return (
        <InformationLayout topContent = {topContent} />    
    )
}