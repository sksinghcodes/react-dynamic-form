const TextField = ({data, formData, handleInput}) => {
    const {label, isRequired, isReadonly, key} = data;
    return ( 
        <div className="field-wrap" style={{marginBottom: '15px'}}>
            <label htmlFor={key}>{label}</label>
            <div className="input-wrap">
                <input 
                    type="text" 
                    required={isRequired} 
                    readOnly={isReadonly} 
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={e => handleInput(key, e)}
                />
            </div>
        </div>
    );
}

export default TextField;