// InternationalRegistrationsTable.js
import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const InternationalRegistrationsTable = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch registrations from the API
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('https://sober-backend-dushimiman.onrender.com/api/internationalregistrations/registrations');

        setRegistrations(response.data);
      } catch (error) {
        message.error('Error fetching registrations');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  // Define table columns
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Internship Areas',
      dataIndex: 'internshipArea',
      key: 'internshipArea',
      render: (areas) => areas.join(', '), // Display array as comma-separated string
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>International Registrations</h2>
      <Table
        columns={columns}
        dataSource={registrations}
        loading={loading}
        rowKey={(record) => record._id} // Assuming MongoDB _id as unique key
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default InternationalRegistrationsTable;
