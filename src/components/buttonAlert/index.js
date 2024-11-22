import './index.css'

const ButtonAlert = (props) => {
    return(
        <div className='container'>
            <h2 className='tittle'>Desafio 2</h2>
            <button className="btn" onClick={() => alert(`A label desse botão é ${props.label}`)}>{props.label}</button>
        </div>
    )
}

ButtonAlert.defaultProps = {
    label: 'Baixar CV',
}



export default ButtonAlert