const URL_BASE = "http://localhost:3000/"; 

function RegistroUsuario(nombre, contacto, email, password, trabaja, direccion)
{
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


