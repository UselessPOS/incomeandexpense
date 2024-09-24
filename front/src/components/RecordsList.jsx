import { RecordItem } from "./RecordItem";

export function RecordsList({ records }) {
    return (
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Last 30 Days</h2>
          <button className="text-sm text-gray-500">Newest first</button>
        </div>
        <div className="mt-4">
          {records.map(record => (
            <RecordItem key={record.id} record={record} />
          ))}
        </div>
      </div>
    );
  }
  

  