import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">¿Tienes preguntas? Escríbenos</h2>
            <div className="contact__form-container">
                <div className="contact__img">
                    <img src="src/assets/prototipo-celular.png" alt="Imagen de contacto" />
                </div>

                <form
                    action="https://formsubmit.co/kyaramaltamirano@gmail.com"
                    method="POST"
                    className="contact__form"
                >
                    <input type="text" name="nombre" placeholder="Nombre" required />
                    <input type="email" name="correo" placeholder="Correo" required />
                    <input type="tel" name="celular" placeholder="Celular" required />
                    <textarea name="observaciones" placeholder="Escribe tus dudas..." rows="4" />

                <label className="checkbox__label">
                    <input type="checkbox" required /> Acepto términos y condiciones
                </label>

                <input type="hidden" name="_next" value="http://localhost:5173/gracias" />
                <button type="submit" className="btn button">Enviar</button>
                </form>
            </div>
        </section>

    );
};

export default Contact;

