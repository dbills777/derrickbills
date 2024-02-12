<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="bg-background text-foreground">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
       <!-- Fonts -->
        <!-- <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin> -->
        <!-- <link href="href="{{ asset('fonts/MonaspaceRadon-Regular.woff') }} rel="stylesheet">  -->

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('db.ico') }}">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="antialiased bg-background text-foreground font-Xenon ">
        @inertia
    </body>
</html>
