
import classes from './Button.module.css'

export default function Button({children , ...props}){
    return(
        <button style={{fontFamily:"Morana"}} {...props} className={classes.button} >{children}</button>
    )
}