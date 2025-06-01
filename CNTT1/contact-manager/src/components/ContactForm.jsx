import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ onAdd }) => {
  // Định nghĩa các rule validate một lần duy nhất
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

  // Khởi tạo React Hook Form
  const {
    register, // Đăng ký các input để quản lý và validate
    handleSubmit, // Xử lý submit form
    reset, // Reset form sau khi submit
    formState: { errors }, // Lấy lỗi validate
  } = useForm();

  // Hàm submit form
  const onSubmit = (data) => {
    onAdd(data); // Gọi hàm onAdd từ props để thêm danh bạ
    reset(); // Reset form về trạng thái ban đầu
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
      {/* Trường Họ và Tên */}
      <div className="col-12">
        <label htmlFor="name">Họ và Tên</label>
        <input
          id="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Nhập họ và tên"
          {...register("name", validationRules.name)}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      {/* Trường Số điện thoại */}
      <div className="col-12">
        <label htmlFor="phone">Số Điện Thoại</label>
        <input
          id="phone"
          type="text"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          placeholder="Nhập số điện thoại"
          {...register("phone", validationRules.phone)}
        />
        {errors.phone && (
          <div className="invalid-feedback">{errors.phone.message}</div>
        )}
      </div>

      {/* Trường Email */}
      <div className="col-12">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Nhập email"
          {...register("email", validationRules.email)}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      {/* Nút Thêm Danh Bạ */}
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100">
          Thêm Danh Bạ
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
