import { describe, it, expect } from 'vitest'
import { formatDate, getStatusColor, getPlaceholderImage, truncateText } from './helpers'

describe('formatDate', () => {
  describe('valid dates', () => {
    it('formats ISO date string correctly', () => {
      expect(formatDate('2024-01-15')).toBe('January 15, 2024')
    })

    it('formats different months correctly', () => {
      expect(formatDate('2024-12-25')).toBe('December 25, 2024')
    })

    it('handles leap year dates', () => {
      expect(formatDate('2024-02-29')).toBe('February 29, 2024')
    })
  })

  describe('edge cases', () => {
    it('handles single digit days and months', () => {
      expect(formatDate('2024-01-01')).toBe('January 1, 2024')
    })
  })
})

describe('getStatusColor', () => {
  const statusTestCases = [
    { status: 'Completed', expected: 'bg-green-100 text-green-800' },
    { status: 'In Progress', expected: 'bg-yellow-100 text-yellow-800' },
    { status: 'Planning', expected: 'bg-gray-100 text-gray-800' },
    { status: 'Unknown', expected: 'bg-gray-100 text-gray-800' },
    { status: '', expected: 'bg-gray-100 text-gray-800' }
  ]

  statusTestCases.forEach(({ status, expected }) => {
    it(`returns correct color for "${status}" status`, () => {
      expect(getStatusColor(status)).toBe(expected)
    })
  })
})

describe('getPlaceholderImage', () => {
  it('generates placeholder image with default dimensions', () => {
    const result = getPlaceholderImage()
    expect(result).toBe('https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Project+Image')
  })

  it('generates placeholder image with custom dimensions', () => {
    const result = getPlaceholderImage(300, 200)
    expect(result).toBe('https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Project+Image')
  })

  it('generates placeholder image with square dimensions', () => {
    const result = getPlaceholderImage(500, 500)
    expect(result).toBe('https://via.placeholder.com/500x500/4F46E5/FFFFFF?text=Project+Image')
  })
})

describe('truncateText', () => {
  describe('truncation behavior', () => {
    it('truncates long text with ellipsis', () => {
      expect(truncateText('Hello world', 5)).toBe('Hello...')
    })

    it('truncates text with spaces correctly', () => {
      expect(truncateText('Hello world test', 8)).toBe('Hello wo...')
    })
  })

  describe('no truncation needed', () => {
    it('returns original text if shorter than max length', () => {
      expect(truncateText('Hi', 10)).toBe('Hi')
    })

    it('returns original text if equal to max length', () => {
      expect(truncateText('Hello', 5)).toBe('Hello')
    })
  })

  describe('edge cases', () => {
    it('handles empty string', () => {
      expect(truncateText('', 5)).toBe('')
    })

    it('handles zero max length', () => {
      expect(truncateText('Hello', 0)).toBe('...')
    })

    it('handles negative max length', () => {
      expect(truncateText('Hello', -1)).toBe('Hell...')
    })
  })
})
