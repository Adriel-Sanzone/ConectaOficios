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
                    location.href="../html/index.html";
                    sessionStorage.setItem("IdUsuario" , r.usuario.id);
                    sessionStorage.setItem("Token" , r.token);
                    
                }
           }
        })
}

function ValidarUsuario(token)
{
    $.ajax(
        {
           "url": URL_BASE + "usuariovalidado",
           "type": "POST",
           "dataType": "json",
           "data":
           {
                "token": token,
           },
           success: function(r)
           {
                if(r.error == 1)
                {
                    console.log("error");
                    alert(r.mensaje);
                    location.href="../html/iniciarSesion.html";
                } else
                {
                    console.log("validado");                    
                }
           }
        })


}

function ModificoUsuario(datos, imagen)
{
    var fd = new FormData();
    fd.append('UsuarioImagen', imagen[0], files[0]);
    fd.append('datos' , datos);
    
    $.ajax(
        {
           "url": URL_BASE + "modificousuario",
           "type": "POST",
           "processData": false,
           "contentType": false,           
           "dataType": "json",
           "data": fd,
           success: function(data)
           {

           }
        })

}
