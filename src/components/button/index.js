function Button({children, onClick, data, classNames})
{

    return <button onClick={()=>{
        onClick(data && data)
    }} className={classNames.join(' ')}>{children}</button>
}

export default Button;