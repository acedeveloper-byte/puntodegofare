import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import SmallBanner from "../components/SmallBanner";
import Navbar from "../components/Navbar";

const Terms = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />
      <SmallBanner Bannerhead="Terms & Conditions" />
          <Head>
              <title>Términos y condiciones</title>

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
export default Terms;


const HTML  = `<h1><strong>T&eacute;rminos y condiciones</strong></h1>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Bienvenido a Punto de Go Fare (puntodegofare.mx). Al utilizar nuestro sitio web y nuestros servicios de reserva, acepta los siguientes t&eacute;rminos y condiciones. Los siguientes t&eacute;rminos y condiciones. Aseg&uacute;rese de leerlos detenidamente antes de usar el sitio.</span></p>
<h3><span style="font-weight: 400;">1. Sobre nosotros</span></h3>
<p><span style="font-weight: 400;">Punto de Go Fare es una plataforma independiente que ofrece servicios de b&uacute;squeda y reserva de vuelos. No estamos afiliados a ninguna aerol&iacute;nea y todas las reservas est&aacute;n sujetas a las normas, pol&iacute;ticas y disponibilidad de cada aerol&iacute;nea.</span></p>
<h3><span style="font-weight: 400;">2. Uso del sitio web</span></h3>
<p><span style="font-weight: 400;">Al acceder o utilizar nuestro sitio web, usted acepta:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Utilice Punto de Go Fare &uacute;nicamente para fines personales y no comerciales.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Proporcionar informaci&oacute;n precisa, actual y completa al realizar una reserva.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">No utilizar el sitio web para ninguna actividad ilegal o fraudulenta.</span></li>
</ul>
<p><span style="font-weight: 400;">Nos reservamos el derecho de suspender o cancelar su acceso si detectamos cualquier uso indebido o comportamiento sospechoso.</span></p>
<h3><span style="font-weight: 400;">3. Reservas y pagos</span></h3>
<ul>
<li style="font-weight: 400;">
<h3><span style="font-weight: 400;">Todas las reservas realizadas a trav&eacute;s de puntodegofare.mx est&aacute;n sujetas a disponibilidad.</span></h3>
</li>
<li style="font-weight: 400;">
<h3><span style="font-weight: 400;">Podemos cobrar una tarifa de servicio por las reservas, que se mostrar&aacute; claramente antes del pago.</span></h3>
</li>
<li style="font-weight: 400;">
<h3><span style="font-weight: 400;">El pago debe completarse a trav&eacute;s de nuestra pasarela de pago segura para confirmar la reserva.</span></h3>
</li>
</ul>
<h3><span style="font-weight: 400;">4. Cancelaciones y reembolsos</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Las pol&iacute;ticas de cancelaci&oacute;n y reembolso var&iacute;an seg&uacute;n la aerol&iacute;nea. Nos regimos por los t&eacute;rminos de la aerol&iacute;nea y podr&iacute;an aplicarse cargos adicionales por procesar cambios o cancelaciones.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Punto de Go Fare no garantiza reembolsos para boletos no reembolsables ni en casos en que la aerol&iacute;nea los rechace.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">El procesamiento de un reembolso puede tardar entre 7 y 21 d&iacute;as h&aacute;biles, seg&uacute;n la aerol&iacute;nea y el m&eacute;todo de pago.</span></li>
</ul>
<h3><span style="font-weight: 400;">5. Contenido de terceros</span></h3>
<p><span style="font-weight: 400;">Nuestro sitio web incluye informaci&oacute;n proporcionada por terceros (aerol&iacute;neas, agregadores de viajes). Si bien nos comprometemos a garantizar la precisi&oacute;n, Punto de Go Fare no es responsable de errores, informaci&oacute;n desactualizada o cambios realizados por proveedores externos.</span></p>
<h3><span style="font-weight: 400;">6. Limitaci&oacute;n de responsabilidad</span></h3>
<p><span style="font-weight: 400;">Punto de Go Fare no se responsabiliza de retrasos, cancelaciones, cambios de horario ni problemas de servicio causados por aerol&iacute;neas u otros proveedores de viajes. Actuamos &uacute;nicamente como intermediarios entre usted y la aerol&iacute;nea.</span></p>
<h3><span style="font-weight: 400;">7. Propiedad intelectual</span></h3>
<p><span style="font-weight: 400;">Todo el contenido de este sitio, incluyendo texto, gr&aacute;ficos, logotipos y dise&ntilde;o, es propiedad de Punto de Go Fare o de sus proveedores de contenido y no puede copiarse ni reutilizarse sin autorizaci&oacute;n escrita.</span></p>
<h3><span style="font-weight: 400;">8. Privacidad</span></h3>
<p><span style="font-weight: 400;">Debe leer nuestra Pol&iacute;tica de Privacidad antes de utilizar el sitio, que explica c&oacute;mo Punto de Go Fare recopila, utiliza y protege su informaci&oacute;n personal.</span></p>
<h3><span style="font-weight: 400;">9. Modificaciones</span></h3>
<p><span style="font-weight: 400;">Punto de Go Fare se reserva el derecho de actualizar estos T&eacute;rminos de Servicio cuando sea necesario.. Publicaremos todas las modificaciones en esta p&aacute;gina y ser&aacute;n efectivas de inmediato.</span></p>
<h3><span style="font-weight: 400;">10. Cont&aacute;ctenos</span></h3>
<p><span style="font-weight: 400;">Si tiene alguna pregunta sobre estos T&eacute;rminos y Condiciones, cont&aacute;ctenos en:</span></p>
<p><span style="font-weight: 400;">Correo electr&oacute;nico: XXXXX</span></p>
<p><br /><br /><br /><br /></p>`
