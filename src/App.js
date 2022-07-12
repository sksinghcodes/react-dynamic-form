import DynamicForm from './components/DynamicForm';
import { drug1 } from './data/form-fields';
import './App.css';

function App() {
    return (
        <DynamicForm formJSON={drug1} />
    );
}

export default App;
