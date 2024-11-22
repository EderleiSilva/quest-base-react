import './index.css'

const Paragraph = (props) => {
    return (
    <div className='containerParagrapf'>
        <h2 className='tittle'>Desafio 1</h2>
        <p 
            className='capital'
            style={{ backgroundColor: props.backgroundColor, color: props.color }}>
            {props.label}
        </p>
    </div>
    )

}

Paragraph.defaultProps = {
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, inventore velit repudiandae aliquid debitis possimus? Possimus labore consectetur iste vel velit obcaecati, tempora quis, aspernatur maxime quam in, sequi officia.',
    backgroundColor: 'rgb(92, 11, 11)',
    color: '#ffffff',
    capital: 'uppercase'
}



export default Paragraph