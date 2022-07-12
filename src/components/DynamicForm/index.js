import TextField from './TextField';
import NumberField from './NumberField';
import DateField from './DateField';
import SelectField from './SelectField';
import { useState } from 'react';

const RenderField = ({field, handleInput, formData}) => {
    switch (field.type) {
        case 'text': {
            return <TextField 
                data={field}
                handleInput={handleInput}
                formData={formData}
            />
        }

        case 'number': {
            return <NumberField 
                data={field}
                handleInput={handleInput}
                formData={formData}
            />
        }

        case 'date': {
            return <DateField 
                data={field}
                handleInput={handleInput}
                formData={formData}
            />
        }

        case 'dropdown': {
            return <SelectField 
                data={field}
                handleInput={handleInput}
                formData={formData}
            />
        }

        default : return;
    }
}

const formStyle = {
    width: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #9e9fa7',
    borderRadius: '10px',
}

const DynamicForm = ({formJSON}) => {
    const {fields} = JSON.parse(formJSON);
    const initialFormData = {};
    fields.forEach(field => {
        initialFormData[field.key] = '';
    })
    const [ formData, setFormData ] = useState(initialFormData);
    
    const handleInput = (key, e) => {
        setFormData({
            ...formData,
            [key]: e.currentTarget.value
        });
    }

    return (
        <form style={formStyle}>
            {fields.map(field => {
                return (
                    <RenderField 
                        key={field.key}
                        field={field} 
                        handleInput={handleInput} 
                        formData={formData} 
                    />
                )
            })}
            <div style={{textAlign:"center"}}><input type="submit" /></div>
        </form>
    );
}

export default DynamicForm;