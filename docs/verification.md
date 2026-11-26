# 验证记录

- `npm ci` 已成功安装锁定依赖。
- `npm run lint`：ESLint 与 TypeScript 通过。
- 前 11 秒已渲染为 H.264，按秒检查书本进入、对话、合书与展开。
- 第 720 帧已渲染为 PNG，检查立体层级、中文字体、字幕与分镜。
- 检查后修复盒子残留在画面边缘、书封旋转方向和未出现道具提前可见的问题。



## 完整输出

- 完整 1080p H.264 渲染已成功完成，`out/popup-book.mp4`。
- FFmpeg 完整解码通过：1146 视频帧、1920×1080、30 fps、视频时长 38.20 秒。
- AAC 音轨：48 kHz、立体声；封装总时长 38.21 秒（AAC 编码填充）。
- `npm run build` 已通过。
- 完整输出按每 2 秒抽帧，检查中段立体分镜、拉远比较、合书散纸及最后展开。


## GitHub 与绑定

- 公开仓库：https://github.com/fanglifeng/popup-book-constraints-ad1b3f0a
- GitHub CLI 验证仓库 visibility 为 PUBLIC，默认分支 main。
- 首次推送后 `git rev-parse HEAD` 与 `git ls-remote origin refs/heads/main` 一致。
- 绑定 API 返回 HTTP 200。
- 响应 recording_id：`ad1b3f0a-1770-4743-a28f-9a7ad9c378af`。
- 响应 github_url：`https://github.com/fanglifeng/popup-book-constraints-ad1b3f0a`。
- 两字段均通过严格相等验证。没有调用删除接口。
- 提交前凭证及签名 URL 扫描通过。
- Remotion Studio 成功加载第 735 帧；`get_current_error` 返回 null。
