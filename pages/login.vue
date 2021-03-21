<template>
  <div>
    <div class="login">
      <!-- <div class="loginTabs">
        <v-tabs>
          <v-tab 
          @change="worker"
          >
            事業の引き継ぎをしたい方
          </v-tab>
          <v-tab 
          @change="owner">
            自営業の方
          </v-tab>
        </v-tabs>
      </div> -->
      <div class="loginCard">
        <form action="" class="pt-5 mt-3"> 
          <h3 class="h3 pt-5">ようこそATOTSUGUへ</h3>
          <p class="pt-1">ログインして続ける</p>
          <div class="form-group pb-2">
            <!-- <label for="form-email">Email</label> -->
            <input type="email" class="form-input form-control" placeholder="メール">
          </div>
          <div class="form-group pb-2">
            <!-- <label for="form-password">password</label> -->
            <input type="password" class="form-input form-control" placeholder="パスワード">
          </div>
          <button type="submit" class="btn">
            ログイン
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

.login {
  width: 800px;
  height: 1000px;
  margin: 5% auto 0;
  color: $base_text_color;
  text-align: center;



  &Card {
    background-color: $base_card_color;
    margin: auto;
    width: 800px;
    height: 700px;
    border: 1px solid $base_card_color;
    border-radius: 10px;

    &__form {
      width: 100%;
      height: 100%;
      border:1px solid black;
    }
  }

  .form-input {
    width: 360px;
    height: 64px;
    border: 1px solid #000000;
    border-radius:  5px;
    margin: auto;
    font-size: $font-18;
  }

  .h3 {
    font-size: $h3;
  }
  .p {
    font-size: $font-16;
  }

  .btn {
    background-color: $base_button_color;
    color: white;
    width: 360px;
    height: 64px;
  }
}



</style>