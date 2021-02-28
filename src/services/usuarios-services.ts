import { apiFake } from './api'

const usuarioService = {
    setUsuario: () => apiFake.post('/register'),
    getUsuario: () => apiFake.post('/login'),
    setFinance: () => apiFake.post('finance'),
    getFinance: () => apiFake.get('/finance', {
       headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`
       } 
    })
    // clearFinance: () => apiFake.delete(`/finance/${id}`)
}

export default usuarioService