<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Dozr Challenge</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Oswald|Roboto" rel="stylesheet" type="text/css">

        <link rel="stylesheet" href="{{ URL::asset('/css/styles.css') }}">
    <body>
        <div data-js="react-hook"></div>
        <div id="welcomeInstructions"></div>
        <script src="{{ URL::asset('/js/welcome.bundle.js') }}"></script>
    </head>
    </body>
</html>
