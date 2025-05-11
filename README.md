![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

# WordPress XML to JSON Converter

A simple TypeScript project to convert WordPress XML export files to structured JSON, making it easier to migrate your WordPress blog to a static site or modern frontend framework like React.

---

## 📦 Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/wordpress-xml-to-json.git
cd wordpress-xml-to-json
```

2. **Install Dependencies:**

```bash
npm install
```

---

## 🚀 Usage

### **Convert WordPress XML to JSON**

1. **Place your WordPress export file** (e.g., `srihariprabaharan-export.xml`) in the project root.

2. **Run the conversion:**

```bash
npm run dev
```

This will create an `output.json` file in the project root.

---

## 📂 Directory Structure

```
wordpress-xml-to-json/
├── node_modules/
├── dist/
├── src/
│   ├── index.ts           # Main entry point
│   └── utils/
│       └── xmlToJson.ts   # Core XML to JSON logic
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
├── srihariprabaharan-export.xml
└── output.json
```

---

## 📝 Configuration

### **Update File Paths (Optional)**

If your XML file is named differently, update the paths in **`src/index.ts`**:

```typescript
const xmlFilePath = './srihariprabaharan-export.xml';
const jsonFilePath = './output.json';
```

---

## 🛠️ Build

To compile the TypeScript files to JavaScript:

```bash
npm run build
```

---

## 🤖 Run in Production

After building, you can run the compiled files:

```bash
node dist/index.js
```

---

## 🧪 Testing

You can add test cases using **Jest** or any other test framework to ensure the conversion works as expected.

---

## 📄 License

MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📞 Support

For support, open an issue or reach out to [srihariph.com](http://srihariph.com/).

---

## ⭐️ Show Your Support

If this project helped you, give it a ⭐️ on GitHub!
