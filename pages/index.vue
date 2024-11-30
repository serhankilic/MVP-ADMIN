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
    .sidebar {
        position: relative;
    }
}
</style>
