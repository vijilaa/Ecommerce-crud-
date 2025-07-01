import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Edit3, 
  Trash2, 
  Eye,
  Bell,
  Settings,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Seller = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeRange, setTimeRange] = useState('7d');
  
  const [products] = useState([
    { 
      id: 1, 
      name: 'Premium Wireless Headphones', 
      sku: 'PWH-001', 
      price: 299.99, 
      stock: 45, 
      sold: 234, 
      revenue: 69997.66,
      category: 'Electronics',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop'
    },
    { 
      id: 2, 
      name: 'Smart Fitness Watch Pro', 
      sku: 'SFW-002', 
      price: 399.99, 
      stock: 23, 
      sold: 156, 
      revenue: 62398.44,
      category: 'Wearables',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop'
    },
    { 
      id: 3, 
      name: 'Portable Bluetooth Speaker', 
      sku: 'PBS-003', 
      price: 129.99, 
      stock: 67, 
      sold: 445, 
      revenue: 57845.55,
      category: 'Audio',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=80&h=80&fit=crop'
    },
    { 
      id: 4, 
      name: 'Luxury Phone Case Set', 
      sku: 'LPC-004', 
      price: 89.99, 
      stock: 12, 
      sold: 678, 
      revenue: 60993.22,
      category: 'Accessories',
      status: 'low-stock',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=80&h=80&fit=crop'
    }
  ]);

  const [orders] = useState([
    { id: 'ORD-2024-001', customer: 'Sarah Johnson', email: 'sarah.j@email.com', product: 'Premium Wireless Headphones', amount: 299.99, status: 'processing', date: '2024-01-26', priority: 'high' },
    { id: 'ORD-2024-002', customer: 'Michael Chen', email: 'michael.c@email.com', product: 'Smart Fitness Watch Pro', amount: 399.99, status: 'shipped', date: '2024-01-25', priority: 'medium' },
    { id: 'ORD-2024-003', customer: 'Emma Davis', email: 'emma.d@email.com', product: 'Portable Bluetooth Speaker', amount: 129.99, status: 'delivered', date: '2024-01-24', priority: 'low' },
    { id: 'ORD-2024-004', customer: 'David Wilson', email: 'david.w@email.com', product: 'Luxury Phone Case Set', amount: 89.99, status: 'cancelled', date: '2024-01-23', priority: 'low' }
  ]);

  const metrics = {
    totalRevenue: 251234.87,
    revenueChange: 12.5,
    totalOrders: 1547,
    ordersChange: 8.3,
    avgOrderValue: 162.45,
    avgOrderChange: 5.2,
    conversionRate: 3.7,
    conversionChange: -1.1
  };

  const getStatusColor = (status) => {
    const colors = {
      'active': 'bg-green-100 text-green-800',
      'low-stock': 'bg-yellow-100 text-yellow-800',
      'out-of-stock': 'bg-red-100 text-red-800',
      'processing': 'bg-blue-100 text-blue-800',
      'shipped': 'bg-purple-100 text-purple-800',
      'delivered': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const MetricCard = ({ title, value, change, icon: Icon, prefix = '', suffix = '' }) => (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon">
          <Icon size={20} />
        </div>
        <div className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(change)}%
        </div>
      </div>
      <div className="metric-value">{prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}</div>
      <div className="metric-title">{title}</div>
    </div>
  );

  return (
    <div className="dashboard">
      <style jsx>{`
        .dashboard {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          z-index: 10;
        }

        .sidebar-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .nav-menu {
          padding: 16px 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          color: #64748b;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .nav-item:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .nav-item.active {
          background: #3b82f6;
          color: white;
          border-right: 3px solid #1d4ed8;
        }

        .nav-item svg {
          margin-right: 12px;
          width: 20px;
          height: 20px;
        }

        .main-content {
          margin-left: 280px;
        }

        .top-bar {
          background: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 5;
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }

        .top-bar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .time-range-selector {
          display: flex;
          background: #f1f5f9;
          border-radius: 8px;
          padding: 4px;
        }

        .time-range-btn {
          padding: 6px 12px;
          border: none;
          background: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          color: #64748b;
        }

        .time-range-btn.active {
          background: white;
          color: #3b82f6;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .btn-icon {
          padding: 10px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .btn-icon:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .content {
          padding: 32px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .metric-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          transition: all 0.2s;
        }

        .metric-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
        }

        .metric-change {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .metric-change.positive {
          background: #dcfce7;
          color: #166534;
        }

        .metric-change.negative {
          background: #fee2e2;
          color: #dc2626;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .metric-title {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .section {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .section-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: between;
          align-items: center;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }

        .section-content {
          padding: 24px;
        }

        .search-filter-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: center;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-input {
          width: 100%;
          padding: 10px 16px 10px 40px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          background: #f8fafc;
          transition: all 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th {
          background: #f8fafc;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          font-size: 0.875rem;
          color: #374151;
          border-bottom: 1px solid #e2e8f0;
        }

        .table td {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.875rem;
        }

        .table tr:hover {
          background: #f8fafc;
        }

        .product-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .product-image {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
        }

        .product-details h4 {
          margin: 0 0 4px 0;
          font-weight: 600;
          color: #1e293b;
        }

        .product-details p {
          margin: 0;
          color: #64748b;
          font-size: 0.8rem;
        }

        .status-badge {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .actions-menu {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          padding: 6px;
          border: none;
          background: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          color: #64748b;
        }

        .action-btn:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .priority-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }

        .priority-high { background: #ef4444; }
        .priority-medium { background: #f59e0b; }
        .priority-low { background: #10b981; }

        @media (max-width: 1024px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .search-filter-bar {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">SellerPro</h1>
        </div>
        <nav className="nav-menu">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 />
            Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <Package />
            Products
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingCart />
            Orders
          </button>
          <button 
            className={`nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            <Users />
            Customers
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <TrendingUp />
            Analytics
          </button>
        </nav>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <h1 className="page-title">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'products' && 'Products'}
            {activeTab === 'orders' && 'Orders'}
            {activeTab === 'customers' && 'Customers'}
            {activeTab === 'analytics' && 'Analytics'}
          </h1>
          <div className="top-bar-actions">
            <div className="time-range-selector">
              <button 
                className={`time-range-btn ${timeRange === '7d' ? 'active' : ''}`}
                onClick={() => setTimeRange('7d')}
              >
                7 days
              </button>
              <button 
                className={`time-range-btn ${timeRange === '30d' ? 'active' : ''}`}
                onClick={() => setTimeRange('30d')}
              >
                30 days
              </button>
              <button 
                className={`time-range-btn ${timeRange === '90d' ? 'active' : ''}`}
                onClick={() => setTimeRange('90d')}
              >
                90 days
              </button>
            </div>
            <button className="btn-icon">
              <Bell size={18} />
            </button>
            <button className="btn-icon">
              <Settings size={18} />
            </button>
          </div>
        </div>

        <div className="content">
          {activeTab === 'dashboard' && (
            <div>
              <div className="metrics-grid">
                <MetricCard 
                  title="Total Revenue" 
                  value={metrics.totalRevenue} 
                  change={metrics.revenueChange}
                  icon={DollarSign}
                  prefix="$"
                />
                <MetricCard 
                  title="Total Orders" 
                  value={metrics.totalOrders} 
                  change={metrics.ordersChange}
                  icon={ShoppingCart}
                />
                <MetricCard 
                  title="Avg Order Value" 
                  value={metrics.avgOrderValue} 
                  change={metrics.avgOrderChange}
                  icon={TrendingUp}
                  prefix="$"
                />
                <MetricCard 
                  title="Conversion Rate" 
                  value={metrics.conversionRate} 
                  change={metrics.conversionChange}
                  icon={BarChart3}
                  suffix="%"
                />
              </div>

              <div className="section">
                <div className="section-header">
                  <h2 className="section-title">Recent Orders</h2>
                  <button className="btn-primary">
                    <Download size={16} />
                    Export
                  </button>
                </div>
                <div className="section-content">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 5).map(order => (
                        <tr key={order.id}>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <div className={`priority-indicator priority-${order.priority}`}></div>
                              {order.id}
                            </div>
                          </td>
                          <td>
                            <div>
                              <div style={{ fontWeight: 600 }}>{order.customer}</div>
                              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{order.email}</div>
                            </div>
                          </td>
                          <td>{order.product}</td>
                          <td>${order.amount}</td>
                          <td>
                            <span className={`status-badge ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td>{order.date}</td>
                          <td>
                            <div className="actions-menu">
                              <button className="action-btn">
                                <Eye size={16} />
                              </button>
                              <button className="action-btn">
                                <Edit3 size={16} />
                              </button>
                              <button className="action-btn">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="section">
                <div className="section-header">
                  <h2 className="section-title">Product Inventory</h2>
                  <button className="btn-primary">
                    <Plus size={16} />
                    Add Product
                  </button>
                </div>
                <div className="section-content">
                  <div className="search-filter-bar">
                    <div className="search-box">
                      <Search className="search-icon" size={16} />
                      <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search products..."
                      />
                    </div>
                    <button className="btn-icon">
                      <Filter size={16} />
                    </button>
                    <button className="btn-icon">
                      <Download size={16} />
                    </button>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Sold</th>
                        <th>Revenue</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id}>
                          <td>
                            <div className="product-info">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="product-image"
                              />
                              <div className="product-details">
                                <h4>{product.name}</h4>
                                <p>{product.category}</p>
                              </div>
                            </div>
                          </td>
                          <td>{product.sku}</td>
                          <td>${product.price}</td>
                          <td>{product.stock}</td>
                          <td>{product.sold}</td>
                          <td>${product.revenue.toLocaleString()}</td>
                          <td>
                            <span className={`status-badge ${getStatusColor(product.status)}`}>
                              {product.status.replace('-', ' ')}
                            </span>
                          </td>
                          <td>
                            <div className="actions-menu">
                              <button className="action-btn">
                                <Eye size={16} />
                              </button>
                              <button className="action-btn">
                                <Edit3 size={16} />
                              </button>
                              <button className="action-btn">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <div className="section">
                <div className="section-header">
                  <h2 className="section-title">Order Management</h2>
                  <button className="btn-primary">
                    <Download size={16} />
                    Export Orders
                  </button>
                </div>
                <div className="section-content">
                  <div className="search-filter-bar">
                    <div className="search-box">
                      <Search className="search-icon" size={16} />
                      <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search orders..."
                      />
                    </div>
                    <button className="btn-icon">
                      <Filter size={16} />
                    </button>
                    <button className="btn-icon">
                      <Calendar size={16} />
                    </button>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id}>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <div className={`priority-indicator priority-${order.priority}`}></div>
                              {order.id}
                            </div>
                          </td>
                          <td>
                            <div>
                              <div style={{ fontWeight: 600 }}>{order.customer}</div>
                              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{order.email}</div>
                            </div>
                          </td>
                          <td>{order.product}</td>
                          <td>${order.amount}</td>
                          <td>
                            <span className={`status-badge ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td>{order.date}</td>
                          <td>
                            <div className="actions-menu">
                              <button className="action-btn">
                                <Eye size={16} />
                              </button>
                              <button className="action-btn">
                                <Edit3 size={16} />
                              </button>
                              <button className="action-btn">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <div className="metrics-grid">
                <MetricCard 
                  title="Revenue Growth" 
                  value="12.5" 
                  change={12.5}
                  icon={TrendingUp}
                  suffix="%"
                />
                <MetricCard 
                  title="Customer Retention" 
                  value="87.2" 
                  change={3.1}
                  icon={Users}
                  suffix="%"
                />
                <MetricCard 
                  title="Product Performance" 
                  value="94.8" 
                  change={5.7}
                  icon={Package}
                  suffix="%"
                />
                <MetricCard 
                  title="Market Share" 
                  value="15.3" 
                  change={-2.1}
                  icon={BarChart3}
                  suffix="%"
                />
              </div>

              <div className="section">
                <div className="section-header">
                  <h2 className="section-title">Performance Analytics</h2>
                  <button className="btn-primary">
                    <Download size={16} />
                    Export Report
                  </button>
                </div>
                <div className="section-content">
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '40px 0' }}>
                    Advanced analytics charts and insights would be displayed here.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seller;