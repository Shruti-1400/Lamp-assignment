import React from 'react'

const form = () => {
  return (
    <div className="wrapper">
      <h1>About the Product</h1>
      <form>
          <div className="input-container">
            <label>Name </label>
            <input type="text" name='product name' required/>
          </div>
          <div className="input-container">
            <label> Description </label>
            <input type="text" name='product description' required/>
          </div>
          <div className="input-container">
            <label>Price</label>
            <input type="text" name='product price' required/>
          </div>
          <div className="input-container">
            <label>Image</label>
            <input type="file" name='product image' required/>
          </div>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form