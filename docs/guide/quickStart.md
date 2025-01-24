### 使用

#### 1.全量使用 `main.js`中导入

```
import uvUI from 'simgle-ui'
import 'simgle-ui/dist/es/style.css'

app.use(uvUI)
```

#### 2.按需引入 在`main.js`中导入样式文件

```
import 'simgle-ui/dist/es/style.css'
```

需要用到组件的地方引入对应组件即可

```vue
<template>
  <div>
    <sButton type="primary">切换</sButton>
  </div>
</template>

<script setup>
import { sButton } from "simgle-ui";
</script>
```
