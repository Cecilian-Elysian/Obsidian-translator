# Obsidian Translator

[English](#english) | [中文](#中文)

---

## English

### Description

Obsidian Translator is an Obsidian plugin that automatically translates plugin settings pages from English to Chinese using the MiniMax API. It helps users who are not comfortable with English to understand and configure installed plugins.

### Features

- **Automatic Translation**: Automatically detects and translates English text in plugin settings pages
- **Hover to View Original**: Hover over translated text to see the original English
- **Translation Caching**: Cached translations avoid repeated API calls, saving costs
- **Easy Configuration**: Simple settings interface to configure your MiniMax API key

### Prerequisites

- [Obsidian](https://obsidian.md/) (version 0.15.0 or higher)
- A MiniMax API key ([Get one here](https://platform.minimaxi.com/))

### Installation

1. Download or clone this repository
2. Run `npm install` to install dependencies
3. Run `node build.js` to build the plugin
4. Copy the files from the `下载` folder to your Obsidian plugin directory:
   ```
   your-vault/.obsidian/plugins/obsidian-translator/
   ```
5. Enable the plugin in Obsidian: **Settings → Community Plugins → Enable Obsidian Translator**

### Configuration

1. Open **Settings → Community Plugins → Obsidian Translator → Gear Icon**
2. Enter your MiniMax API key
3. Enable translation if not already enabled
4. Optionally enable "Show Original on Hover"

### Running the Proxy Server

Due to CORS restrictions, you need to run a local proxy server:

```bash
cd your-vault/.obsidian/plugins/obsidian-translator
node proxy.js
```

The proxy will run on `http://localhost:3456` and forward requests to the MiniMax API.

### Development

```bash
# Install dependencies
npm install

# Build
node build.js

# The built files will be in the `下载` folder
```

### License

MIT

---

## 中文

### 插件简介

Obsidian Translator 是一个 Obsidian 插件，可以将插件的设置页面从英文自动翻译成中文。它使用 MiniMax API 进行翻译，帮助不熟悉英文的用户理解和使用已安装的插件。

### 功能特点

- **自动翻译**：自动检测并翻译插件设置页面中的英文文本
- **悬停查看原文**：将鼠标悬停在翻译后的文字上可查看原始英文
- **翻译缓存**：已翻译的内容会被缓存，避免重复调用 API，节省费用
- **简单配置**：简洁的设置界面，方便配置 MiniMax API key

### 前置要求

- [Obsidian](https://obsidian.md/) (版本 0.15.0 或更高)
- MiniMax API Key（[在此获取](https://platform.minimaxi.com/)）

### 安装步骤

1. 下载或克隆此仓库
2. 运行 `npm install` 安装依赖
3. 运行 `node build.js` 构建插件
4. 将 `下载` 文件夹中的文件复制到你的 Obsidian 插件目录：
   ```
   你的保险库/.obsidian/plugins/obsidian-translator/
   ```
5. 在 Obsidian 中启用插件：**设置 → 第三方插件 → 启用 Obsidian Translator**

### 配置说明

1. 打开 **设置 → 第三方插件 → Obsidian Translator → 齿轮图标**
2. 输入你的 MiniMax API Key
3. 确保翻译功能已启用
4. 可选：启用"悬停显示原文"

### 运行代理服务器

由于 CORS 跨域限制，你需要运行一个本地代理服务器：

```bash
cd 你的保险库/.obsidian/plugins/obsidian-translator
node proxy.js
```

代理服务器会在 `http://localhost:3456` 上运行，并将请求转发到 MiniMax API。

### 开发说明

```bash
# 安装依赖
npm install

# 构建
node build.js

# 构建后的文件会在 `下载` 文件夹中
```

### 许可证

MIT