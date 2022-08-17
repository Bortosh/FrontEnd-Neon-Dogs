import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault()
        dispatch(searchByName(name))
        setName('')
    }


    return (
        <form>
            <div className={style.searchBox}>
                <div className={style.shadow}></div>
                <input
                    type='text'
                    value={name}
                    placeholder='search a Dog... 🐶'
                    onChange={ handleInputChange }
                    />
                <button className={style.btn4} type="submit" onClick={ handlesubmit }>search...</button>
            </div>
        </form>
    )
}

export default SearchBar;