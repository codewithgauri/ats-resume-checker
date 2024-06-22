import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TailwindTable = ({ data }) => {

  const downloadPDF = () => {
    const doc = new jsPDF();

    const tableColumn = ["Improvement", "Weightage"];
    const tableRows = [];

    data.forEach(improvement => {
      const improvementData = [
        improvement.improvement,
        improvement.improvementWeightage
      ];
      tableRows.push(improvementData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: 'striped'
    });
    doc.text("Improvements Report", 14, 15);
    doc.save('improvements.pdf');
  };
  

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg sm:max-w-[350px] md:max-w-[900px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
           
            <th scope="col" className="px-6 py-3">
              Improvement
            </th>
            <th scope="col" className="px-6 py-3">
              Weightage
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((improvement, index) => {
            return (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center"></div>
                </td>
                
                <td className="px-6 py-4">
                  {improvement.improvement}
                </td>
                <td className="px-6 py-4">
                  <span className={
                    improvement.weightage === 'High' ? 'bg-red-500' :
                      improvement.improvementWeightage === 'Medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                  } style={{ borderRadius: '50%', display: 'inline-block', width: '16px', height: '16px' }}>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={downloadPDF} className="mt-4 w-full bg-black text-white py-2 px-4 rounded">Download PDF Report</button>
    </div>
  );
};

export default TailwindTable;
