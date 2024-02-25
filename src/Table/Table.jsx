import './Table.module.css'
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function Table(props) {
    const [values, setValues] = useState(props.values);
    const [lastSortedBy, setLastSortedBy] = useState(0)
    const [lastSortedAsc, setLastSortedAsc] = useState(false)

    useEffect(() => {
        console.log("lastSortedAsc: " + (lastSortedAsc ? "Yes" : "No"));
        console.log("lastSortedBy: " + lastSortedBy);
    }, [lastSortedAsc, lastSortedBy]);


    const handleHeaderClicked = (index) => {
        console.log(values)
        setValues((prevValues) => {
            return prevValues.sort((e1, e2) => {
                return lastSortedBy === index
                    ? lastSortedAsc
                        ? e2[index].localeCompare(e1[index])
                        : e1[index].localeCompare(e2[index])
                    : e1[index].localeCompare(e2[index])
            })
        })
        if(lastSortedBy === index){
            setLastSortedAsc((prevLastSortedAsc) => {
                return !prevLastSortedAsc
            })
        } else{
            setLastSortedAsc(true)
            setLastSortedBy(index)
        }
    }

    return(
        <table>
            <thead>
                <tr>
                    {props.headers.map((elem, index) => {
                        return <th key={`header-${index}`} onClick={() => handleHeaderClicked(index)}>{elem}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {values.map((row, index) => {
                    const getBackgroundColour = () => {
                        const cycles = Math.floor(index / props.cycleColours)
                        const cycleSpot = cycles % props.colours.length
                        return props.colours[cycleSpot]
                    }
                    return <tr key={`row-${index}`} style={{backgroundColor: getBackgroundColour()}}>
                        {row.map((col, colIndex) => {
                            return <td key={`cell-${index}-${colIndex}`}>{col}</td>
                        })}
                    </tr>
                })}
            </tbody>
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