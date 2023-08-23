const URL_BASE = "http://localhost:3000/";


function IniciarSesion(email, password) {
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
            success: function (r) {
                if (r.error == 0) {
                    sessionStorage.setItem("token_usuario", r.token);
                    //location.href="";
                } else {
                    alert("INCORRECTO :(");
                }

            },
        });
};

function Validacion() {
    var token_usuario = sessionStorage.getItem("token_usuario");

    $.ajax(
        {
            "url": URL_BASE + "usuariovalidado",
            "type": "POST",
            "dataType": "json",
            "data":
            {
                "token": token_usuario,
            },
            success: function (r) {
                if (r.error == 0) {
                    //todo bien validado
                } else {
                    //location.href="PATEADO.html" 
                }

            },
        });

};

function RegistrarUsuario(email, password) {
    $.ajax(
        {
            "url": URL_BASE + "registrousuario",
            "type": "POST",
            "dataType": "json",
            "data":
            {
                "email": email,
                "password": password,
            },
            success: function (r) {
                if (r.error == 1) {
                    alert(r.mensaje);
                } else {
                    alert("Su usuario se ha creado exitosamente");
                }
            },
        });
}
