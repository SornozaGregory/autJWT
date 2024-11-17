import React, { useState, useEffect } from 'react';
import { getEmployeeById, updateEmployee } from '../api';

const EmployeeDetail = ({ id, token }) => {
    const [employee, setEmployee] = useState(null);
    const [updatedEmployee, setUpdatedEmployee] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        hire_date: '',
        job_id: '',
        salary: 0,
        commission_pct: 0,
        manager_id: '',
        department_id: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            const data = await getEmployeeById(id, token);
            setEmployee(data);
            setUpdatedEmployee({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                phone_number: data.phone_number,
                hire_date: data.hire_date,
                job_id: data.job_id,
                salary: data.salary,
                commission_pct: data.commission_pct,
                manager_id: data.manager_id,
                department_id: data.department_id
            });
        };

        fetchEmployee();
    }, [id, token]);

    const handleUpdate = async () => {
        const { first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id } = updatedEmployee;
        const updatedData = { first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id };
        await updateEmployee(id, updatedData, token);
        alert('Empleado actualizado');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Detalle del Empleado</h2>
            {employee ? (
                <div>
                    <p><strong>Nombre:</strong> {employee.first_name} {employee.last_name}</p>
                    <p><strong>Correo Electrónico:</strong> {employee.email}</p>
                    <p><strong>Teléfono:</strong> {employee.phone_number}</p>
                    <p><strong>Fecha de Contratación:</strong> {employee.hire_date}</p>
                    <p><strong>Cargo:</strong> {employee.job_id}</p>
                    <p><strong>Salario:</strong> ${employee.salary}</p>
                    <p><strong>Comisión:</strong> {employee.commission_pct}%</p>
                    <p><strong>Manager ID:</strong> {employee.manager_id}</p>
                    <p><strong>Departamento ID:</strong> {employee.department_id}</p>

                    <div>
                        <h3>Actualizar Detalles</h3>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Nombre"
                            value={updatedEmployee.first_name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Apellido"
                            value={updatedEmployee.last_name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            value={updatedEmployee.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="Teléfono"
                            value={updatedEmployee.phone_number}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="hire_date"
                            placeholder="Fecha de Contratación"
                            value={updatedEmployee.hire_date}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="job_id"
                            placeholder="Cargo"
                            value={updatedEmployee.job_id}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder="Salario"
                            value={updatedEmployee.salary}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="commission_pct"
                            placeholder="Comisión"
                            value={updatedEmployee.commission_pct}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="manager_id"
                            placeholder="Manager ID"
                            value={updatedEmployee.manager_id}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="department_id"
                            placeholder="Departamento ID"
                            value={updatedEmployee.department_id}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUpdate}>Actualizar</button>
                    </div>
                </div>
            ) : (
                <p>Cargando detalles del empleado...</p>
            )}
        </div>
    );
};

export default EmployeeDetail;
