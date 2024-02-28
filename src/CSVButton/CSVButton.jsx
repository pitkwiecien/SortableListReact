import Button from "../Button/Button";
import PropTypes from "prop-types";
import { CSVLink } from "react-csv";

export default function CSVButton(props){
    return (
        <CSVLink data={props.csvData} className={props.className}>
            <Button children={props.children} onClick={props.onClick} altText={props.altText}/>
        </CSVLink>
    )
}

CSVButton.propTypes = {
    csvData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    altText: PropTypes.string
}

CSVButton.defaultProps = {
    className: "button"
}