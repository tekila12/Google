import React,{useState} from 'react'
import './Search.css';
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from './StateProvider';
import { actionTypes } from "./reducer";

function Search({hideButtons = false}) {
    const[input, setInput] =React.useState('')
    const[{}, dispatch] = useStateValue();
    const history = useHistory();
      

    const search = (e) => {
    e.preventDefault();

    console.log('you hit the search button >>', input)

    dispatch({
   
   
    type: actionTypes.SET_SEARCH_TERM,
    term: input
       })



    history.push('/search')
    };
    return (
        <form className="search"> 
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon  className='mic'/>
              </div>
                {!hideButtons? (
               <div className="search__buttons">

              <Button  type="sumbit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm feeling lucky</Button>
                

                </div>
             ) :(
              <div className="search__buttons">
                <Button  className="search__buttonsHidden" 
                type="sumbit" onClick={search}
                variant="outlined">Google Search</Button>
                <Button  className="search__buttonsHidden"
                 variant="outlined">I'm feeling lucky</Button>
                 </div>
                 )} 

                  </form>
            
        
    )
}
 
 export default Search
