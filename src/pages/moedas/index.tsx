import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMoedaRequest } from '../../store/ducks/moedas/action'

const Moedas = () => {

    const moeda = useSelector((state:any) => state.reducerMoeda.moeda);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMoedaRequest())
    },[dispatch])

    return (
        <div>
            {

                moeda?.map((coin: any) => (
                    <div key={coin.name}>

                        <p>{coin.country_name} - {coin.country_code}</p>
                        <p>{coin.currency_code}</p>
                        <p>Nome da Moeda: {coin.name}</p>
                        <p>{coin.symbol}</p>

                    </div>
                ))
            }

        </div>
    )
};

export default Moedas;