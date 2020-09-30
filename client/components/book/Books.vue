<template>
  <div class="book_box">
    <img src="~assets/img/img1.jpg" class="book_image" alt="例の顔">
    <span class="book_info">
      <h1 class="book_title"><a href="">{{title}}</a></h1>
      <h2 class="book_author"><a href="">著者：{{author}}</a></h2>
      <h3 class="book_language"><a href="">言語：{{language}}</a></h3>

      <span class="book_tag">
        <ul>
          タグ：
          <li v-for = "(item,index) in tag" :key = "item.id">
            <a href="">{{tag[index]}}</a>
            <span> </span>
          </li>
        </ul>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    ident: { type: String },
    title: { type: String },
    author: { type: String },
    language: { type: String },
    tag: { type: Array }
  }
}
</script>

<style scoped>
.book_box {
  position: center;
}

.book_image{
  width: 100px;
  height: 100px;
  position: relative; 
  top: calc(30px);
  left: calc(30% - 100px);
}

.book_info{
  height:25%;
  position:relative; left:35%
}

.book_id{
  position:relative; top:5%
  }

.book_title{
  position:relative; top:110%
  }

.book_author{
  position:relative; top:75%
  }

.book_language{
  position:relative; top:85%
  }

.book_tag{
  position:relative; left:-45px; top:95%
}

li{
  display: inline;
}

ul{
  display: inline;
}
</style>