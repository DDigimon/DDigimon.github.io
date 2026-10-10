# Recursive and Looped Learning — 网页使用说明

这是根据提供的 workshop 提案制作的英文会议网页，风格参考 Efficient Reasoning 2026 网站。使用原生 HTML、CSS 和 JavaScript，不需要安装 npm、框架或构建工具。

## 本地查看

解压后，直接双击 `index.html`，即可在浏览器中打开。图片、图标、背景和样式都保存在本地；查看网页无需联网。点击人物主页和相关 workshop 的外部链接时需要联网。

如需使用本地服务器，可在此目录运行：

```sh
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。按 `Ctrl+C` 关闭服务器。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 所有网页内容、人物资料、日期、邮箱及链接 |
| `styles.css` | 配色、布局、字体、电脑及手机适配 |
| `script.js` | 手机导航菜单、菜单关闭、当前版块导航提示 |
| `assets/loop-background.svg` | 原创递归曲线横幅背景 |
| `assets/favicon.svg` | 浏览器标签页图标 |
| `assets/images/` | 嘉宾与组织者图片，包含按要求从 MSU DSE 获取的 Xinnan Dai 照片 |
| `CREDITS.md` | 内容和图片来源 |

## 修改内容

用文本编辑器打开 `index.html` 即可修改。每个版块都有明确的 `id`：

- `news`：最新消息
- `about`：简介、研究方向、可展开的 driving questions
- `call`：征稿范围、论文格式、评审及 LLM 使用说明
- `dates`：关键日期、线下地点及线上参与方式
- `program`：暂定议程结构
- `speakers`：嘉宾、所属机构及报告标题
- `organizers`：组织者、图片、主页、邮箱及研究兴趣
- `participation`：参与及多样性说明
- `related`：相关 workshop
- `contact`：联系邮箱

替换照片时，把新文件放进 `assets/images/`，更新对应 `<img src="...">`。图片通过 CSS 裁成圆形，不需要手动裁剪。

投稿入口确定后，更新 News 和 Call for Papers 中的说明，并将实际 OpenReview 链接添加为 `<a href="实际网址">Submit on OpenReview</a>`。

## 上传到 GitHub Pages

1. 在已有 Jekyll 个人主页中部署此页面时，保留站点的 Jekyll 构建配置。将此目录中的 `index.html`、`styles.css`、`script.js`、`assets/` 上传到仓库的发布目录。应保留 `assets/` 内部结构。
2. 在仓库 Settings → Pages 中选择对应分支和发布目录。
3. 也可以放在已有站点的子目录中。所有网页资源均使用相对路径，支持子目录部署。

其他支持静态网站的平台也可直接上传本目录内容。本站部署于 https://ddigimon.github.io/workshop/recursive-looped-learning-2027/ ，并列在个人主页的 Workshop Organizing 菜单中。

## 内容依据及待确认事项

- 提供的文件名是 `ICLR26_workshop_Loop (1).pdf`，但正文明确为 **ICLR 2027**。网页使用正文中的年份和标题。
- 提案状态保留为 proposed workshop，日期标为 tentative / proposed。
- 提案列出的提交截止日为 2027 年 2 月 1 日，通知日为 2027 年 2 月 26 日，workshop 候选日期为 2027 年 4 月 29–30 日；没有擅自添加 AoE 时区或具体截止时间。
- 具体 workshop 日期、地点、camera-ready 日期、OpenReview 地址、线上参加链接及报告标题尚未提供，网页明确注明待公布。
- 暂定议程为 8 场邀请报告、3 场投稿报告、2 场海报交流和 1 场 panel；提案目前只列出 3 位嘉宾，网页未补造其他嘉宾或时间段。
- 提案中的旧 Google Sites 地址作为相关 workshop 链接展示，没有作为新 workshop 的投稿或官网入口。
- PC 列表中的 `Chengwei Xu` 与组织者 `Chenwei Xu` 按提案分别保留；请在确认名单时核对拼写。
- 人物所属机构以所提供提案为准；图片及个人主页来源见 `CREDITS.md`。

网页已检查桌面和手机布局、移动端菜单、内部锚点、图片加载及 JavaScript 语法。
