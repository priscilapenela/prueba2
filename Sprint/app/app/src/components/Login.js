import React from 'react';
import styles from './Login.module.css'; 
import LoginForm from './LoginForm';


function Login() {
  return (
    <div className={styles.login_container}>
      <div className={styles.fotologin}> <img src="/assets/feliz.jpg" alt="Imagen de un usuario del banco realizando un pago desde su casa" /> </div>
      <div className={styles.login_container2}>
        <div className={styles.block}>
        <div className={styles.login}>
        <h2>Bienvenido a BANK-ITO</h2>
        <p>Maneja tus cuentas, transfiere tu dinero de forma segura, disponibilidad todos los días, justo desde aquí.</p>
        </div>
        </div>
        <div className={styles.block}>
        <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;