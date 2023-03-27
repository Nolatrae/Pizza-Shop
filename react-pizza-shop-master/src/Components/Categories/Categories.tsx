import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

    const categoriesList =[
        {index:0,categoryName:'Все'},
        {index:1,categoryName:'Мясные'},
        {index:2,categoryName:'Вегетарианская'},
        {index:3,categoryName:'Гриль'},
        {index:4,categoryName:'Острые'},
        {index:5,categoryName:'Закрытые'},
    ]
    return (
        <div className="categories">
            <ul>
                {categoriesList.map((categoryName,index) =>

                    <li key={index}
                        onClick={() => onChangeCategory (index)}
                        className={value === index ? 'active' : ''}
                    >
                        {categoryName.categoryName}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Categories;