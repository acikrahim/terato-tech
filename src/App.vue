<template>
<div>
    <router-view/>
    <div class="custom-footer">
        <div class="container">
            <nav class="navbar">
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                    </div>
                    <div class="navbar-end">
                        <p class="navbar-item">2016, Copyright by Terato Tech</p>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.custom-footer {
    background-color: $sky-blue;
    .navbar {
        padding: 0 1%;
        background-color: $sky-blue;
        height: 4.8rem;
        .navbar-item {
            font-size: 16px;
            font-weight: bold;
            color: $white;
        }
    }
}
</style>
