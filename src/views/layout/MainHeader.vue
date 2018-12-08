<template>
  <header class="main-header">
    <router-link :to="{name: 'Home'}" class="logo">
      <span class="logo-mini">
        <img src="../../assets/logo.png" alt="logo" class="img-responsive" />
      </span>
      <div class="logo-lg">
        Vue.js
      </div>
    </router-link>

    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-gears" aria-hidden="true"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">
                  <i class="fa fa-user-secret"></i> Usuários
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">
                  <i class="fa fa-sign-out"></i> Sair
                </a>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <!-- <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style>

</style>
