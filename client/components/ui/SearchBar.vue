<template>
  <div class="wrapper">
    <div class="search-box">
      <input 
        type="text" 
        class="search-input" 
        v-model="keyword"
      />
    </div>
    <!-- /.search-box -->
    <div 
      class="search-button"
      @click="postData"
    >
      検索
    </div>
    <!-- /.search-button -->
  </div>
  <!-- /.wrapper -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      keyword: ""
    }
  },
  methods: {
    postData: function() {
      console.log(this.keyword);
      // axios.post("/",
      //   { keyword: this.keyword },
      //   { header: { "Content-Type": "application/json" }}
      // ).then(result => {
      //   console.log("post data!");
      // });
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  max-width: 1000px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @include mq() {
    width: 80%;
    flex-direction: row;
  }
}

.search {
  &-input {
    height: 40px;
    width: 100%;
    line-height: 40px;
    border: 2px solid #D8D8D8;
    border-radius: 5px;
    font-size: calc(15px + 0.3vw);
  }
  &-box {
    width: 100%;
    @include mq() {
      width: 85%;
    }
  }
  &-button {
    height: 40px;
    line-height: 40px;
    width: 100px;
    margin: 20px auto;
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    background: #B1DBD2;
    cursor: pointer;
    font-size: calc(15px + 0.3vw);
    @include mq() {
      width: 10%;
      margin: 0;
    }
  }
}
</style>