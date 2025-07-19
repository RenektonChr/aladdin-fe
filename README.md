# Aladdin Frontend

这是一个基于 Next.js 15 和 Tailwind CSS 4 构建的现代化 Web3 平台前端应用。

## 功能特性

- 🎨 现代化响应式设计
- 🧭 智能导航栏组件
- 💰 钱包连接功能
- 📱 移动端适配
- ⚡ 基于 Next.js 15 的快速开发体验

## 导航栏组件

### 功能说明

导航栏包含以下主要部分：

1. **左侧品牌区域**
   - Aladdin 项目标题
   - 金色渐变图标

2. **中间导航菜单**
   - Agents（智能代理）
   - Jobs（任务管理）
   - Wallet（钱包功能）
   - Dashboard（仪表板）

3. **右侧钱包连接**
   - 连接/断开钱包按钮
   - 连接状态显示

### 使用方法

```tsx
import Navbar from './components/Navbar';

function App() {
  const handleNavChange = (navItem: string) => {
    console.log('当前选中:', navItem);
    // 处理导航变化逻辑
  };

  return (
    <div>
      <Navbar onNavChange={handleNavChange} />
      {/* 其他内容 */}
    </div>
  );
}
```

### 组件属性

| 属性 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `onNavChange` | `(navItem: string) => void` | 是 | 导航项变化时的回调函数 |

## 开发指南

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 技术栈

- **框架**: Next.js 15
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **字体**: Geist Sans & Geist Mono

## 项目结构

```
aladdin-fe/
├── app/
│   ├── components/
│   │   └── Navbar.tsx          # 导航栏组件
│   ├── globals.css             # 全局样式
│   ├── layout.tsx              # 根布局
│   └── page.tsx                # 主页面
├── public/                     # 静态资源
└── package.json
```

## 自定义配置

### 修改导航项

在 `Navbar.tsx` 中修改 `navItems` 数组：

```tsx
const navItems = ['Agents', 'Jobs', 'Wallet', 'Dashboard'];
```

### 修改样式主题

在 `globals.css` 中自定义 CSS 变量：

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
