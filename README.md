# WebTestingProject - Software Testing Blog

A modern, responsive blog website built with React, Vite, TypeScript, and Tailwind CSS. This project showcases software testing expertise and serves as a professional portfolio.

**Live Demo**: https://zlamb101.github.io/WebTestingProject

## 🚀 Features

- **Responsive Design**: Modern, mobile-first design using Tailwind CSS
- **Multi-page Navigation**: Home, Posts, Projects, and Testing Strategy pages
- **Professional Layout**: Clean navigation, footer, and content structure
- **TypeScript**: Full type safety and better development experience
- **Fast Development**: Vite for lightning-fast hot module replacement
- **Comprehensive Testing**: 97.63% code coverage with 44 unit/component tests
- **E2E Testing**: 184/185 E2E tests passing (99.5% success rate) across 5 browsers

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout component with navigation
├── pages/
│   ├── HomePage.tsx        # Homepage with personal info and recent posts
│   ├── PostsPage.tsx       # All blog posts with filtering
│   └── ProjectsPage.tsx    # Project showcase with categories
├── App.tsx                 # Main app component with routing
├── main.tsx               # App entry point
└── index.css              # Tailwind CSS imports
```

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vitest** - Fast unit testing with V8 coverage
- **Playwright** - Cross-browser E2E testing
- **React Testing Library** - Component testing utilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.11.1 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd WebProject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🧪 Testing

This project includes a comprehensive testing suite with excellent coverage:

### Test Coverage
- **Unit/Component Tests**: 97.63% code coverage
- **E2E Tests**: 184/185 tests passing (99.5% success rate)
- **Total Tests**: 229 tests across unit, component, and E2E

### Test Commands
```bash
# Run unit tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run all tests
npm run test:all
```

### Testing Tools
- **Vitest**: Fast unit testing with Vite integration
- **React Testing Library**: Component testing utilities
- **Playwright**: Cross-browser E2E testing
- **V8 Coverage**: Native coverage reporting

### Browser Support
- ✅ Chromium
- ✅ Firefox  
- ✅ WebKit (Safari)
- ✅ Mobile Chrome
- ✅ Mobile Safari

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:e2e` - Run E2E tests
- `npm run test:all` - Run all tests

## 🎨 Customization

### Adding New Posts

Edit the `recentPosts` array in `src/pages/HomePage.tsx` and `allPosts` array in `src/pages/PostsPage.tsx`:

```typescript
const newPost = {
  id: 4,
  title: "Your Post Title",
  excerpt: "Post excerpt...",
  date: "2024-01-20",
  readTime: "5 min read",
  category: "Category",
  tags: ["Tag1", "Tag2"]
}
```

### Adding New Projects

Edit the `projects` array in `src/pages/ProjectsPage.tsx`:

```typescript
const newProject = {
  id: 5,
  title: "Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2"],
  category: "Category",
  status: "Completed",
  // ... other properties
}
```

### Styling

The project uses Tailwind CSS. You can:
- Modify colors in `tailwind.config.js`
- Add custom styles in `src/index.css`
- Use Tailwind utility classes throughout components

## 🧪 Testing

This project features a comprehensive testing suite with **97.63% code coverage**:

### **Test Suite Overview**
- **81+ tests** across multiple test files
- **Unit Tests**: 19 tests covering utility functions (100% coverage)
- **Component Tests**: 12 tests covering React components (98%+ coverage)  
- **Integration Tests**: 13 tests covering app routing and navigation
- **E2E Tests**: 37 tests covering cross-browser functionality across 7 test files

### **Testing Tools**
- **Vitest** - Fast unit and component testing with Vite integration
- **React Testing Library** - Component testing utilities
- **Playwright** - Cross-browser E2E testing
- **happy-dom** - Lightweight DOM environment for testing
- **@testing-library/user-event** - Realistic user interaction simulation

### **Test Scripts**
```bash
# Unit and component tests
npm run test          # Run all tests
npm run test:coverage # Run tests with coverage report
npm run test:ui       # Run tests with UI interface

# E2E tests
npm run test:e2e         # Run E2E tests
npm run test:e2e:ui      # Run E2E tests with UI
npm run test:e2e:headed  # Run E2E tests in headed mode
npm run test:e2e:debug   # Run E2E tests in debug mode

# All tests
npm run test:all         # Run unit + E2E tests
```

### **Coverage Report**
```
File                | % Stmts | % Branch | % Funcs | % Lines
--------------------|---------|----------|---------|--------
All files           |  97.63  |   94.00  |   93.33 |  97.63
src/components      |  99.15  |   93.75  |   100   |  99.15
src/pages           |  99.83  |   95.65  |   100   |  99.83
src/utils           |   100   |   100    |   100   |   100
src/data            |   100   |   100    |   100   |   100
```

### **Testing Best Practices**
- ✅ **Behavior-driven testing** - Tests what users see and do
- ✅ **Semantic queries** - Uses `getByRole`, `getByText` for stability
- ✅ **Factory functions** - Reusable test data creation
- ✅ **Consolidated tests** - Complete user workflows
- ✅ **Accessibility testing** - Proper roles and labels
- ✅ **Cross-browser testing** - Ensures compatibility across browsers
- ✅ **Responsive testing** - Validates mobile and desktop layouts

### **Test Structure**
```
tests/
├── e2e/                    # End-to-end tests (37 tests)
│   ├── basic-navigation.spec.ts    # 4 tests
│   ├── navigation.spec.ts          # 4 tests
│   ├── homepage.spec.ts            # 6 tests
│   ├── blog-posts.spec.ts          # 4 tests
│   ├── projects.spec.ts            # 5 tests
│   ├── testing-strategy.spec.ts    # 7 tests
│   └── responsive.spec.ts          # 7 tests
└── src/                    # Unit and component tests (44 tests)
    ├── components/
    │   ├── Layout.test.tsx         # 5 tests
    │   └── TestingChecklist.test.tsx # 7 tests
    ├── pages/
    ├── utils/
    │   └── helpers.test.ts         # 19 tests
    └── App.test.tsx                # 13 tests
```

### **Test Results & Debugging**

When tests fail, Playwright automatically generates helpful debugging artifacts:

#### **Test Results Location**
```
test-results/
├── playwright-report/          # HTML test report
├── results.json               # JSON test results
├── results.xml                # JUnit test results
└── [test-name]-[browser]/      # Individual test failures
    ├── test-failed-1.png      # Screenshot at failure
    ├── video.webm            # Video recording
    └── error-context.md      # Error details
```

#### **Viewing Test Results**
```bash
# Open HTML report in browser
npx playwright show-report

# View specific test results
npx playwright show-report test-results/playwright-report/index.html
```

#### **Debugging Failed Tests**
```bash
# Run specific test in debug mode
npm run test:e2e:debug -- --grep="should load homepage"

# Run tests in headed mode to see browser
npm run test:e2e:headed -- --grep="navigation"

# Run single browser for faster debugging
npx playwright test --project=chromium
```

#### **Common Test Artifacts**
- **Screenshots**: Captured at the moment of failure
- **Videos**: Full test execution recording
- **Traces**: Step-by-step test execution (when enabled)
- **Console Logs**: Browser console output during tests
- **Network Logs**: HTTP requests/responses (when enabled)

### **Future Testing Plans**
- [x] E2E tests with Playwright ✅
- [ ] Visual regression testing
- [ ] Accessibility testing automation
- [ ] Performance testing

## 📦 Deployment

### GitHub Pages (Recommended for Portfolio)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Create a workflow file (see below) for automatic deployment

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ for the software testing community