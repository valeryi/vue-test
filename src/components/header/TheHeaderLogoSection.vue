<template>
    <div class="header-logo-section">
        <c-container>
            <b-row class="justify-content-between align-items-center">
                <b-col>
                    <the-header-button-burger @toggle="toggleSidebar" />
                </b-col>
                <b-col>
                    <a href class="header-logo-section__logo"></a>
                </b-col>
            </b-row>
        </c-container>
    </div>
</template>

<style lang="scss">
$header-logo-section: #fefefe;

@import "../../assets/scss/sprites";

.header-logo-section {
    display: flex;
    background-color: $header-logo-section;

    &__logo {
        @extend %logo-small;
    }
}
</style>

<script>
import { mapMutations } from 'vuex'

import TheHeaderButtonBurger from "./TheHeaderButtonBurger"

export default {
    methods: {
        ...mapMutations({
            toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
        }),
    },
    components: {
        TheHeaderButtonBurger,
    },
}
</script>
