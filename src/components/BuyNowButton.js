import GeneralButton from "./GeneralButton"

const BuyNowButton = ({ button_style, div_style }) => {
  return (
    <>
      <GeneralButton 
        text='Buy Now'
        button_style={button_style}
        div_style={div_style}
      />
    </>
  )
}
export default BuyNowButton
