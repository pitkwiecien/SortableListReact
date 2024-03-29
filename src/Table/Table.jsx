import style from './Table.module.css'
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import Button from "../Button/Button";

export default function Table(props) {
    const [values, setValues] = useState(props.values);
    const [lastSortedBy, setLastSortedBy] = useState(0)
    const [lastSortedAsc, setLastSortedAsc] = useState(false)
    const [editing, setEditing] = useState([-1, -1])
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        console.log("lastSortedAsc: " + (lastSortedAsc ? "Yes" : "No"));
        console.log("lastSortedBy: " + lastSortedBy);
    }, [lastSortedAsc, lastSortedBy]);

    useEffect(() => {
        console.log("editing: " + editing)
    }, [editing])


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

    const handleChange = (e, colIndex, index) => {
        setValues((prevValues) => {
            prevValues[index][colIndex] = e.target.value
            return prevValues
        })
    }

    const editField = (colIndex, index) => {
        setEditing([colIndex, index])
        setTimeout(() => {
            const activeInput = document.getElementsByClassName(style.activeInput)[0];
            if (activeInput) {
                activeInput.focus();
            }
        }, 0);
    }

    const stopEditing = () => {
        setEditing([-1, -1])
    }

    const handleSearchChanged = (e, index) => {
        const rows = document.getElementsByTagName("tr")
        const searchText = e.target.value

        for (let i = 2; i < rows.length; i++) {
            rows[i].classList.remove("invisible");
            if(!rows[i].children[index].innerText.startsWith(searchText))
                rows[i].classList.add("invisible")
        }

        const searchBars = document.getElementsByClassName(style.inputs)
        for (let i = 0; i < searchBars.length; i++){
            if(i !== index)
                searchBars[i].value = ""
        }
    }

    const handleSearchToggle = () => {
        const searchBar = document.getElementsByClassName(style.searchBar)[0]
        const button = document.getElementsByClassName(style.button)[0]
        if(searching){
            searchBar.classList.add(style.invisible)
        } else {
            searchBar.classList.remove(style.invisible)
        }
        const temp = button.innerHTML
        button.innerHTML = button.dataset.altText
        button.dataset.altText = temp

        setSearching((prevSearching) => {
            return !prevSearching
        })
    }

    return(
        <div className={style.tableElement}>
            <Button
                onClick={() => {handleSearchToggle()}}
                altText={"Ukryj Wyszukiwanie"}
                className={style.button}
            >
                Pokaż Wyszukiwanie
            </Button>
            <table>
                <thead>
                    <tr>
                        {props.headers.map((elem, index) => {
                            return <th
                                key={`header-${index}`}
                                onClick={() => handleHeaderClicked(index)}>
                                {elem}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr className={style.searchBar + " " + style.invisible}>
                        {props.headers.map((_, index) => {
                            return <td>
                                <input
                                    onChange={(e) => handleSearchChanged(e, index)}
                                    className={style.inputs}/>
                            </td>
                        })}
                    </tr>
                    {values.map((row, index) => {
                        const getBackgroundColour = () => {
                            const cycles = Math.floor(index / props.cycleColours)
                            const cycleSpot = cycles % props.colours.length
                            return props.colours[cycleSpot]
                        }
                        return <tr
                            key={`row-${index}`}
                            style={{backgroundColor: getBackgroundColour()}}>
                            {row.map((col, colIndex) => {
                                // noinspection JSVoidFunctionReturnValueUsed
                                return (
                                    <td key={`cell-${index}-${colIndex}`}>
                                        <div onDoubleClick={() => { editField(colIndex, index) }}
                                             onBlur={() => stopEditing()}>
                                            {editing[0] === colIndex && editing[1] === index ? (
                                                <input
                                                    type="text"
                                                    defaultValue={col}
                                                    onChange={(e) => handleChange(e, colIndex, index)}
                                                    contentEditable={true}
                                                    className={style.activeInput}
                                                />
                                            ) : (
                                                col
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
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