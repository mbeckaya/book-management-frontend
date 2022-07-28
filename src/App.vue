<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <h1 class="navbar-brand">BOOK MANAGEMENT</h1>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link
                to="/"
                class="nav-link"
                :class="{ active: $route.name === 'bookIndex' }"
            >
              List
            </router-link>
            <router-link
                to="/add"
                class="nav-link"
                :class="{ active: $route.name === 'bookCreate' }"
            >
              Add
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>
