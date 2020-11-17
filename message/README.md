### 自己封装的 Message 组件，只实现了 js 逻辑，没有实现样式

使用

```javascript
// 两种方式
// 可以通过导入组件的方式使用
// 也可以通过 this.$message 的方式使用
import Vue from "vue";
import Message from "@/base/message";
import { Message } from "@/base/message";
Vue.use(Message);
this.$message.info({
  message: "哈哈哈哈",
  duration: 3000,
});
Message.info({
  message: "哈哈哈哈",
  duration: 3000,
});
```
