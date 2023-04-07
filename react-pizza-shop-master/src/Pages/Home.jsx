import React, {useContext, useEffect, useRef} from 'react';
import Categories from "../Components/Categories/Categories";
import Sort, {parameters} from "../Components/Sort/Sort";
import SkeletonPizzaBlock from "../Components/PizzaBlock/SkeletonPizzaBlock";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import Pagination from "../Components/Pagination/Pagination";
import {SearchValueContext} from "../context/context";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage, setFilters} from "../features/filter/filterSlice";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {fetchingPizza} from "../features/pizza/pizzaSlice";
import { Link } from "react-router-dom";


const Home = () => {
    const {searchValue} = useContext(SearchValueContext)
    const {categoryId,sort,currentPage} = useSelector( state => state.filterSlice)
    const {items,status} = useSelector(state => state.pizzaSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isSearch = useRef(false)
    const isMount = useRef(false)


    useEffect(() => {
        if(isMount.current){
            const queryString = qs.stringify({
                criteriaSort:sort.criteriaSort,
                categoryId,
                currentPage,
            })
            navigate(`?${queryString}`)
        }
        isMount.current = true
    },[categoryId,sort ,currentPage])
    useEffect(() => {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sortTypeFing = parameters.find(obj => obj.criteriaSort ===  params.criteriaSort)


            dispatch(setFilters({...params,sortTypeFing}))
            isSearch.current = true
        }
    },[])
    useEffect(() => {
        window.scrollTo(0,0)
        if (!isSearch.current){
            getPizzas()
        }
        isSearch.current= false
    },[categoryId,sort,searchValue,currentPage]);

    async function getPizzas() {
        const replaceMinus = sort.criteriaSort.replace('-','')
        const getSortDecision = sort.criteriaSort.includes('-') ? 'asc' : 'desc'
        const getCategory = categoryId > 0 ? `category=${categoryId}`:''
        const search = searchValue ? `&search=${searchValue}`:''

        dispatch(fetchingPizza({
            replaceMinus,
            getSortDecision,
            getCategory,
            search,
            currentPage
        }))

    }
    const dispatchSetCurrentPage = (i) => {
        dispatch(setCurrentPage(i))
    }

    const pizzas = items.filter(item => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());

    })
        .map(item => (
          <Link to={`/react-pizza-shop/pizza/${item.id}`}>
            <PizzaBlock key={item.id} {...item} />
          </Link>
        ))

    const skeletons = [...new Array(5)].map((_,index) => <SkeletonPizzaBlock key={index}/>)


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(index) => dispatch(setCategoryId(index))} />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{status === 'loading' ? skeletons : pizzas} </div>
            <Pagination currentPage={currentPage} onChangePage={i => dispatchSetCurrentPage(i)}/>
        </div>
    );
};

export default Home;









































