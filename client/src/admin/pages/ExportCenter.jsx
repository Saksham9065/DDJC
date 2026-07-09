import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  FaFileExcel,
  FaFilePdf,
} from "react-icons/fa";

function ExportCenter() {

  // Sample Data
  const contacts = [
    {
      Name: "Rahul Kumar",
      Email: "rahul@gmail.com",
      Phone: "9876543210",
    },
    {
      Name: "Amit Singh",
      Email: "amit@gmail.com",
      Phone: "9123456789",
    },
  ];

  // ==========================
  // Excel Export
  // ==========================

  const exportExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(
      contacts
    );

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Contacts"
    );

    const excelBuffer = XLSX.write(
      workbook,
      {
        bookType: "xlsx",
        type: "array",
      }
    );

    const file = new Blob(
      [excelBuffer],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(file, "DDJC_Contacts.xlsx");
  };

  // ==========================
  // PDF Export
  // ==========================

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text(
      "DDJC Contact Report",
      14,
      20
    );

    autoTable(doc, {
      head: [["Name", "Email", "Phone"]],

      body: contacts.map((item) => [
        item.Name,
        item.Email,
        item.Phone,
      ]),
    });

    doc.save("DDJC_Contacts.pdf");
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-[#0A2540]">

          Export Center

        </h1>

        <p className="text-gray-500">

          Download reports in Excel or PDF.

        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Excel */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <FaFileExcel
            className="text-6xl text-green-600 mb-6"
          />

          <h2 className="text-2xl font-bold">

            Excel Report

          </h2>

          <p className="text-gray-500 mt-3">

            Export complete contact data
            as Excel.

          </p>

          <button
            onClick={exportExcel}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Download Excel
          </button>

        </div>

        {/* PDF */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <FaFilePdf
            className="text-6xl text-red-600 mb-6"
          />

          <h2 className="text-2xl font-bold">

            PDF Report

          </h2>

          <p className="text-gray-500 mt-3">

            Generate printable PDF
            reports.

          </p>

          <button
            onClick={exportPDF}
            className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Download PDF
          </button>

        </div>

      </div>

    </div>
  );
}

export default ExportCenter;