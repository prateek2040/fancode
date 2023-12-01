function Button({children,onClick})
{
    return <button onClick={onClick} className="btn btn-active">{children}</button>
}

export default Button;