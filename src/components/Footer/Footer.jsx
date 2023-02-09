import React from 'react';
import payment from '../../img/payment.svg';
import shipping from '../../img/shipping.svg';
import security from '../../img/protected.svg'
import Card from './card';

const Footer = () => {
  return (
    <div className='flex flex-col justify-between pt-16'>
      <div className='flex'>
        <Card
          title='Paga con Mercado Pago'
          img={payment}
          desc='Usa Mercado Pago, la solución de Mercado Libre para pagar de forma segura y con el medio de pago que prefieras.'
          link='Cómo pagar con Mercado Pago'
        />
        <Card
          title='Recibe tu compra'
          img={shipping}
          desc='Elige Mercado Envíos y haz el seguimiento de tu compra hasta que llegue a tus manos.'
          link='Cómo recibir tu compra'
        />
        <Card
          title='Seguridad, de principio a fin'
          img={security}
          desc='¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido'
          link='Cómo te protegemos'
        />
      </div>
      <p className='text-gray-400 mt-5 p-7 text-xs'>Copyright © 1999-2023 MercadoLibre Ecuador Cia. Ltda.</p>
    </div>
  );
}

export default Footer;
