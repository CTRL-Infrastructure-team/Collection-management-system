<template>
    <div>
        <div class="srideShow">
            <div 
                v-for="(sride,index) in srideStyle"
                :key="index"
                @click="doModal"
                @touchstart="recodeX"
                @touchend="compareX"
                class="sride_box"
            >
                <img :src="sride.img" :style="style.style" class="sride_img" />
            </div>
            <span class="sride_title">{{ nowTitle }}</span>
        </div>
        <div class="flex">
            <div
                v-for="(value,index) in srideStyle"
                :key="index"
                class="box"
                :class="{ box_active: value.isActive }"
                @click="changeActive(index)"
            ></div>
        </div>
    </div>
</template>

<script>
let intervalID;
export default {
    data(){
        return{
            counter: 0,
            touch: 0
        };
    },
    props:{
        sridedata:{
            type: Array,
            required: true
        }
    },
    methods:{
        changeActive(index) {
            clearInterval(intervalID);
            this.counter = index;
            this.startInterval();
        },
        
        startinterval() {
            intervalID = setInterval(() => {
                this.counter = (this.counter + 1) % this.srideData.lemgth;
            }, 5000);
        },

        doModal() {
            this.$emit("open", this.counter);
        },

        recodeX(event) {
            this.touchX = this.getClientX(event);
            clearinterval(intervalID);
        },

        compareX(event) {
            let subtraction = this.touchX - this.getClientX(event);
            if(Math.abs(subtraction) < 40) return;
            if(subtraction < 0){
                this.counter
                    ? this.counter
                    : (this.counter = this.srideData.length - 1);
            } else this.counter = (this.counter + 1) % this.srideData.length;

            this.startinterval();
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
            let defaultStyle = this.srideData.map((calue, index) => {
                value.style = {
                    left: 100 * (index - this,counter) + "%",
                    transition: "all 0.4s ease"
                };
                if(this.counter === index) {
                    value.isActive = true;
                }else calue.isActive = false;
                return calue;
            });
            return defaultStyle;
        },
        nowTitle() {
            return this.srideData[tis.counter].title;
        }
    },
    created() {
        this.startInterval();
    },
    destroyed() {
        clearInterval(intervalID);
    }
};
</script>
<style lang="scss" scoped>
.srideShow {
    position: relative;
    height: 35vh;
    overflow: hidden;
}
.sride {
    &_img {
        position: absolute;
        width: 100%;
        height: 35vh;
        object-fit: cover;
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
            background: linear-gradient(
                rgba(0, 0, 0, 0) 0 80%,
                rgba(0, 0, 0, 0.2) 80% 100%
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

.box {
    margin-top: 10px;
    margin-bottom: 10px;
    background: rgb(143, 142, 142);
    border: solid 1px #5c5a5a;
    width: 22%;
    height: 9px;
    &_active {
        background: #f0f0f0;
    }
}
</style>