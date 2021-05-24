import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        const { id, avatar, first_name, email } = usuario;
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} style={{ width: 40, borderRadius: 100 }} />
                </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(renderItem)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anterior
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    )
}