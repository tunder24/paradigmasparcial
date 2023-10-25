<?php
include('sm_includes/sm_conexion.php');
conectar();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcial Paradigmas</title>
    <link rel="stylesheet" href="sm_css/sm_estilos.css">
    <script src="sm_javascript/sm_javascript.js" defer></script>
</head>
<body>
<header>
        <div class="container">
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav id="menu">
                <ul class="menu-list">
                    <li class="menu-item"><a href="index.php">Inicio</a></li>
        
                </ul>
            </nav>
        </div>
    </header>
    <h1>Juego de Piedra, Papel o Tijera</h1>

<div class="botones-juego">
    <button id="piedra">Piedra
    <img src="sm_img/piedra.png" alt="">

    </button>

    <button id="papel">Papel
    <img src="sm_img/papel.png" alt="">


    </button>
    <button id="tijera">Tijera
    <img src="sm_img/tijera.png" alt="">


    </button>
</div>
<div class="resultado" id="resultado"></div>



</body>
</html>