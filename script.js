//alert("Hola Undo <3");


let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #D9DDDC;"><strong>Leslie Muñiz </strong></span>')
  .pauseFor(300)
  .deleteAll()
  .typeString('<span style="color: #D7BFDC;">Desarrolladora FRONTEND JR</span>')
  .pauseFor(1000)
  .start();