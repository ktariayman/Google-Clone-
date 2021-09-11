import React ,{useState}from 'react'
import './Search.css'
import { Input } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search({hideButtons = false}) {
    const [input,setInput] = useState("");
    const history=useHistory();    
    const goSearch = (e) => {
        e.preventDefault();
        history.push('/search')
    };
    return (
       <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input  className="search__input"
                        value={input}
                        onChange={ (e) =>setInput(e.target.value)}
                />
                <MicIcon/>
            </div>
            {!hideButtons ? (
                     <div className="search__buttons">
                        <Button type ='submit' 
                        onClick={goSearch} variant='outlined'
                        >
                            Google Search
                        </Button>
                        <Button variant='outlined'>
                            I'm Feeling Lucky
                        </Button>
                     </div>
                ):(
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" type ='submit' onClick={goSearch} variant='outlined'>
                            Google Search</Button>
                        <Button variant='outlined' className="search__buttonsHidden" >I'm Feeling Lucky</Button>
                    </div>
                )
            }
           
       </form>
    )
}

export default Search;
