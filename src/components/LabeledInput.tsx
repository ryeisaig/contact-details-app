
type LabeledInputProps = {
    label: string;
    type?: string;
    value?: string;
    disabled?: boolean;
    handler?: any;
    required?: boolean;
}

const LabeledInput = (props:LabeledInputProps) => {
    return (
      <div style={styles.labeledinput}>
        <label>{props.label}</label>
        <input data-testid={"text-input-"+props.label} type={props.type || "text"} style={styles.input} onChange={props.handler} {...props}/>
      </div>
    );
  }


const styles: any = {
  labeledinput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
    paddingRight: "8px"
  },

  input: {
    height: "40px",
    width: "100%",
    alignItems: "flex-start"
  }
}

export default LabeledInput;