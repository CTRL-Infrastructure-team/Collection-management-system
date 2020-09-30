<template>
  <div>
      <a href="#"
      class="btn-flat-border"
      id="btn_book"
      v-on:click="func">予約</a>
      <a href="#"
      class="btn-flat-border"
      id="btn_cancel"
      v-on:click="func">戻る</a>
      <img id="pict" src="~/assets/kudaran.png">
      <h1 id="book_title"><a href="">{{title}}</a></h1>
      <h2 id="book_author">著者：<a href="">{{author}}</a></h2>
      <span id="book_tag">
        <ul>
          タグ：
          <li v-for = "(item,index) in tag" :key = "item.id">
            <a href="">{{tag[index]}}</a>
            <span> </span>
          </li>
        </ul>
      </span>
      <h3 id="book_state">利用状況：{{state}}</h3>
  </div>
</template>

<script>
export default{
  props: {
    func:Function,
    title:String,
    author:String,
    tag:Array,
    state:Array
  }
}
</script>

<style scoped>
.btn-flat-border {
  display: inline-block;
  padding: 1em 3em;/*大きさ　縦、横*/
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 30px;/*ボタンの円さ*/
  transition: .0s;
}
.btn-flat-border:hover {
  background: #67c5ff;
  color: white;
}

#btn_book{
  position:absolute;
  left:20%;
  top:75%;
}
#btn_cancel{
  position:absolute;
  right:20%;
  top:75%;
}
#pict{
  position:absolute;
  left:5%;
  top:10%;
  width:300px;
  height:500px;
}
#detail{
  position:absolute;
  left:50%;
  top:10%;
  width:40%;
  height:60%;
}
#book_title{
  position:absolute; top:10%; left:50%;
  }

#book_author{
  position:absolute; top:20%; left:51%;
  }

#book_tag{
  position:absolute; top:30%; left:48%;
}

#book_state{
  position:absolute; top:40%; left:51%;
}

li{
  display: inline;
}

ul{
  display: inline;
}

</style>