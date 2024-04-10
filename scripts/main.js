
let listProdVendidos =[];//para guardar productos vendidos
let menu = parseInt(prompt(`Menu de opciones
1-buscar producto
2-agregar producto
3-vender producto
0-salir`));

while(menu!=0){
    switch(menu){
        case 1:
            let nombreProd = prompt('ingresa el nombre del producto');
            buscandoProductos(nombreProd);
            
            break;
        case 2:
            let nombre = prompt('agrega el nombre del producto');
            let precio = prompt('agrega el precio '); 
            let cantidad = prompt('agrega la cantidad '); 
            if(nombre!=''){
                if(precio!=''){
                    if(cantidad!=''){
                        precio=parseInt(precio);//paso a entero para hacer las operaciones
                        cantidad=parseInt(cantidad);
                        alert(agregoProductos(nombre,precio,cantidad));
                    }
                    else{
                        alert('debes agregar la cantidad');
                    }
                }else{
                    alert('debes agregar el  precio');
                }
                
            }else{
                alert('completa todos los campos');
                
            }
            
            break;
        case 3:
            let prod = parseInt(prompt(`vender productos
            1-ver lista de productos
            2-vender producto
            3-ver ganancias
            0-salir`));
            while(prod!=0){
                venderProducto(prod);
                prod = parseInt(prompt(`vender productos
                1-ver lista de productos
                2-vender producto
                3-ver ganancias
                0-salir`));
            }
            
            break;    
        default:
            alert('Ingresá una opcion');
            break;  
    }
    menu = parseInt(prompt(`Menu de opciones
    1-buscar productos
    2-agregar producto
    3-vender producto
    0-salir`));
}

// Funcion para vender el producto------------

function venderProducto(n){
    switch(n){
        case 1:
            
            listProductos.forEach((p)=>{
                console.table(p);//muestro la lista de prod por consola
            });
            
            break;
        case 2:
            let venderProd = prompt('ingresa el producto');
            if(venderProd!=''){
                listProductos.find((p)=>{
                    
                    if(p.nom.includes(venderProd.toLowerCase())){     
                        
                        if(p.cantidad<1){
                            //cuando no encuentra cant de prod
                                
                            return alert('Producto Sin Stock');
                                
                                
                        }else{
                            alert(`${p.nom} vendido`);
                            listProdVendidos.push(p);
                        }
                        p.cantidad-=1;//va restando la cantidad
                    }  
                   
                });
                
            }else{
                alert('Ingresá el Producto');    
            }
            break;  
        case 3:
            //muestro lo que se va ganando
            alert(`Tu Ganancia hasta ahora es de $ ${verGanancias()} `);
            break;      
        default:
            alert('Ingresá una opcion');
            break;    
    }
    
}
// funcion para ver las ganancias-----------
function verGanancias(){
    const precios = listProdVendidos.reduce((acc,p)=>acc +p.precio,0);
    return precios;//devuelvo lo acumulado en los prod vendidos
}
// Funcion para agregar productos al array------------------
function agregoProductos(n,p,c){

    listProductos.push({
        id:listProductos.length+1,
        nom:n.toLowerCase(),
        precio:p,
        cantidad:c
    })
    return `AGREGADO CORRETAMENTE`;
       
    
    
    
}
// Funcion para buscar un producto----------------------
function buscandoProductos(n){
    let res =  listProductos.find((p)=>p.nom.includes(n.toLowerCase()));
    if(res){
        if(res.nom === n.toLowerCase()){
            return alert(`SE ENCONTRO:
            -Id: ${res.id}
            -Producto: ${res.nom}
            -Cantidad: ${res.cantidad}
            -Precio: ${res.precio} c/u`);
        }else if(res.nom != n ){
            return alert(  `No Ingresaste el Producto `);
        }
    }else{
        alert(`No se encontro el producto ${n}`);
    }
    
 
} 





































