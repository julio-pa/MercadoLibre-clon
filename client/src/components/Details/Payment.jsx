import React from 'react';
import visa from '../../img/visa.svg';
import mastercard from '../../img/mastercard.svg'
import visaDebito from '../../img/visaDebito.svg';
import mastercardDebito from '../../img/mastercardDebito.svg'

const Payment = () => {
  return (
    <div className='w-full border border-solid border-gray-200 rounded-md p-3 mb-3'>
      <h4 className='my-3 text-xl'>Medios de pago</h4>
      <h6>Tarjetas de crédito</h6>
      <p className='text-sm text-gray-400 mt-1 w-3/5'>¡Cuotas sin interés con bancos seleccionados!</p>
      <div className='flex gap-1 mt-3'>
        <img className='w-12 h-9 object-contain' src={visa} alt='visa' />
        <img className='w-14 h-9 object-contain' src={mastercard} alt='mastercard' />
      </div>
      <p className='mt-3'>Tarjetas de débito</p>
      <div className='flex gap-4 mt-2'>
        <img className='w-18 h-9 object-contain' src={visaDebito} alt='visa' />
        <img className='w-16 h-9 object-contain' src={mastercardDebito} alt='mastercard' />
      </div>
      <p className='my-4 text-blue-400 text-sm'>Conoce otros medios de pago</p>
    </div>
  );
}

export default Payment;
