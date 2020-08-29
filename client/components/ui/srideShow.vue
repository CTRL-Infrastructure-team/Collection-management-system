<template>
    <div class="sride-wrapper">
        <div class="srideShow">
            <div 
                v-for="(sride, index) in srideStyle"
                :key="index"
                class="sride_box"
                @touchstart="recodeX"
                @touchend="compareX"
            >
                <!-- @click="doModal" -->
                <img :src="sride.img" :style="sride.style" class="sride_img" />
            </div>
            <!-- <span class="sride_title">{{ nowTitle }}</span> -->
        </div>
        <!-- <div class="flex">
            <div
                v-for="(value,index) in srideStyle"
                :key="index"
                class="box"
                :class="{ box_active: value.isActive }"
                @click="changeActive(index)"
            ></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
            touch: 0,
            intervalID:''
        };
    },
    props:{
        srideData:{
            type: Array,
            required: true
        }
    },
    methods:{
        changeActive(index) {
            clearInterval(this.intervalID);
            this.counter = index;
            this.startInterval();
        },
        startInterval() {
            this.intervalID = setInterval(() => {
                this.counter = (this.counter + 1) % this.srideData.length;
            }, 5000);
        },
        // doModal() {
        //     this.$emit("open", this.counter);
        // },
        recodeX(event) {
            this.touchX = this.getClientX(event);
            clearInterval(this.intervalID);
        },

        compareX(event) {
            let subtraction = this.touchX - this.getClientX(event);
            if(Math.abs(subtraction) < 40) return;
            if(subtraction < 0){
                this.counter
                    ? this.counter
                    : (this.counter = this.srideData.length - 1);
            } else this.counter = (this.counter + 1) % this.srideData.length;

            this.startInterval();
        },

        getClientX(event) {
            if(event.touches) {
                if(event.touches.clientX) {
                    return event.touches[0].clientX;
                } else return event.changedTouches[0].clientX;
            } else return event.target.clientX;
        }
    },

    computed: {
        srideStyle() {
            let defaultStyle = this.srideData.map((value, index) => {
                value.style = {
                    left: 70 * (index - this.counter) + 20 + "%" ,
                    transition: "all 0.4s ease"
                };
                if(this.counter === index) {
                    value.isActive = true;
                } else {
                    value.isActive = false;
                }
                return value;
            });
            return defaultStyle;
        },
        nowTitle() {
            return this.srideData[this.counter].title;
        }
    },
    created() {
        this.startInterval();
    },
    destroyed() {
        clearInterval(this.intervalID);
    }
};
</script>
<style lang="scss" scoped>
.sride-wrapper {
    overflow: hidden;
}

.srideShow {
    position: relative;
    height: 20vh;
    @include mq {
        height: 40vh;
    }
}
.sride {
    &_img {
        position: absolute;
        width: 60%;
        left:15%;
        height: 20vh;
        object-fit: cover;
        @include mq {
            height: 40vh;
        }
    }
    &_title {
        position: absolute;
        bottom: 5%;
        right: 5%;
        z-index: 2;
        color: rgba(#f0f0f0, 0.8);
        font-weight: bold;
        font-size: 20px;
        font-family: Quicksand, sans-serif;
        opacity: 1;
        transition: all 0.3s;
        margin: 0;
        padding: 0;
    }
    &_box {
        &::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: linear-gradient(to right,
                rgba(0, 0, 0, 0.2) 10%,
                rgba(0, 0, 0, 0) 10% 90%,
                rgba(0, 0, 0, 0.2) 90%
            );
        }
    }
}

.flex {
    display: flex;
    justify-content: space-around;
    background: #353837;
    padding: 0 10%;
}


</style>