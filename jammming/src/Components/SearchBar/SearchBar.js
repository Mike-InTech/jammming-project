import {useState} from 'react';


function SearchBar() {
    const [userInput, setUserInput] = useState('');

    function handleUserInput(e) {
        setUserInput(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //#FIXME: Handle the search logic here, e.g., make an API call or filter data
        
      };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id='search-bar' 
                type='text' 
                placeholder='Search' 
                value={userInput}
                onChange={handleUserInput}
            />
        
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;