export const ColorfulMessage = (props) => {

  const colorstyle = {
    color: props.color
  }

  return <h1 style={colorstyle}>{props.message}</h1>
}