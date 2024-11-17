import React, { useState } from 'react';
import { login } from '../api';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await login(username, password);
        if (data.token) {
            setToken(data.token);
            alert('Login exitoso');
        } else {
            alert(data.message || 'Error al iniciar sesión');
        }
    };

    // Estilos en línea para el formulario de login
    const styles = {
        body: {
            fontFamily: "'Arial', sans-serif",
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: 0,
        },
        loginContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        },
        loginBox: {
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "30px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
        },
        heading: {
            marginBottom: "20px",
            fontSize: "24px",
            color: "#333",
        },
        inputGroup: {
            marginBottom: "15px",
            textAlign: "left",
        },
        inputField: {
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
            color: "#333",
        },
        inputFieldFocus: {
            borderColor: "#3e0d86",
            outline: "none",
        },
        btnSubmit: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#3e0d86",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
        btnSubmitHover: {
            backgroundColor: "#5f2bc0",
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.loginContainer}>
                <div style={styles.loginBox}>
                    <h2 style={styles.heading}>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.inputField}
                            />
                        </div>
                        <button
                            type="submit"
                            style={styles.btnSubmit}
                            onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnSubmitHover.backgroundColor)}
                            onMouseOut={(e) => (e.target.style.backgroundColor = styles.btnSubmit.backgroundColor)}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
