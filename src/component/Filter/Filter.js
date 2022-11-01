const Filter = (p) => {
  return (
    <div>
      {p.category.map((e) => {
        return (
          <button onClick={() => p.filter(e)}>{e}</button>
        )
      })}
      < button onClick={() => p.filter(" ")}> All</button >
    </div>
  )
}
export default Filter