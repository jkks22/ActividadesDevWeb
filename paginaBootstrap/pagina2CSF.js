$(document).ready(function () {

    // Estados disponibles para la imagen al hacer click
    const states = [
        {
            label: "Oculto (fadeOut)",
            action: function ($img) { $img.fadeOut(600); },
        },
        {
            label: "Visible (fadeIn)",
            action: function ($img) { $img.fadeIn(600); },
        },
        {
            label: "Oculto (hide)",
            action: function ($img) { $img.hide(); },
        },
        {
            label: "Visible (show)",
            action: function ($img) { $img.show(); },
        },
    ];

    let control = 0;
    const $img      = $("#tamaid");
    const $status   = $("#statusText");
    const $buttons  = $(".btn-state");

    // Actualiza el indicador de estado y el botón activo
    function updateUI() {
        const nextIndex = (control + 1) % states.length;
        $status.text(states[nextIndex].label);

        $buttons.removeClass("active");
        $("#btn" + control).addClass("active");
    }

    // Click en la imagen — avanza al siguiente estado
    $(document).on("click", "#tamaid", function () {
        states[control].action($img);
        control = (control + 1) % states.length;
        updateUI();
    });

    // Los botones del panel también ejecutan su estado directamente
    $buttons.each(function (index) {
        $(this).on("click", function () {
            states[index].action($img);
            control = (index + 1) % states.length;
            updateUI();
        });
    });

    // Estado inicial
    updateUI();
});