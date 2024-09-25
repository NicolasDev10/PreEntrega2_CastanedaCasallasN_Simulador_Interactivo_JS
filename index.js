class Libro {
    constructor(id, nombre, autor, editorial,precio, año ,vendido) {
      this.id = id;
      this.nombre = nombre;
      this.autor = autor;
      this.editorial = editorial;      
      this.precio = precio;  
      this.año = año;
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
    const libro1 = new Libro( 1,"100 años de soledad","Gabo","norma", 80000,2016,false);
    const libro2= new Libro( 2,"Akelerre","Mario Mendoza","planeta",40000, 2000,false);
    const libro3= new Libro( 3,"EL problema de los 3 cuerpos","Cixin Liu","PRH",49000,2023,false);
    const libro4= new Libro( 4,"Incendiario","Itiel Arroyo","Vida",78000,2023,false);
    const libro5= new Libro( 5,"Viaje al centro de la tierra","Jules Verne","Alianza",38000,2001,false);
    const libros=[libro1,libro2,libro3,libro4,libro5]
    const Carrito=[]  
    
  function imprimirLibros(libros){
    alert('LIBROS DISPONIBLES: \n');
    for(let libro of libros){
    alert(libro.id+') '+libro.nombre+', autor: '+libro.autor+', precio: '+libro.precio)
    console.log(libro)
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
          console.log('¡Felicidades!, agregaste al carrito '+libro1.nombre+' y el precio final con IVA es '+libro1.precioMasIva()+' pesos colombianos')
          Carrito.push(libro1)
          libro1['vendido']=true           
          break;
        case 2:
          console.log('¡Felicidades!, agregaste al carrito '+libro2['nombre']+' y el precio final con IVA es '+libro2.precioMasIva()+' pesos colombianos')
          Carrito.push(libro2)
          libro2['vendido']=true               
          break;
        case 3:
          console.log('¡Felicidades!, agregaste al carrito '+libro3['nombre']+' y el precio final con IVA es '+libro3.precioMasIva()+' pesos colombianos')
          Carrito.push(libro3)
          libro3['vendido']=true               
          break;
        case 4:
          console.log('¡Felicidades!, agregaste al carrito '+libro4['nombre']+' y el precio final con IVA es '+libro4.precioMasIva()+' pesos colombianos')
          Carrito.push(libro4)
          libro4['vendido']=true               
          break;
        case 5:
          console.log('¡Felicidades!, agregaste al carrito '+libro5['nombre']+' y el precio final con IVA es '+libro5.precioMasIva()+' pesos colombianos')
          Carrito.push(libro5)
          libro5['vendido']=true               
          break;
        default:
          alert('No existe o no puedes comprar ese libro')
          break;
      }
     }
     alert('Tienes en el carrito los siguientes libros: ')
     const librosCa=Carrito.map((libro)=> "id: "+libro.id+","+libro.nombre+",precio: "+libro.precioMasIva())
     alert(librosCa)     
     precioFinal=Carrito.reduce((acumulador,precio)=>acumulador+precio.precioMasIva(),0)
     alert(`El precio final a pagar mas envio (5000) es de ${precioFinal+5000} pesos colombianos`)      
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
  