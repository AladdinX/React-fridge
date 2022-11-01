import React from "react"

class Card extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.productCategory}</h1>
        <h3>{this.props.productName}</h3>
        <p>{this.props.productAmount}</p>
        <p>{this.props.productDate}</p>
      </div>
    )
  }
}

export default Card
