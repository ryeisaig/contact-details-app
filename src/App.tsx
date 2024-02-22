import './App.css';
import ContactDetailsFinder from './components/ContactDetailsFinder';
import CreateContactDetailsForm from './components/CreateContactDetailsForm';

function App() {
  return (
    <div className="App">
        <h2>Contact Details Simple React App</h2>
        <div style={{width: "500px", margin: "auto"}}>
          <CreateContactDetailsForm/>
          <hr/>
          <ContactDetailsFinder/>
        </div>    
    </div>
  );
}

export default App;
