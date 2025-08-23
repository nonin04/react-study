export const ColorfulMessage = (props) => {
  const {color, message } = props;
  const colorstyle = {
    color: color
  }

  return <h1 style={colorstyle}>{message}</h1>
}