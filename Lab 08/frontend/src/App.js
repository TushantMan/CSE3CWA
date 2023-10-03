import { useState, useEffect } from 'react'; // import useEffect
    import List from './components/List';
    import './App.css';
    function App() {
        const [tasks, setTasks] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5002/api/tasks')
                .then(response => response.json())
                .then(data => setTasks(data))
                .catch((error) => {
                    console.error('Error:', error);
    });
    }, []);
    return (
        <div className='page'>
            <List heading='My Tasks' tasks={tasks} setTasks={setTasks}/>
        </div>
        );
    }
export default App;

{/*}
<header className="App-header">
<h1 className='Header'>Contractor</h1>
<form className='mainForm'>
    <h2 className='firstLabel'>Contacts</h2><br></br>
    <input type="text" name="name" className='contractorInput' placeholder='Name'/><br></br>
    <button type="button" className='primaryButton' >Create Contact</button>
    <div className='line-1'>
    </div>
            <div className='contactDetails'>
                <div className='contactName'>Contact
                <button type="button" className='delete-1' >Delete</button>
                </div>
               <input type="text" name="name" className='Number' placeholder='Name'/>
               <input type="text" name="name" className='Number' placeholder='Phone Number'/>
               <button type="button" className='secondaryButton' >Add Phone Number</button>
                <table className='table-1'>
                    <tr className='tr'>
                        <th>Phone Number</th>
                        <th>Phone Type</th>
                        
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>123-456-7890</td>
                        <td>Mobile</td>
                        <td><button type="button" className='delete-1' >Delete</button></td>    
                    </tr>
                    <tr className='tr'>
                        <td>123-456-7890</td>
                        <td>Mobile</td>
                        <td><button type="button" className='delete-1' >Delete</button></td>
                    </tr>
                    </table>
                </div>
            

</form>
<div className='contractorMessage'>
    <h2 className='secondLabel'>Click a contact to view assocoated phone numbers</h2><br></br>
</div>

</header>
*/}
//<div className="App">
//<header className="App-header">
//<h1 className='Header'>Contractor</h1>
//<form className='mainForm'>
    //<h2 className='firstLabel'>Contacts</h2><br></br>
    //<input type="text" name="name" className='contractorInput' placeholder='Name'/><br></br>
    //<button type="button" className='primaryButton' >Create Contact</button>
    //<div className='line-1'>
    //</div>
    

////</form>
//<div className='contractorMessage'>
   // <h2 className='secondLabel'>Click a contact to view assocoated phone numbers</h2><br></br>
//</div>

//</header>
//</div>