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
                    ></a>
                </div>
                <div class="swiper-prev" @click="swiperPrevHandle">
                    <i class="i i-shangyige"></i>
                </div>
                <div class="swiper-next" @click="swiperNextHandle">
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
            <a
                class="collection-entry"
                style="background-image:url(https://image.gcores.com/6471b41a-68b7-469d-a3a4-93a747900691.jpg?x-oss-process=image/resize,limit_1,m_fill,w_720,h_840/quality,q_90)"
            >
                <div class="inner-whiteboard">
                    <div class="collection-entry-label">今日美食</div>
                </div>
            </a>
        </div>
        <div class="page-container">
            <div class="cart-inner">
                <img
                    class="cover"
                    src="https://st-cn.meishij.net/r/178/85/5833928/a5833928_164609477827719.jpg"
                    alt="彩蔬虾球"
                />
                <div class="card_content">
                    <a class="category">懒人福利</a>
                    <a href="#" class="info">
                        <h3 class="title">彩蔬虾球【宝宝辅食】</h3>
                        <p class="sub-title">诸位褪色者，我们秋季见</p>
                    </a>
                    <div class="card-btm">
                        <a href="#" class="avatar" target="_blank">
                            <img
                                src="https://image.gcores.com/88c4b13a-bfed-4b2b-a990-bfa3aff8663d.jpg?x-oss-process=image/resize,limit_1,m_fill,w_26,h_26/quality,q_90/bright,-20"
                                alt="头像"
                                class="avatar-img"
                            />
                            <div class="avatar-text">
                                <h3>开心超人</h3>
                                <div class="create-date">1小时前</div>
                            </div>
                        </a>
                        <div class="interact">
                            <span class="start">
                                <i class="i i-dianzan_kuai"></i> 59
                            </span>
                            <span class="leave">
                                <i class="i i-comment-v2-full"></i> 19
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="cart-inner"></a>
            <a class="cart-inner"></a>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { computed, onMounted, ref, onUnmounted } from "vue"
import { useStore } from "@/store/index"

const swiperList = ref(['https://image.gcores.com/6fc2c160-af22-448b-8f00-b36c18a40798.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90', 'https://image.gcores.com/8abea6c3-740f-46a2-8afb-87c8502c300c.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90', 'https://image.gcores.com/259fbc72-5d83-48f3-b854-044571d48695.jpg?x-oss-process=image/resize,limit_1,m_fill,w_750,h_420/quality,q_90'])
let swiperCurrent = ref(1)
const store = useStore()
// 轮询/轮播速度
const intervalMs: number = 4000;
// 控制轮播的盒子，主要是用这个左右位移实现轮播
let swiperListDom: HTMLElement
// 轮播的第一页
let swiperListFirstDom: HTMLElement
// 轮询的钩子
let swiperStartFuc: NodeJS.Timer | null
// 轮播的过渡状态
let swiperTransitionStat: boolean = false

const username = computed(() => {
    return store.state.user.username
})

onMounted(() => {
    swiperListDom = <HTMLElement>document.querySelector(".swiper .swiper-list")
    swiperListFirstDom = <HTMLElement>document.querySelector(".swiper .swiper-list .swiper-item:first-child")
    // 轮播第一个页克隆添加到最后一个实现无缝衔接
    if (swiperListDom.hasChildNodes()) swiperListDom.appendChild((swiperListFirstDom.cloneNode()))
    swiperStartFuc = setInterval(swiperNextHandle, intervalMs) /** 组件消失时应该销毁 */

    // 鼠标进入/离开控制取消/启动轮询
    swiperListDom.addEventListener('mouseover', swiperStop, true)
    swiperListDom.addEventListener('mouseout', () => {
        swiperStartFuc = setInterval(swiperNextHandle, intervalMs)
    })
    // 监听过渡状态
    swiperListDom.addEventListener('transitionstart', () => {
        swiperTransitionStat = true
    })
    swiperListDom.addEventListener('transitionend', () => {
        swiperTransitionStat = false
    })
})

onUnmounted(() => {
    swiperStop()
})
/**
 * @description 取消轮播的轮询
 */
const swiperStop = function () {
    clearInterval(Number(swiperStartFuc))
    swiperStartFuc = null
}
/**
 * @description 轮播到上一页
 * @param event 用户点击行为的event对象，undefined则是函数调用
 */
const swiperPrevHandle = (event?: Event): void => {
    // 还在过渡中则不操作,相当于节流了
    if (swiperTransitionStat) return
    // 如果是人为点击则把轮询先取消然后再重新启动
    if (event && swiperStartFuc) {
        swiperStop()
        swiperStartFuc = setInterval(swiperNextHandle, intervalMs) /** 组件消失时应该销毁 */
    }
    if (swiperCurrent.value > 0 && swiperCurrent.value !== swiperList.value.length + 1) {
        swiperListDom.setAttribute('style', `transform:translate(-${--swiperCurrent.value}00%);transition-duration: 1s;`)
    } else if (swiperCurrent.value === swiperList.value.length + 1) {
        swiperListDom.setAttribute('style', `transform:translate(-${swiperList.value.length}00%);transition-duration: 0s;`)
        swiperCurrent.value = swiperList.value.length
        setTimeout(() => {
            /*** 必须延时才做下一步*/
            swiperPrevHandle()
        }, 50)
    } else {
        swiperCurrent.value = swiperList.value.length + 1
        swiperPrevHandle()
    }
}
/**
 * @description 轮播到下一页
 * @param event 用户点击行为的event对象，undefined则是函数调用
 */
