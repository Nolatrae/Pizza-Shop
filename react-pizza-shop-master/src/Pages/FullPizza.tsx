import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string,
    title: string,
    price: number,
  }>()
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchPizza(){
      try{
      const {data} = await axios.get('https://634d210bf5d2cc648e9d3578.mockapi.io/items/' + id)
      setPizza(data)
      }catch(error){
        alert('Ошибка при получении пиццы')
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return <>'Загрузка...'</>
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt="" />
      <h2>{id}</h2>
      <p>{pizza.title}</p>
      <h4>{pizza.price}</h4>
    </div>
  )
}

export default FullPizza