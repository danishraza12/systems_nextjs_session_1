import Button from "../ui/button"
import classes from "./events-search.module.css"
import { useRef } from "react"

const EventsSearch = (props) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const months = [
        { month: 'January', id: '1' },
        { month: 'February', id: '2' },
        { month: 'March', id: '3' },
        { month: 'April', id: '4' },
        { month: 'May', id: '5' },
        { month: 'June', id: '6' },
        { month: 'July', id: '7' },
        { month: 'August', id: '8' },
        { month: 'September', id: '9' },
        { month: 'October', id: '10' },
        { month: 'November', id: '11' },
        { month: 'December', id: '12' },
    ]

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        {
                            months.map(m => <option ley={m.id} value={m.id}>
                                    {m.month}
                                </option>
                            )
                        }
                    </select>
                </div>
            </div>
            <Button>
                Find Event
            </Button>
        </form>
    )
}

export default EventsSearch;