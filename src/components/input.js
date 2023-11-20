import styles from "./Input.module.css"


function Input({type, value, onChange, label}) {
    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input type={type} value={value} onChange={handleChange} className={styles.input}/>
        </div>
    )
}

export default Input