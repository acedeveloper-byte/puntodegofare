import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import SmallBanner from "../components/SmallBanner";
import Navbar from "../components/Navbar";

const Privacy = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   fetch(
  //     `${host}seo/privacy/get-privacy-policy/${siteid}/privacy_policy`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setData(response))
  //     .catch((err) => console.error(err));
  // }, []);

  // const { response, baseResponse } = data;

  return (
    <>
      <Navbar />
      <SmallBanner Bannerhead="Términos y condiciones" />
   
          {" "}
          <Head>
              <title>Política de privacidad</title>
            {/* <meta name="description" content={response.metaDescription} />
            <meta name="title" content={response.metaTitle} />
            <meta name="keyword" content={response.metaKeywords} /> */}
          </Head>
          <div className="container about-paragraph mt-5">
            <div
              className="data-about"
              dangerouslySetInnerHTML={{ __html: HTML }}
            />
          </div>
 

      <Footer />
    </>
  );
};
export default Privacy;


const HTML  = `<p><strong>Pol&iacute;tica de privacidad</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">En Punto de Go Fare (puntodegofare.mx), nos esforzamos por proteger su privacidad y salvaguardar su informaci&oacute;n personal. Esta Pol&iacute;tica de Privacidad explica c&oacute;mo recopilamos, usamos, compartimos y protegemos los datos que usted proporciona al usar nuestro sitio web y nuestros servicios.</span></p>
<h3><span style="font-weight: 400;">1. Qui&eacute;nes somos</span></h3>
<p><span style="font-weight: 400;">Punto de Go Fare es una plataforma de viajes independiente que ofrece servicios de reserva de vuelos. No estamos afiliados a ninguna aerol&iacute;nea y operamos exclusivamente para ayudar a los usuarios a buscar, comparar y reservar billetes de avi&oacute;n en l&iacute;nea.</span></p>
<h3><span style="font-weight: 400;">2. Informaci&oacute;n que recopilamos</span></h3>
<p><span style="font-weight: 400;">Al utilizar nuestros servicios, podemos recopilar los siguientes tipos de informaci&oacute;n:</span></p>
<h4><span style="font-weight: 400;">Informaci&oacute;n personal:</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Nombre completo</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Correo electr&oacute;nico</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">N&uacute;mero de tel&eacute;fono</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Direcci&oacute;n de facturaci&oacute;n</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">N&uacute;mero de pasaporte o documento de identidad (si la aerol&iacute;nea lo requiere)</span></li>
</ul>
<h4><span style="font-weight: 400;">Informaci&oacute;n de pago:</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Datos de la tarjeta de cr&eacute;dito/d&eacute;bito (procesados de forma segura a trav&eacute;s de pasarelas de pago externas)</span></li>
</ul>
<h4><span style="font-weight: 400;">Detalles del viaje:</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Preferencias de vuelo</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Fechas de viaje</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ciudades de destino</span></li>
</ul>
<p>&nbsp;</p>
<h4><span style="font-weight: 400;">Datos recopilados autom&aacute;ticamente:</span></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Direcci&oacute;n IP</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Tipo y versi&oacute;n del navegador</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Informaci&oacute;n del dispositivo</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cookies y datos de uso</span></li>
</ul>
<h3><span style="font-weight: 400;">3. C&oacute;mo usamos su informaci&oacute;n</span></h3>
<p><span style="font-weight: 400;">Usamos su informaci&oacute;n para:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Procesar b&uacute;squedas y reservas de vuelos</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Enviar confirmaciones de reservas y actualizaciones de viajes</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Brindar atenci&oacute;n al cliente</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Mejorar nuestro sitio web y nuestros servicios</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cumplir con nuestras obligaciones legales</span></li>
</ul>
<p><span style="font-weight: 400;">No vendemos su informaci&oacute;n personal a terceros.</span></p>
<h3><span style="font-weight: 400;">4. Compartir su informaci&oacute;n</span></h3>
<p><span style="font-weight: 400;">Podemos compartir su informaci&oacute;n con:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Aerol&iacute;neas o sistemas de reservas para completar sus reservas</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Proveedores de servicios de pago para procesar transacciones de forma segura</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Herramientas de atenci&oacute;n al cliente para ayudarle con sus consultas</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Autoridades gubernamentales o legales, si as&iacute; lo exige la ley</span></li>
</ul>
<h3><span style="font-weight: 400;">5. Cookies y seguimiento</span></h3>
<p><span style="font-weight: 400;">Nuestro sitio utiliza cookies para:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Mejorar la experiencia del usuario</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Analizar el tr&aacute;fico del sitio web</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Guardar las preferencias del usuario</span></li>
</ul>
<p><span style="font-weight: 400;">Puede administrar la configuraci&oacute;n de cookies a trav&eacute;s de su navegador en cualquier momento.</span></p>
<ol start="6">
<li><span style="font-weight: 400;"> Seguridad de Datos</span></li>
</ol>
<p><span style="font-weight: 400;">Nos tomamos muy en serio la seguridad de sus datos e implementamos medidas de seguridad est&aacute;ndar del sector (encriptaci&oacute;n, servidores seguros, acceso limitado) para proteger su informaci&oacute;n personal.</span></p>
<p><span style="font-weight: 400;">Sin embargo, ning&uacute;n m&eacute;todo de transmisi&oacute;n por internet es 100 % seguro. Si bien nos esforzamos por aplicar las mejores pr&aacute;cticas, no podemos garantizar una seguridad absoluta.</span></p>
<h3><span style="font-weight: 400;">7. Sus Derechos</span></h3>
<p><span style="font-weight: 400;">Tiene derecho a:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Acceder a los datos personales que conservamos sobre usted</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Solicitar correcciones o actualizaciones</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Solicitar la eliminaci&oacute;n de sus datos (sujeto a la legislaci&oacute;n aplicable)</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Retirar el consentimiento para recibir comunicaciones de marketing</span></li>
</ul>
<p><span style="font-weight: 400;">Para ejercer cualquiera de estos derechos, cont&aacute;ctenos en XXXX.</span></p>
<h3><span style="font-weight: 400;">8. Enlaces externos</span></h3>
<p><span style="font-weight: 400;">Nuestro sitio web puede contener enlaces a sitios web de terceros. No nos hacemos responsables de las pr&aacute;cticas de privacidad de estos sitios. El usuario deber&aacute; revisar sus pol&iacute;ticas de privacidad antes de utilizar los servicios.</span></p>
<h3><span style="font-weight: 400;">9. Cambios a esta Pol&iacute;tica</span></h3>
<p><span style="font-weight: 400;">Punto de Go Fare puede actualizar esta pol&iacute;tica peri&oacute;dicamente. Cualquier cambio se publicar&aacute; en esta p&aacute;gina junto con los t&eacute;rminos revisados.</span></p>
<h3><span style="font-weight: 400;">10. Cont&aacute;ctenos</span></h3>
<p><span style="font-weight: 400;">Si tiene alguna pregunta sobre nuestra Pol&iacute;tica de privacidad, no dude en contactarnos:</span></p>
<p><span style="font-weight: 400;">Correo electr&oacute;nico: XXXX</span></p>
<p><br /><br /><br /></p>`