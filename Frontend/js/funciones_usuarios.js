const URL_BASE = "http://localhost:3000/"; 

function RegistrarUsuario(especificaciones)
{
    //Creo bandera para que no registre ajaxs mientras hay uno en ejecucion
    if (window.Enviando == 1) return false;
    window.Enviando = 1;

    var nombre = especificaciones.get('nombre');
    var contacto = especificaciones.get('contacto');
    var email = especificaciones.get('email');
    var password = especificaciones.get('password');
    var trabaja = especificaciones.get('trabaja');
    var direccion = especificaciones.get('direccion');
    
    //transformo el valor booleano de la checkbox en 0 o 1
    if (trabaja)
    {
        trabaja = 1;
    } else
    {
        trabaja = 0;
    }

    $.ajax(
        {
           "url": URL_BASE + "registrousuario",
           "type": "POST",
           "dataType": "json",
           "data":
           {
                "nombre": nombre,
                "contacto": contacto,
                "email": email,
                "password": password,
                "especialista": trabaja,
                "direccion": direccion,
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
                    var especificaciones = new FormData();

                    especificaciones.append('email', email);
                    especificaciones.append('password', password);
                    BuscarUsuario(especificaciones);
                    location.href="/registro2"
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

                if(r.error == 1)
                {
                    console.log("error");
                    alert(r.mensaje);
                } else
                {
                    console.log("exito");
                    alert("Usuario logeado exitosamente");
                    location.href="/inicio";
                    sessionStorage.setItem("IdUsuario" , r.usuario.id);
                    sessionStorage.setItem("Token" , r.token);
                    
                }
           }
        })
}

function ValidarUsuario(token, id)
{
    if (id != "")
    {
        $.ajax(
            {
                "url": URL_BASE + "usuariovalidado",
                "type": "POST",
                "dataType": "json",
                "data":
                {
                    "token": token,
                    "id": id,
                },
                success: function(r)
                {
                    if(r.error == 1)
                    {
                        console.log("error");
                        alert(r.mensaje);
                        location.href="/iniciarSesion";
                    } else
                    {
                        console.log("validado");                    
                    }
                }
            })
    }
}

function InsertarImagen(datos)
{    
    $.ajax(
        {
           "url": URL_BASE + "insertoimagen",
           "type": "POST",
           "processData": false,
           "contentType": false,           
           "dataType": "json",
           "data": datos,
           success: function(data)
           {
            alert("Foto agregada correctamente");
            location.href="/inicio";
           }
        })

}
