import React from "react";
import { useForm } from "react-hook-form";

// Định nghĩa các quy tắc validate riêng biệt
const validationRules = {
  name: {
    required: "Tên sản phẩm không được để trống",
    maxLength: { value: 30, message: "Tên không được vượt quá 30 ký tự" },
  },
  description: {
    required: "Mô tả không được để trống",
  },
  price: {
    required: "Giá không được để trống",
    min: { value: 0, message: "Giá không được âm" },
  },
  status: {
    required: "Trạng thái không được để trống",
  },
};

function ProductForm({ onAddProduct }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Xử lý submit form và gửi dữ liệu lên component cha
  const onSubmit = (data) => {
    onAddProduct({
      name: data.name,
      description: data.description,
      price: data.price,
      status: data.status,
    });
    reset(); // Reset form sau khi submit thành công
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">Thêm Sản Phẩm Mới</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Tên Sản Phẩm</label>
            <input
              {...register("name", validationRules.name)} // Áp dụng quy tắc validate cho tên
              className="form-control"
              placeholder="Tên Sản Phẩm"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}{" "}
            {/* Hiển thị lỗi nếu có */}
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <input
              {...register("description", validationRules.description)} // Áp dụng quy tắc validate cho mô tả
              className="form-control"
              placeholder="Mô tả"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}{" "}
            {/* Hiển thị lỗi nếu có */}
          </div>
          <div className="mb-3">
            <label className="form-label">Giá</label>
            <input
              {...register("price", validationRules.price)} // Áp dụng quy tắc validate cho giá
              type="number"
              className="form-control"
              placeholder="Giá"
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}{" "}
            {/* Hiển thị lỗi nếu có */}
          </div>
          <div className="mb-3">
            <label className="form-label">Trạng thái</label>
            <select
              {...register("status", validationRules.status)} // Áp dụng quy tắc validate cho trạng thái
              className="form-control"
            >
              <option value="">Chọn trạng thái</option>
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
            {errors.status && (
              <p className="text-danger">{errors.status.message}</p>
            )}{" "}
            {/* Hiển thị lỗi nếu có */}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Thêm Sản Phẩm
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
