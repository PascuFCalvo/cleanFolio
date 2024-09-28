import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <a href={`mailto:${contact.email}`} className='btn-mailto'>
        <span type='button' className='btn btn--outline'>
          Envíame un mail
        </span>
      </a>
      <h5>pascual.fernandez.calvo@gmail.com</h5>
    </section>
  )
}

export default Contact
