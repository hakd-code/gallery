// 图片分享系统 —— 入口
import { createApp } from './src/app.js';

const PORT = Number(process.env.PORT || 3100);
const app = createApp();

app.listen(PORT, () => {
  console.log(`[gallery] 已启动: http://localhost:${PORT}`);
  app.locals.startTasks();
});
