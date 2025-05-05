import React from 'react';

function ReportUI() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Báo cáo tổng quan */}
      <section className="px-6 py-10 bg-blue-100">
        <h2 className="text-2xl font-semibold">Báo cáo tổng quan</h2>
        <p className="mt-4">Số lượng phòng đã mượn trong tuần qua: 120</p>
      </section>

      {/* Bảng báo cáo */}
      <section className="px-6 py-10">
        <h3 className="text-xl font-semibold mb-4">Danh sách phòng mượn</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID Phòng</th>
              <th className="border px-4 py-2">Tên phòng</th>
              <th className="border px-4 py-2">Ngày mượn</th>
              <th className="border px-4 py-2">Ngày trả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">H6-401</td>
              <td className="border px-4 py-2">Phòng học A</td>
              <td className="border px-4 py-2">01/05/2025</td>
              <td className="border px-4 py-2">03/05/2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">H6-402</td>
              <td className="border px-4 py-2">Phòng học B</td>
              <td className="border px-4 py-2">02/05/2025</td>
              <td className="border px-4 py-2">04/05/2025</td>
            </tr>
            {/* Các dữ liệu khác */}
          </tbody>
        </table>
      </section>

      {/* Biểu đồ doanh thu */}
      <section className="px-6 py-10 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Biểu đồ doanh thu tháng này</h3>
        {/* Biểu đồ có thể được hiển thị ở đây */}
      </section>
    </div>
  );
}

export default ReportUI;
