<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Gerador de senhas, gerador de password">
    <title>Gerador de Senha</title>

    <link rel="stylesheet" href="assets/styles/style.css">

</head>

<body>

    <?php
    define("CONF_PASSWD_MIN_LEN", 8);
    define("CONF_PASSWD_MAX_LEN", 40);
    define("CONF_PASSWD_LEN", 24);
    ?>
    <img class="logo" src="assets/images/GeradorSenha.png" alt="Gerador de Senha">
    <main class="container-input">
        <span>Tamanho <span id="valor"></span> caracteres</span>
        <input id="slider" class="slider" type="range" min="<?= CONF_PASSWD_MIN_LEN; ?>" max="<?= CONF_PASSWD_MAX_LEN; ?>" value="<?= CONF_PASSWD_LEN; ?>">
        <!-- <input id="slider" class="slider" type="range" min="5" max="25" value="15"> -->
        <button id="button" class="button-cta" onclick="generatePassword ()">Gerar Senha</button>
    </main>

    <div id="container-password" class="container-password hide" onclick="copyPassword()">
        <span class="title">Sua senha gerada foi:</span>
        <span id="password" class="password"></span>
        <span class="tooltip">clique na sua senha para copiar.</span>
    </div>

    <script src="assets/scripts/script.js"></script>
</body>

</html>