import './Table.module.css'
import PropTypes from "prop-types";
export default function Table(props) {
    return(
        <table>
            {props.headers.map((elem) => {
                return <th>{elem}</th>
            })}
            {props.values.map((row, index) => {
                const getBackgroundColour = () => {
                    const cycles = Math.floor(index / props.cycleColours)
                    const cycleSpot = cycles % props.colours.length
                    return props.colours[cycleSpot]
                }
                return <tr style={{backgroundColor: getBackgroundColour()}}>
                    {row.map((col) => {
                        return <td>{col}</td>
                    })}
                </tr>
            })}
        </table>
    );
}

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    colours: PropTypes.arrayOf(PropTypes.string),
    cycleColours: PropTypes.number
}

Table.defaultProps = {
    colours: ["white"],
    cycleColours: 1
}