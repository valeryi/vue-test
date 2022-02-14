<template>
    <b-dropdown
        :text="text"
        :popper-opts="popper"
        @shown="alignToRight"
        menu-class="discount-label-dropdown__menu"
        :toggle-class="buttonUnderlined ? `discount-label-dropdown__toggle--underfined` : null"
        class="discount-label-dropdown"
        ref="dropdown"
        lazy
    >
        <template #button-content v-if="$slots['button-content']">
            <slot name="button-content" />
        </template>

        <slot />
    </b-dropdown>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
        },
        buttonUnderlined: {
            type: Boolean,
            default: true,
        },
        alignCenter: {
            type: Boolean,
        },
        fixPreventOverflow: {
            type: Boolean,
        },
        placement: {
            type: String,
            default: 'auto',
            validator: function (value) {
                return [
                    'auto',
                    'auto-start',
                    'auto-end',
                    'top',
                    'top-start',
                    'top-end',
                    'right',
                    'right-start',
                    'right-end',
                    'bottom',
                    'bottom-start',
                    'bottom-end',
                    'left',
                    'left-start',
                    'left-end',
                ].includes(value)
            }
        },
    },

    data() {
        return {
            popper: null,
        }
    },
    mounted() {

        /**
         * 
         * // FIXME: fix preventOverflow - elements overflow the viewport  
         * Now `alignToRight` fixes that behavious
         * 
         * */
        this.popper = {
            placement: this.placement,
            modifiers: {
                preventOverflow: {
                    enabled: true,
                    padding: 32,
                },
            }
        }

        // window.addEventListener('resize', this.alignToRight)

    },
    methods: {
        alignToRight() {
            if (this.fixPreventOverflow) {
                const dropdown = this.$refs['dropdown'].$el.querySelector(`.dropdown-menu`)
                const rect = dropdown.getBoundingClientRect()
                const elPos = rect.left + rect.width

                dropdown.style.left = `${innerWidth - elPos}px`
            }
        }
    },
    // beforeDestroy() {
    //     window.removeEventListener('resize', this.alignToRight)
    // },
}
</script>

<style lang="scss">
$discount-label-dropdown-border-color: #e6e6e6;
$discount-label-dropdown-background-color: #f3f3f3;
$discount-label-dropdown-color: #222;
$discount-label-dropdown-shadow: 0 3px 5px 0 rgb(0 0 0 / 30%);

.discount-label-dropdown {
    &.dropdown {
        .dropdown-toggle {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            padding: 0;
            margin: 0;
            font-size: 1em;
            margin: 0 0.6em;

            &::after {
                display: inline;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 8px 4px 0 4px;
                margin-left: 0.7em;
                border-color: $discount-label-dropdown-border-color transparent
                    transparent transparent;
            }
        }

        .dropdown-menu {
            border: none;
        }
    }

    &__toggle {
        &--underfined {
            text-decoration: underline;
        }
    }

    &.show {
        .dropdown-toggle {
            &::after {
                transform: rotate(180deg);
            }
        }
    }

    &__menu {
        box-shadow: $discount-label-dropdown-shadow;
        background-color: $discount-label-dropdown-background-color;
        color: $discount-label-dropdown-color;
        list-style: none;
        border-radius: 0;
        outline: none;
    }
}
</style>
