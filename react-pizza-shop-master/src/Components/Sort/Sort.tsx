import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setChangeSort } from "../../features/filter/filterSlice";

type SortItem = {
  name: string;
  criteriaSort: string;
}

type PopupClick = MouseEvent & {
  path: Node[],
}

export const parameters: SortItem[] = [
  { name: `популярности ↑`, criteriaSort: 'rating' },
  { name: `популярности ↓`, criteriaSort: '-rating' },
  { name: 'цене ↑ ', criteriaSort: 'price' },
  { name: 'цене ↓', criteriaSort: '-price' },
  { name: 'алфавиту ↑', criteriaSort: 'title' },
  { name: 'алфавиту ↓', criteriaSort: '-title' },
]
const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const sortRef = useRef<HTMLDivElement>(null)
  const sort = useSelector(state => state.filterSlice)
  const dispatch = useDispatch()

  function changeParameter(value: SortItem) {
    dispatch(setChangeSort(value));
    setOpen(false)
  }

  useEffect(() => {
    const closeSortBlock = (e: MouseEvent) => {
      const _e = e as PopupClick;

      if (sortRef.current && !_e.path.includes(sortRef.current)) {
        setOpen(false)
      }
    }
    document.body.addEventListener('click', closeSortBlock)
    return () => document.body.removeEventListener('click', closeSortBlock)
  })

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.sort.name}</span>
      </div>
      {
        open && (
          <div className="sort__popup">
            <ul>
              {
                parameters.map((parameter, index) => (
                  <li key={index}
                    onClick={() => changeParameter(parameter)}
                    className={parameter.criteriaSort === sort.sort.criteriaSort ? 'active' : ''}
                  >
                    {parameter.name}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Sort;