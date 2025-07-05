
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Web de Ventas en 24 Horas" subheadline="Digitaliza tu negocio rápido con soporte 24/7 para aumentar tus ventas online sin esfuerzo." cta1="Comienza Ahora" />
<How step1Title="Inicia Rápido" step1Desc="Comparte tu visión en minutos." step2Title="Compromiso Total" step2Desc="Creamos tu web en 24 horas." step3Title="Innovación Constante" step3Desc="Soporte 24/7, vende más online." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="WebGo crea sitios web efectivos, sin esfuerzo para ti, optimizados para ventas online." beneficiotitulo1="Gestión Sencilla" beneficio1="Ahorra tiempo con nuestro soporte integral." beneficiotitulo2="Ventas Aumentadas" beneficio2="Transforma recomendaciones en ventas digitales." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Rapidez, compromiso, innovación para vender online sin complicaciones." services={[{"name":"Creación Express","icon":"bolt","description":"Webs de ventas en menos de 24 horas."},{"name":"Optimización SEO","icon":"magnifying-glass","description":"Atrae clientes con búsqueda orgánica."},{"name":"Gestión de Contenido","icon":"pencil","description":"Contenido atractivo y relevante."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu web."},{"name":"Análisis de Tráfico","icon":"chart-bar","description":"Entiende y mejora tus visitas online."},{"name":"Marketing Digital","icon":"bullhorn","description":"Estrategias para aumentar tu alcance."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en impresionantes realidades digitales con excelencia comprobada." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender en línea si solo tengo ventas por recomendación?","respuesta":"WebGo transforma tu negocio tradicional en una tienda online moderna y eficiente. Nos encargamos de todo para que puedas empezar a vender por Internet sin esfuerzo, conectando con clientes nuevos y aumentando tus ventas rápidamente."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me puede apoyar WebGo?","respuesta":"Con WebGo, no necesitas preocuparte por manejar tu propio sitio web. Nuestro servicio es rápido y comprometido, así que nos ocupamos de todo el proceso, desde la configuración hasta el mantenimiento, permitiéndote concentrarte en otras áreas de tu negocio."},{"pregunta":"¿Qué tan rápido puedo ver resultados con WebGo?","respuesta":"WebGo se enfoca en la rapidez y la innovación para llevar tu negocio online lo más rápido posible. Muchos de nuestros clientes comienzan a ver un aumento en sus ventas en pocas semanas, gracias a nuestras estrategias digitales efectivas."},{"pregunta":"¿Qué beneficios obtendré al digitalizar mis ventas con WebGo?","respuesta":"Al digitalizar tus ventas con WebGo, expandirás tu alcance a más clientes y aumentarás tus ingresos. Nuestro enfoque innovador asegura que tu negocio esté a la vanguardia de las tendencias digitales, impulsando el crecimiento y la sostenibilidad a largo plazo."},{"pregunta":"¿WebGo ofrece soporte continuo para mi tienda en línea?","respuesta":"Sí, WebGo proporciona soporte continuo para asegurar que tu tienda en línea funcione sin problemas. Nuestro compromiso es total, así que siempre estaremos ahí para ayudarte a resolver cualquier problema y optimizar tu presencia online."}]} />
<BookAppointment 
                      heading="Desbloquea Tu Crecimiento Digital" 
                      description="Transforma tus recomendaciones en ventas online con rapidez y compromiso. Innovamos para ti, contáctanos ahora."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
