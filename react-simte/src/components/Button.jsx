import PropTypes from "prop-types";

const Button = (props) => {
  // console.log(props);
  const { btntext } = props;
  return <button type="">{btntext}</button>;
};

//타입 정의 필요
Button.propTypes = {
  btntext: PropTypes.string.isRequired,
};

export default Button;
