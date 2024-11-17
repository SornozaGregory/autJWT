import React, { useEffect, useState } from 'react';
import { getEmployees } from '../api';

const EmployeeList = ({ token }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees(token);
            setEmployees(data);
        };
        fetchEmployees();
    }, [token]);

    // Estilos en línea para la lista de empleados
    const styles = {
        container: {
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            minHeight: "100vh",
        },
        employeeList: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
            marginTop: "20px",
        },
        employeeCard: {
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            cursor: "pointer",
        },
        employeeCardHover: {
            transform: "scale(1.05)",
        },
        cardHeader: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
        },
        cardDetails: {
            fontSize: "16px",
            color: "#555",
        },
    };

    return (
        <div style={styles.container}>
            <h2>Lista de Empleados</h2>
            <div style={styles.employeeList}>
                {employees.map((employee) => (
                    <div
                        key={employee.employee_id}
                        style={styles.employeeCard}
                        onMouseOver={(e) => (e.target.style.transform = styles.employeeCardHover.transform)}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        <div style={styles.cardHeader}>
                            {employee.first_name} {employee.last_name}
                        </div>
                        <div style={styles.cardDetails}>
                            <p><strong>Correo Electrónico:</strong> {employee.email}</p>
                            <p><strong>Teléfono:</strong> {employee.phone_number}</p>
                            <p><strong>Fecha de Contratación:</strong> {new Date(employee.hire_date).toLocaleDateString()}</p>
                            <p><strong>Cargo:</strong> {employee.job_id}</p>
                            <p><strong>Salario:</strong> ${employee.salary}</p>
                            {employee.commission_pct && <p><strong>Comisión:</strong> {employee.commission_pct}%</p>}
                            <p><strong>ID del Gerente:</strong> {employee.manager_id}</p>
                            <p><strong>ID del Departamento:</strong> {employee.department_id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
