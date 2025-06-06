import Service from "../components/Service";
import Intro from "../components/Intro";
import Discover from "../components/Discover";
import React from "react";
import Navbar from "../components/Navbar";
import SmallBanner from "../components/SmallBanner";
import London from "../components/London";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Head from "next/head";
// import Promotion from '../components/Promotion'

const about = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title> Sobre nosotros | BookEasyVacation.com </title>
        <meta
          name="description"
          content="Discover the easiest way to book flights on BookEasyVacation.com. Find cheap flight booking options and business class flights that suit your travel needs."
        />
      </Head>
      <SmallBanner Bannerhead="Sobre nosotros" />

  <div dangerouslySetInnerHTML={{ __html : HTML}}  className="p-5" />
      <Intro />
      <Discover />
      <Service />
      <London />

      <Blogs />
      {/* <Promotion/> */}
      <Footer />
    </>
  );
};

export default about;



const HTML  = `<h1><strong>Sobre nosotros</strong></h1>
<p><span style="font-weight: 400;">Bienvenido a Punto de Go Fare, tu compa&ntilde;ero de viaje ideal para encontrar las mejores ofertas de vuelos. En puntodegofare.mx, nuestro &uacute;nico objetivo es ofrecerte viajes sencillos y econ&oacute;micos. Por eso, hemos creado una plataforma dedicada a ayudar a viajeros como t&uacute; a comparar y reservar vuelos f&aacute;cilmente.</span></p>
<h3><span style="font-weight: 400;">Qui&eacute;nes somos</span></h3>
<p><span style="font-weight: 400;">Somos un proveedor independiente de servicios de viajes que ofrece acceso a una amplia selecci&oacute;n de billetes de avi&oacute;n nacionales e internacionales. No estamos afiliados a ninguna aerol&iacute;nea en particular, lo que significa que estamos aqu&iacute; para servirle mejor, no a ellos. Nuestro objetivo es conectarle con las tarifas m&aacute;s competitivas y las opciones m&aacute;s flexibles disponibles en diversas aerol&iacute;neas y sistemas de reserva.</span></p>
<h3><span style="font-weight: 400;">Qu&eacute; hacemos</span></h3>
<ul>
<li style="font-weight: 400;"><strong>Compara vuelos al instante</strong><span style="font-weight: 400;">: recopilamos datos de vuelos en tiempo real de diversas fuentes para que encuentres r&aacute;pidamente las opciones que se ajusten a tu presupuesto y horario.</span></li>
<li style="font-weight: 400;"><strong>Precios transparentes:</strong><span style="font-weight: 400;"> sin colaboraciones ocultas ni sobreprecios inesperados. Consulta el precio real antes de reservar.</span></li>
<li style="font-weight: 400;"><strong>Reservas f&aacute;ciles de usar</strong><span style="font-weight: 400;">: nuestra plataforma intuitiva est&aacute; dise&ntilde;ada para simplificar, permiti&eacute;ndote buscar, comparar y reservar vuelos con solo unos clics.</span></li>
<li style="font-weight: 400;"><strong>Equipo centrado en el cliente</strong><span style="font-weight: 400;">: &iquest;Tienes preguntas o cambios? Nuestro equipo dedicado a la atenci&oacute;n al cliente est&aacute; aqu&iacute; para ayudarte con reservas, cancelaciones y mucho m&aacute;s.</span></li>
</ul>
<h3><span style="font-weight: 400;">&iquest;Por qu&eacute; elegir Punto de Go Fare?</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Opciones de vuelo independientes e imparciales</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Proceso de reserva r&aacute;pido y seguro</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Opciones asequibles para todo tipo de viajero</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Compromiso con una atenci&oacute;n al cliente de calidad</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Ya sea que viaje por negocios, vacaciones o una escapada r&aacute;pida, Punto de Go Fare est&aacute; aqu&iacute; para que su viaje sea m&aacute;s c&oacute;modo de principio a fin.</span></p>`