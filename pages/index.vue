<script setup lang="ts"></script>

<template>
    <div class="content-area">
        <Sidebar class="sidebar" />
        <Content />
    </div>
</template>
<style>
.content-area {
    display: flex;
    flex-direction: row;
    background-color: #f4e9cd;
    .sidebar {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
