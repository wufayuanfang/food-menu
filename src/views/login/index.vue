<template>
    <div class="login">
        <main>
            <header>
                <span>Login</span>
            </header>
            <div class="login-box">
                <section class="bg-white br3">
                    <div class="form-box">
                        <div class="avatar-box">
                            <div class="avatar-curtain">
                                <span class="avatar-curtain-logo">头像</span>
                                <div class="avatar-curtain-border"></div>
                                <div class="avatar-curtain-button"></div>
                            </div>
                            <div class="avatar"></div>
                        </div>
                        <form method="post">
                            <h1>登录</h1>
                            <div class="form-item">
                                <label for="login_username">用户名</label>
                                <input type="text" name="username" id="login_username" maxlength="12" minlength="6" />
                            </div>
                            <a class="forget">忘记密码？</a>
                            <div class="form-item">
                                <label for="login_password">密码</label>
                                <input type="password" name="username" id="login_password" maxlength="12" minlength="6" />
                            </div>
                            <button type="submit">登录</button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    background-color: #ff7700;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    main {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 0 auto;
        max-width: 30em;
        min-height: 100vh;
        header {
            margin: 20px 0;
            text-align: center;
            span {
                font-size: 40px;
                font-weight: bold;
            }
        }
        .login-box {
            -ms-flex-positive: 1;
            flex-grow: 1;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;

            section {
                box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
                padding: 40px;

                .form-box {
                    .avatar-box {
                        position: relative;
                        margin: 0 auto 20px;
                        height: 200px;
                        width: 200px;
                        border-radius: 9999px;
                        background-color: #999;
                        background: #ddd;
                        overflow: hidden;
                        transition: background 200ms ease;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;

                        -webkit-clip-path: circle(100px at center);
                        clip-path: circle(100px at center);

                        * {
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                        }

                        .avatar-curtain {
                            position: absolute;
                            top: -290px;
                            left: 0;
                            z-index: 1;
                            width: 100%;
                            height: 300px;
                            background: #333333;
                            box-shadow: 0 0 0 5px rgb(0 0 0 / 10%);
                            transform: translateY(0);
                            transition: transform 300ms ease;
                            cursor: pointer;
                            &-logo {
                                position: absolute;
                                bottom: 20%;
                                left: 50%;
                                width: 100px;
                                margin-left: -50px;
                                opacity: 1;
                            }
                            &-border {
                                position: absolute;
                                bottom: 0;
                                height: 10px;
                                left: 0;
                                z-index: 1;
                                width: 100%;
                                background: rgba(255, 255, 255, 0.1);
                            }
                            &-button {
                                margin-left: -15px;
                                position: absolute;
                                bottom: -2px;
                                left: 50%;
                                height: 8px;
                                z-index: 2;
                                width: 30px;
                                background: #ccc;
                                box-shadow: 0 1px 0 1px rgb(0 0 0 / 10%);
                            }
                        }
                    }
                    form {
                        position: relative;
                        width: 400px;
                        $height: 38px;
                        $radius: 0.25rem;
                        h1 {
                            margin: 0;
                            margin-bottom: 0.5rem;
                            padding-bottom: 10px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                            font-size: 1.5rem;
                        }
                        .form-item {
                            display: flex;
                            flex-direction: column;
                            label {
                                margin: 10px 0;
                            }
                            input {
                                padding-left: .5rem;
                                margin: 0.5rem 0;
                                height: $height;
                                color: rgba(0, 0, 0, 0.7);
                                background: white;
                                border-color: rgba(0, 0, 0, 0.1);
                                border-style: solid;
                                border-width: 1px;
                                border-radius: $radius;
                                transition: border-color ease-in-out 0.15s,
                                    box-shadow ease-in-out 0.15s;
                                resize: vertical;
                                &:focus-visible {
                                    outline: none;
                                    border-color: #357edd;
                                }
                            }
                        }
                        .forget {
                            position: absolute;
                            right: 0;
                            margin-top: 10px;
                            font-size: .8rem;
                            text-decoration: underline;
                        }
                        button[type="submit"] {
                            margin-top: 1rem;
                            width: 100%;
                            height: $height;
                            background-image: linear-gradient(
                                -180deg,
                                rgba(255, 255, 255, 0.09) 0%,
                                rgba(17, 17, 17, 0.04) 100%
                            );
                            border: 1px solid rgba(22, 22, 22, 0.2);
                            color: #111;
                            border-radius: $radius;
                            background-color: #fff;
                            &:hover {
                                background-image: linear-gradient(
                                    -180deg,
                                    rgba(255, 255, 255, 0.18) 0%,
                                    rgba(17, 17, 17, 0.08) 100%
                                );
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
        @media screen and (min-width: 30em) {
            header {
                margin: 80px 0 40px;
            }
        }
    }
}
</style>