<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="Users">Users</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="Posts">Posts</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    </header>
   
</template>

<script>

export default {
    name: "Header"
}
</script>

<style></style>