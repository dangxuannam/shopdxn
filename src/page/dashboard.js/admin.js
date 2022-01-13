import Admin from "../../components/admin/dashboard.js/admin";

const AdminDashboard = {
    render() {
        return/* html */ `
    <div>
  <h2>Quản Trị Sản Phẩm</h2>
  ${Admin.render()}
</div>
    `;
    },
};
export default AdminDashboard;
