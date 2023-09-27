const URL_BASE = "http://localhost:3000/"; 

function RegistrarUsuario(especificaciones)
{
    //Creo bandera para que no registre ajaxs mientras hay uno en ejecucion
    if (window.Enviando == 1) return false;
    window.Enviando = 1;

    var nombre = especificaciones.get('nombre');
    var apellido = especificaciones.get('apellido');
    var contacto = especificaciones.get('contacto');
    var email = especificaciones.get('email');
    var password = especificaciones.get('password');
    var trabaja = especificaciones.get('trabaja');
    var direccion = especificaciones.get('direccion');
    var descripcion = especificaciones.get('descripcion');
    var especializacion_id = especificaciones.get('especializacion_id');
    

    //console.log(trabaja);


    console.log(trabaja);

    $.ajax(
        {
           "url": URL_BASE + "registrousuario",
           "type": "POST",
           "dataType": "json",
           "data":
           {
                "nombre": nombre,
                "apellido": apellido,
                "contacto": contacto,
                "email": email,
                "password": password,
                "especialista": trabaja,
                "direccion": direccion,
                "descripcion": descripcion,
           },
           success: function(r)
           {
            window.Enviando = 0;

                if(r.error == 1)
                {            
                    alert(r.mensaje);
                } else
                {
                    alert("Usuario creado exitosamente");
                    //Ejecuto la misma funcion de iniciar sesion para que automaticamente ingrese con el usuario que se acaba de registrar
                    $.ajax(
                        {
                           "url": URL_BASE + "usuario",
                           "type": "POST",
                           "dataType": "json",
                           "data":
                           {
                                "email": email,
                                "password": password,
                           },
                           success: function(r)
                           {                
                                if(r.error == 1)
                                {                            
                                    console.log("error");
                                    alert(r.mensaje);
                                } else
                                {
                                    console.log("exito 2");
                                    sessionStorage.setItem("IdUsuario" , r.usuario.id);
                                    sessionStorage.setItem("Token" , r.token);
                                    //luego de guardar el id y token del usuario recien creado asigno el trabajo que selecciono
                                    if (r.usuario.especialista != 0)
                                    {
                                        console.log("El pibe trabaja");
                                        $.ajax(
                                            {
                                            "url": URL_BASE + "asignoespecializacion",
                                            "type": "POST",
                                            "dataType": "json",
                                            "data":
                                            {
                                                    "id_usuario": r.usuario.id,
                                                    "id_especializacion": especializacion_id,
                                            },
                                            success: function(r)
                                            {                                              
                                    
                                                    if(r.error == 1)
                                                    {                                                
                                                        console.log("error");
                                                        alert(r.mensaje);
                                                    } else
                                                    {                                                
                                                        console.log("exito 3");
                                                        
                                                        location.href="/registro2";
                                                    }
                                            }
                                            })
                                    } else
                                    {
                                        console.log("El pibe no trabaja");                                
                                    
                                        if(r.error == 1)
                                        {
                                            console.log("error");
                                            alert(r.mensaje);
                                        } else
                                        {
                                            console.log("exito 3");
                                            
                                            location.href="/registro2";
                                        }
                                    }
                                }
                           }
                        })
                    
                }
           }
        })
};

function BuscarUsuario(especificaciones)
{
    //Creo bandera para que no registre ajaxs mientras hay uno en ejecucion
    if (window.Enviando == 1) return false;
    window.Enviando = 1;

    var email = especificaciones.get('email');
    var password = especificaciones.get('password');

    $.ajax(
        {
           "url": URL_BASE + "usuario",
           "type": "POST",
           "dataType": "json",
           "data":
           {
                "email": email,
                "password": password,
           },
           success: function(r)
           {
                
                window.Enviando = 0;
                
                if(r.error == 1){
                    console.log("error");
                    alert(r.mensaje);
                } else {
                    location.href="/"
                    
                }
           }
        })
}

function ValidarUsuario(token, id) 
{
    console.log(id);
    if (id != null && id != 0) {
        $.ajax({
            "url": URL_BASE + "usuariovalidado",
            "type": "POST",
            "dataType": "json",
            "data": 
            {
                "token": token,
                "id": id,
            },
            success: function (r) 
            {
                if (r.error == 1) 
                {
                    console.log("error");
                    alert(r.mensaje);
                    sessionStorage.setItem("IdUsuario", 0);
                    sessionStorage.setItem("Token", 0);
                    location.href = "/iniciarSesion";
                } else 
                {
                    console.log("validado");
                }
            }
        });
    } 
}


function InsertarImagenes(datosPerfil, datosPortada)
{    
    $.ajax(
        {
           "url": URL_BASE + "insertoimagenperfil",
           "type": "POST",
           "processData": false,
           "contentType": false,           
           "dataType": "json",
           "data": datosPerfil,
           success: function(data)
           {
                $.ajax(
                {
                    "url": URL_BASE + "insertoimagenportada",
                    "type": "POST",
                    "processData": false,
                    "contentType": false,
                    "dataType": "json",
                    "data": datosPortada,
                    success: function (data) 
                    {
                        alert("Foto agregada correctamente");
                        location.href = "/loged/" + sessionStorage.getItem("IdUsuario");
                    }
                })
           }
        })
}
