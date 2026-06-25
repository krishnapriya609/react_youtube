import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="sidebar">
      {categories.map((category) => (
        <button
          key={category.name}
          className={
            selectedCategory === category.name
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;