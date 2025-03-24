function Button(props) {



    return (
        <button className={props.isHeader ? 'App-header-button' : 'App-button'}
                style={props.color ? {color: props.color} : null}
                onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;