import styles from "./ContactPage.module.css";
import { useForm} from '@formspree/react';

function ContactPage() {

  const [state, handleSubmit] = useForm("xeqvvrkn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

    return (
        <body>
        <div className={styles.container}>
          <span className={styles.bigCircle}></span>
          <img src="img/shape.png" className={styles.square} alt="" />
          <div className={styles.form}>
            <div className={styles.contactInfo}>
              <h3 className={styles.title}>Let's get in touch</h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>
    
              <div className={styles.info}>
                <div className={styles.information}>
                  <img src="img/location.png" className={styles.icon} alt="" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className={styles.information}>
                  <img src="img/email.png" className={styles.icon} alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className={styles.information}>
                  <img src="img/phone.png" className={styles.icon} alt="" />
                  <p>123-456-789</p>
                </div>
              </div>
    
              <div className={styles.socialMedia}>
                <p>Connect with us :</p>
                <div className={styles.socialIcons}>
                  <a href="w">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="w">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="w">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="w">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
    
            <div className={styles.contactForm}>
              <span className={`${styles.circle} ${styles.one}`}></span>
              <span className={`${styles.circle} ${styles.two}`}></span>
    
              <form  onSubmit={handleSubmit} autocomplete="on">
                <h3 className={styles.title}>Contact us</h3>
                <div className={styles.inputContainer}>
                  <input type="text" name="name" className={`${styles.input} ${styles.focus}`} placeholder="Name" />
                  
                </div>
                <div className={styles.inputContainer}>
                  <input type="email" name="email" className={styles.input}  placeholder="E-mail"/>

                </div>
                <div className={styles.inputContainer}>
                  <input type="tel" name="phone" className={styles.input} placeholder="Phone"/>

                </div>
                <div className={`${styles.inputContainer} ${styles.textarea}`}>
                  <textarea id="message" name="message" placeholder="Message" className={styles.input}></textarea>

                </div>

                <button type="submit" disabled={state.submitting} className={styles.btn}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
  
  export default ContactPage
;