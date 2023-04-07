import React, {useCallback, useContext, useRef, useState} from 'react';
import clas from './Search.module.scss'
import deleteInputValueIcon from '../../../assets/img/closeIcon.svg'
import searchIcon from '../../../assets/img/searchIcon.svg'
import {SearchValueContext} from "../../../context/context";
import debounce from 'lodash.debounce'


const Search: React.FC = () => {
    const [value ,setValue] = useState('')
    const {setSearchValue} = useContext(SearchValueContext)
    let inputRef = useRef<HTMLInputElement>(null)


    const FocusOnChangeInput =  useCallback(
        debounce((str: string) => {
            setSearchValue(str)
        },500)
        ,[])


    const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
        console.log(event)
        setSearchValue('')
        setValue('')
        inputRef.current?.focus();
    }


    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        FocusOnChangeInput(e.target.value)
    }

    return (
        <div className={clas.root}>
            <img className={clas.searchIcon} src={searchIcon} alt="searchIcon"/>
            <input
                ref={inputRef}
                className={clas.input}
                placeholder='Поиск пиццы...'
                type="text"
                value={value}
                onChange={onChangeInput}
            />
            {value &&
                <img onClick={onClickClear} className={clas.deleteInputValueIcon} src={deleteInputValueIcon} alt="deleteInput"/>}
        </div>
    );
};

export default Search;