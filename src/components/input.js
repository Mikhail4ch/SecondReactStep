function Input({type, value, onChange, label}) {
    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={handleChange} />
        </div>
    )
}

export default Input