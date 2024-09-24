export function Sidebar() {
    return (
      <aside className="w-64 bg-white p-6 border-r">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Types</h2>
          <ul>
            <li><input type="radio" name="type" /> All</li>
            <li><input type="radio" name="type" /> Income</li>
            <li><input type="radio" name="type" /> Expense</li>
          </ul>
        </div>
  
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Category</h2>
          <ul>
            <li>Food & Drinks</li>
            <li>Shopping</li>
            <li>Housing</li>
            <li>Transportation</li>
            {/* Add more categories */}
          </ul>
        </div>
  
        <div>
          <h2 className="text-lg font-semibold">Amount Range</h2>
          <input type="range" min="0" max="1000" />
          <div className="flex justify-between text-sm">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </aside>
    );
  }