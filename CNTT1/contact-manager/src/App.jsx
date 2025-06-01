import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  // Khởi tạo state contacts từ localStorage (nếu có)
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  // Đồng bộ contacts với localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Hàm thêm danh bạ mới
  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: crypto.randomUUID() }]);
  };

  // Hàm xóa danh bạ
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quản Lý Danh Bạ</h1>
      {/* Card cho form thêm danh bạ mới */}
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="card-header bg-primary text-white mb-3">
          Thêm Danh Bạ Mới
        </h2>
        <ContactForm onAdd={addContact} />
      </div>
      {/* Card cho danh sách danh bạ */}
      <div className="card p-4 shadow-sm">
        <h2 className="card-header bg-secondary text-white mb-3">
          Danh Sách Danh Bạ
        </h2>
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}

export default App;
