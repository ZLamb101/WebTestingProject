import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestingChecklist from './TestingChecklist'

// Test data factory functions
const createMockItem = (overrides = {}) => ({
  id: 'item1',
  text: 'Test item 1',
  category: 'Category A',
  ...overrides
})

const createMockItems = (count = 4) => 
  Array.from({ length: count }, (_, i) => 
    createMockItem({ 
      id: `item${i + 1}`, 
      text: `Test item ${i + 1}`,
      category: i < 2 ? 'Category A' : 'Category B'
    })
  )

const mockItems = createMockItems()

describe('TestingChecklist', () => {
  describe('rendering and structure', () => {
    it('renders complete checklist structure', () => {
      render(<TestingChecklist title="Test Checklist" items={mockItems} />)
      
      // Test title
      expect(screen.getByText('Test Checklist')).toBeInTheDocument()
      
      // Test categories
      expect(screen.getByText('Category A')).toBeInTheDocument()
      expect(screen.getByText('Category B')).toBeInTheDocument()
      
      // Test all items
      mockItems.forEach(item => {
        expect(screen.getByText(item.text)).toBeInTheDocument()
      })
      
      // Test progress indicator
      expect(screen.getByText(/0 \/ 4 completed/)).toBeInTheDocument()
      expect(screen.getByText(/\(0%\)/)).toBeInTheDocument()
      
      // Test reset button
      expect(screen.getByRole('button', { name: /reset checklist/i })).toBeInTheDocument()
    })
  })

  describe('user interactions', () => {
    it('handles complete user workflow', async () => {
      const user = userEvent.setup()
      render(<TestingChecklist title="Test Checklist" items={mockItems} />)
      
      // Initially 0% complete
      expect(screen.getByText(/0 \/ 4 completed/)).toBeInTheDocument()
      
      // Check first item
      const firstCheckbox = screen.getByRole('checkbox', { name: /test item 1/i })
      await user.click(firstCheckbox)
      expect(firstCheckbox).toBeChecked()
      expect(screen.getByText(/1 \/ 4 completed/)).toBeInTheDocument()
      
      // Check second item
      const secondCheckbox = screen.getByRole('checkbox', { name: /test item 2/i })
      await user.click(secondCheckbox)
      expect(secondCheckbox).toBeChecked()
      expect(screen.getByText(/2 \/ 4 completed/)).toBeInTheDocument()
      
      // Reset all
      await user.click(screen.getByRole('button', { name: /reset checklist/i }))
      expect(firstCheckbox).not.toBeChecked()
      expect(secondCheckbox).not.toBeChecked()
      expect(screen.getByText(/0 \/ 4 completed/)).toBeInTheDocument()
    })

    it('applies visual feedback to checked items', async () => {
      const user = userEvent.setup()
      render(<TestingChecklist title="Test Checklist" items={mockItems} />)
      
      const itemText = screen.getByText('Test item 1')
      const checkbox = screen.getByRole('checkbox', { name: /test item 1/i })
      
      // Initially not checked
      expect(itemText).not.toHaveClass('line-through')
      
      // Check item
      await user.click(checkbox)
      expect(itemText).toHaveClass('line-through', 'text-gray-500')
    })
  })

  describe('progress tracking', () => {
    it('updates progress bar correctly', async () => {
      const user = userEvent.setup()
      render(<TestingChecklist title="Test Checklist" items={mockItems} />)
      
      const progressBar = document.querySelector('.bg-blue-600.h-2.rounded-full')
      expect(progressBar).toHaveStyle('width: 0%')
      
      // Check items and verify progress
      await user.click(screen.getByRole('checkbox', { name: /test item 1/i }))
      expect(progressBar).toHaveStyle('width: 25%')
      
      await user.click(screen.getByRole('checkbox', { name: /test item 2/i }))
      expect(progressBar).toHaveStyle('width: 50%')
    })
  })

  describe('accessibility', () => {
    it('has proper labels and roles', () => {
      render(<TestingChecklist title="Test Checklist" items={mockItems} />)
      
      // Test checkbox labels
      mockItems.forEach(item => {
        const checkbox = screen.getByRole('checkbox', { name: new RegExp(item.text, 'i') })
        expect(checkbox).toBeInTheDocument()
      })
      
      // Test button role
      expect(screen.getByRole('button', { name: /reset checklist/i })).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('handles empty items array', () => {
      render(<TestingChecklist title="Empty Checklist" items={[]} />)
      
      expect(screen.getByText('Empty Checklist')).toBeInTheDocument()
      expect(screen.getByText(/0 \/ 0 completed/)).toBeInTheDocument()
    })

    it('handles single item', () => {
      const singleItem = [createMockItem()]
      render(<TestingChecklist title="Single Item" items={singleItem} />)
      
      expect(screen.getByText('Single Item')).toBeInTheDocument()
      expect(screen.getByText(/0 \/ 1 completed/)).toBeInTheDocument()
      expect(screen.getByText('Test item 1')).toBeInTheDocument()
    })
  })
})