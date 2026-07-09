import { FaEdit, FaTrash } from "react-icons/fa";

function DataTable({
  columns = [],
  data = [],
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Table Header */}

          <thead className="bg-[#0A2540] text-white">

            <tr>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-semibold"
                >
                  {column.label}
                </th>
              ))}

              <th className="px-6 py-4 text-center">

                Actions

              </th>

            </tr>

          </thead>

          {/* Table Body */}

          <tbody>

            {data.length === 0 ? (
              <tr>

                <td
                  colSpan={columns.length + 1}
                  className="text-center py-12 text-gray-500"
                >
                  No Data Available

                </td>

              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  {columns.map((column) => (

                    <td
                      key={column.key}
                      className="px-6 py-4 text-sm"
                    >

                      {item[column.key]}

                    </td>

                  ))}

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => onEdit(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => onDelete(item)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DataTable;