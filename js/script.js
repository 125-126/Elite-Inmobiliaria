
/*
  CONFIGURACIÓN GENERAL
  Sustituye estos datos por los enlaces y el número reales.
*/

const CONFIG = {
  whatsapp: "50300000000",
  mensajeInicial: "Hola, deseo recibir información sobre sus propiedades."
};

// Abrir y cerrar menú móvil
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

// Preparar enlace de WhatsApp
function abrirWhatsApp(mensaje) {
  if (CONFIG.whatsapp === "50300000000") {
    alert("Primero debes colocar tu número real de WhatsApp en el archivo js/script.js");
    return;
  }

  const numero = CONFIG.whatsapp.replace(/\D/g, "");
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// Burbujas flotantes de WhatsApp
const whatsappBubble = document.getElementById("whatsappBubble");

if (whatsappBubble) {
  whatsappBubble.addEventListener("click", event => {
    event.preventDefault();
    abrirWhatsApp(CONFIG.mensajeInicial);
  });
}

// Botones de cada propiedad
document.querySelectorAll(".property-link").forEach(button => {
  button.addEventListener("click", () => {
    const propiedad = button.dataset.property;

    const mensaje =
      `Hola, deseo recibir información sobre: ${propiedad}. ` +
      "Me gustaría conocer el precio, las medidas, la ubicación y las condiciones disponibles.";

    abrirWhatsApp(mensaje);
  });
});

// Formulario de contacto
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const datos = new FormData(contactForm);

    const nombre = datos.get("name").trim();
    const telefono = datos.get("phone").trim();
    const interes = datos.get("interest");
    const objetivo = datos.get("goal") || "No especificado";
    const mensajeExtra = datos.get("message").trim() || "Sin mensaje adicional";

    const mensaje =
      `Hola, soy ${nombre}.\n\n` +
      `Mi teléfono: ${telefono}\n` +
      `Propiedad de interés: ${interes}\n` +
      `Mi objetivo: ${objetivo}\n` +
      `Mensaje: ${mensajeExtra}\n\n` +
      "Me gustaría recibir más información. Gracias.";

    abrirWhatsApp(mensaje);
  });
}

// Año automático en el pie de página
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
