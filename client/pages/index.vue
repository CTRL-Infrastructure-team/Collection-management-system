<template>
  <div class="content">
    <srideSwow :srideData="mainGuideprops"
    class="smartPhone"
    @open="openModal($event)"
    />
    <div class="flex">
      <mainGide class="mp0 desktop"
      :img="item.img"
      v-for="(item,index) in mainGuideprops"
      :key="index"
      :name="item.title"
      @open="openModal(index, $event)"
      />
      <myModal v-if="modal" @clone="cloneModal" class="black modal">
        <div class="modal-flex">
          <img :src="modalImg" class="img modal-flex_img" />
          <div class="modal-flex-text">
            <h2 class="modal-flex-text_title">{{modalText.title}}</h2>
            <p>{{modalText.body}}</p>
          </div>
        </div>
      </myModal>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
$modalBorder: #8193a9;

.content {
  width: 100%;
}

@media screen and (max-width: 767px){
  .flex {
    display: flex;

    &_center {
      justify-content: center;
      align-items: center;
    }
    &_around {
      margin: 20px 0px;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    &_center {
      justify-content: center;
      align-items: center;
    }
    &_around {
      margin: 20px 0px;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  }
}
.img {
  display: none;
  @include pq(sm) {
    display: inline-block;
    object-fit: cover;
    opacity: 0.6;
    transition: all 0.5s;
    height: 200px;
    width: 200px;
  }
  &:hover {
    object-fit: cover;
    overflow: hidden;
  }
}

.smartPhone {
  display: block;
  @include mq() {
    display: none;
  }
}

.desktop {
  display: none;

  @include mq(){
    display: block;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}

.modal {
  width: 90%;
  &-flex {
    color: #cecece;
    @include mq(sm) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &_img {
      width: 35%;
      overflow: hidden;
      border-radius: 4px;
    }
    &-text {
      width: 100%;
      line-height: 30px;
      @include mq(sm) {
        width: 60%;
      }

      &_title {
        font-family: monospace;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 20px;
        margin-top: 10px;
        padding-left: 5px;
        border-bottom: 1px solid $modalBorder;
        border-left: 4px solid $modalBorder;
      }
    }
  }
}
</style>
