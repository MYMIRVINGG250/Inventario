let Producto = function (nombre, Id, cantidad, precio) {
  this.nombre = nombre;
  this.id = Id;
  this.cantidad = cantidad;
  this.precio = precio;
  this.inscribir = function () {
    return "Producto agregado"
  }
  this.info = function () {
    return this.nombre + "\n ID del producto:" + this.id
  }
  this.infoHtml = function () {

    return "<div><p>Nombre: <br>" + this.nombre +
      "<br>ID del producto <br>" + this.id +
      " <br>Cantidad <br>" + this.cantidad + "<br>" +
      "Precio <br>" + this.precio + "</p></div>"
  }
}

let Grupo = function () { //edArrayGrupo

  this.datos = new Array();
  this.agregar = function (nuevo) {
    this.datos.push(nuevo);
  }
  this.buscar = function (id) {
    console.log(this.datos)
    for (let i = 0; i < this.datos.length; i++) {
      console.log("id=", id, " Datos.id=", this.datos[i].id)
      if (id == this.datos[i].id) {
        return (this.datos[i]);


      }
    }
    return null;
  }

  this.listar = function () {
    let res = "";
    for (let i = 0; i < this.datos.length; i++)
      res += this.datos[i].infoHtml() + "<br>"
    return res;
  }
  this.eliminar = function (id) {
    let siBorro=false
    for (let i=0;i<this.datos.length;i++)
   if   (this.datos[i].id==id){
      //lo halle al que quiero borrar esta en la posicion i
      this.datos.splice(i,1);
          siBorro=true;
       }
    
     return siBorro;
  }


}

let grupo2c = new Grupo();

let btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', () => {
  let nom, id, pre, cant;
  nom = document.getElementById('txtNombre').value;
  id = document.getElementById('txtId').value;
  pre = document.getElementById('txtCantidad').value;
  cant = document.getElementById('txtPrecio').value;
  let producto = new Producto(nom, id, pre, cant);
  grupo2c.agregar(producto);
  console.log('Se agrego ' + producto.info());

});

let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
  let id = document.getElementById('txtId').value;
  let buscado = grupo2c.buscar(id); //alumno
  let res = document.getElementById('resultados');
  if (buscado == null)
    res.innerHTML += "<h3>No se encontro en la busqueda</h3>"
  else {
    res.innerHTML += "<h3>Si se encontro</h3>" + buscado.infoHtml();
    document.getElementById('txtId').value = buscado.id;
    document.getElementById('txtCantidad').value = buscado.cantidad;
  }

})


let btnEliminar=document.getElementById("btnEliminar");
  btnEliminar.addEventListener("click", ()=>{
    let id = document.getElementById('txtId').value;
    let res = document.getElementById('resultados');
    let eliminado=grupo2c.eliminar(id);
    if(eliminado==false)
      res.innerHTML+= "<h3>No se elimino ningun producto</h3>"
    else
      res.innerHTML+= "<h3>Se ha eliminado el producto</h3>"
    

  })


let btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', () => {
  let res = document.getElementById('resultados');
  res.innerHTML += "<h1>LISTADO</h1>" + grupo2c.listar();
})