const SelectField = ({data, formData, handleInput}) => {
    const {label, isRequired, isReadonly, items, key} = data;
    return ( 
        <div className="field-wrap" style={{marginBottom: '15px'}}>
            <label htmlFor={key}>{label}</label>
            <div className="input-wrap">
                <select 
                    required={isRequired} 
                    readOnly={isReadonly}
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={e => handleInput(key, e)}
                >
                    {items.map(({text, value}) => <option key={value}>{text}</option>)}
                </select>
            </div>
        </div>
    );
}

export default SelectField;