
// si se trabaja con vite se debe instalar las prop-types con comando yarn add prop-types si es con cra es automático
import PropTypes from 'prop-types'; 
   // const newMessage = {
//     message: 'Hola mundo',
//     title: 'Lufra'
// }


export const FirstApp = ({title, subtitle, name}) => {
    
    // console.log(props);
    // if (!title) {
    //     throw new Error('El title no existe');
    // }

  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    {/* <code>{JSON.stringify(newMessage)}</code> */}
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  // isRequired que es requerido 
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

// las default entran antes que las props de arriba
FirstApp.defaultProps = {
  name: 'Lufra',
  subtitle: 'No hay subtitulo',
  // title: 'No hay titulo',
}
