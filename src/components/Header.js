import PropTypes from 'prop-types'
import Button from './Button'

function Header({ title, onAdd, showAdd }) {
  function onClick() {
    console.log("click")
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "red" : "dodgerblue"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
