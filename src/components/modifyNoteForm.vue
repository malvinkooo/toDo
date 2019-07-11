<template>
    <div class="form-box">
        <h6 class="title">Добавить новую заметку</h6>

        <form class="form">
            <label class="input">
                <span class="label">Заголовок</span>
                <input type="text" />
            </label>
            <label class="input">
                <span class="label">Текст</span>
                <textarea></textarea>
            </label>

            <input type="submit" class="btn -big" value="Добавить" />
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.form-box {
    > .title {
        font-size: 22px;
        line-height: 30px;
        background-color: #bdfd37;
        padding: 5px 10px;
    }

    .input {
        margin-bottom: 25px;
    }
}

.form {
    padding: 30px 15px;

    .btn {
        display: block;
        margin: 40px auto;
    }
}

.input {
    display: block;
    > .label {
        display: block;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 3px;
    }

    > input,
    > textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        resize: vertical;
        padding: 5px;
        font-size: 16px;
        line-height: 18px;
        border-radius: 2px;
        border: 1px solid #eca8ce;
    }

    > textarea {
        height: 200px;
        min-height: 200px;
    }
}

@media (max-width: 768px) {
    .form-box {
        > .title {
            font-size: 18px;
            line-height: 22px;
        }
    }
}
</style>