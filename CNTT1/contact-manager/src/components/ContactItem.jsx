import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactItem = ({ contact, onUpdate, onDelete }) => {
  // Quản lý trạng thái chỉnh sửa
  const [isEditing, setIsEditing] = useState(false);

  // Định nghĩa các rule validate (tương tự ContactForm)
  const validationRules = {
    name: {
      required: "Tên là bắt buộc",
      maxLength: {
        value: 30,
        message: "Tên không quá 30 ký tự",
      },
    },
    phone: {
      required: "Số điện thoại là bắt buộc",
      pattern: {
        value: /^[0][0-9]{9}$/,
        message: "Số điện thoại phải 10 số, bắt đầu bằng 0",
      },
    },
    email: {
      required: "Email là bắt buộc",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Email không đúng định dạng",
      },
    },
  };

  // Khởi tạo form với dữ liệu mặc định từ contact
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: contact, // Điền sẵn dữ liệu để chỉnh sửa
  });

  // Hàm submit khi chỉnh sửa
  const onSubmit = (data) => {
    onUpdate({ ...data, id: contact.id }); // Gọi hàm onUpdate để cập nhật
    setIsEditing(false); // Tắt chế độ chỉnh sửa
  };

  return (
    <div className="list-group-item mb-2">
      {isEditing ? (
        // Form chỉnh sửa
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", validationRules.name)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="col-12">
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              {...register("phone", validationRules.phone)}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
          <div className="col-12">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", validationRules.email)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success me-2">
              Lưu
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Hủy
            </button>
          </div>
        </form>
      ) : (
        // Hiển thị thông tin danh bạ
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="fs-4 fw-medium">{contact.name}</p>
            <p className="text-secondary">SĐT: {contact.phone}</p>
            <p className="text-secondary">Email: {contact.email}</p>
          </div>
          <div className="d-flex">
            <button
              className="btn btn-primary me-2"
              onClick={() => setIsEditing(true)}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(contact.id)}
            >
              Xóa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
