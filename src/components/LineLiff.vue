<template>
  <div class="hello">
    <p class="displayName">{{ userData.profile.displayName }} ,你好</p>

    <button @click="sendTargetPicker('morning')">說早安</button>
    <button @click="sendTargetPicker('night')">說晚安</button>
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
  liff
    .init({
      liffId: "2005900855-GEBggzLL",
    })
    .then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href });
      }
      liff.getProfile().then(function (profile) {
        userData.profile = profile;
        console.log(userData.profile);
      });
    })
    .catch((err) => {
      console.log(err.code, err.message);
    });
});

function sendTargetPicker(messageType) {
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
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
    } else if (messageType == "night") {
      message = {
        type: "flex",
        altText: "Good Night",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://i.imgur.com/IN5FhyR.jpeg",
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
                text: "Good Night",
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
                        text: "祝你做個好夢",
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
                        text: "舒舒服服快快樂樂",
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
                text: "sleeping ...",
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
        console.log("something wrong happen");
      });
  }
}

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
