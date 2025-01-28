import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase.js"; // Asegúrate de configurar Firebase
import { Layout } from "../components/Layout";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    quotas: "",
  });
  const [editingId, setEditingId] = useState(null);

  const productsCollection = collection(db, "products");

  // Fetch products from Firebase
  const fetchProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      const productDoc = doc(db, "products", editingId);
      await updateDoc(productDoc, formData);
      setEditingId(null);
    } else {
      await addDoc(productsCollection, formData);
    }
    setFormData({
      name: "",
      description: "",
      longDescription: "",
      price: "",
      quotas: "",
    });
    fetchProducts();
  };

  // Delete product
  const handleDelete = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    fetchProducts();
  };

  // Populate form for editing
  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  return (
    <Layout>
      <div>
        <h1 className="title">Dashboard</h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Long Description</label>
            <div className="control">
              <textarea
                className="textarea"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Quotas</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="quotas"
                value={formData.quotas}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-primary" type="submit">
              {editingId ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>

        {/* Tabla de productos */}
        {products.length > 0 && (
          <table className="table is-fullwidth is-striped mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quotas</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quotas}</td>
                  <td>
                    <button
                      className="button is-small is-info mr-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="button is-small is-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export { Dashboard };
