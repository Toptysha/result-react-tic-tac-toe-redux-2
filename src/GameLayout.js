import Field from "./Field";
import Information from "./Information";
import styles from './styles/game.module.css';
import { initState } from './reducer';
import { useDispatch } from "react-redux";

export default function GameLayout() {

    const dispatch = useDispatch()

    return (
        <div className={styles.container}> 
            <Information />
            <Field />
            <button className={styles.newGameButton} onClick={() => dispatch({type: initState})}>Начать новую игру</button>
        </div>  
    )
}
