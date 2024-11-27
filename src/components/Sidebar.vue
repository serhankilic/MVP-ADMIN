<template>
    <aside>
        <div :class="['side-menu', { expanded: isExpanded }]">
            <button @click="toggleMenu" class="toggle-button">
                <span v-if="isExpanded">
                    <Icon name="material-symbols:close-rounded" class="icon"
                /></span>
                <span v-else
                    ><Icon name="material-symbols:menu-open" class="icon"
                /></span>
            </button>
            <ul>
                <li v-for="item in menuItems" :key="item.text">
                    <a :href="item.link"><Icon :name="item.icon"></Icon></a>
                    <a v-if="isExpanded" :href="item.link">{{ item.text }}</a>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            isExpanded: false, // Menü durumunu takip eder
            menuItems: [
                {
                    icon: 'material-symbols:home-outline',
                    text: 'Anasayfa',
                    link: 'product',
                },
                {
                    icon: 'material-symbols:person',
                    text: 'Kullanıcılar',
                    link: 'users',
                },
                {
                    icon: 'material-symbols:settings-outline-rounded',
                    text: 'Ayarlar',
                    link: 'settings',
                },
            ],
        }
    },
    methods: {
        toggleMenu() {
            this.isExpanded = !this.isExpanded
        },
    },
}
</script>
<style>
.side-menu {
    position: relative;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    color: black;
    transition: all 0.5s ease; /* Animasyon */
    overflow: hidden;
}

.side-menu.expanded {
    width: 300px; /* Genişletilmiş genişlik */
    background-color: #c6e7ff;
    .toggle-button {
        justify-content: flex-end;
        padding-right: 30px;
    }
    .side-menu ul {
        align-items: flex-start;
        li {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            a {
                align-items: center;
                cursor: pointer;
                font-size: 20px;
                font-weight: 500;
                color: lightgray;
                transition: 0.3s all ease;

                .iconify {
                    font-size: 32px;
                    color: dimgray;
                    transition: 0.3s all ease;
                    margin-right: 15px;
                }
            }
        }
    }
}

.side-menu .toggle-button {
    padding: 10px;
    margin: 10px 0 0;
    width: 100%;
    display: flex;
    background-color: transparent;
    justify-content: center;
    border: none;
    text-align: left;
    cursor: pointer;
    span {
        .icon {
            font-size: 30px;
        }
    }
}

.side-menu ul {
    height: 90%;
    margin: 0 auto;
    list-style: none;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 25rem;
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        a {
            padding: 12px 0;
            align-items: center;
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
            color: dimgray;
            transition: 0.3s all ease;
            .iconify {
                font-size: 32px;
                color: dimgray;
                transition: 0.3s all ease;
            }
        }
        a:hover {
            color: black;
            .iconify {
                color: black;
            }
        }
    }
}
html.dark {
    .side-menu {
        background-color: #666565;
    }
    .side-menu ul {
        li {
            a {
                color: silver;
                transition: 0.3s all ease;
                .iconify {
                    font-size: 32px;
                    color: silver;
                    transition: 0.3s all ease;
                }
            }
            a:hover {
                color: white;
                .iconify {
                    color: white;
                }
            }
        }
    }
}
</style>
