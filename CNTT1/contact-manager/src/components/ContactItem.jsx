import React from "react";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div className="card mb-3 shadow border-0">
      {/* Header của card, khớp với màu xám trong hình mẫu */}
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="content">
          <p className="fw-medium fs-4">Họ và Tên: {contact.name}</p>
          <p className="text-secondary">SĐT: {contact.phone}</p>
          <p className="text-secondary">Email: {contact.email}</p>
        </div>
        {/* Nút Xóa ở góc phải, màu đỏ như hình mẫu */}
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
