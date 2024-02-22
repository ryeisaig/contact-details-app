
type CustomButtonProps = {
    children?: any
}

const CustomButton = (props:CustomButtonProps) => {
    return (
      <button style={style}>{props.children}</button>
    );
  }


const style: any = {
  width: "100%",
  height: "40px",
  marginBottom: "20px"
}

export default CustomButton;