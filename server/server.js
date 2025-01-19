const express = require('express');
const path = require('path');

const app = express();
const PORT = 3080;

// 設定靜態資源目錄
app.use(express.static(path.join(__dirname, 'public')));

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`The server is running on: http://localhost:${PORT}`);
});



