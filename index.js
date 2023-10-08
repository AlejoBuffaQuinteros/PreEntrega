function BIENVENIDA(){
   var bienvenido = 'Te damos la bienvenida '
   let nombre = prompt('Ingresa tu nombre')
   alert(bienvenido + nombre)
}
BIENVENIDA()

function ElegirProducto(){
   let producto = prompt ('Ingresa el producto que deseas (Mate o Termo)')
      if(producto == 'mate'){
         var opcion=confirm('Seleccionaste mate.Deseas confirmar la compra?')
            if (opcion === false){
               alert('Muchas gracias por tu visita')
            }
            else{
               let direccion=prompt("Ingrese su dirección para poder realizar el envío del pedido")
               alert("Su artículo será enviado a:"+ direccion)
               alert("Muchas gracias por su compra")
            }
      } 
      else{
         var opcion=confirm('Seleccionaste termo.Deseas confirmar la compra?')
             if (opcion === false){
               alert('Muchas gracias por tu visita')
            }
            else{
               let direccion=prompt("Ingrese su dirección para poder realizar el envío del pedido")
               alert("Su artículo será enviado a:"+ direccion)
               alert("Muchas gracias por su compra")
            }
      }
}

ElegirProducto()

