import GeneralButton from "./GeneralButton"

const AddToCartButton = ({ button_style, div_style }) => {
  return (
    <>
      <GeneralButton 
        text='Add to Cart'
        button_style={button_style}
        div_style={div_style}
      />
    </>
  )
}

export default AddToCartButton
