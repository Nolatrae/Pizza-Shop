import React from 'react';
import clas from './NotFoundBlock.module.scss'

const Index: React.FC = () => {
    return (
        <div className={clas.root}>
            <h1>
                <span>:(</span>
                <br/>
                Ничего не найдено...
            </h1>
            <p className={clas.description}>Данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    );
};

export default Index;