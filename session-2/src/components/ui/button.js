import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
    return (
        <Link href={props.link} className={classes.btn}>
            {props.children} 
        </Link>

        // For Next.js < 13 we need to add anchor tag for custom styling
        // <Link href={props.link}>
        //     <a className={classes.btn}>
        //         {props.children} 
        //     </a>
        // </Link>
    )
}

export default Button;