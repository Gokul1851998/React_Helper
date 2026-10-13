/**
 * Real Public Third-Party APIs for large datasets
 */

// 1. Fetch 100+ Products from DummyJSON
export const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products;
};

// 2. Fetch 100+ Users from DummyJSON
export const fetchUsers = async () => {
  const res = await fetch('https://dummyjson.com/users?limit=100');
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  return data.users;
};

// 3. Fetch 150 Posts from DummyJSON
export const fetchPosts = async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=150');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.posts;
};

// 4. Generate High-Volume Data for TanStack Virtualization Demo (10,000 real-time records)
export const fetchHighVolumeRecords = async (count = 10000) => {
  // Synthesizes a high-frequency financial & order stream in memory
  const statuses = ['Completed', 'Pending', 'Processing', 'Cancelled', 'Refunded'];
  const categories = ['Hardware', 'Cloud Infrastructure', 'API Subscriptions', 'Enterprise AI', 'Security Audit'];
  const regions = ['US-East (N. Virginia)', 'US-West (Oregon)', 'EU-Central (Frankfurt)', 'AP-Southeast (Singapore)', 'SA-East (São Paulo)'];

  const rows = [];
  const baseTime = Date.now() - 30 * 24 * 60 * 60 * 1000;

  for (let i = 1; i <= count; i++) {
    const timestamp = new Date(baseTime + i * 260000).toISOString();
    rows.push({
      id: `TXN-${100000 + i}`,
      index: i,
      customer: `Client_${((i * 13) % 950) + 1}@enterprise.io`,
      category: categories[i % categories.length],
      region: regions[i % regions.length],
      amount: Number(((i * 73.4) % 18450 + 25.5).toFixed(2)),
      fee: Number((((i * 73.4) % 18450 + 25.5) * 0.024).toFixed(2)),
      latencyMs: ((i * 17) % 180) + 12,
      status: statuses[i % statuses.length],
      timestamp: timestamp.replace('T', ' ').substring(0, 19),
    });
  }

  return rows;
};
