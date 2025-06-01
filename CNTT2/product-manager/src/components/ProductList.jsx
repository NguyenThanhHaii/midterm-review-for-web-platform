import React from "react";

function ProductList({ products, onUpdateStatus, onDelete }) {
  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Danh Sách Sản Phẩm</div>
      <div className="card-body">
        {products.map((product) => (
          <div key={product.id} className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <b>Giá:</b> {product.price}đ
                </p>
                <p className="card-text">Trạng thái: {product.status}</p>
              </div>
              <div>
                <button
                  onClick={() => onUpdateStatus(product.id)}
                  className={`btn ${
                    product.status === "Còn hàng"
                      ? "btn-primary"
                      : "btn-warning"
                  }`}
                >
                  Đánh dấu {product.status}
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="btn btn-danger ms-2"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
