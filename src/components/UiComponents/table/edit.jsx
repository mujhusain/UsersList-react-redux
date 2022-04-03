import EditableLabel from "react-inline-editing";

const Editable = (props) => {
  const handleFocus = (props) => {
    console.log("Focused with text: " + props.text);
  };

  const handleFocusOut = (text) => {
    console.log("Left editor with text: " + text);
  };

  return (
    <div>
      <EditableLabel
        text={props.text}
        inputWidth={props.text.length * 7 + "px"}
        inputHeight="24px"
        inputMaxLength="50"
        onFocus={handleFocus}
        onFocusOut={handleFocusOut}
      />
    </div>
  );
};

export default Editable;
