<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="SSP Advocaten">
    <meta name="author" content="Alejandro RH">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>SSP Advocaten</title>

    <!-- Fonts -->
    <link href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/sb-admin-2.min.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link href="{{ asset('img/favicon.png') }}" rel="icon" type="image/png">
    <link rel="stylesheet" href="{{ asset('selectize/selectize.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('selectize/selectize.css') }}">
    <link rel="stylesheet" href="{{ asset('summernote/summernote-bs4.min.css') }}">
    @yield('styles')
</head>
<body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ url('/home') }}">
            <div class="sidebar-brand-text mx-3">SSP Advocaten</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item {{ request()->routeIs('home') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('home') }}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>{{ __('Dashboard') }}</span>
            </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            {{ __('Content Management') }}
        </div>

        <!-- Nav Item - Posts -->
        <li class="nav-item {{ request()->routeIs('posts*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('posts.index') }}">
                <i class="fas fa-fw fa-newspaper"></i>
                <span>{{ __('Posts') }}</span>
            </a>
        </li>

        <!-- Nav Item - Banners -->
        <li class="nav-item {{ request()->routeIs('banners*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('banners.index') }}">
                <i class="fas fa-fw fa-images"></i>
                <span>{{ __('Banners') }}</span>
            </a>
        </li>

        <!-- Nav Item - Services -->
        <li class="nav-item {{ request()->routeIs('services*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('services.index') }}">
                <i class="fas fa-fw fa-tools"></i>
                <span>{{ __('Services') }}</span>
            </a>
        </li>

        <!-- Nav Item - Partners -->
        <li class="nav-item {{ request()->routeIs('partners*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('partners.index') }}">
                <i class="fas fa-fw fa-handshake"></i>
                <span>{{ __('Partners') }}</span>
            </a>
        </li>

        <!-- Nav Item - Testimonials -->
        <li class="nav-item {{ request()->routeIs('client-reviews*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('client-reviews.index') }}">
                <i class="fas fa-fw fa-star"></i>
                <span>{{ __('Testimonials') }}</span>
            </a>
        </li>

        <!-- Nav Item - Profiles -->
        <li class="nav-item {{ request()->routeIs('profiles*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('profiles.index') }}">
                <i class="fas fa-fw fa-id-badge"></i>
                <span>{{ __('Profiles') }}</span>
            </a>
        </li>

        <!-- Nav Item - Settings -->
        <li class="nav-item {{ request()->routeIs('settings*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('settings.index') }}">
                <i class="fas fa-fw fa-cog"></i>
                <span>{{ __('Settings') }}</span>
            </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            {{ __('Data Management') }}
        </div>

        <!-- Nav Item - Profile -->
        <li class="nav-item {{ request()->routeIs('consultation-requests*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('consultation-requests.index') }}">
                <i class="fas fa-fw fa-message"></i>
                <span>{{ __('Consultation Requests') }}</span>
            </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            {{ __('User Management') }}
        </div>

        <!-- Nav Item - Profile -->
        <li class="nav-item {{ request()->routeIs('users*') ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('users.index') }}">
                <i class="fas fa-fw fa-user"></i>
                <span>{{ __('User') }}</span>
            </a>
        </li>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">

                    <div class="topbar-divider d-none d-sm-block"></div>

                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ auth()->user()->name . ' | ' . auth()->user()->email }}</span>
                        </a>
                        <!-- Dropdown - User Information -->
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                {{ __('Logout') }}
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">

                @yield('main-content')

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-left my-auto">
                    <span>SSP ADVOCATEN &copy;{{ now()->year }}</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ __('Ready to Leave?') }}</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-link" type="button" data-dismiss="modal">{{ __('Cancel') }}</button>
                <a class="btn btn-danger" href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ asset('js/popper.js') }}"></script>
<script src="{{ asset('summernote/summernote-bs4.min.js') }}"></script>
<script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-easing/jquery.easing.min.js') }}"></script>
<script src="{{ asset('js/sb-admin-2.min.js') }}"></script>
<script src="{{ asset('selectize/selectize.min.js') }}"></script>
@yield('scripts')
</body>
</html>
