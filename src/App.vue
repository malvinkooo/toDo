<template>
        <router-view />
</template>

<style lang="scss">
body,
html {
    height: 100%;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
    min-width: 320px;
}

body,
p,
h6,
button {
    padding: 0;
    margin: 0;
}

button {
    background-color: transparent;
    border: none;
    outline: none;
}

.container {
    box-sizing: border-box;
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}

.btn {
    display: inline-block;
    outline: none;
    border: 0;
    background-color: #bdfd37;
    color: #000;
    text-decoration: none;
    font-size: 16px;
    line-height: 22px;
    border-radius: 1px;
    min-width: 70px;
    box-sizing: border-box;
    text-align: center;
    padding: 5px 15px;
    transition: 0.3s;

    &.-big {
        padding: 10px 25px;
        min-width: 120px;
    }

    &:hover {
        background-color: #8de300;
    }

    &.-pink {
        background-color: #df007e;
        color: #fff;

        &:hover {
            background-color: #E954A9;
        }
    }
}

.icon {
    cursor: pointer;
}
</style>
