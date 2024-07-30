<template>
  <div class="hello">
    <p class="displayName">{{ userData.profile.displayName }} ,你好</p>

    <button @click="sendTargetPicker('morning')">說早安</button>
    <button @click="sendTargetPicker('ticket')">ticket</button>
    <button @click="sendTargetPicker('job')">找工作</button>

    <button @click="logout()">登出</button>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import liff from "@line/liff";
const userData = reactive({
  profile: {},
});

onMounted(async () => {
  // 初始化
  liff
    .init({
      liffId: "2005900855-GEBggzLL", // 在Liff頁面取得liff的Id
    })
    .then(() => {
      // 判斷有無登入
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href });
      }
      // 取得使用者資料（userId, name)
      liff.getProfile().then(function (profile) {
        userData.profile = profile;
        console.log(userData.profile);
      });
    })
    .catch((err) => {
      console.log(err.code, err.message);
    });
});

// flex message
function sendTargetPicker(messageType) {
  if (liff.isApiAvailable("shareTargetPicker")) {
    let message;

    if (messageType == "morning") {
      message = {
        type: "flex",
        altText: "Good Morning",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://i.imgur.com/f22St5w.png",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://line.me/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            action: {
              type: "uri",
              uri: "https://line.me/",
            },
            contents: [
              {
                type: "text",
                text: "Good Morning",
                size: "xl",
                weight: "bold",
              },
              {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "今天可能也是美好的一天",
                        weight: "bold",
                        margin: "sm",
                        flex: 0,
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "吃個東西睡個覺",
                        weight: "bold",
                        margin: "sm",
                        flex: 0,
                      },
                    ],
                  },
                ],
              },
              {
                type: "text",
                text: "happy happy day",
                wrap: true,
                color: "#aaaaaa",
                size: "xxs",
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [],
          },
        },
      };
    } else if (messageType == "ticket") {
      message = {
        type: "flex",
        altText: "Your ticket",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://developers-resource.landpress.line.me/fx/img/01_3_movie.png",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://line.me/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            contents: [
              {
                type: "text",
                text: "BROWN'S ADVENTURE\nIN MOVIE",
                wrap: true,
                weight: "bold",
                gravity: "center",
                size: "xl",
              },
              {
                type: "box",
                layout: "baseline",
                margin: "md",
                contents: [
                  {
                    type: "icon",
                    size: "sm",
                    url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                  },
                  {
                    type: "icon",
                    size: "sm",
                    url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                  },
                  {
                    type: "icon",
                    size: "sm",
                    url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                  },
                  {
                    type: "icon",
                    size: "sm",
                    url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                  },
                  {
                    type: "icon",
                    size: "sm",
                    url: "https://developers-resource.landpress.line.me/fx/img/review_gray_star_28.png",
                  },
                  {
                    type: "text",
                    text: "4.0",
                    size: "sm",
                    color: "#999999",
                    margin: "md",
                    flex: 0,
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "Date",
                        color: "#aaaaaa",
                        size: "sm",
                        flex: 1,
                      },
                      {
                        type: "text",
                        text: "Monday 25, 9:00PM",
                        wrap: true,
                        size: "sm",
                        color: "#666666",
                        flex: 4,
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "Place",
                        color: "#aaaaaa",
                        size: "sm",
                        flex: 1,
                      },
                      {
                        type: "text",
                        text: "7 Floor, No.3",
                        wrap: true,
                        color: "#666666",
                        size: "sm",
                        flex: 4,
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "Seats",
                        color: "#aaaaaa",
                        size: "sm",
                        flex: 1,
                      },
                      {
                        type: "text",
                        text: "C Row, 18 Seat",
                        wrap: true,
                        color: "#666666",
                        size: "sm",
                        flex: 4,
                      },
                    ],
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                margin: "xxl",
                contents: [
                  {
                    type: "image",
                    url: "https://developers-resource.landpress.line.me/fx/img/linecorp_code_withborder.png",
                    aspectMode: "cover",
                    size: "xl",
                    margin: "md",
                  },
                  {
                    type: "text",
                    text: "You can enter the theater by using this code instead of a ticket",
                    color: "#aaaaaa",
                    wrap: true,
                    margin: "xxl",
                    size: "xs",
                  },
                ],
              },
            ],
          },
        },
      };
    } else if (messageType == "job") {
      message = {
        type: "flex",
        altText: "Job",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://i.imgur.com/MCUkENu.jpeg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://www.104.com.tw/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            action: {
              type: "uri",
              uri: "https://line.me/",
            },
            contents: [
              {
                type: "text",
                text: "找工作了!!!!",
                size: "xl",
                weight: "bold",
              },
              {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "找工作不怕難",
                        weight: "bold",
                        margin: "sm",
                        flex: 0,
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "找頭鹿迎新生活",
                        weight: "bold",
                        margin: "sm",
                        flex: 0,
                      },
                    ],
                  },
                ],
              },
              {
                type: "text",
                text: "找工作找工作找工作",
                wrap: true,
                color: "#aaaaaa",
                size: "xxs",
              },
            ],
          },
        },
      };
    }

    // 分享訊息給好友
    liff
      .shareTargetPicker([message])
      .then(function (res) {
        if (res) {
          console.log("Message sent!");
        } else {
          console.log("TargetPicker was closed!");
        }
      })
      .catch(function (error) {
        console.log("something wrong happen", error);
      });
  }
}

// 登出
function logout() {
  if (liff.isLoggedIn) {
    liff.logout();
    window.location.reload(); // 登出後重整一次頁面
  }
}
</script>

<style scoped>
.displayName {
  font-size: 3rem;
  color: darkseagreen;
}
</style>
