import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqres';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        try {
            const response = await reqResApi.get<ReqResListado>('/users', {
                params: { page: paginaRef.current }
            });

            const usuarios = response.data.data;
            if(usuarios.length > 0) {
                setUsuarios(usuarios)
            } else {
                paginaRef.current--;
                alert('No hay más registros');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        } else {
            alert('Esta en la primera página');
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}