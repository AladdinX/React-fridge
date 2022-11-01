import Form from "./component/Form/Form";
import Card from "./component/Card/Card"
import { useState } from "react";
import Filter from "./component/Filter/Filter";


const App = () => {
  const [categoryArr, setCategoryArr] = useState([])
  const [cardsArr, setCardsArr] = useState([])
  const [categoryName, setCategoryName] = useState([])
  const uniqueCategory = [...new Set(cardsArr.map(i => i.category))]
  const filter = (value) => {
    if (value === " ") {
      setCategoryArr(cardsArr)
    } else {
      let filteredArr = cardsArr.filter(card => card.category === value)
      setCategoryArr(filteredArr)
    }
  }
  return (
    <div className="container">
      <Form setCategoryArr={setCategoryArr}
        setCardsArr={setCardsArr} cardsArr={cardsArr}
        categoryName={categoryName}
        setCategoryName={setCategoryName} />
      <div>
        <Filter filter={filter} category={uniqueCategory} />
      </div>



      {categoryArr.map((e) => {
        return (
          <Card productCategory={e.category}
            productName={e.name}
            productAmount={e.amount}
            productDate={e.date} />

        )
      })}
    </div>
  )
}

export default App
