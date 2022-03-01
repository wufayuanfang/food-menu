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
                    <a
                        class="swiper-item"
                        v-for="(src, i) in swiperList"
                        :style="{ backgroundImage: 'url(' + src + ')' }"
                    >{{ i }}</a>
                </div>
                <div class="swiper-prev" v-if="swiperCurrent > 0" @click="swiperPrevHandle">
                    <i class="i i-shangyige"></i>
                </div>
                <div
                    class="swiper-next"
                    v-if="swiperCurrent < swiperList.length - 1"
                    @click="swiperNextHandle"
                >
                    <i class="i i-xiayige"></i>
                </div>
                <ul class="swiper-current">
                    <li
                        class="current-item"
                        v-for="(src, i) in swiperList"
                        :class="{ 'active': i === swiperCurrent || (swiperCurrent === 3 && i === 0) }"
                    >
                        <span @click="swiperCurrentHandle(i)">
                            <svg
                                xmlns="http://www.w3.org/200/svg"
                                height="100%"
                                width="100%"
                                viewBox="0 0 14 14"
                                preserveAspectRatio="none"
                            >
                                <circle cx="7" cy="7" r="6" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="collection-entry"></div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { computed, onMounted, ref } from "vue"
import { useStore } from "@/store/index"

const swiperList = ref(['https://image.gcores.com/6fc2c160-af22-448b-8f00-b36c18a40798.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90', 'https://image.gcores.com/8abea6c3-740f-46a2-8afb-87c8502c300c.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90', 'https://image.gcores.com/259fbc72-5d83-48f3-b854-044571d48695.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90'])
let swiperCurrent = ref(1)
const store = useStore()

let swiperListDom: HTMLElement
let swiperListFirstDom: HTMLElement
let swiperStartFuc: NodeJS.Timer

const username = computed(() => {
    return store.state.user.username
})

onMounted(() => {
    swiperListDom = <HTMLElement>document.querySelector(".swiper .swiper-list")
    swiperListFirstDom = <HTMLElement>document.querySelector(".swiper .swiper-list .swiper-item:first-child")

    if (swiperListDom.hasChildNodes()) swiperListDom.appendChild((swiperListFirstDom.cloneNode()))
    swiperStartFuc = setInterval(swiperNextHandle, 2000) /** 组件消失时应该销毁 */
})

const swiperPrevHandle = (): void => {
    console.log('prev')
    if (swiperCurrent.value > 0) swiperListDom.setAttribute('style', `transform:translate(-${--swiperCurrent.value}00%);`)
}

const swiperNextHandle = () => {
    if (swiperCurrent.value <= swiperList.value.length) {
        swiperListDom.setAttribute('style', `transform:translate(-${++swiperCurrent.value}00%);transition-duration: 1s;`)
    }
    if (swiperCurrent.value === swiperList.value.length + 1) {
        swiperListDom.setAttribute('style', `transform:translate(0);transition-duration: 0s;`)
        swiperCurrent.value = 0

        setTimeout(() => {
            /**
             * 必须延时才做下一步，等带浏览器把盒子移到0位置
             */
            swiperNextHandle()
        }, 100)
    }
}
/**
 * @description 跑马灯跳到当前的位置
 * @param current 当前的index
 */
const swiperCurrentHandle = (current: number) => {
    if (0 <= current && current < swiperList.value.length) {
        swiperListDom.setAttribute('style', `transform:translate(-${current}00%);`)
        swiperCurrent.value = current
    }
}


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
                transform: translate(0);
                transition-property: transform;
                @for $i from 1 through 4 {
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

            .swiper-current {
                position: absolute;
                left: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                width: 100%;
                height: 40px;
                .current-item {
                    position: relative;
                    display: inline-block;
                    margin: 0 8px;
                    width: 16px;
                    height: 16px;
                    line-height: 1;
                    cursor: pointer;
                    span {
                        display: inline-block;
                        margin: 5px;
                        width: 6px;
                        height: 6px;
                        background: #fff;
                        border-radius: 50%;

                        svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            outline: none;
                            border-radius: 50%;
                            text-indent: -999em;
                            cursor: pointer;

                            circle {
                                opacity: 0;
                                fill: none;
                                stroke: #fff;
                                stroke-width: 2;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-dasharray: 36 36;
                                stroke-dashoffset: 36;
                                transition: stroke-dashoffset 0.3s, opacity 0.3s;
                            }
                        }
                    }

                    &.active {
                        span {
                            svg {
                                circle {
                                    opacity: 1;
                                    stroke-dashoffset: 0;
                                    transition: stroke-dashoffset 0.3s,
                                        opacity 0.15s;
                                }
                            }
                        }
                    }
                }
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