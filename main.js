//console.log("Hola mundo! desde la consola");
//comentario
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Estudiante Lic. Bioingeniería Médica | Desarrolladora Frontend Jr.')
    .pauseFor(2500)//ms
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();