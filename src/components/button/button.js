import './button.css'

function buttonAlert(props){
    alert(`A label desse botão é ${props.label}`)
}

const Button = (props) => {
    return(
        <div className='container'>
            <h2 className='tittle'>Desafio 2</h2>
            <button className="btn" onClick={() => buttonAlert(props)}>{props.label}</button>
        </div>
    )
}

Button.defaultProps = {
    label: 'Baixar CV',
}



export default Button