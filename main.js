var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Crea, diviertete y aprende')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡La creatividad no tiene límites!')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('<strong>edades!</strong>')
    .pauseFor(2500)
    .start();