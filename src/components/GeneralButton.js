const GeneralButton = ({ text, button_style, div_style }) => {
  return (
    <button className={`${button_style}`}>
      <div className={`${div_style}`}>{text}</div>
    </button>
  )
}
export default GeneralButton
