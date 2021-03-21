<template>
    <div class="header-inner">
        <h1 class="header-title">
            <a href="/" >
              <img src="~/assets/img/logo.png" class="img" />
            </a>
        </h1>

        <div class="headerPC-nav">
          <div>
            <v-tabs>
              <nav class="nav">
                <ul>
                  <li>
                    <NuxtLink to="/top" class="link">事業一覧</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/chat" class="link">チャット一覧</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="" class="link">事業を投稿</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="business/show" class="link">My事業</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/user/_id" class="link">
                      <v-icon>mdi-account-circle</v-icon>
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </v-tabs>
          </div>
        </div>
    </div>
</template>



<script>

</script>

<style lang="scss" scoped>

    .header {

        &-inner{
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 1.5% 0;
            align-items: center;
            justify-content: space-between;
            background-color: $base_card_color;

            a {
                color: $base_heading_color;
                text-decoration: none;
            }
        }

      &-title {
        width: 300px;
        height: 47px;
        align-items: center;
      }

    }
    .nav {
      > ul {
          display: flex;
          list-style: none;
          align-items: center;
          

          > li {
            // border: 1px solid #000000;
            // border-radius: 3px;
            font-size: $font-18;
            margin: 0 15px 0;
              // flex: 1;
          }
      }

  }

  .link {
    padding: 10px 20px;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

    
    @media screen and (max-width: 768px) {
        .header-title {
            margin: auto;
        }
        .headerPC-nav {
            display: none;
        }
    }

</style>



