// Cierra el menú hamburguesa al hacer clic fuera del menú o en el botón hamburguesa
    $(document).on("click", function(event) {
        var $menu = $(".navbar-collapse");
        var $trigger = $(".navbar-toggler");

        if (!$menu.is(event.target) && $menu.has(event.target).length === 0 && !$trigger.is(event.target)) {
            $menu.collapse("hide");
        }
    });


/* Pone en mayusculas el campo elegido. */
function mayus(e) {
    e.value = e.value.toUpperCase();
}