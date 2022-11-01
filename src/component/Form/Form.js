import { useState } from "react"

const Form = (props) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    category: "",
    amount: 0,
    date: ""
  })
  const onSubmit = (e) => {
    e.preventDefault();
    props.setCardsArr([...props.cardsArr, formInputs]);
    props.setCategoryArr([...props.cardsArr, formInputs]);
    props.setCategoryName([...props.categoryName, formInputs.category])
    for (let item of e.target.children) { item.value = "" }
  }
  return (
    <div className="form">
      <form onSubmit={onSubmit} >
        <input type="text"
          placeholder="Product name"
          required
          onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })} />
        <input type="text"
          placeholder="Product category"
          required
          onChange={(e) => setFormInputs({ ...formInputs, category: e.target.value })} />
        <input type="number"
          placeholder="Product amount"
          required
          onChange={(e) => setFormInputs({ ...formInputs, amount: e.target.value })} />
        <input type="date"
          required
          onChange={(e) => setFormInputs({ ...formInputs, date: e.target.value })} />
        <input type="submit"
          value="Submit"
          required />
      </form>
    </div>
  )
}
export default Form