const swiperNextHandle = (event?: Event) => {
    // 过渡结束才能生效
    if (swiperTransitionStat) return

    if (event && swiperStartFuc) {
        swiperStop()
        swiperStartFuc = setInterval(swiperNextHandle, intervalMs) /** 组件消失时应该销毁 */
    }
    if (swiperCurrent.value <= swiperList.value.length) {
        swiperListDom.setAttribute('style', `transform:translate(-${++swiperCurrent.value}00%);transition-duration: 1s;`)
    }
    if (swiperCurrent.value === swiperList.value.length + 1) {
        swiperListDom.setAttribute('style', `transform:translate(0);transition-duration: 0s;`)
        swiperCurrent.value = 0
        setTimeout(() => {
            /*** 必须延时才做下一步，等带浏览器把盒子移到0位置 */
            swiperNextHandle()
        }, 50)
    }
}
/**
 * @description 跑马灯跳到当前的位置
 * @param current 当前的index
 */
const swiperCurrentHandle = (current: number) => {
    if (0 <= current && current < swiperList.value.length) {
        swiperListDom.setAttribute('style', `transform:translate(-${current}00%);transition-duration: 1s;`)
        swiperCurrent.value = current
        swiperStop()
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
        justify-content: space-between;
        margin: 30px auto;
        .swiper {
            position: relative;
            $width: calc((100% - 30px) / 3 * 2 + 15px);
            $swiper-height: 420px;
            width: $width;
            height: $swiper-height;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            overflow: hidden;
            &-list {
                display: flex;
                height: 100%;
                overflow: visible;
                transform: translate(0);
                transition-property: transform;

                .swiper-item {
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    $bg-color: #00fdfb, #ffd200, #fb5911, #2cf698, #5da6fb,
                        #d75efb, #9fff10;
                    @for $i from 1 through 4 {
                        $item: nth($bg-color, $i);
                        &:nth-child(#{$i}) {
                            flex: none;
                            display: block;
                            width: 100%;
                            height: 100%;
                            background-color: $item;
                        }
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
                align-items: center;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 40px;
                .current-item {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 8px;
                    width: 16px;
                    height: 16px;
                    line-height: 1;
                    cursor: pointer;
                    span {
                        display: block;
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
        .collection-entry {
            display: block;
            flex: 0 0 calc(calc(100% - 30px) / 3);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            background-color: #343a40;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            overflow: hidden;
            .inner-whiteboard {
                padding: 10px;
                width: 100%;
                height: 100%;
                .collection-entry-label {
                    display: inline-block;
                    padding: 5px 13px;
                    color: #fff;
                    border-radius: 9999px;
                    background: rgba(0, 0, 0, 0.5);
                    font-size: 12px;
                }
            }

            &:hover {
                opacity: 0.85;
            }
        }
    }
    .page-container {
        display: flex;
        justify-content: space-between;
        margin: 30px auto;
        .cart-inner {
            width: calc(calc(100% - 30px) / 3);
            height: 400px;
            border-radius: 4px;
            background-color: #fff;
            overflow: hidden;
            .cover {
                display: block;
                height: 230px;
                width: 100%;
                object-fit: cover;
            }
            .card_content {
                padding: 10px;
                .category {
                    display: inline-block;
                    margin: 14px 0 7px;
                    font-size: 0.75rem;
                    line-height: 1.1;
                    color: #ff3d11;
                    cursor: pointer;
                }
                .info {
                    display: block;
                    height: 80px;
                    .title {
                        margin: 0;
                        font-size: 1.125rem;
                        line-height: 1.4rem;
                        max-height: 2.8rem;
                        color: #000;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .sub-title {
                        margin: 0.85714em 0 0;
                        font-size: 0.875rem;
                        color: #5a5a5a;
                        line-height: 1.5em;
                        max-height: 4.5em;
                        overflow: hidden;
                    }
                }
                .card-btm {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 35px;
                    font-size: 12px;
                    .avatar {
                        display: flex;
                        align-items: center;
                        &-img {
                            width: 26px;
                            height: 26px;
                        }
                        &-text {
                            margin-left: 1em;
                            line-height: 16px;
                            h3 {
                                margin: 0;
                                font-size: inherit;
                                color: #5a5a5a;
                            }
                            .create-date {
                                color: #8e8e93;
                            }
                        }
                    }

                    .interact {
                        .start,
                        .leave {
                            font-size: inherit;
                            color: #8e8e93;
                            i {
                                font-size: 14px;
                                color: #c7c7cc;
                            }
                        }
                    }
                }
            }
        }
        .cart-inner + .cart-inner {
            margin-left: 15px;
        }
    }

    @media (min-width: 576px) {
        .list-nav,
        .container,
        .page-container {
            max-width: 570px;
        }
    }
    @media (min-width: 1024px) {
        .list-nav,
        .container,
        .page-container {
            max-width: 1030px;
        }
    }

    @media (min-width: 1256px) {
        .list-nav,
        .container,
        .page-container {
            max-width: 1030px;
        }
    }

    @media (min-width: 1396px) {
        .list-nav,
        .container,
        .page-container {
            max-width: 1140px;
        }
    }
}
</style>