import React from 'react'

interface ChecklistItem {
  id: string
  text: string
  category: string
}

interface TestingChecklistProps {
  title: string
  items: ChecklistItem[]
}

const TestingChecklist: React.FC<TestingChecklistProps> = ({ title, items }) => {
  const [checkedItems, setCheckedItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, ChecklistItem[]>)

  const progress = (checkedItems.size / items.length) * 100

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="text-sm text-gray-600">
          {checkedItems.size} / {items.length} completed ({Math.round(progress)}%)
        </div>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category}>
            <h4 className="text-lg font-medium text-gray-800 mb-3">{category}</h4>
            <div className="space-y-2">
              {categoryItems.map((item) => (
                <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(item.id)}
                    onChange={() => toggleItem(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className={`text-sm ${checkedItems.has(item.id) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button
          onClick={() => setCheckedItems(new Set())}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Reset checklist
        </button>
      </div>
    </div>
  )
}

export default TestingChecklist
