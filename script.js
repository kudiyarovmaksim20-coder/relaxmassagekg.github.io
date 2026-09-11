const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const service = form.querySelector("select").value;

    if (!name || !phone || service === "Выберите услугу") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const message =
        `Здравствуйте! Хочу записаться на массаж.%0A%0A` +
        `👤 Имя: ${name}%0A` +
        `📞 Телефон: ${phone}%0A` +
        `💆 Услуга: ${service}`;

    const whatsappNumber = "996558887747";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
});