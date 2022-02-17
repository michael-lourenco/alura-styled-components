import React from 'react';
import { Botao, Box } from '../../Components/UI';
import { extratoLista } from '../../info';

 const Extrato = () => {
    return (
        <Box>
            <h2>Extrato</h2>
            {
                extratoLista.updates.map(({id, type, from, value, date}) => {
                    return (
                        <div key={id}>
                            <div>{type}</div>
                            <div>{from}</div>
                        </div>
                    )
                })
            }
            <Botao>Ver mais</Botao>
        </Box>
    )
}

export default Extrato;