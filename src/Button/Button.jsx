import './Button.module.css'
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            data-alt-text={props.altText}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    altText: PropTypes.string
}

Button.defaultProps = {
    className: "button"
}