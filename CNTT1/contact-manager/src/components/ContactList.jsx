import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onUpdate, onDelete }) => {
  // Kiểm tra nếu không có danh bạ, hiển thị thông báo
  if (contacts.length === 0) {
    return <p className="text-muted">Chưa có danh bạ nào.</p>;
  }

  return (
    <div className="list-group">
      {/* Hiển thị từng danh bạ trong danh sách */}
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id} // Sử dụng key để tối ưu render
          contact={contact}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
