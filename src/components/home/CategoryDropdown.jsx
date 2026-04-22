import { ChevronDown } from 'lucide-react'

export function CategoryDropdown({ options, activeCategory, setActiveCategory }) {
  return (
    <label className="category-dropdown">
      <select
        aria-label="Content category"
        value={activeCategory}
        onChange={(event) => setActiveCategory(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown size={15} />
    </label>
  )
}
