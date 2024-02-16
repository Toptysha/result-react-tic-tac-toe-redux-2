import styles from './styles/field.module.css';

export default function FieldLayout({click, field}) {

    return (  
        <div className={styles.game}>
            {field.map((line, lineIndex) => {
                return (
                    <div className={styles.buttonsLine} >
                        {line.map((_, buttonIndex) => {
                            return (
                                <div className={styles.button} onClick={event => click(event, lineIndex, buttonIndex)}>
                                    {field[lineIndex][buttonIndex]}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div> 
    )
}
