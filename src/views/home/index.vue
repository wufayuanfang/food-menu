<template>
    <div class="main">
        <div class="list-nav">
            <ul class="list-ul">
                <li class="active">家常菜</li>
                <li>中华菜</li>
                <li>小吃</li>
                <li>外国菜</li>
                <li>烘培</li>
            </ul>
            <div class="list-nav-con">
                <dl class="list-nav-dl">
                    <dt>家常菜</dt>
                    <dd>家常菜</dd>
                    <dd>私家菜</dd>
                    <dd>凉菜</dd>
                    <dd>海鲜</dd>
                    <dd>热菜</dd>
                    <dd>汤粥</dd>
                    <dd>素食</dd>
                    <dd>酱料蘸料</dd>
                    <dd>微波炉</dd>
                    <dd>火锅底料</dd>
                    <dd>甜品点心</dd>
                    <dd>糕点主食</dd>
                    <dd>糕点主食</dd>
                    <dd>卤酱</dd>
                    <dd>时尚饮品</dd>
                </dl>
            </div>
            <div class="list-nav-con">
                <dl class="list-nav-dl">
                    <dt>每日三餐</dt>
                    <dd>早餐</dd>
                    <dd>午餐</dd>
                    <dd>晚餐</dd>
                    <dd>下午茶</dd>
                    <dd>夜宵</dd>
                </dl>
                <dl class="list-nav-dl">
                    <dt>人群</dt>
                    <dd>老年人</dd>
                    <dd>产妇</dd>
                    <dd>孕妇</dd>
                    <dd>宝宝食谱-婴儿食谱</dd>
                </dl>
                <dl class="list-nav-dl">
                    <dt>疾病调理</dt>
                    <dd>功能性调理</dd>
                    <dd>脏腑调理</dd>
                    <dd>人群膳食</dd>
                </dl>
            </div>
        </div>
        <div class="container">
            <div class="swiper">
                <div class="swiper-list">
                    <a class="swiper-item" v-for="i in swiperList">{{ i }}</a>
                </div>
                <div class="swiper-prev" @click="swiperPrev">
                    <i class="i i-shangyige"></i>
                </div>
                <div class="swiper-next" @click="swiperNext">
                    <i class="i i-xiayige"></i>
                </div>
            </div>
            <div class="collection-entry"></div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store/index";

const swiperList = [1, 2, 3]
let swiperCurrent = 0
const store = useStore()
const username = computed(() => {
    return store.state.user.username
})

const swiperListDom = <HTMLElement>document.querySelector(".swiper .swiper-list")
const swiperPrev = () => {
    console.log(swiperListDom)
    if (swiperCurrent > 0) swiperListDom.style.transform = `translate(-${swiperCurrent--}00%);`
}

const swiperNext = () => {
    console.log(swiperListDom)
    if (swiperCurrent < swiperList.length - 1) swiperListDom!.style.transform = `translate(-${swiperCurrent++}00%);`
}

const home = defineComponent({
    data() {
        return {

        }
    },
})
</script>
    
<style lang="scss" scoped>
.main {
    padding: 40px 0;
    background-color: $background-color;
    .list-nav {
        margin: 0 auto;
        .list-ul {
            display: flex;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0px;
            background-color: rgba($color: #fae8c8, $alpha: 0.5);
            list-style: none;
            li {
                padding: 0 1rem;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                cursor: pointer;
                &.active {
                    color: red;
                    background-color: #fff;
                }
                &:hover {
                    background-color: rgba($color: #fff, $alpha: 0.5);
                }
            }
        }

        .list-nav-con {
            display: flex;
            width: 100%;
            background-color: #fff;
            .list-nav-dl {
                flex: 1;
                padding: 10px 20px;
                margin: 0;
                border-bottom: 1px solid $background-color;
                dt {
                    height: 42px;
                    font-size: 24px;
                }
                dd {
                    display: inline-block;
                    padding: 0 6px;
                    margin-inline-start: 0;
                    height: 28px;
                    line-height: 28px;
                    font-size: 12px;
                    user-select: none;

                    &:hover {
                        background-color: rgba($color: #fae8c8, $alpha: 0.5);
                    }
                }
            }

            .list-nav-dl + .list-nav-dl {
                border-left: 1px solid $background-color;
            }
        }
    }

    .container {
        display: flex;
        margin: 30px auto;
        .swiper {
            position: relative;
            $width: calc((100% - 30px) / 3 * 2 - 10px);
            $swiper-height: 420px;
            width: $width;
            height: $swiper-height;
            border-radius: 4px;
            overflow: hidden;

            &-list {
                display: flex;
                height: 100%;
                overflow: visible;
                $bg-color: #00fdfb, #ffd200, #fb5911, #2cf698, #5da6fb, #d75efb,
                    #9fff10;

                @for $i from 1 through 3 {
                    $item: nth($bg-color, $i);
                    .swiper-item:nth-child(#{$i}) {
                        flex: none;
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: $item;
                    }
                }
            }

            &-prev,
            &-next {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                line-height: $swiper-height;
                width: 2rem;
                text-align: center;
                opacity: 0;
                &:hover {
                    cursor: pointer;
                }
                i {
                    font-size: 2rem;
                    color: #fff;
                }
            }
            &-next {
                left: unset;
                right: 0;
            }

            &:hover .swiper-prev,
            &:hover .swiper-next {
                opacity: 1;
            }
        }
    }

    @media (min-width: 576px) {
        .list-nav,
        .container {
            max-width: 570px;
        }
    }
    @media (min-width: 1024px) {
        .list-nav,
        .container {
            max-width: 1030px;
        }
    }

    @media (min-width: 1256px) {
        .list-nav,
        .container {
            max-width: 1030px;
        }
    }

    @media (min-width: 1396px) {
        .list-nav,
        .container {
            max-width: 1170px;
        }
    }
}
</style>