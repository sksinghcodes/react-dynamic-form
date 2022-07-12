const NumberField = ({data, handleInput, formData}) => {
    const {label, isRequired, isReadonly, unit, key} = data;
    return ( 
        <div className="field-wrap" style={{marginBottom: '15px'}}>
            <label htmlFor={key}>{label}</label>
            <div className="input-wrap">
                <input 
                    style={{maxWidth:'calc(100% - 65px)'}}
                    type="number" 
                    required={isRequired} 
                    readOnly={isReadonly}
                    id={key}
                    name={key}
                    value={formData[key]}
                    onInput={e => handleInput(key, e)}
                />
                <span className="unit">{unit}</span>
            </div>
        </div>
    );
}

export default NumberField;