
/*
  ELITE INMOBILIARIA
  CONFIGURACIÓN GENERAL
*/

const CONFIG = {
  whatsapp: "50360014234",

  mensajeInicial:
`¡Hola, equipo de Elite Inmobiliaria! 👋🏡

Estoy buscando una oportunidad para adquirir una propiedad y me gustaría conocer las opciones que tienen disponibles.

✨ ¿Podrían brindarme información y asesorarme?

¡Muchas gracias! Espero su respuesta. 😊`
};


// =====================================
// MENÚ PARA CELULARES
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// =====================================
// FUNCIÓN GENERAL DE WHATSAPP
// =====================================

function abrirWhatsApp(mensaje) {
  const numero = CONFIG.whatsapp.replace(/\D/g, "");

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}


// =====================================
// BURBUJA FLOTANTE DE WHATSAPP
// =====================================

const whatsappBubble = document.getElementById("whatsappBubble");

if (whatsappBubble) {
  whatsappBubble.addEventListener("click", event => {
    event.preventDefault();
    abrirWhatsApp(CONFIG.mensajeInicial);
  });
}


// =====================================
// MENSAJES PERSONALIZADOS POR PROPIEDAD
// =====================================

document.querySelectorAll(".property-link").forEach(button => {

  button.addEventListener("click", () => {

    const propiedad = button.dataset.property;

    const mensaje =
`¡Hola, Elite Inmobiliaria! 👋🏡

Me llamó mucho la atención esta propiedad:

📍 *${propiedad}*

Me gustaría conocer más detalles y saber qué oportunidades tienen disponibles.

¿Podrían compartirme información sobre:

📌 Ubicación y cómo llegar.
📐 Medidas del terreno o características de la propiedad.
💰 Precio y opciones disponibles.
📄 Condiciones para realizar la compra.

Estoy interesado(a) en conocer esta oportunidad y dar el siguiente paso.

¡Muchas gracias por su atención! 😊`;

    abrirWhatsApp(mensaje);

  });

});


// =====================================
// FORMULARIO DE CONTACTO
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const datos = new FormData(contactForm);

    const nombre = datos.get("name").trim();
    const telefono = datos.get("phone").trim();
    const interes = datos.get("interest");
    const objetivo = datos.get("goal") || "Todavía estoy explorando opciones";

    const mensaje =
`¡Hola, Elite Inmobiliaria! 👋🏡

Mi nombre es *${nombre}* y estoy interesado(a) en conocer sus opciones inmobiliarias.

✨ *ESTA ES MI CONSULTA*

👤 Nombre: ${nombre}
📱 Teléfono: ${telefono}
🏡 Propiedad de interés: ${interes}
🎯 Lo que busco: ${objetivo}

Me gustaría recibir información detallada para conocer las opciones disponibles y evaluar cuál se adapta mejor a mis planes.

¿Podrían ayudarme con los detalles, precios y ubicación?

¡Muchas gracias por su atención! Será un gusto conversar con ustedes. 😊`;

    abrirWhatsApp(mensaje);

  });

}


// =====================================
// AÑO AUTOMÁTICO DEL SITIO
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
