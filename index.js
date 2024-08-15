class Libro {
    constructor(id, nombre, autor, editorial, año, precio,vendido) {
      this.id = id;
      this.nombre = nombre;
      this.autor = autor;
      this.editorial = editorial;
      this.año = año;
      this.precio = precio;  
      this.vendido = vendido;    
    }
    precioMasIva() {
      const IVA=x=>x*0.19 //IVA en colombia    
      let precioFinal = IVA(this.precio)+this.precio;
      return precioFinal
    }
  }
    let precioFinal=0
    const envio=5000
    const libro1 = new Libro( 1,"100 años de soledad","Gabo","norma", 2016, 80000,false);
    const libro2= new Libro( 2,"Akelerre","Mario Mendoza","planeta", 2000, 40000,false);
    const libro3= new Libro( 3,"EL problema de los 3 cuerpos","Cixin Liu","PRH", 2023, 49000,false);
    const libro4= new Libro( 4,"Incendiario","Itiel Arroyo","Vida", 2023, 78000,false);
    const libro5= new Libro( 5,"Viaje al centro de la tierra","Jules Verne","Alianza", 2001, 39000,false);
    const libros=[libro1,libro2,libro3,libro4,libro5]
    const carrito=[]  
    
  function imprimirLibros(libros){
    console.log('LIBROS DISPONIBLES:')
    for(let y=0;y<libros.length;y++){
    console.log(libros[y])
    }
  }
  
  function comprarLibro() {  
    imprimirLibros(libros)
     let cantidad=parseInt(prompt('¿Cuantos libros quieres comprar?'))
     if(cantidad<=libros.length){   
     for(let i=1;i<=cantidad;i++){    
      let lb=parseInt(prompt('¿Que libro deseas comprar? Digita el id'))
      switch(lb){
        case 1:
          console.log('¡Felicidades!, agregaste al carrito '+libro1['nombre']+' y el precio final con IVA es '+libro1.precioMasIva()+' pesos colombianos')
          carrito.push(libro1)
          libro1['vendido']=true           
          break;
        case 2:
          console.log('¡Felicidades!, agregaste al carrito '+libro2['nombre']+' y el precio final con IVA es '+libro2.precioMasIva()+' pesos colombianos')
          carrito.push(libro2)
          libro2['vendido']=true               
          break;
        case 3:
          console.log('¡Felicidades!, agregaste al carrito '+libro3['nombre']+' y el precio final con IVA es '+libro3.precioMasIva()+' pesos colombianos')
          carrito.push(libro3)
          libro3['vendido']=true               
          break;
        case 4:
          console.log('¡Felicidades!, agregaste al carrito '+libro4['nombre']+' y el precio final con IVA es '+libro4.precioMasIva()+' pesos colombianos')
          carrito.push(libro4)
          libro4['vendido']=true               
          break;
        case 5:
          console.log('¡Felicidades!, agregaste al carrito '+libro5['nombre']+' y el precio final con IVA es '+libro5.precioMasIva()+' pesos colombianos')
          carrito.push(libro5)
          libro5['vendido']=true               
          break;
        default:
          alert('No existe o no puedes comprar ese libro')
          break;
      }
     }
     console.log('Tienes en el carrito los siguientes libros: ')
     for(let z=0;z<carrito.length;z++){
      console.log(carrito[z])
      precioFinal+=carrito[z].precioMasIva()  
      }   
      console.log('El precio final de los libros mas el envio (5000) es de '+(precioFinal+envio)+' pesos colombianos')
    }else{
      alert('Ingresa un numero de libros disponibles')
    }
  }
  
  function venderLibro(){  
    let nombre,autor,editorial,año,precio=0
    let vender =parseInt(prompt('Ingresa cuantos libros quieres vender'))
    if(vender>=1){ 
      for(let i=1;i<=vender;i++){ 
      nombre=prompt('Ingresa el nombre del libro '+i)
      autor=prompt('Ingresa el autor del libro '+i)
      editorial=prompt('Ingresa la editorial del libro '+i)
      año=parseInt(prompt('Ingresa el año de publicacion del libro '+i))
      precio=parseFloat(prompt('Ingresa el precio (sin IVA) del libro '+i))
      let libroN = new Libro( i+5,nombre,autor,editorial, año, precio,false);
      libros.push(libroN)
      alert('¡Felicidades! Tu libro ha sido agregado exitosamente')
    }  
    imprimirLibros(libros)
  }else{alert('No quieres vender ningun libro, bye')}
  }
  
  function borrarLibro(){
    //imprimirLibros(libros)
    let borrar =parseInt(prompt('Ingresa el id del libro que deseas borrar'))
    if(borrar>=1){
    for(const lib of libros){
      if(borrar===lib['id']){
        libros.splice(borrar-1,1)
      }
    }
    alert('¡Felicidades! El libro ha sido borrado exitosamente')
    imprimirLibros(libros)
  }else{alert('Libro no existe')}
    
  }
  let opcion=prompt("¡BIENVENIDO A BOOKEND!\n\n Ingresa tu nombre:")
  do{
     opcion = parseInt(prompt(    
        "Escoge una opcion: \n\n"+
        "1. Comprar libro  \n" +
        "2. Vender libro  \n" +
        "3. Borrar libro  \n" +
        "4. Salir"
    ));
  
    switch (opcion) {
      case 1:      
        comprarLibro();
        break;
      case 2:
        venderLibro();
        break;
      case 3:
        borrarLibro();
        break;
      default:
        break;       
    }
  }while(opcion!==4)
  