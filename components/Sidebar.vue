<template>
    <aside>
        <div class="side-menu">
            <ul>
                <li v-for="item in menuItems" :key="item.text">
                    <a :href="item.link"><Icon :name="item.icon"></Icon></a>
                    <a :href="item.link">{{ item.text }}</a>
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
                    link: '',
                },
                {
                    icon: 'material-symbols:schema-outline',
                    text: 'Log',
                    link: 'log',
                },
                {
                    icon: 'material-symbols:bookmark-manager-outline-sharp',
                    text: 'İçerik Yönetim',
                    link: 'content',
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
}
</script>
<style>
.side-menu {
    position: relative;
    top: 0;
    left: 20px;
    border-radius: 25px;
    min-height: 90%;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    color: black;
    transition: all 0.5s ease; /* Animasyon */
    overflow: hidden;
    background-color: #1a2b4b;
    ul {
        align-items: flex-start;
        width: 100%;
        li {
            padding-left: 10px;
            a {
                color: #f4e9cd;
                margin: 0;
                margin-left: 17px;
                transition: 0.3s all ease-in-out;
                font-size: 24px;
                white-space: nowrap;
            }
        }
        li:hover {
            a {
                color: white;
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
    transition: 0.3s all ease;
    span {
        padding: 10px;
        .icon {
            font-size: 36px;
            color: #f4e9cd;
            transition: 0.3s all ease;
        }
    }
}
.toggle-button:hover {
    background-color: #0e192e;
    span {
        .icon {
            color: #b08beb;
        }
    }
}

.side-menu ul {
    height: 90%;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
    margin-top: 10rem;
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        transition: 0.3s all ease-in-out;
        a {
            display: flex;
            padding: 12px 0;
            align-content: center;
            cursor: pointer;
            font-size: 24px;
            font-weight: 500;
            color: dimgray;
            transition: 0.3s all ease;
            .iconify {
                font-size: 36px;
                color: #f4e9cd;
                transition: 0.3s all ease;
                margin: 0 auto;
            }
        }
    }
    li:hover {
        background-color: #1a2f56;
        .iconify {
            color: #b08beb;
        }
    }
}
</style>
