export function RecordItem({ record }) {
    return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
        <div className="flex items-center">
          <span className="text-2xl">{record.icon}</span>
          <div className="ml-4">
            <p className="font-medium">{record.category}</p>
            <p className="text-sm text-gray-500">{record.date}</p>
          </div>
        </div>
        <p className={`font-medium ${record.color}`}>{record.type === 'income' ? '+' : '-'} {record.amount}¥</p>
      </div>
    );
  }