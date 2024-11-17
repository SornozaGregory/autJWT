const API_BASE = 'http://localhost:3000'; // Cambia al URL de tu backend si es diferente.

export const login = async (username, password) => {
    const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const getEmployees = async (token) => {
    const response = await fetch(`${API_BASE}/api/empleados`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};

export const getEmployeeById = async (id, token) => {
    const response = await fetch(`${API_BASE}/api/empleados/${id}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};

export const updateEmployee = async (id, data, token) => {
    const response = await fetch(`${API_BASE}/api/empleados/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deleteEmployee = async (id, token) => {
    const response = await fetch(`${API_BASE}/api/empleados/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};
