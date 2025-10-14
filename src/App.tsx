import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import ProjectsPage from './pages/ProjectsPage'
import TestingStrategyPage from './pages/TestingStrategyPage'

function App() {
  return (
    <Router basename="/WebTestingProject">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testing-strategy" element={<TestingStrategyPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App